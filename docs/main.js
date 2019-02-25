// This will be our main scene component. 

// This component will be in charge of listening to the audio, and doing cool stuff with it: 


/*************************
	PITCH FINDER STUFF
*************************/
const yinParams       = {threshold:0.2,probabilityThreshold:0.3}; 
const detectPitch     = new audioz.Pitchfinder.YIN(yinParams);
const amdfDetector    = new audioz.Pitchfinder.AMDF({minFrequency:14,maxFrequency:4200,sensitivity:0.5}); 
const quantInterval = {tempo:300,quantization:4}; 
console.log(audioz.BeatDetector); 

var detectors = [detectPitch,amdfDetector]; 
// an array of note ids: 
const noteIds = [
	'Cnatural', 
	'Csharp_Dflat', 
	'Dnatural',  
	'Dsharp_Eflat', 
	'Enatural', 
	'Fnatural_Esharp', 
	'Fsharp_Gflat', 
	'Gnatural',  
	'Gsharp_Aflat', 
	'Anatural',
	'Asharp_Bflat', 
	'Bnatural_Cflat',  
]; 


/*************************
	AUDIO ANALYZER GLOBALS
*************************/

// Set the smoothing paramter: 
audioz.lpf.smoothing  = 0.4;

// Our base frequency: 
const A4 = 440; 
// Specify C0 (units here are Hz)
const C0 = A4 * Math.pow(2.0, -4.75); 

// FFT STUFF: 
const fftSize       = 2**13;
const noteFFTSize   = 2**13; 
const fftLength     = fftSize / 2;  
const noteFFTLength = noteFFTSize / 2; 

// FREQUENCY STUFF: 
const minFrequency = 14; 
const maxFrequency = 4200; 
var freqArray      = getFreqArray(fftLength); 
var freqObj        = freqNoteMatch(freqArray,minFrequency,maxFrequency,C0); 

// Get C's and use them to build our pitch detector array: 
var C_notes = freqObj.pureToneArray.filter( 
  (x,index) => { if(index % 12 == 0){ return x }
})
.map(
  x => x * Math.pow(2,(-20)/1200)
); 

// Build an arry of pitch detectors, on detector per ocatve: 
var detectorArray = []; 
var detectorParams = {
  sensitivity:0.5, 
  minFrequency:14, 
  maxFrequency:4200,
}
for(let i = 0; i < C_notes.length-1; i++){
  detectorParams.minFrequency = C_notes[i]; 
  detectorParams.maxFrequency = C_notes[i+1];
  detectorArray.push(audioz.Pitchfinder.AMDF(detectorParams)); 
}


/************************
 A COMPONENT TO HOUSE OUR MUSIC GEOMETRIES. 
 SCENE CAN DO THIS EQUALLY WELL, WANT TO KEEP THINGS MODULAR,THOUGH. 
**************************/
AFRAME.registerComponent('musicscene',{

	init: async function(){
		/*************************
	  GEOMETRICAL PRELIMINARIES: 

	  In this subsection we define a geometry 
	  upon which our analyzed audio will operate. 

	  *************************/
	  // A cirle to get some vertices:
	  var circ12 = await new THREE.CircleGeometry(8,12); 
	  var toneInfo = await toneStuff(circ12.vertices); 
	  var noteCircle = document.createElement('a-entity');
	  noteCircle.setAttribute('lettergroup',{toneInfo:toneInfo});
	  noteCircle.setAttribute('id','lettergroup'); 
	 	var colorWheel = await document.createElement('a-entity');
	  await colorWheel.setAttribute('colorwheel',{toneInfo:toneInfo});
	  colorWheel.setAttribute('id','colorwheel'); 
		this.el.appendChild(colorWheel); 
	  this.el.appendChild(noteCircle); 
	}
})

