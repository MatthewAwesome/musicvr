/*
  INSERT APT, BRIEF DESCRIPTION HERE
*/ 

/

// Imports via require(): 
const d3_peaks        = require('d3-peaks'); 
const lpf             = require('lpf');
const autoCorrelation = require('autocorrelation').autocorrelation;
const Pitchfinder     = require("pitchfinder");

const yinParams       = {threshold:0.5,probabilityThreshold:0.3}; 
const detectPitch     = new Pitchfinder.YIN(yinParams);
const amdfDetector    = new Pitchfinder.AMDF({minFrequency:108}); 
const audioLoader     = new THREE.AudioLoader(); 

// Set the smoothing paramter: 
lpf.smoothing  = 0.4;

// A couple other constants: 
const A4 = 440; 
const C0 = A4 * Math.pow(2.0, -4.75); 



  /*************************
  AUDIO ANALYZER GLOBALS
  *************************/

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

  // Build an arry of pitch detectors: 
  var detectorArray = []; 
  var detectorParams = {
    sensitivity:0.5, 
    minFrequency:0, 
    maxFrequency:0,
  }
  for(let i = 0; i < C_notes.length-1; i++){
    detectorParams.minFrequency = C_notes[i]; 
    detectorParams.maxFrequency = C_notes[i+1];
    detectorArray.push(Pitchfinder.AMDF(detectorParams)); 
  }

  console.log(detectorArray)
  // Octaves will begin and end 20 cents below the C notes. 



  // Preparing some pitch-finders: 

  /*************************
  AUDIO PRELIMINARIES: 
  *************************/

  var listener    = new THREE.AudioListener();
  var audioLoader = new THREE.AudioLoader();
  var context     = new AudioContext();

  // Some audio nodes: 
  var fftArray, analyser, fftFloats, delay, source, filter, gainNode, source2, fftCount, timeFloats, channel0, channel1; 

  // Instantiating the various nodes: 
  analyser = context.createAnalyser();
  source2  = context.createBufferSource(); 
  filter   = context.createBiquadFilter();
  delay    = context.createDelay(2);
  gainNode = context.createGain();

  // Set some node params:
  filter.type = "highpass";
  filter.frequency.setValueAtTime(180, context.currentTime);
  filter.gain.setValueAtTime(0, context.currentTime);

  // gainNode.gain.setValueAtTime(0.5,context.currentTime); 
  // analyser.smoothingTimeConstant = 0.8;
  // analyser.minDecibels = -90;
  // analyser.maxDecibels = -10;

  /*************************
  LOADING THE TUNES
  *************************/

  // change the asset's source: 
  await audioLoader.load( '../static_assets/audio/boogieOn.mp3', function( buffer ) {
    // Using the native WEB AUDIO API. (why use the watered down version?)
      channel0 = buffer.getChannelData(0);
      channel1 = buffer.getChannelData(1);
      source = context.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      source.start()
      source.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(analyser); 
      // filter.connect(analyser)
      // source.disconnect(context.destination);
      analyser.connect(context.destination);
      analyser.fftSize = fftSize; 
      analyser.smoothingTimeConstant = 0.95;
      fftArray = new Uint8Array(analyser.frequencyBinCount);
      fftFloats = new Float32Array(analyser.frequencyBinCount);  
      timeFloats = new Float32Array(analyser.frequencyBinCount);   
      fftCount = analyser.frequencyBinCount; 

      // Finding pitches: 
      // var slicedBuff = channel1.slice(0,17000);
      // var freqss = getFreqs(slicedBuff); 
      // console.log(freqss); 
      // const frequencies = Pitchfinder.frequencies(detectPitch, slicedBuff); 
      // console.log(source.buffer); 
  });

  // if(source){ console.log(source)}

  // // And the mic-stream: 

   // var constraints = {audio: true}
   // navigator.mediaDevices.getUserMedia (constraints)
   //    .then(
   //      function(stream) {
   //        source = context.createMediaStreamSource(stream);
   //        // source.disconnect(context.destination);
   //        source.connect(filter);
   //        filter.connect(gainNode);
   //        gainNode.connect(analyser); 
   //        // filter.connect(analyser)
   //        // source.disconnect(context.destination);
   //        analyser.connect(context.destination);
   //        analyser.disconnect(context.destination);
   //        analyser.fftSize = fftSize; 
   //        fftArray = new Uint8Array(analyser.frequencyBinCount);
   //        fftFloats = new Float32Array(analyser.frequencyBinCount);  
   //        timeFloats = new Float32Array(analyser.frequencyBinCount);  
   //      }
   //    ).catch( function(err) { console.log('The following gUM error occured: ' + err);})

  // What about a tone generator: 

  // var source = context.createOscillator();
  // var numComponents = 64; 
  // var real = new Float32Array(numComponents);
  // var imag = new Float32Array(numComponents);
  // for(let j = 0; j < numComponents; j++){
  //   real[j] = 1//Math.random(); 
  //   imag[j] = 0 //2 * Math.random() - 1; 
  // }

  // real[0] = 0;
  // imag[0] = 0;
  // real[1] = 0;
  // imag[1] = 0;
  // real[2] = 0;
  // imag[2] = 0;
  // real[3] = 1;
  // imag[4] = 0;
  // var wave = context.createPeriodicWave(real, imag);
