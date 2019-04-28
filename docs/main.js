// This will be our main scene component. 

// This component will be in charge of listening to the audio, and doing cool stuff with it: 


/*************************
	PITCH FINDER STUFF
*************************/
const yinParams       = {threshold:0.5,probabilityThreshold:0.5}; 
const detectPitch     = new audioz.Pitchfinder.YIN(yinParams);
const amdfDetector    = new audioz.Pitchfinder.AMDF({minFrequency:20,maxFrequency:4200,sensitivity:0.3}); 
const quantInterval = {tempo:500,quantization:4}; 

// console.log(audioz.BeatDetector); 

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
// Specify C0.
// Why -4.75? C0 is 4.75 octaves down from A4.C0 -> C4 is 5 octaves. A4<--C4 is 3 half steps, or 0.25 octaves 
// 5-0.25 is 4.75.
// The expression belowgives C0 in units of Hz.
const C0 = A4 * Math.pow(2.0, -4.75); 

// FFT STUFF: 
const fftSize       = 2**13;
const noteFFTSize   = 2**13; 
const fftLength     = fftSize / 2;  
const noteFFTLength = noteFFTSize / 2; 

// THE ABOVE DETECTORS AREN'T EMPLOYED JUST YET, BUT IN FUTURE ITERATIONS, THEY MAY BE: 
// We use this variables below to create a note-spectrum, in which we match frequencies with their correspondent notes.
const minFrequency = 14; 
const maxFrequency = 4200; 
var freqArray      = getFreqArray(fftLength); 
var freqObj        = freqNoteMatch(freqArray,minFrequency,maxFrequency,C0); 

// Get C's and use them to build our pitch detector array: One pitch detector per octave. 
var C_notes = freqObj.pureToneArray.filter( 
  (x,index) => { if(index % 12 == 0){ return x }
})
.map(
  x => x * Math.pow(2,(-20)/1200)
); 

// Defining some detector variables:  
var detectorArray = []; 
var detectorParams = {
  sensitivity:0.4, 
  minFrequency:32, 
  maxFrequency:4200,
}
// Building the detectors array: 
for(let i = 0; i < C_notes.length-1; i++){
  detectorParams.minFrequency = C_notes[i]; 
  detectorParams.maxFrequency = C_notes[i+1];
  detectorArray.push(audioz.Pitchfinder.AMDF(detectorParams)); 
}


var junkCircle = new THREE.CircleGeometry(11.5,fftLength); 
junkCircle.vertices.shift();
var junkVerts = junkCircle.vertices;