/*************************
	DA SYSTEM
*************************/
AFRAME.registerSystem('musicvr',{

	// dependencies: ?

	// schema: ? 

	// INIT IS WHERE WE LOAD THE AUDIO. 
	init: async function(){

		// is our audio playing or not?
		this.playing = false;
		// we want to keep track of time...only scan for pitches every 20 ms (or so)
		this.t_of_last_scan = 0; 

		// bind the audio loader: 
		this.audioloadfcn = AFRAME.utils.bind(this.audioloadfcn, this); 

	  /*************************
	  AUDIO PRELIMINARIES: 

	  Here, we load our audio, instantiate our 
	  listener, context, asorted nodes, 
	  and connect feed them to the pitch finder?

	  *************************/


	  var listener    = new THREE.AudioListener();
	  this.audioLoader = new THREE.AudioLoader();
	  this.context     = new AudioContext();

	  // Some audio nodes: 
	  // var fftArray, analyser, fftFloats, delay, source, filter, gainNode, source2, fftCount, timeFloats, channel0, channel1; 
	 	// instantiat some this variables... 

		this.fftArray; 
	  this.analyser; 
	  this.fftFloats; 
	  this.delay; 
	  this.source; 
	  this.filter; 
	  this.gainNode; 
	  this.source2; 
	  this.fftCount; 
	  this.timeFloats;
	  this.channel0; 
	  this.channel1; 
	  // Instantiating the various nodes: 
	  this.analyser = this.context.createAnalyser();
	  this.source2  = this.context.createBufferSource(); 
	  this.filter   = this.context.createBiquadFilter();
	  this.gainNode = this.context.createGain();

	  // Set some node params:
	  this.filter.type = "highpass";
	  this.filter.frequency.setValueAtTime(180, this.context.currentTime);
	  this.filter.gain.setValueAtTime(0, this.context.currentTime);

	  // Load the audio: 
	  this.audioLoader.load( 'https://raw.githubusercontent.com/MatthewAwesome/musicvr/master/docs/assets/swept.mp3', this.audioloadfcn); 

	  /*Some other audio stuff: 
		  gainNode.gain.setValueAtTime(0.5,context.currentTime); 
		  analyser.smoothingTimeConstant = 0.8;
		  analyser.minDecibels = -90;
		  analyser.maxDecibels = -10;
	  */

	  /**************************************************
	  SOME AUDIO STUFF TO MAKE OUR NOTES 'COME ALIVE'! 
	  **************************************************/

	  // Arrays of audio nodes:
	  var noteAudio = []; 

	  // sources --> firstGains --> analysers --> secondGains(to mute...like a button, but this, however, is not needed now!)

	  // This loops through the 11 notes, and divides the audio stream into 11 parallel streams, 1 for each note. 
	  for(let i = 0; i <= 11; i++){

	    // Making an object for every note: 
	    var audioObject = {}; 

	    // Taking care of the waveform: 
	    var rr = [], im = []; 

	    // We instantiate array of 0's for our pitches, at all octaves of interest: 
	    for(let j = 0; j < freqObj.octaveStarts.length; j++){
	      rr.push(0); 
	      im.push(0); 
	    }

	    // Said arrays, rr and im, are waveCoeffs of our object: 
	    audioObject.waveCoeffs = {real:rr,imag:im}; 

	    // We give the audio object some nodes.  
	    audioObject.source     = this.context.createOscillator(); 
	    audioObject.firstGain  = this.context.createGain(); 
	    audioObject.analyser   = this.context.createAnalyser(); 
	    audioObject.secondGain = this.context.createGain(); 
	    audioObject.wave       = this.context.createPeriodicWave(rr,im); 

	    // Specify some props: 
	    audioObject.source.frequency.value = freqObj.pureToneArray[i]; 
	    audioObject.source.setPeriodicWave(audioObject.wave); 
	    audioObject.analyser.fftSize = noteFFTSize;
	    audioObject.secondGain.gain.setValueAtTime(0,this.context.currentTime);

	    // Wire 'em up: 
	    audioObject.source.connect(audioObject.firstGain); 
	    audioObject.firstGain.connect(audioObject.analyser);
	    audioObject.analyser.connect(audioObject.secondGain); 
	    audioObject.secondGain.connect(this.context.destination); 

	    // Fire 'em up: 
	    audioObject.source.start(); 

	    // A wave-form array: 
	    audioObject.waveformArray = new Uint8Array(audioObject.analyser.frequencyBinCount); 

	    // Add the object to the array: 
	    noteAudio.push(audioObject); 

	  }
	  this.noteAudio = noteAudio;

	  // END OF INIT
	}, 

	// Tick: 
	tock: async function(t,delta_t){
		if(this.playing == true && t-this.t_of_last_scan > 200 ){
			// Get data fram analyser and toss it into S(t) and f(t) arrays. 
			this.analyser.getByteFrequencyData(this.fftArray); 
      this.analyser.getFloatTimeDomainData(this.timeFloats); 
      // Use the date to detect pitches: 
      var pitches = await audioz.Pitchfinder.frequencies( detectPitch, this.timeFloats, quantInterval);
      // See if the detected pitch (in Hz) matches a note:
      var convertedPitches = convertPitches(pitches,freqObj.pureToneArray,maxFrequency,25);
      // Did we find a note?
      if(convertedPitches.length > 0){
      	// Which note?
      	var detectedNote = noteIds[convertedPitches[0]]; 
      	// Get arrays of entities that correspond to note components: 
      	var letters = this.sceneEl.querySelector('#lettergroup').childNodes; 
      	var pieslices = this.sceneEl.querySelector('#colorwheel').childNodes; 
      	// Loop through the arrays: 
      	for(let i = 0; i<letters.length; i++){
      		// Handling the letters first: 
      		var letterId = letters[i].getAttribute('class');
      		// Is this our detected note?
      		if(letterId == detectedNote){
      			letters[i].setAttribute('letter-component',{detected:true}); 
      			letters[i].removeAttribute('animation'); 
      			letters[i].setAttribute('animation',{property:'text.opacity',to:1,dur:100,easing:'easeInSine',repeat:0})
      		}
      		else if(letters[i].getAttribute('letter-component').detected == true){ 
      			letters[i].removeAttribute('animation'); 
      			letters[i].setAttribute('animation',{property:'text.opacity',to:0.2,dur:2000,easing:'easeOutSine',repeat:0});
      			letters[i].setAttribute('letter-component',{detected:false}); 
      		}
      		// And now the pie-slices: 
      		var sliceId = pieslices[i].getAttribute('class');
      		if(sliceId == detectedNote){
      			pieslices[i].setAttribute('pieslice',{detected:true}); 
      			pieslices[i].removeAttribute('animation'); 
      			pieslices[i].setAttribute('animation',{property:'material.opacity',to:1,dur:100,easing:'easeInSine',repeat:0})
      		}
      		else if(pieslices[i].getAttribute('pieslice').detected == true){ 
      			pieslices[i].removeAttribute('animation'); 
      			pieslices[i].setAttribute('animation',{property:'material.opacity',to:0.15,dur:2000,easing:'easeOutSine',repeat:0});
      			pieslices[i].setAttribute('pieslice',{detected:false}); 
      		}      			
      	}
      }
		}
	},

	pitchScan: async function(){
		//do some scanning for pitches. 
	}, 

	audioloadfcn: async function( buffer ) {
		// bind this: 
    this.channel0 = buffer.getChannelData(0);
    this.channel1 = buffer.getChannelData(1);
    this.source = this.context.createBufferSource();
    this.source.buffer = buffer;
    this.source.loop = true;
    this.source.start()
    this.source.connect(this.filter);
    this.filter.connect(this.gainNode);
    this.gainNode.connect(this.analyser); 
    // filter.connect(analyser)
    // source.disconnect(this.context.destination);
    this.analyser.connect(this.context.destination);
    this.analyser.fftSize = fftSize; 
    this.analyser.smoothingTimeConstant = 0.95;
    this.fftArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.fftFloats = await new Float32Array(this.analyser.frequencyBinCount);  
    this.timeFloats = await new Float32Array(this.analyser.frequencyBinCount);  
    this.fftCount = this.analyser.frequencyBinCount;  
    this.playing = true; 
  }
}); 