// 
  // source.setPeriodicWave(wave);
  // source.frequency.value = 220;
  // // or
  // source.type = 'sine';
  // source.frequency.setValueAtTime(392, context.currentTime); // value in hertz
  
  // source.start();
  // source.connect(analyser);
  // analyser.connect(context.destination);
  // analyser.fftSize = fftSize; 
  // fftArray = new Uint8Array(analyser.frequencyBinCount);
  // fftFloats = new Float32Array(analyser.frequencyBinCount);


  /**************************************************
  SOME AUDIO STUFF TO MAKE OUR NOTES 'COME ALIVE': WE ARE CONTROLLING VIBRATING STRINGS HERE. 
  **************************************************/

  // Arrays of audio nodes:
  var noteAudio = []; 

  // sources --> firstGains --> analysers --> secondGains(to mute!)

  // Populating our arrays: 
  for(let i = 0; i <= 11; i++){

    // Making an object for every note: 
    var audioObject = {}; 

    // Taking care of the waveform: 
    var rr = [], im = []; 
    for(let j = 0; j < freqObj.octaveStarts.length; j++){
      rr.push(0); 
      im.push(0); 
    }
    audioObject.waveCoeffs = {real:rr,imag:im}; 
    // Instantiate the nodes: 
    audioObject.source     = context.createOscillator(); 
    audioObject.firstGain  = context.createGain(); 
    audioObject.analyser   = context.createAnalyser(); 
    audioObject.secondGain = context.createGain(); 
    audioObject.wave       = context.createPeriodicWave(rr,im); 

    // Specify some props: 
    audioObject.source.frequency.value = freqObj.pureToneArray[i]; 
    audioObject.source.setPeriodicWave(audioObject.wave); 
    audioObject.analyser.fftSize = noteFFTSize;
    audioObject.secondGain.gain.setValueAtTime(0,context.currentTime);

    // Wire 'em up: 
    audioObject.source.connect(audioObject.firstGain); 
    audioObject.firstGain.connect(audioObject.analyser);
    audioObject.analyser.connect(audioObject.secondGain); 
    audioObject.secondGain.connect(context.destination); 

    // Fire 'em up: 
    audioObject.source.start(); 

    // A wave-form array: 
    audioObject.waveformArray = new Uint8Array(audioObject.analyser.frequencyBinCount); 

    // Add the object to the array: 
    noteAudio.push(audioObject); 

  }


  /**************************************************
  A COLOR TO TONE WHEEL TO DO COOL STUFF WITH
  **************************************************/

  // Groups to house the circle, text, etc.  
  var circText    = new THREE.Group(); 
  var textGroup   = new THREE.Group(); 
  var stringGroup = new THREE.Group(); 
  var circGroup   = new THREE.Group(); 

  // A font loader to put some text into 3D. 
  var loader = new THREE.FontLoader();

  // Some circle building parameters. 
  var wideRadius       = 12.5; 
  var narrowRadius     = 10; 
  var circBack         = -40; 
  var circUp           = 0.25; 
  var coneFocus        = 20; 
  var thetaLength      = Math.PI * 2 / 12; 
  var noteLineLength   = Math.sqrt(Math.pow(30,2) + Math.pow(narrowRadius,2));

  // A circleGeometry: 
  var circ12 = new THREE.CircleGeometry(wideRadius,12)

  // toneInfo provides the colors and strings needed. 
  var toneInfo = toneStuff(circ12.vertices)

 
  // Load the text and make text geometries with it.  (DIFFERENT IN AFRAME)
  loader.load('../static_assets/fonts/helvetiker_bold.typeface.json', function(font){
    fontParams.font = font; 
    for(let j = 0; j < 12; j++){
      var textGeo = new THREE.TextGeometry( toneInfo[j].text, fontParams);
      var textMaterial = new THREE.MeshBasicMaterial({color:toneInfo[j].color,transparent:true})
      var textMesh = new THREE.Mesh(textGeo,textMaterial)
      textGeo.computeBoundingBox();
      var xShift = -0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
      var yShift = -0.5 * ( textGeo.boundingBox.max.y - textGeo.boundingBox.min.y );
      textMesh.position.x = toneInfo[j].vert.x + xShift;
      textMesh.position.y = toneInfo[j].vert.y + yShift;
      textGroup.add(textMesh)
      if(j==11){
        circText.add(textGroup)
      }
    }
  })

  /*
  Some vertices for our note lines: 
  */

  // Variables....
  var segmentLength = noteLineLength/(noteFFTLength + 1), lineVerts = [], z_position = 0;    

  // 'connecting' the dots... 
  for(let i = 0; i < noteFFTLength + 2; i++){
    var currentVert = new THREE.Vector3();
    currentVert.setComponent(2,z_position); 
    lineVerts.push(currentVert); 
    z_position += segmentLength; 
  }


  var fromVert = new THREE.Vector3(0,0,1); 
  fromVert.normalize(); 

  // var flatStrings = new THREE.Group(); 

  for(let i = 0; i < 12; i++){
    // Defining an angle: 
    var thetaStart = i * ( 2*Math.PI / 12); 

    // Hashing out a color: 
    var sectColor = new THREE.Color(); 
    sectColor.setHSL((12-i)/(12),0.83,0.4); 

    // The color sectors: 
    var sectGeo = new THREE.CircleGeometry(narrowRadius,4,thetaStart,thetaLength); 
    var circMat = new THREE.MeshBasicMaterial( { color: sectColor,transparent:true} );
    var circObj = new THREE.Mesh( sectGeo, circMat); 

    
    // A 'cone-of-lines'. One line per sector: 
    // Hashing out a color: 
    var lineColor = new THREE.Color(); 
    lineColor.setHSL((12-i)/(12),0.99,0.5); 
    // Where is this line pointing?
    var toVert = new THREE.Vector3(-sectGeo.vertices[1].x,-sectGeo.vertices[1].y,30); 
    toVert.normalize();

    // How to we need rotate our line to align it with toVert?  
    var qq     = new THREE.Quaternion(); 
    qq.setFromUnitVectors(fromVert,toVert); 



    // Now the lines: 
    var noteLineGeo           = new THREE.Geometry(); 
    noteLineGeo.vertices      = lineVerts;
    var noteLineMaterial      = new THREE.LineBasicMaterial({color:lineColor,linewidth:3,transparent:true}); 
    var noteLineObject        = new THREE.Line(noteLineGeo,noteLineMaterial); 
    noteLineObject.rotation.z = thetaStart; 
    noteLineObject.applyQuaternion(qq); 
    noteLineObject.needsUpdate = true; 
    stringGroup.add(noteLineObject);  

    // Toss it all in a pot and stir (vigorously). 
    circGroup.add(circObj); 

  }

  // Rotating a smidge for better aesthetics. 
  circGroup.rotation.z   =  - Math.PI/12;
  circText.add(circGroup)
  // Position it!
  circText.position.z = circBack; 
  circText.position.y = circUp;  
  circText.visible = true; 
  // Add it!
  scene.add(circText); 

  // Now for the string groupz; 
  stringGroup.rotation.z = Math.PI;
  stringGroup.position.z = -40; 
  stringGroup.position.y = circUp; 


  // flatStrings.rotation.z = Math.PI;
  // flatStrings.position.z = -25; 
  // flatStrings.position.y = circUp; 
  // for(let j = 0; j < flatStrings.children.length; j++){
  //   flatStrings.children[j].visible = false; 
  // }
  stringGroup.needsUpdate = true; 
  scene.add(stringGroup); 
  // scene.add(flatStrings); 
  // scene.add(noteLineObject);

  // HOUSEKEEPING; 

  /* 

  toneArray: an arry that contains the approx frequency correspond to each note (and subsequent harmonics)

  freqObj: 
    .freqs: an array of frequencies that correspond to each bar of our FFT. 
    .tones: an array that matches paticular frequencies to notes. 
    .hues: an array that contains information needed to convert frequency to color. 

  */



  /*************************
  RENDER TIME
  *************************/


  var check = false; 
  var counts = 0; 
  const quantInterval = {tempo:300,quantization:4}; 

  var noteVisibilities = []; 
  for(let i = 0; i <= 11; i++){
    noteVisibilities.push(true); 
  }; 

  // Onto render: 
  vr.render = async function() {

    // Some serious computations happening here. Taking every i-th iteration to keep things cool. 
    if((counts % 16) == 0 && analyser && fftArray){

      // Get the fft data: 
      analyser.getByteFrequencyData(fftArray); 
      analyser.getFloatTimeDomainData(timeFloats); 

      // Smooth the fft data:      
      // fftArray = lpf.smoothArray(fftArray);
      // var pitchArray = [];       // for(let i = 0; i < detectorArray.length; i++){
      //   var pitchOut = await detectorArray[i](timeFloats); 
      //   console.log(pitchOut)
      // }
 
      if(counts % 16 == 0 ){
        // Getting pitches from the timeFloat data: 
        var pitches = await Pitchfinder.frequencies( detectPitch, timeFloats, quantInterval);
        // console.log(pitches);
        var convertedPitches = convertPitches(pitches,freqObj.pureToneArray,maxFrequency,25)

        // Update our note visiblities: 
        if(convertedPitches.length > 0){
          noteVisibilities = await noteVisibilities.map( (x,index) => {return convertedPitches.includes(index)})
        }
      }

      // if(convertedPitches.length > 0){
      //   for(let i = 0; i <= 11; i ++){
      //     noteVisibilities[i] = convertedPitches.includes(i); 
      //   }
      // }

      // Work with the fft data: 
      var pMin      = Math.min(...fftArray);
      var pMax      = Math.max(...fftArray);
      var pRange    = pMax - pMin; 
      var promArray = getNotePowers(fftArray,freqObj,freqObj.minFftIndex)

      // Making sure we don't have a range of 0; that would cause / 0 errors. 
      if(pRange == 0){
        pRange = 1
      }

      // If we have a frequency bar, we can do cool stuff, like display a spectrograph. 
      if(barGroup && barGroup.children.length > 10){
        // We set the height of the bars according to the FFT output, ot
        var barIndex = 0; 
        for(let i = freqObj.maxFftIndex; i >= freqObj.minFftIndex; i--){
          if(freqObj.tones[i-freqObj.minFftIndex] > 0){
            var barHeight =  powerScaler(((fftArray[i] - pMin) / pRange),freqObj.freqs[i])
          } 
          else{
           var barHeight = powerScaler(((fftArray[i] - pMin) / pRange),freqObj.freqs[i]);
          } 
          barGroup.children[barIndex].geometry.vertices[0].y = Math.abs(barHeight);
          barGroup.children[barIndex].geometry.vertices[2].y = Math.abs(barHeight);
          barGroup.children[barIndex].geometry.vertices[1].y = 0 - Math.abs(barHeight); 
          barGroup.children[barIndex].geometry.vertices[3].y = 0 - Math.abs(barHeight);
          barGroup.children[barIndex].geometry.verticesNeedUpdate = true;
          barIndex += 1; 
        }
      }

      // Now we do our stuff with the EQ bar: 

      if(eqGroup && circText.children.length > 1){

        // A variable for later. 
        var noteProm; 

        // Loop through the octaves: 
        for(let i = 0; i<promArray.length; i++){
          if(i == 0){
            // If i == 0, we don't have to loop through the individual notes: 
            noteProm = promArray[i].tones; 
          }
          else{
            // We gotta loop it and compute running averages,. 
            for(let j = 0; j < promArray[i].tones.length; j++){
              noteProm[j].prominence = (noteProm[j].prominence + promArray[i].tones[j].prominence) / 2; 
              noteProm[j].power = (noteProm[j].power + promArray[i].tones[j].power) / 2; 
              noteProm[j].powProm = (noteProm[j].powProm + promArray[i].tones[j].powProm) / 2;
            }
          }
        }


        // noteProm is an array, 12 objects long, that has average power, prominence, and powProm vallues for each note. 

        // Value-specific, accumulated arrays: 
        var proms    = noteProm.map( x => x.prominence); 
        var pows     = noteProm.map(x => x.power); 
        var powProms = noteProm.map(x => x.powProm);

        // Normalized value-specific arrays: 
        var normedProms    = normalizeArray(proms); 
        var normedPows     = normalizeArray(pows); 
        var normedPowProms = normalizeArray(powProms);       
       
        // Rescaling the proms...something to consider. 
        // noteProm[i].prominence = Math.exp(((noteProm[i].prominence - minProm)  / promRange) * notePows[i].power) / Math.E;

        // Suing some stuff to make it happen
        for(let k = 0; k < circText.children[1].children.length; k++){
          // The text: 
          if(k == 0){
            var childNumber =  k; 
          }
          else{
            var childNumber =  12-k; 
          }
          console.log(noteVisibilities)
          console.log(stringGroup)
          if( noteVisibilities[k] == true){
            var promski =  1; 
            var visBool = true; 
            var matOpac = 1; 
            var lineOpac = 1; 

            // flatStrings.children[childNumber].material.opacity = 0;  
           
            // stringGroup.children[childNumber].material.opacity = promski; 
            // stringGroup.children[childNumber].material.needsUpdate = true; 
          }
          else{
            var promski = 1.8;
            var visBool = false; 
            var matOpac = 0.3; 
            var lineOpac = 0; 

            // flatStrings.children[childNumber].geometry.vertices = flatVerts; 
            // flatStrings.children[childNumber].geometry.vertices.NeedUpdate = true;
            // flatStrings.children[childNumber].material.opacity = 0;
            
            // stringGroup.children[childNumber].children[0].geometry.verticesNeedUpdate = true;
            // stringGroup.children[childNumber].children[0].material.opacity = promski; 
            // stringGroup.children[childNumber].children[0].material.needsUpdate = true; 
          }
          for(let ii = 0; ii < timeFloats.length; ii++){
            var theta = k * Math.PI/12; 
            stringGroup.children[childNumber].geometry.vertices[ii+1].y = timeFloats[ii] * promski; // * Math.sin(theta); // * Math.sin(theta);  
            stringGroup.children[childNumber].geometry.vertices[ii+1].x = timeFloats[ii] * promski * Math.sin(theta);
            stringGroup.children[childNumber].geometry.verticesNeedUpdate = true;
          }

          stringGroup.children[childNumber].material.opacity = lineOpac;
          
          // stringGroup.children[childNumber].needsUpdate = true; 
          // stringGroup.needsUpdate = true; 
          // flatStrings.needsUpdate = true; 
         
          // stringGroup.children[childNumber].geometry.verticesNeedUpdate = true;

          // Updating the circle of text (e.g. Bb). 
          circText.children[1].children[childNumber].material.opacity = matOpac//1.4; 
          circText.children[1].children[childNumber].material.needsUpdate = true; 
          circText.children[1].children[childNumber].needsUpdate = true; 



          // The circle sectors (e.g. the pie slices). 
          circText.children[0].children[childNumber].material.opacity = promski//1.4; 
          circText.children[0].children[childNumber].material.needsUpdate = true; 
          circText.children[0].children[childNumber].visible = false; 
          circText.children[0].children[childNumber].needsUpdate = true;  
        }
      }
    }
    counts += 1; 
  };