/************************
 A COMPONENT TO HOUSE OUR MUSIC GEOMETRIES. 
 SCENE CAN DO THIS EQUALLY WELL, WANT TO KEEP THINGS MODULAR,THOUGH. 
**************************/
AFRAME.registerComponent('musicscene',{

	init: async function(){

    // Thing seems to demand an interaction. I need to cue the user.   
		/*************************
	  GEOMETRICAL PRELIMINARIES: 

	  In this subsection we define a geometry 
	  upon which our analyzed audio will operate. 
    
	  *************************/
	  // A cirle to get some vertices:
	  var circ12 = await new THREE.CircleGeometry(8,12); 
	  var toneInfo = await toneStuff(circ12.vertices); 
    console.log(toneInfo);
	  var noteCircle = document.createElement('a-entity');
	  noteCircle.setAttribute('lettergroup',{toneInfo:toneInfo});
	  noteCircle.setAttribute('id','lettergroup'); 
	 	var colorWheel = await document.createElement('a-entity');
	  await colorWheel.setAttribute('colorwheel',{toneInfo:toneInfo});
	  colorWheel.setAttribute('id','colorwheel');
    var noteLines = document.createElement('a-entity');
    noteLines.setAttribute('string-group',{fftSize:noteFFTSize,toneInfo:toneInfo});   
		noteLines.setAttribute('id','stringgroup'); 
    this.el.appendChild(colorWheel); 
	  this.el.appendChild(noteCircle); 
    this.el.appendChild(noteLines)
    this.el.setAttribute('position',{x:0,y:2.5,z:-20});

    // Let's make a particle object: 

    var beatsPerMs = (104/60) / 1000; // bmp / 60s/m = beats per second / 1000 ms/2 = BEATS PER MILLISECOND.  
    // Next we need to make a four beats! 
    var beatsInFourS = 4/beatsPerMs; 
    console.log(beatsInFourS);

  
    
    // Add the animation: 

    // Making a circular wave: 
    var lineCircle = document.createElement('a-entity'); 
    var circleGeo  = await new THREE.CircleGeometry(11.5,fftLength); 
    var lineGeo = new THREE.Geometry(); 
    circleGeo.vertices.shift(); 
    lineGeo.vertices = circleGeo.vertices; 
    var lineMaterial = new THREE.LineBasicMaterial({color:'white',linewidth:3}); 
    lineMaterial.needsUpdate = true; 
    var lineObject = new THREE.Line(lineGeo,lineMaterial);
    lineObject.needsUpdate = true; 
    lineCircle.setObject3D('linecircle',lineObject); 
    lineCircle.setAttribute('id','line-circle'); 
    lineCircle.setAttribute('line-circle',{verts:lineGeo.vertices}); 
    this.el.appendChild(lineCircle); 

    // Make a circular 'metronome':
    // var ball = document.createElement('a-entity'); 
    // ball.setAttribute('geometry',{primitive:'box',height:1.4,width:1.4,depth:1.4}); 
    // ball.setAttribute('material',{color:'white',transparent:true,opacity:1}); 
    // ball.setAttribute('position',{x:0,y:11.5,z:0}); 
    // var ballPlane = document.createElement('a-entity'); 
    // ballPlane.appendChild(ball); 
    // ballPlane.setAttribute('id','ball-plane'); 
    // ballPlane.setAttribute('animation',{property:'rotation',to:{x:0,y:0,z:360},dur:beatsInFourS,dir:'reverse',loop:true,easing:'linear'}); 
    // this.el.appendChild(ballPlane);

   // Adding some backing to the metronome for effect. 4 annular segments. 
    var metCircle = document.createElement('a-entity'); 
    var ringOne   = document.createElement('a-entity');
    var ringTwo   = document.createElement('a-entity');
    var ringThree = document.createElement('a-entity');
    var ringFour  = document.createElement('a-entity');
    var ringFive   = document.createElement('a-entity');
    var ringSix  = document.createElement('a-entity');
    var ringSeven = document.createElement('a-entity');
    var ringEight = document.createElement('a-entity');
    var ringNine   = document.createElement('a-entity');
    var ringTen  = document.createElement('a-entity');
    var ringEleven = document.createElement('a-entity');
    var ringTwelve  = document.createElement('a-entity');
    var outerCircle = document.createElement('a-entity'); 
    var innerCircle = document.createElement('a-entity'); 

    outerCircle.setAttribute('geometry',{primitive:'ring',radiusInner:12.9,radiusOuter:13.0}); 
    outerCircle.setAttribute('material',{color:'white'}); 
    innerCircle.setAttribute('geometry',{primitive:'ring',radiusInner:11.0,radiusOuter:11.1}); 
    innerCircle.setAttribute('material',{color:'white'}); 
    // metCircle.appendChild(outerCircle); 
    // metCircle.appendChild(innerCircle);

    ringOne.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:0}); 
    ringTwo.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:30}); 
    ringThree.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:60}); 
    ringFour.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:90}); 
    ringFive.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:120}); 
    ringSix.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:150}); 
    ringSeven.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:180}); 
    ringEight.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:210}); 
    ringNine.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:240}); 
    ringTen.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:270}); 
    ringEleven.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:300}); 
    ringTwelve.setAttribute('geometry',{primitive:'ring',radiusInner:11,radiusOuter:12,thetaLength:30,thetaStart:330}); 
   
    ringOne.setAttribute('material',{color:'black',transparent:true,opacity:0.8}); 
    ringTwo.setAttribute('material',{color:'#aaaaaa',transparent:true,opacity:0.8}); 
    ringThree.setAttribute('material',{color:'black',transparent:true,opacity:0.8}); 
    ringFour.setAttribute('material',{color:'#aaaaaa',transparent:true,opacity:0.8}); 
    ringFive.setAttribute('material',{color:'black',transparent:true,opacity:0.8}); 
    ringSix.setAttribute('material',{color:'#aaaaaa',transparent:true,opacity:0.8}); 
    ringSeven.setAttribute('material',{color:'black',transparent:true,opacity:0.8}); 
    ringEight.setAttribute('material',{color:'#aaaaaa',transparent:true,opacity:0.8});
    ringNine.setAttribute('material',{color:'black',transparent:true,opacity:0.8}); 
    ringTen.setAttribute('material',{color:'#aaaaaa',transparent:true,opacity:0.8}); 
    ringEleven.setAttribute('material',{color:'black',transparent:true,opacity:0.8}); 
    ringTwelve.setAttribute('material',{color:'#aaaaaa',transparent:true,opacity:0.8});

    metCircle.appendChild(ringOne);
    metCircle.appendChild(ringTwo);
    metCircle.appendChild(ringThree);
    metCircle.appendChild(ringFour); 
    metCircle.appendChild(ringFive);
    metCircle.appendChild(ringSix);
    metCircle.appendChild(ringSeven);
    metCircle.appendChild(ringEight); 
    metCircle.appendChild(ringNine);
    metCircle.appendChild(ringTen);
    metCircle.appendChild(ringEleven);
    metCircle.appendChild(ringTwelve); 

    metCircle.setAttribute('position',{x:0,y:0,z:-0.1});

    // intro text: 
    var introString = 'Click or Tap to Start'
    var introText = document.createElement('a-entity'); 
    introText.setAttribute('geometry',{primitive:'plane',height:'auto',width:'auto'}); 
    introText.setAttribute('material',{color:'#000',transparent:'true',opacity:0.5}); 
    introText.setAttribute('text',{value:introString,color:'white',side:'double',align:'center',baseline:'center',font:'dejavu',wrapCount:introString.length+2,transparent:true,opacity:1.0});  
    introText.setAttribute('side', 'double');
    introText.setAttribute('scale',{x: 5, y: 5, z: 5})
    introText.setAttribute('position', {x: 0, y: 0, z: 15});
    introText.setAttribute('rotation', {x: 0, y: 0, z: 0});
    introText.setAttribute('id','introtext'); 
    this.el.appendChild(introText);
    // Make a circle geometry and use for vertices: 

    // Loop through the vertices, putting a sphere (or circle if spheres are too costly)

    // Animate the group. 
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
    this.audioFcn = AFRAME.utils.bind(this.startAudio, this); 
	  /*************************
	  AUDIO PRELIMINARIES: 

	  Here, we load our audio, instantiate our 
	  listener, context, asorted nodes, 
	  and connect feed them to the pitch finder?

	  *************************/


	  var listener    =  await new THREE.AudioListener();
	  this.audioLoader = await new THREE.AudioLoader();
	  this.context     = await new AudioContext();

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
    this.sceneEl.addEventListener('click', async function(evt){
      // console.log(this.sceneEl.systems.musicvr);
      // console.log(this.sceneEl.systems.musicvr.audioLoader)
      if(this.sceneEl.systems.musicvr.playing == false){
        await this.sceneEl.systems.musicvr.audioLoader.load( 'assets/audio/dc502.mp3', this.sceneEl.systems.musicvr.audioloadfcn);
        // console.log('loading')
      }
    })
    this.tocs = 0; 
    this.even = false; 
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
    // console.log(this.el); 
    // Our system will handle animations, too: 
    this.el.addEventListener('animationcomplete',this.animator); 
    // Add a analyzer component to the system: 
	  // END OF INIT
	}, 

	// Tick: 
	tock: async function(t,delta_t){
		if(this.playing == true && t-this.t_of_last_scan > 200 && this.tocs % 2 == 0){
			// Get data fram analyser and toss it into S(t) and f(t) arrays. 
			this.analyser.getByteFrequencyData(this.fftArray); 
      var ss = this.analyser.getFloatTimeDomainData(this.timeFloats);
      // console.log(this.timeFloats);
        // Use the date to detect pitches: 
      // var pitches = await audioz.Pitchfinder.frequencies( detectorArray, this.timeFloats, quantInterval);
      var pitches = await audioz.Pitchfinder.frequencies( detectors, this.timeFloats, quantInterval);
      // console.log(pitches);
      // See if the detected pitch (in Hz) matches a note:
      var convertedPitches = convertPitches(pitches,freqObj.pureToneArray,maxFrequency,40);
      // We can do a beat detector...and use this to update 
      // console.log(this.source.buffer);
      // console.log(this.source);

      // console.log(freqObj);
      // console.log(convertedPitches);
      // Did we find a note?
      // console.log(pitches);
      // console.log(convertedPitches);
      if(convertedPitches.length > 0){
      	// Which note?
      	var detectedNote = noteIds[convertedPitches[0]]; 
        // console.log(detectedNote)
      	// Get arrays of entities that correspond to note components: 
      	var letters = this.sceneEl.querySelector('#lettergroup').childNodes; 
      	var pieslices = this.sceneEl.querySelector('#colorwheel').childNodes; 
        var noteStrings = this.sceneEl.querySelector('#stringgroup').childNodes; 
      	// Loop through the arrays: 
      	for(let i = 0; i<letters.length; i++){
      		// Handling the letters first: 
      		var letterId = letters[i].getAttribute('class');
          // console.log(letterId)
      		// Is this our detected note?
      		if(letterId == detectedNote){
      			letters[i].setAttribute('letter-component',{detected:true}); 
      			letters[i].removeAttribute('animation__letterfade'); 
      			letters[i].setAttribute('animation__letterbrighten',{property:'text.opacity',to:0.8,dur:250,easing:'easeInSine',}); 
      		}
      		else if(letters[i].getAttribute('letter-component').detected == true && letterId != detectedNote ){ 
      			// console.log('fading letter'); 
            letters[i].removeAttribute('animation__letterbrighten' ); 
      			letters[i].setAttribute('animation__letterfade',{property:'text.opacity',to:0.2,dur:800,delay:250,easing:'easeOutSine'});
      			letters[i].setAttribute('letter-component',{detected:false}); 
      		}
          else{
            letters[i].removeAttribute('animation__letterbrighten' ); 
            letters[i].setAttribute('animation__letterfade',{property:'text.opacity',to:0.2,dur:800,delay:250,easing:'easeOutSine'});
            letters[i].setAttribute('letter-component',{detected:false});             
          }
      		// And now the pie-slices: 
      		var sliceId = pieslices[i].getAttribute('class');
      		if(sliceId == detectedNote){
            pieslices[i].removeAttribute('animation__slicefade'); 
      			pieslices[i].setAttribute('pieslice',{detected:true}); 
      			pieslices[i].setAttribute('animation__slicebrighten',{property:'material.opacity',to:0.8,dur:250,easing:'easeInSine'})
      		              // we change color of wheel here: 
            var material = pieslices[i].getAttribute('material'); 
            var color = material.color.toString(16); 
            color = "#" + color;
          }
      		else if(pieslices[i].getAttribute('pieslice').detected == true && sliceId != detectedNote){ 
            // console.log('fading slice');
      			pieslices[i].removeAttribute('animation__slicebrighten'); 
      			pieslices[i].setAttribute('animation__slicefade',{property:'material.opacity',to:0.15,delay:250,dur:800,easing:'easeOutSine'});
      			pieslices[i].setAttribute('pieslice',{detected:false}); 
      		}
          else{
            // console.log('fading slice, alt');
            pieslices[i].removeAttribute('animation__slicebrighten'); 
            pieslices[i].setAttribute('animation__slicefade',{property:'material.opacity',to:0.15,delay:250,dur:800,easing:'easeOutSine'});
            pieslices[i].setAttribute('pieslice',{detected:false}); 
          }     
          var stringId = noteStrings[i].getAttribute('class'); 
          if(stringId == detectedNote){
            noteStrings[i].setAttribute('visible',true); 
          }		
      	}; 
        // console.log(nodes);  
      }
      if(this.playing == true){
          
        var sg = await this.sceneEl.querySelector('#stringgroup'); 
        var circleLine = await this.sceneEl.querySelector('#line-circle'); 
        circleObj = await circleLine.getObject3D('linecircle'); 
        var nodes = sg.childNodes; 
        var aa = absAvg(this.timeFloats); 
        if(color){
          var newColor = await new THREE.Color(color);
          var hexer = newColor.getHex(); 
          circleObj.material.color.setHex(hexer); 
        }
        // console.log(color);
        for(let k = 0; k<nodes.length; k++){
          var theta = k * Math.PI/12; 
          var obj = nodes[k].getObject3D('liner'); 
          var particleIndex = 0; 
          for(let ii = 0; ii < this.timeFloats.length; ii++){
            var index = ii; 
            obj.geometry.vertices[index+1].y = 40*aa*this.timeFloats[index]; 
            obj.geometry.vertices[index+1].y = 40*aa*this.timeFloats[index] * Math.sin(theta); 
            if(k == 0){
              var steadyX = junkVerts[ii].x; 
              var steadyY = junkVerts[ii].y;
              var new_x = steadyX + steadyX*9*aa*this.timeFloats[index];  
              var new_y = steadyY + steadyY*9*aa*this.timeFloats[index];  
              circleObj.geometry.vertices[ii].x = new_x; 
              circleObj.geometry.vertices[ii].y = new_y; 
            }
          }
          if(k == 0){
            circleObj.geometry.verticesNeedUpdate = true; 
          }
          obj.geometry.verticesNeedUpdate = true; 
        }
      }
		}
    // if(this.playing == true && this.tocs % 2 == 0){
    //   try{
    //     var bpm = await audioz.BeatDetector.guess(this.source.buffer); 
    //     // var apm = await audioz.BeatDetector.analyze(this.source.buffer); 
    //     console.log(bpm);

    //     var beatsPerMs = (bpm.bpm/60) / 1000; // bmp / 60s/m = beats per second / 1000 ms/2 = BEATS PER MILLISECOND.  
    //     // Next we need to make a four beats! 
    //     var beatsInFourS = 4/beatsPerMs; 
    //     var ballPlane = this.sceneEl.querySelector('#ball-plane'); 
    //     var oldAnim = ballPlane.getAttribute('animation'); 
    //     var currentRotation = ballPlane.getAttribute('rotation'); 
    //     var toVector = currentRotation; 
    //     toVector.z += 360; 
    //     oldAnim.from = currentRotation; 
    //     oldAnim.to = toVector; 
    //     oldAnim.dur = beatsInFourS; 
    //     ballPlan.removeAttribute('animation'); 
    //     ballPlane.setAttribute('animation',oldAnim);

    //   }
    //   catch(err){
    //     console.log(err); 
    //   }
    // }

    this.tocs += 1; 
	},
 
  // A function to load audio such that our parent class (the system) inherits 
  // data from the audio buffer and distrubutes said data to things like our analyser, 
  // i.e. this.analyser. 
	audioloadfcn: async function( buffer ) {
    this.channel0 = buffer.getChannelData(0);
    // this.channel1 = buffer.getChannelData(1);
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
    this.fftArray   = new Uint8Array(this.analyser.frequencyBinCount);
    this.fftFloats  = await new Float32Array(this.analyser.frequencyBinCount);  
    this.timeFloats = await new Float32Array(this.analyser.frequencyBinCount);  
    this.fftCount   = this.analyser.frequencyBinCount;  
    this.playing    = true; 

    // fade intro text: 
    var introText = this.sceneEl.querySelector('#introtext'); 
    introText.setAttribute('animation__introfade',{property:'text.opacity',to:0.2,dur:800,delay:0,easing:'easeOutSine'})
  }, 


  // A function that workd with animations. Once the note group fades to completion, 
  // we hide the line. That way things will appear in greater sychrony...a good thing!
  animator: function(e){
    console.log(e.detail.name);
    if(e.detail.name == 'animation__introfade'){
      var introText = this.sceneEl.querySelector('#introtext'); 
      introText.setAttribute('visible',false); 
    }
    else if(e.detail.name == 'animation__slicefade'){
      // Which note is fading away; 
      var target_class = "." + e.target.getAttribute('class');
      // Hid away the waveform line
      console.log('faded'); 
      this.sceneEl.querySelector('#stringgroup').querySelector(target_class).setAttribute('visible',false); 
    }
  }
}); 