/*********************************************
	SOME UTILITY FUNCTIONS IN THE CELLAR HERE
*********************************************/

function toneStuff(verts){

  // Our output container: 
  var toneInfo = []; 

  // Doctoring up the vertices to align the notes and colors: 

  // Removing the first vertex, which is the circle's center:
  verts = verts.slice(1);

  // Reversing the order: 
  verts = verts.reverse(); 

  // Making the last index the first index: 
  var lastLast = verts.slice(11); 
  verts = lastLast.concat(verts.slice(0,11)); 

  // Our string array: 
  var strs = [ 
    '  C  ',
    'C#/Db', 
    '  D  ', 
    'D#/Eb',
    'E/Fb ', 
    'F/E# ', 
    'F#/Gb', 
    '  G  ', 
    'G#/Ab',
    '  A  ', 
    'Bb/A#', 
    'B/Cb ', 
  ]; 

  // Matching the string array to corresponding vertices and colors: 
  for(let i = 0; i < 12; i++){
    var toneObj = {};
    var cc = new THREE.Color(); 
    var angleRatio = ((i) / 12); 
    var clr = cc.setHSL(angleRatio,0.78,0.6);
    toneObj.color = clr; 
    toneObj.text  = strs[i];
    toneObj.vert  = verts[i];
    toneObj.noteid = noteIds[i]; 
    toneInfo.push(toneObj)
  }

  // Rearranging the tone-info Object. ( we reverse twice... can we get away with not reversing at all?)

  // Removing the first tone: 

  var firstTone = toneInfo.slice(0,1); 

  // Reversing the order of elements [1]-[11]:
  toneInfo = toneInfo.slice(1).reverse(); 

  // Tacking elements [11]-[1] back onto element [0]
  toneInfo = firstTone.concat(toneInfo); 

  // tone info does not actually contain any objects. Just data needed to make object. 
  return toneInfo
}


