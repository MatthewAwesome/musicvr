
// These are things we want bundled via browserify: 

const d3_peaks        = require('d3-peaks'); 
const lpf             = require('lpf');
const autoCorrelation = require('autocorrelation').autocorrelation;
const Pitchfinder     = require("pitchfinder");
const BeatDetector = require('web-audio-beat-detector'); 


// We export the modules to a global variable, so that we can call them in our aframe components: 
module.exports = {d3_peaks,lpf,autoCorrelation,Pitchfinder,BeatDetector}; 

// The bundled modules are in window object defined as: audioz

// // checking that audioz is indeed accessible, we print it in console: 
// console.log(audioz)

// Okay. Cool. I think we can do some aframe stuff now..tomorrow!! 