/*************************
EXTRA FUNCTIONS
*************************/

// For rendering our 'tone circle'
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
    'C',
    'C#/Db', 
    'D', 
    'D#/Eb',
    'E/Fb', 
    'F/E#', 
    'F#/Gb', 
    'G', 
    'G#/Ab',
    'A', 
    'Bb/A#', 
    'B/Cb', 
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
    toneInfo.push(toneObj)
  }

  // Rearranging the tone-info Object. ( we reverse twice... can we get away with not reversing at all?)

  // Removing the first tone: 

  var firstTone = toneInfo.slice(0,1); 

  // Reversing the order of elements [1]-[11]:
  toneInfo = toneInfo.slice(1).reverse(); 

  // Tacking elements [11]-[1] back onto element [0]
  toneInfo = firstTone.concat(toneInfo); 

  return toneInfo
}


// A frequency axis for our FFTs. 
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

  // centralFreq; The central frequency. Aka A0. The frequncy about which our musical  alphabet is constructed. 

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

      In non-math terms, each octave is a 2 ** x  Hz wide, consisting of 12 'bins' of increasing width width.


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
  var freqData = await freqInner(channelData); 
  // console.log(freqData);
  return freqData
}

async function freqInner(d){
  var freqData = await Pitchfinder.frequencies(detectPitch, d); 
  return freqData; 
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

// Some real general stuff here: 
function typedConcat(arr1,arr2){
  var c = new Uint8Array(arr1.length + arr2.length);
  c.set(arr1);
  c.set(arr2, arr1.length);
  return c
}



  /*************************
  A NOTE-CENTRIC EQUALIZER
  *************************/

  // Making the 'Equilizer bar', if for nothing else, other than to check and see
  // how well  my 'note discriminator' is doing. 


  // WE CAN SKIP THIS TOO... 
  
  // // Construct an eq group: 
  // var eqGroup = new THREE.Group(); 

  // // Preliminaries: 
  // var barPosition = 0; 
  // var barWidth = 0.5; 
  // var barGap = 0.2;

  // Instantiate the eq objects: 
  // for(let i = 0; i < freqObj.octaveStarts.length-1; i++){
  //   var noteGroup = new THREE.Group(); 
  //   for(let j = 0; j <12; j++){
  //     var noteBoxGeo = new THREE.BoxGeometry(barWidth,0.1); 
  //     var noteColor = new THREE.Color(); 
  //     noteColor.setHSL(j/12,0.6,0.6);
  //     var noteBoxMaterial = new THREE.MeshBasicMaterial({color:noteColor}); 
  //     var noteBoxObj = new THREE.Mesh(noteBoxGeo,noteBoxMaterial); 
  //     noteBoxObj.position.y = j*0.1;
  //     noteGroup.add(noteBoxObj); 
  //   }
  //   noteGroup.position.x = barPosition; 
  //   barPosition = i*barWidth + i*barGap; 
  //   eqGroup.add(noteGroup); 
  // }

  // // Position the Group: 
  // eqGroup.position.x = 0;
  // eqGroup.position.y = 3; 
  // eqGroup.position.z = -10;

  // // Finally, add the eqGroup to the scene (third child)
  // scene.add(eqGroup); 


  /*************************
  NOTE GRAPH TIME. 
  *************************/

  // MAKE A GRID THEN FILL IT WITH LINES: 

  // var lineHeight = 0.75; 
  // var lineLength = 9; 

  // // Make the L/R bound: 
  // var greyLineMat    = new THREE.LineBasicMaterial({color: 0xffffff});
  // var noteGraphGroup = new THREE.Group();
  // var noteLineGroup = new THREE.Group(); 
  // noteGraphGroup.add(noteLineGroup); 
  // var origin         = new THREE.Vector3(0,0,0); 
  // var leftTop  = new THREE.Vector3(0,lineHeight*12,0); 
  // var rightBottom = new THREE.Vector3(lineLength,0,0); 
  // var rightTop = new THREE.Vector3(lineLength,lineHeight*12,0); 

  // // Make these lines: 
  // var lBoundGeo = new THREE.Geometry(); 
  // lBoundGeo.vertices.push(origin,leftTop); 
  // var lBoundLine = new THREE.Line(lBoundGeo,greyLineMat);
  // noteGraphGroup.add(lBoundLine); 
  // var rBoundGeo = new THREE.Geometry(); 
  // rBoundGeo.vertices.push(rightBottom,rightTop); 
  // var rBoundLine = new THREE.Line(rBoundGeo,greyLineMat); 
  // noteGraphGroup.add(rBoundLine); 

  // var bottomLineGeo = new THREE.Geometry(); 
  // bottomLineGeo.vertices.push(origin,rightBottom); 
  // var bottomLine = new THREE.Line(bottomLineGeo,greyLineMat); 
  // noteGraphGroup.add(bottomLine); 

  // for( let i = 0; i < 12; i++){
  //   // baseLine
  //   var lineY = (i+1) * lineHeight; 
  //   var lineLeft = origin.clone(); 
  //   lineLeft.y = lineY; 
  //   var lineRight = rightBottom.clone(); 
  //   lineRight.y = lineY; 
  //   var bLineGeo = new THREE.Geometry(); 
  //   bLineGeo.vertices.push(lineLeft,lineRight); 
  //   var bLine = new THREE.Line(bLineGeo,greyLineMat); 
  //   noteGraphGroup.add(bLine); 
  // }

  // noteGraphGroup.position.z = -8;
  // scene.add(noteGraphGroup); 



    /*************************
  AN FFT HISTOGRAM OF SORTS: 
  *************************/

  /*
  two ways to scale these. Linear or log. The linear is easier to display, tonally, 
  the log shows the 'lug' that the bass sounds really are. They are supporting beams. 
  */

  // A histogram bar group: 
  // var barGroup = new THREE.Group();  

  // // Some preliminaries: 
  // var leftEdge = 0; 
  // var totalBarLength = 30; 
  // var baseBarWidth = freqObj.hues[freqObj.hues.length-1] - freqObj.hues[freqObj.hues.length-2]; 

  // // Instantiating the bar plot: 
  // for(let i=freqObj.hues.length-1; i>=0; i--){
  //   var barWidth; 
  //   if(i > 0){
  //     barWidth = (freqObj.hues[i] - freqObj.hues[i-1]) * 0.15; 
  //   }
  //   else{
  //     barWidth = (freqObj.hues[i+1] - freqObj.hues[i]) * 0.15;
  //   }
  //   var barGeo     = new THREE.BoxGeometry(barWidth,0.1)
  //   var barColor   = new THREE.Color()
  //   var hue        = (freqObj.hues[i] % 12) / 12;
  //   barGeo.dynamic = true; 
  //   barColor.setHSL(hue,0.6,0.6)
  //   var barMaterial = new THREE.MeshBasicMaterial({color:barColor})
  //   var barObj = new THREE.Mesh(barGeo,barMaterial)
  //   barObj.position.x = -leftEdge; 
  //   barGroup.add(barObj)
  //   leftEdge += barWidth; 
  // }

  // // Position the bar plot: 
  // barGroup.position.z = -10; 
  // barGroup.position.x = leftEdge/2;
  // barGroup.position.y = -2.2;
  // barGroup.needsUpdate = true; 

  // // Hmm. this is invisble...don't worry about it for now. 
  // barGroup.visible = false;  

  // // Add to scene: 
  // scene.add(barGroup) // scene's second child. 