// A frequency axis for our FFTs. Just stepping through frequencies here.. 
function getFreqArray(fftLength){
  const minFreq   = 0; 
  const maxFreq   = 44100 / 2; 
  const freqStep  = maxFreq / (fftLength + 1);
  var freqArray   = []; 
  for( let i = 0; i < fftLength; i ++){
    freqArray.push(((freqStep*i)+(freqStep*(i+1)))/2)
  } 
  return freqArray
}


// Creates array of tonal frequencies that correspond to the musical alphabet. 
function freqToNotes(C_0,max,min){
  // We want this to be 'all the frequencies'. Index % 12 will yield the pitch according to its alphabetic identifier. 
  const lastStep = Math.floor(12.0 * Math.log2(max / C_0)); 
  // Container for our notes: 
  var noteArray = [C_0];
  // Iteratively build the note array: 
  for(let i = 1; i <= lastStep; i++){
    var noteFreq = Math.fround(C_0 * Math.pow(2.0, i / 12.0)); 
    noteArray.push(noteFreq); 
  }
  // Handling the min: 
  if(min){
    var firstGoodIndex = noteArray.findIndex( x => x >= min); 
    noteArray = noteArray.slice(firstGoodIndex); 
  }
  // Return the damn thing: 
  return noteArray 
}