/*********************************************
	SOME UTILITY FUNCTIONS IN THE CELLAR HERE
*********************************************/

// Get the absolute-value-averaged of an array: 
function absAvg(arr){
  // arr is a typed array! 
  var abs_avg = arr.reduce((a,b) => (a+Math.abs(b))) / arr.length;
  return abs_avg; 
}

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

  // tone info does not actually contain any scene objects. Just data needed to make the objects (e.g. vertices signifying position) 
  return toneInfo
}


// A frequency axis for our FFTs. Just stepping through frequencies here.. 
function getFreqArray(fftLength){
  const minFreq   = 0; 
  const maxFreq   = 44100 / 2; // nyquist...our audio is commonly sampled at 44.1kHZ, max resolvable frequency is sample frequency divided by 2. 
  const freqStep  = maxFreq / (fftLength + 1);
  var freqArray   = []; 
  for( let i = 0; i < fftLength; i ++){
    freqArray.push(((freqStep*i)+(freqStep*(i+1)))/2)
  } 
  return freqArray
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
      and exponential one, of  base a. (exponential is based on sequentual mutiplication; linear is 
      sequential addition). 

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
    // I call them hues here because we can think in terms of color. the remainder of the 'hue', or n, value
    // with respect to 12 will yield a color corresponding to one our of 12 (western chromatic tones). 
    freqHues.push(n); 

    // This is updated everytime we switch to another tone: 
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

  // Loop through frequency array is done; prepare output!
  var freqObj   = {}; 

  // Below is an array of frequencies, the trimmed freqArray!
  freqObj.freqs = freqArray; 

  // Below is an array of integers, the integers corresponding to notes, e.g. 1 -> A.
  freqObj.tones = freq2Tone; 

  //Below is the frequency array mapped to 'intervalic steps', or n-values. 
  freqObj.hues  = freqHues; 

  // Determine the octave start points. 

  // THIS ARRAY IS SLICED BECAUSE? _____________! (WE THIS NEEDS A RESOLUTION)
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
  // Handling the min, which, by the way, is an optional argument. 
  if(min){
    var firstGoodIndex = noteArray.findIndex( x => x >= min); 
    noteArray = noteArray.slice(firstGoodIndex); 
  }
  // Return the array of notes: 
  return noteArray 
}