// Matches frequencies (+/- 1%) to their tonal counterparts. 
function freqNoteMatch(freqArray,minFrequency,maxFrequency,C_0){

  // freqArray: an array of constituent FFT frequencies. (Fmax = samplingRate / 2 ... Nyquist Theorem)

  // minFrequency: the lower bound of the frequency range we seek to analyze. 

  // maxFrequency: the upper bound of the frequency rage under analysis. 

  // centralFreq; The central frequency. Aka A0. The frequncy about which our musical alphabet is constructed. 

  // Trim down freqArray to the frequency range under analysis. 
  var minFftIndex  = freqArray.findIndex(x => x >= minFrequency);
  var maxFftIndex  = freqArray.findIndex(x => x > maxFrequency) - 1; 
  freqArray        = freqArray.slice(minFftIndex,maxFftIndex+1); 

  // Frequencies which correspond to 'Notes':  
  var toneArray    = freqToNotes(C_0,maxFrequency); 

  // Variables for subsequent iterative calculation: 
  var toneIndex = 0; 
  var zeroCount = 0;  
  var precision = 10; // precision , in cents. There are 1200 cents in an octave. Adjacent tones are buffered by 100 'cents'. 
                      // With a precision of 10 cents, we ensure at minimum and 80 'cent' gap  Between tones. 


    // Determine the 'tonal range' within a given precision: 
  var tMin = toneArray[toneIndex] * Math.pow( 2, (-precision)/1200 ); // THESE ARE FREQUENCIES. 
  var tMax = toneArray[toneIndex] * Math.pow( 2, precision/1200 );


  // Ouptut bins: 
  var freq2Tone    = [],
      freqHues     = [], 
      octaveStarts = []; 

  // Performing calculations: 
  for( let i = 0; i < freqArray.length; i ++){

    // Convert the frequency to a 'step number', n, which used to convert frequency to color. 
    // It is also used ot match frequency to 'Note'  (e.g. 440 --> A). Consider the following: 
    
    /**
      Our frequency array is linearly spaced. And the relationship between frequency and steps is
      and exponential one, of  base a: 

      fn = f0 * (a)n 
      
      where n is step distnace away from the 'central frequency', f0, which corresponds to our 
      middle A, a note that belts out at 440 Hz. Oh, and: 

      a = 2 ** (1/12)

      In non-math terms, each octave is a 2 ** x  Hz wide, consisting of 12 'bins' of increasing width width
      x being an integer.


      Oh, and on a similar note. If we wish to make all the octaves of equal length, we need to space our frequency 
      axis logarithmically, which sort-of 'compensates' for the exponential spacing of notes WRT frequency. 
    **/

    // Accordingly, we can convert frequencies into n's for a given a 'central frequency' (i.e. f0)
    // via the freqToTone() function.  
    var n  = freqToTone (freqArray[i],C_0); 

    // Once we have an n, slap it on the freqHues array. 
    freqHues.push(n); 

    // Update if needed: 
    if(freqArray[i] >= tMax && toneIndex < toneArray.length-1){
      toneIndex += 1;
      let f      = toneArray[toneIndex]; 
      tMin       = f * Math.pow( 2, (-precision)/1200 );
      tMax       = f * Math.pow( 2, precision/1200 );
    }

    // See if the given interative frequency, freqArray[i], is within our current 'tonal range': 
    if(freqArray[i] >= tMin && freqArray[i] < tMax){
      // If this is being executed, freqArray[i], corresponds to a tone of interest, a note! 
      var remainder  = Math.round(n) % 12; 
      if(remainder < 0){
        remainder = remainder + 12; 
      }
      else if((remainder == 0 && i == 0) || (remainder == 0 && freq2Tone[i-1] == -1)){
        octaveStarts.push(i); 
      }
      freq2Tone.push(remainder);
    }
    else{
      freq2Tone.push(-1)
      zeroCount += 1; 
    }
  }

  // Prepare output: 
  var freqObj   = {}; 

  // Below is an array of frequencies, the trimmed freqArray!
  freqObj.freqs = freqArray; 

  // Below is an array of integers, the integers corresponding to notes, e.g. 1 -> A.
  freqObj.tones = freq2Tone; 

  //Below is the frequency array mapped to 'intervalic steps', or n-values. 
  freqObj.hues  = freqHues; 

  // Determine the octave start points: 
  octaveStarts = octaveStarts.slice(2);
  freqObj.octaveStarts = octaveStarts; 

  // And the pure tone array: 
  freqObj.pureToneArray = toneArray; 

  // And attach the min and max indices: 
  freqObj.minFftIndex = minFftIndex; 
  freqObj.maxFftIndex = maxFftIndex; 

  // OUT: 
  return freqObj; 
}


// Transforming frequency to hue. 
function freqToTone(f_n,C_0){
  // n is equivalent to steps above C_0
  var n = 12.0 * Math.log2(f_n / C_0); 
  return n; 
}

// Function to transform the fftOutput. 
function powerScaler(pwr,freq){
  pwr = Math.log(freq) * pwr /(Math.log(2) * 6); // Math.log(freq) // 4; 
  return pwr;  
}

// A function to pit the notes against eachother: 
function getNotePowers(fftArray,freqObj,minFftIndex){

  // The output array: 
  var powerArray = []; 

  // Looping through the octaves: 
  for(let j = 0; j < freqObj.octaveStarts.length-1; j++){

    // We interatively build the output up. One octave at a time: 
    var notePowers    = []; 

    // We want to pad the 
    var octavePadding = 5 + (4 * j);
    var octaveFreqs   = freqObj.freqs.slice(freqObj.octaveStarts[j],freqObj.octaveStarts[j+1]); 
    var octaveTones   = freqObj.tones.slice(freqObj.octaveStarts[j],freqObj.octaveStarts[j+1]); 

    // We are going to pad this array, and use the surrounding data to determine 'note prominence'. 
    var octaveFFT     = fftArray.slice(freqObj.octaveStarts[j]+minFftIndex-octavePadding,freqObj.octaveStarts[j+1]+minFftIndex+octavePadding); 
    var octavePower   = octaveFFT.reduce((acc,val) => {return acc + val},0) / octaveFFT.length; 

    // Looping through the notes: 
    for(let i = 0; i <= 11; i++){

      var noteBandStart = octaveTones.indexOf(i);  
      var noteBandEnd   = octaveTones.lastIndexOf(i); 

      // Do we have a complete note-band to work with? 
      if(noteBandStart != -1 && noteBandEnd != -1){

        // Shift the indices 'up' according to the 'padding'. 
        noteBandStart += octavePadding; 
        noteBandEnd   += octavePadding; 

        // The before and affter FFTs: 
        var preNoteFFT     = octaveFFT.slice(noteBandStart-octavePadding,noteBandStart); 
        var postNoteFFT    = octaveFFT.slice(noteBandEnd+1,noteBandEnd+octavePadding+1);

        // Concatenate the above to make the 'surroundFFT'). 
        var surroundFFT    = typedConcat(preNoteFFT,postNoteFFT);  

        // Compute the surround power. 
        var surroundPower  = surroundFFT.reduce( (acc,val) => {return acc + val},0) / surroundFFT.length; 

        // Now work with the notes. 
        var noteFFT        = octaveFFT.slice(noteBandStart,noteBandEnd+1); 

        // The note power: 
        var notePower      = noteFFT.reduce( (acc,val) => {return acc + val}, 0) / noteFFT.length;

        // The note prominence: How far above the 'DC baseline' is the 'peak-in-question'?
        var noteProminence = notePower - surroundPower; 

        // Combining prominence and power into a single metric: 
        if(surroundPower == notePower || noteProminence <= 0){
          var powProm = 0; 
        }
        else{
          var powProm = notePower * (1-(surroundPower/(noteProminence+surroundPower)));   
        } 

      }
      // In the event we do not....
      else{
        var notePower = 0; 
        var noteProminence = 0;
        var powProm = 0; 
        console.log('Note not found in octave, ',j) 
      }

      // A 'note-object': tone of 0 --> A, 1 --> A#, ETC. Is this really necessary? 
      var noteObject = {"tone":i,"prominence":noteProminence,"power":notePower,'powProm':powProm}; 
      // Putting the note-object together: 
      notePowers.push(noteObject); 

    }

    // Stacking up the octaves, 
    var octaveObject = {"power":octavePower,"tones":notePowers}; 
    // and adding them to the output array. 
    powerArray.push(octaveObject);   

  }

  return powerArray; 
}