// Transforming frequency to hue. 
function freqToTone(f_n,C_0){
  // n is equivalent to steps above C_0
  var n = 12.0 * Math.log2(f_n / C_0); 
  return n; 
}

// Function to transform the fftOutput; low frequencies seem to dominate the higher ones. 
function powerScaler(pwr,freq){
  pwr = Math.log(freq) * pwr /(Math.log(2) * 6); // Math.log(freq) // 4; 
  return pwr;  
}

// A function to pit the notes against eachother, fft style, not pitch finder: 
function getNotePowers(fftArray,freqObj,minFftIndex){

  // The output array: 
  var powerArray = []; 

  // Looping through the octaves: j corresponds to 'octave number'
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
        noteBandStart += octavePadding; // SHOULD THIS BE A MINUS? WE WANT TO PUFFER EACH SIFHT, RIGHT?
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

      // I CHANGED THIS A BIT, A DOES NOT CORRESPOND TO WHAT WE HAVE HERE... 
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


// Particle Stuff: 

    // var particleObject = {}; 
    // particleObject.preset = 'default'; 
    // particleObject.texture = "./assets/particle.jpg"
    // particleObject.positionSpread = {x:10,y:10,z:0}; 
    // particleObject.velocityValue = {x:5,y:5,z:0}; 
    // particleObject.velocitySpread = {x:10,y:10,z:0};;  
    // particleObject.rotationAxis = 'x'; 
    // particleObject.accelerationValue = {x:10,y:10,z:0}; 
    // particleObject.accelerationSpread = {x:-10,y:-10,z:0}; 
    // particleObject.type = 3; 
    // particleObject.rotationAngleSpread = Math.PI/2; 
    // particleObject.color = 'red';

    // // Trying the sprite object: 
    // var spriteObject = {}; 
    // spriteObject.texture = "./assets/particle.jpg"; 
    // spriteObject.radialType = "circlexy"; 
    // spriteObject.color = 'red';
    // spriteObject.radialPosition = "11.0";
    // spriteObject.spawnRate = "20.0";  
    // spriteObject.radialAcceleration = "0.08"; 
    // spriteObject.particleSize = "500.0"; 
    // spriteObject.lifeTime = "10"; 

        // Making a particle system: This should be neat: 
    // var particleSystem = document.createElement('a-entity'); 
    // particleSystem.setAttribute('particle-system',particleObject);
    // // particleSystem.setAttribute('sprite-particles',spriteObject); 
    // particleSystem.setAttribute('geometry',{primitive:'torus',radius:7}); 
    // particleSystem.setAttribute('material',{color:'black',transparent:true,opacity:0});  
    // particleSystem.setAttribute('animation',{property:'rotation',to:{x:0,y:0,z:-360},dur:beatsInFourS,loop:true,easing:'linear'})
    // particleSystem.setAttribute('animation_rad',{property:'geometry.radius',to:8,from:7,dur:beatsInFourS/4,loop:true,easing:'linear',dir:'alternate'})
    // particleSystem.setAttribute('id','particleSystem'); 
    // // We are going to attached our particle system to a ring: 
    // this.el.appendChild(particleSystem); 