// Can we take a power spectrum and return a wave-array? FUCK YES. 
function SpectrumToWaves(notePowers){

  // This function takes in notePowers, which attributes to each note to a given 'power'. 

  // For each octave these powers are normalize. 
  var normedOctaves = []; 
  // Looping through the octaves: 
  for( let i = 0; i < notePowers.length; i++){
    var proms = notePowers[i].tones.map( x => x.prominence); 
    var normedProms = normalizeArray(proms);
    normedOctaves.push(normedProms);  
    // Accumulate the note powers: 
    if(i == 0){
      var accumulatedPowers = notePowers[i].tones.map( x => x.power); 
    }
    else{
      accumulatedPowers = notePowers[i].tones.map( (x,index) => {
          var accPow = (x.power + accumulatedPowers[index]) / 2; 
          return accPow; 
        }
      )
    }
  }

  // Okay, we have to normalize the accumulated powers array, which will then serve to 'weight' the notes WRT one another. 
  accumulatedPowers = normalizeArray(accumulatedPowers);  

  // Prepare the output: 
  var waveTable     = {}; 
  waveTable.table   = normedOctaves; 
  waveTable.weights = accumulatedPowers; 

  // Output the 'waveTable'! 
  return waveTable; 
} 

// A function to turn an array of pitches into notes: 
function convertPitches(pitchArray,toneArray,maxFrequency,cents){
  var notesOut = []; 
  for(let i = 0; i < pitchArray.length; i++){
    if(pitchArray[i] <= maxFrequency){
      // Convert frequency to 'stepNumber': 
      var n           = freqToTone(pitchArray[i],C0); 
      var n_index     = Math.round(n); 
      var closestNote = toneArray[n_index]; 
      var minThresh   = closestNote * Math.pow(2,(-cents)/1200); 
      var maxThresh   = closestNote * Math.pow(2,cents/1200); 
      if(pitchArray[i] >= minThresh && pitchArray[i] <= maxThresh){
        var noteID = n_index % 12; 
        notesOut.push(noteID); 
      }
    }
  }
  return notesOut; 
} 


// A function to get frequencies: 
async function getFreqs(channelData){
	// ChannelData is data from our audio node. 
	// detectPitch is a function associated with the PitchFinder. 
	// Combine the two and you get some sort of spectral signature...which we call freqData!
  var freqData = await audioz.Pitchfinder.frequencies(detectPitch, channelData); 
  return freqData
}


// An array normalizer: 
function normalizeArray(array){
  // Determine the min, max, range: 
  var min = Math.min(...array); 
  var max = Math.max(...array); 
  var range = max - min;   
  // Normalize them arran according to the min and range: 
  var normedArray = array.map( (x) => {
      if(range > 0){
        return ((x-min) / range); 
      }
      else{
        return 0; 
      }
    }
  )
  // Output the normalized array: 
  return normedArray; 
}

// A helper function to concatenate typed arrays: 
function typedConcat(arr1,arr2){
	// arr1 and arr2 are array buffers; we need their length. 
  var c = new Uint8Array(arr1.length + arr2.length);
  // Setting the arr1 into place. 
  c.set(arr1);
  // arr2 must come after. arr1.length is the starting index! 
  c.set(arr2, arr1.length);
  return c
}
