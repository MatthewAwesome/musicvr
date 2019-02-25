(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.audioz = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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

},{"autocorrelation":21,"d3-peaks":24,"lpf":33,"pitchfinder":34,"web-audio-beat-detector":46}],2:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],3:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],4:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],5:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],6:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],7:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],8:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],9:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],10:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":16}],11:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],12:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],13:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;
},{}],14:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],15:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":19,"./assertThisInitialized":4}],16:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],17:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":2,"./iterableToArrayLimit":12,"./nonIterableRest":13}],18:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":3,"./iterableToArray":11,"./nonIterableSpread":14}],19:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],20:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":41}],21:[function(require,module,exports){
/*===========================================================================*\
 *
 * Autocorrelation based on FFT
 *
 * (c) 2016 Maximilian Bügler
 *
\*===========================================================================*/
module.exports = {
    autocorrelation: require('./src/autocorrelation').autocorrelation
};

},{"./src/autocorrelation":22}],22:[function(require,module,exports){
/*===========================================================================*\
 * Autocorrelation algorithm based on description by Thibauld Nion
 * http://www.tibonihoo.net/literate_musing/autocorrelations.html
 *
 * (c) 2016 Maximilian Bügler
 *
 *===========================================================================*/

var fft = require('fft-js').fft;
var ifft = require('fft-js').ifft;
var nextpow2 = require('bit-twiddle').nextPow2;


module.exports = {
    
    /**
     * Calculates the autocorrelation of the provided signal
     *
     * @param {1D array} signal 1D time series of values (for instance acceleration)
     * @returns {1D array} an array of autocorrelation values for each time lag
     *
     **/
    autocorrelation: function autocorrelation(signal) {
        
        var n=signal.length;
        
        var i;
        
        var n2=nextpow2(n);

	if (n===0){
	    n2=0;
	}
        
        var paddedSignal=[];
        
        if (n==n2){
            paddedSignal=signal;
        }
        else{
            for (i=0;i<n2;i++){
                if (i<n){
                    paddedSignal[i]=signal[i];
                }
                else{
                    paddedSignal[i]=0;
                }
            }
        }

        var acv=autocovariance(paddedSignal);
        
        var variance=acv[0];
        
        var acf=[];
        
        var i;
        
        if (variance>0){
            for (i=0; i<n; i++){
                acf[i]=acv[i]/variance;    
            }
        }
        else{
            for (i=0; i<n; i++){
                acf[i]=0;    
            }            
        }
        return acf;
    
        function autocovariance(signal) {
            
            var n=signal.length;
            
            if (n===0)
                return [];
            
            var mean=0;
            var i;
            for (i=0; i<n; i++){
                mean+=signal[i];
            }
            mean/=n;
                      
            var padded_signal=[];
            
            for (i=0; i<n; i++){
                padded_signal[i]=signal[i]-mean;
                padded_signal[n+i]=0;
            }
                        
            var ft_signal = fft(padded_signal);
                       
            var pseudo_powerSpectralDensity=[];
            
            for (i=0; i<ft_signal.length; i++){
                pseudo_powerSpectralDensity[i]=complexMultiply(ft_signal[i], complexConjugate(ft_signal[i]));
            }
           
            var pseudo_autocovariance = ifft(pseudo_powerSpectralDensity);
    
            var mask=[];
            
            for (i=0; i<n; i++){
                mask[i]=1;
                mask[i+n]=0;
            }
            
            var ft_mask = fft(mask);
    
            var mask_powerSpectralDensity=[];
            
            for (i=0; i<ft_mask.length; i++){
                mask_powerSpectralDensity[i]=complexMultiply(ft_mask[i], complexConjugate(ft_mask[i]));
            }
            
            var mask_correction_factors = ifft(mask_powerSpectralDensity);
    
            var acv=[];
            
            for (i=0; i<n; i++){
                acv[i]=complexDivideRealPart(pseudo_autocovariance[i],mask_correction_factors[i]);
            }    
            
            return acv;
            /*
             * ComplexMultiply
             * 
             * From complex.js in fft-js in https://github.com/vail-systems/node-fft
             *
             * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
             */
            function complexMultiply(a, b){
                return [(a[0] * b[0] - a[1] * b[1]), 
                        (a[0] * b[1] + a[1] * b[0])];
            }
            
            function complexConjugate(a){
                return [a[0], -a[1]];
            }
            /*function complexDivide(a,b){
                return [ (a[0]*b[0]+a[1]*b[1])/(b[0]*b[0]+b[1]*b[1]),
                         (a[1]*b[0]-a[0]*b[1])/(b[0]*b[0]+b[1]*b[1])];
            }*/
            //We only need the real part here
            function complexDivideRealPart(a,b){
                return (a[0]*b[0]+a[1]*b[1])/(b[0]*b[0]+b[1]*b[1]);
            }           
            
        }
    }
    
};

},{"bit-twiddle":23,"fft-js":26}],23:[function(require,module,exports){
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

"use strict"; "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}


},{}],24:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.d3_peaks = global.d3_peaks || {})));
}(this, function (exports) { 'use strict';

  /**
   * See https://en.wikipedia.org/wiki/Mexican_hat_wavelet
   */
  function ricker() {
    var σ = 1;
    
    var ricker = function(t) {
      var t2 = t*t,
          variance = σ*σ;
      
      var C = 2.0 / ( Math.sqrt(3 * σ) * (Math.pow(Math.PI, 0.25)) );
      var norm = (1.0 - (t2)/(variance));
      var gauss = Math.exp( -(t2) / (2*variance) );
      
      return C*norm*gauss;
    }
    
    ricker.std = function(_) {
      return arguments.length ? (σ = _, ricker) : σ;
    }
    
    /**
     * Range of points to sample from the wavelet. [-reach, reach]
     */
    ricker.reach = function() {
      return 5 * σ;
    }
    
    return ricker;
  };

  function convolve() {
    var kernel = ricker();
    
    /**
     * y[n] = Sum_k{x[k] * h[n-k]}
     * y: output
     * x: input
     * h: smoother
     */
    var convolve = function(signal) {
      var size = signal.length,
          n = -1,
          convolution = new Array(size);
          
      while (++n < size) {
        var y = 0;
        
        var box = boundingBox(n, kernel.reach(), 0, size - 1);
        box.forEach(function(δ) {
          var k = n + δ;
          y += signal[k] * kernel(δ);
        });
        convolution[n] = y;
      }
      
      return convolution;
    };
    
    convolve.kernel = function(_) {
      return arguments.length ? (kernel = _, convolve) : kernel;
    }
    
    function range(reach) {
      reach = +reach;
      var i = -1,
          n = 2*reach + 1,
          range = new Array(n);
      while(++i < n) {
        range[i] = (-reach) + i;
      }
      return range;
    }
    
    function boundingBox(n, reach, lo, hi) {
      for (var i = 1; i <= reach; i++) {
        var left  = n - i,
            right = n + i;
        if (left >= lo && right <= hi) continue;
        return range(i - 1);
      }
      return range(reach);
    }
    
    return convolve;
  };

  function isLocalMaxima(arr, index) {
    var current = arr[index],
        left = arr[index - 1],
        right = arr[index + 1];
        
    if (left !== undefined && right !== undefined) {
      if (current > left && current > right) { return true; }
      else if (current >= left && current > right) { return true; }
      else if (current > left && current >= right) { return true; }
    }
    else if (left !== undefined && current > left) { return true; }
    else if (right !== undefined && current > right) { return true; }
    
    return false;
  }

  /**
   * @param {arr} row in the CWT matrix.
   * @return Array of indices with relative maximas.
   */
  function maximas(arr) {
    var maximas = [];
    arr.forEach(function(value, index) {
      if (isLocalMaxima(arr, index)) maximas.push({x: index, y: value});
    });
    return maximas;
  };

  function nearestNeighbor(line, maximas, window) {
    var cache = {};
    maximas.forEach(function(d) {
      cache[d.x] = d.y;
    });
    
    var point = line.top();
    for (var i = 0; i <= window; i++) {
      var left = point.x + i;
      var right = point.x - i;
      
      if ( (left in cache) && (right in cache) ) {
        if (cache[left] > cache[right]) {
          return left;
        }
        return right;
      }
      else if (left in cache) {
        return left;
      }
      else if (right in cache) {
        return right;
      }
    }
    return null;
  }

  function percentile(arr, perc) {
    var length = arr.length;
    var index = Math.min(length - 1, Math.ceil(perc * length));
    
    arr.sort(function(a, b) { return a - b; });
    return arr[index];
  }

  function Point(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.snr = undefined;
  }

  Point.prototype.SNR = function(conv) {
    var smoothingFactor = 0.00001;
    var signal = this.y;
    
    var lowerBound = Math.max(0, this.x - this.width);
    var upperBound = Math.min(conv.length, this.x + this.width + 1);
    var neighbors = conv.slice(lowerBound, upperBound);
    var noise = percentile(neighbors, 0.95);
    
    signal += smoothingFactor;
    noise += smoothingFactor;
    this.snr = signal/noise;
    return this.snr;
  }

  Point.prototype.serialize = function() {
    return {index: this.x, width: this.width, snr: this.snr};
  }

  function RidgeLine() {
    this.points = [];
    this.gap = 0;
  }

  /**
   * If the point is valid append it to the ridgeline, and reset the gap.
   * Otherwise, increment the gap and do nothing.
   * 
   * @param {point} Point object.
   */
  RidgeLine.prototype.add = function(point) {
    if (point === null || point === undefined) {
      this.gap += 1;
      return;
    } else {
      this.points.push(point);
      this.gap = 0;
    }
  }

  /**
   * @return {Point} Last point added into the ridgeline.
   */
  RidgeLine.prototype.top = function() {
    return this.points[this.points.length - 1];
  }

  /**
   * @return {number} Length of points on the ridgeline.
   */
  RidgeLine.prototype.length = function() {
    return this.points.length;
  }

  /**
   * @return {boolean} True if the gap in the line is above a threshold. False otherwise.
   */
  RidgeLine.prototype.isDisconnected = function (threshold) {
    return this.gap > threshold;
  }

  /**
   * @param {Array} Smallest scale in the convolution matrix
   */
  RidgeLine.prototype.SNR = function(conv) {
    var maxSnr = Number.NEGATIVE_INFINITY;
    this.points.forEach(function(point) {
      var snr = point.SNR(conv);
      if (snr > maxSnr) maxSnr = snr;
    });
    return maxSnr;
  }

  function findPeaks() {
    var kernel = ricker,
        gapThreshold = 1,
        minLineLength = 1,
        minSNR = 1.0,
        widths = [1];
    
    var findPeaks = function(signal) {
      var M = CWT(signal);
      
      var ridgeLines = initializeRidgeLines(M);
      ridgeLines = connectRidgeLines(M, ridgeLines);
      ridgeLines = filterRidgeLines(signal, ridgeLines);
      
      return peaks(signal, ridgeLines);
    };
    
    /**
     * Smoothing function.
     */
    findPeaks.kernel = function(_) {
      return arguments.length ? (kernel = _, findPeaks) : kernel;
    }
    
    /**
     * Expected widths of the peaks.
     */
    findPeaks.widths = function(_) {
      _.sort(function(a, b) { return a - b; });
      return arguments.length ? (widths = _, findPeaks) : widths;
    }
    
    /**
     * Number of gaps that we allow in the ridge lines.
     */
    findPeaks.gapThreshold = function(_) {
      return arguments.length ? (gapThreshold = _, findPeaks) : gapThreshold;
    }
    
    /**
     * Minimum ridge line length.
     */
    findPeaks.minLineLength = function(_) {
      return arguments.length ? (minLineLength = _, findPeaks) : minLineLength;
    }
    
    /**
     * Minimum signal to noise ratio for the peaks.
     */
    findPeaks.minSNR = function(_) {
      return arguments.length ? (minSNR = _, findPeaks) : minSNR;
    }
    
    var CWT = function(signal) {
      var M = new Array(widths.length);
      widths.forEach(function(width, i) {
        var smoother = kernel()
          .std(width);
        var transform = convolve()
          .kernel(smoother);
        
        var convolution = transform(signal);
        M[i] = convolution;
      });
      return M;
    }
    
    
    var initializeRidgeLines = function(M) {
      var n = widths.length;
      var locals = maximas(M[n - 1], widths[n - 1]);
      var ridgeLines = [];
      locals.forEach(function(d) {
        var point = new Point(d.x, d.y, widths[n - 1]);
        var line = new RidgeLine();
        line.add(point);
        ridgeLines.push(line);
      });
      return ridgeLines;
    }
    
    var connectRidgeLines = function(M, ridgeLines) {
      var n = widths.length;
      for (var row = n - 2; row >= 0; row--) {
        var locals = maximas(M[row], widths[row]);
        var addedLocals = [];
        
        // Find nearest neighbor at next scale and add to the line
        ridgeLines.forEach(function(line, i) {
          var x = nearestNeighbor(line, locals, widths[row]);
          line.add(x === null ? null : new Point(x, M[row][x], widths[row]));
          
          if (x !== null) {
            addedLocals.push(x);
          }
        });
        
        // Remove lines that has exceeded the gap threshold
        ridgeLines = ridgeLines.filter(function(line) {
          return !line.isDisconnected(gapThreshold);
        });
        
        // Add all the unitialized ridge lines
        locals.forEach(function(d) {
          if (addedLocals.indexOf(d.x) !== -1) return;
          
          var point = new Point(d.x, d.y, widths[row]);
          var ridgeLine = new RidgeLine();
          ridgeLine.add(point);
          ridgeLines.push(ridgeLine);
        });
      }
      return ridgeLines;
    }
    
    var filterRidgeLines = function(signal, ridgeLines) {
      var smoother = kernel()
          .std(1.0);
      var transform = convolve()
        .kernel(smoother);
      var convolution = transform(signal);
        
      ridgeLines = ridgeLines.filter(function(line) {
        var snr = line.SNR(convolution);
        return (snr >= minSNR) && (line.length() >= minLineLength);
      });
      return ridgeLines
    }
    
    /**
     * Pick the point with the highest y value within that range.
     */
    var peaks = function(signal, ridgeLines) {
      var peaks = ridgeLines.map(function(line) {
        var points = line.points;
        var maxValue = Number.NEGATIVE_INFINITY,
            maxPoint = undefined;
        points.forEach(function(point) {
          var y = signal[point.x];
          if (y > maxValue) {
            maxPoint = point;
            maxValue = y;
          }
        });
        return maxPoint.serialize();
      });
      return peaks;
    }
    
    return findPeaks;
  };

  var version = "0.0.1";

  exports.version = version;
  exports.ricker = ricker;
  exports.convolve = convolve;
  exports.findPeaks = findPeaks;

}));
},{}],25:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.fastUniqueNumbers = {}));
}(this, function (exports) { 'use strict';

    var LAST_NUMBER_WEAK_MAP = new WeakMap();
    /*
     * The value of the constant Number.MAX_SAFE_INTEGER equals (2 ** 53 - 1) but it
     * is fairly new.
     */

    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === undefined ? 9007199254740991 : Number.MAX_SAFE_INTEGER;

    var cache = function cache(collection, nextNumber) {
      LAST_NUMBER_WEAK_MAP.set(collection, nextNumber);
      return nextNumber;
    };

    var generateUniqueNumber = function generateUniqueNumber(collection) {
      var lastNumber = LAST_NUMBER_WEAK_MAP.get(collection);
      /*
       * Let's try the cheapest algorithm first. It might fail to produce a new
       * number, but it is so cheap that it is okay to take the risk. Just
       * increase the last number by one or reset it to 0 if we reached the upper
       * bound of SMIs (which stands for small integers). When the last number is
       * unknown it is assumed that the collection contains zero based consecutive
       * numbers.
       */

      var nextNumber = lastNumber === undefined ? collection.size : lastNumber > 2147483648 ? 0 : lastNumber + 1;

      if (!collection.has(nextNumber)) {
        return cache(collection, nextNumber);
      }
      /*
       * If there are less than half of 2 ** 31 numbers stored in the collection,
       * the chance to generate a new random number in the range from 0 to 2 ** 31
       * is at least 50%. It's benifitial to use only SMIs because they perform
       * much better in any environment based on V8.
       */


      if (collection.size < 1073741824) {
        while (collection.has(nextNumber)) {
          nextNumber = Math.floor(Math.random() * 2147483648);
        }

        return cache(collection, nextNumber);
      } // Quickly check if there is a theoretical chance to generate a new number.


      if (collection.size > MAX_SAFE_INTEGER) {
        throw new Error('Congratulations, you created a collection of unique numbers which uses all available integers!');
      } // Otherwise use the full scale of safely usable integers.


      while (collection.has(nextNumber)) {
        nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
      }

      return cache(collection, nextNumber);
    };

    var addUniqueNumber = function addUniqueNumber(set) {
      var number = generateUniqueNumber(set);
      set.add(number);
      return number;
    };

    exports.addUniqueNumber = addUniqueNumber;
    exports.generateUniqueNumber = generateUniqueNumber;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

},{}],26:[function(require,module,exports){
/*===========================================================================*\
 * Fast Fourier Transform (Cooley-Tukey Method)
 *
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Fast Fourier Transform.
\*===========================================================================*/
module.exports = {
    fft: require('./src/fft').fft,
    ifft: require('./src/ifft').ifft,
    fftInPlace: require('./src/fft').fftInPlace,
    util: require('./src/fftutil'),
    dft: require('./src/dft')
};

},{"./src/dft":28,"./src/fft":29,"./src/fftutil":30,"./src/ifft":31}],27:[function(require,module,exports){
//-------------------------------------------------
// Add two complex numbers
//-------------------------------------------------
var complexAdd = function (a, b)
{
    return [a[0] + b[0], a[1] + b[1]];
};

//-------------------------------------------------
// Subtract two complex numbers
//-------------------------------------------------
var complexSubtract = function (a, b)
{
    return [a[0] - b[0], a[1] - b[1]];
};

//-------------------------------------------------
// Multiply two complex numbers
//
// (a + bi) * (c + di) = (ac - bd) + (ad + bc)i
//-------------------------------------------------
var complexMultiply = function (a, b) 
{
    return [(a[0] * b[0] - a[1] * b[1]), 
            (a[0] * b[1] + a[1] * b[0])];
};

//-------------------------------------------------
// Calculate |a + bi|
//
// sqrt(a*a + b*b)
//-------------------------------------------------
var complexMagnitude = function (c) 
{
    return Math.sqrt(c[0]*c[0] + c[1]*c[1]); 
};

//-------------------------------------------------
// Exports
//-------------------------------------------------
module.exports = {
    add: complexAdd,
    subtract: complexSubtract,
    multiply: complexMultiply,
    magnitude: complexMagnitude
};

},{}],28:[function(require,module,exports){
/*===========================================================================*\
 * Discrete Fourier Transform (O(n^2) brute-force method)
 *
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Fast Fourier Transform.
\*===========================================================================*/

//------------------------------------------------
// Note: this code is not optimized and is
// primarily designed as an educational and testing
// tool.
//------------------------------------------------
var complex = require('./complex');
var fftUtil = require('./fftutil');

//-------------------------------------------------
// Calculate brute-force O(n^2) DFT for vector.
//-------------------------------------------------
var dft = function(vector) {
  var X = [],
      N = vector.length;

  for (var k = 0; k < N; k++) {
    X[k] = [0, 0]; //Initialize to a 0-valued complex number.

    for (var i = 0; i < N; i++) {
      var exp = fftUtil.exponent(k * i, N);
      var term = complex.multiply([vector[i], 0], exp); //Complex mult of the signal with the exponential term.
      X[k] = complex.add(X[k], term); //Complex summation of X[k] and exponential
    }
  }

  return X;
};

module.exports = dft;
},{"./complex":27,"./fftutil":30}],29:[function(require,module,exports){
/*===========================================================================*\
 * Fast Fourier Transform (Cooley-Tukey Method)
 *
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Fast Fourier Transform.
\*===========================================================================*/

//------------------------------------------------
// Note: Some of this code is not optimized and is
// primarily designed as an educational and testing
// tool.
// To get high performace would require transforming
// the recursive calls into a loop and then loop
// unrolling. All of this is best accomplished
// in C or assembly.
//-------------------------------------------------

//-------------------------------------------------
// The following code assumes a complex number is
// an array: [real, imaginary]
//-------------------------------------------------
var complex = require('./complex'),
    fftUtil = require('./fftutil'),
    twiddle = require('bit-twiddle');

module.exports = {
  //-------------------------------------------------
  // Calculate FFT for vector where vector.length
  // is assumed to be a power of 2.
  //-------------------------------------------------
  fft: function fft(vector) {
    var X = [],
        N = vector.length;

    // Base case is X = x + 0i since our input is assumed to be real only.
    if (N == 1) {
      if (Array.isArray(vector[0])) //If input vector contains complex numbers
        return [[vector[0][0], vector[0][1]]];      
      else
        return [[vector[0], 0]];
    }

    // Recurse: all even samples
    var X_evens = fft(vector.filter(even)),

        // Recurse: all odd samples
        X_odds  = fft(vector.filter(odd));

    // Now, perform N/2 operations!
    for (var k = 0; k < N / 2; k++) {
      // t is a complex number!
      var t = X_evens[k],
          e = complex.multiply(fftUtil.exponent(k, N), X_odds[k]);

      X[k] = complex.add(t, e);
      X[k + (N / 2)] = complex.subtract(t, e);
    }

    function even(__, ix) {
      return ix % 2 == 0;
    }

    function odd(__, ix) {
      return ix % 2 == 1;
    }

    return X;
  },
  //-------------------------------------------------
  // Calculate FFT for vector where vector.length
  // is assumed to be a power of 2.  This is the in-
  // place implementation, to avoid the memory
  // footprint used by recursion.
  //-------------------------------------------------
  fftInPlace: function(vector) {
    var N = vector.length;

    var trailingZeros = twiddle.countTrailingZeros(N); //Once reversed, this will be leading zeros

    // Reverse bits
    for (var k = 0; k < N; k++) {
      var p = twiddle.reverse(k) >>> (twiddle.INT_BITS - trailingZeros);
      if (p > k) {
        var complexTemp = [vector[k], 0];
        vector[k] = vector[p];
        vector[p] = complexTemp;
      } else {
        vector[p] = [vector[p], 0];
      }
    }

    //Do the DIT now in-place
    for (var len = 2; len <= N; len += len) {
      for (var i = 0; i < len / 2; i++) {
        var w = fftUtil.exponent(i, len);
        for (var j = 0; j < N / len; j++) {
          var t = complex.multiply(w, vector[j * len + i + len / 2]);
          vector[j * len + i + len / 2] = complex.subtract(vector[j * len + i], t);
          vector[j * len + i] = complex.add(vector[j * len + i], t);
        }
      }
    }
  }
};

},{"./complex":27,"./fftutil":30,"bit-twiddle":23}],30:[function(require,module,exports){
/*===========================================================================*\
 * Fast Fourier Transform Frequency/Magnitude passes
 *
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Fast Fourier Transform.
\*===========================================================================*/

//-------------------------------------------------
// The following code assumes a complex number is
// an array: [real, imaginary]
//-------------------------------------------------
var complex = require('./complex');


//-------------------------------------------------
// By Eulers Formula:
//
// e^(i*x) = cos(x) + i*sin(x)
//
// and in DFT:
//
// x = -2*PI*(k/N)
//-------------------------------------------------
var mapExponent = {},
    exponent = function (k, N) {
      var x = -2 * Math.PI * (k / N);

      mapExponent[N] = mapExponent[N] || {};
      mapExponent[N][k] = mapExponent[N][k] || [Math.cos(x), Math.sin(x)];// [Real, Imaginary]

      return mapExponent[N][k];
};

//-------------------------------------------------
// Calculate FFT Magnitude for complex numbers.
//-------------------------------------------------
var fftMag = function (fftBins) {
    var ret = fftBins.map(complex.magnitude);
    return ret.slice(0, ret.length / 2);
};

//-------------------------------------------------
// Calculate Frequency Bins
// 
// Returns an array of the frequencies (in hertz) of
// each FFT bin provided, assuming the sampleRate is
// samples taken per second.
//-------------------------------------------------
var fftFreq = function (fftBins, sampleRate) {
    var stepFreq = sampleRate / (fftBins.length);
    var ret = fftBins.slice(0, fftBins.length / 2);

    return ret.map(function (__, ix) {
        return ix * stepFreq;
    });
};

//-------------------------------------------------
// Exports
//-------------------------------------------------
module.exports = {
    fftMag: fftMag,
    fftFreq: fftFreq,
    exponent: exponent
};

},{"./complex":27}],31:[function(require,module,exports){
/*===========================================================================*\
 * Inverse Fast Fourier Transform (Cooley-Tukey Method)
 *
 * (c) Maximilian Bügler. 2016
 *
 * Based on and using the code by
 * (c) Vail Systems. Joshua Jung and Ben Bryan. 2015
 *
 * This code is not designed to be highly optimized but as an educational
 * tool to understand the Fast Fourier Transform.
\*===========================================================================*/

//------------------------------------------------
// Note: Some of this code is not optimized and is
// primarily designed as an educational and testing
// tool.
// To get high performace would require transforming
// the recursive calls into a loop and then loop
// unrolling. All of this is best accomplished
// in C or assembly.
//-------------------------------------------------

//-------------------------------------------------
// The following code assumes a complex number is
// an array: [real, imaginary]
//-------------------------------------------------

var fft = require('./fft').fft;


module.exports = {
    ifft: function ifft(signal){
        //Interchange real and imaginary parts
        var csignal=[];
        for(var i=0; i<signal.length; i++){
            csignal[i]=[signal[i][1], signal[i][0]];
        }
    
        //Apply fft
        var ps=fft(csignal);
        
        //Interchange real and imaginary parts and normalize
        var res=[];
        for(var j=0; j<ps.length; j++){
            res[j]=[ps[j][1]/ps.length, ps[j][0]/ps.length];
        }
        return res;
    }
};

},{"./fft":29}],32:[function(require,module,exports){
/**
 * LPF
 * Low Pass Filter for JavaScript
 *
 * @author Lukasz Krawczyk <contact@lukaszkrawczyk.eu>
 * @copyright MIT
 */
var LPF = function(smoothing) {
    this.smoothing = smoothing || 0.5; // must be smaller than 1
    this.buffer = []; // FIFO queue
    this.bufferMaxSize = 10;
};

LPF.prototype = {

    /**
     * Init buffer with array of values
     * 
     * @param {array} values
     * @returns {array}
     * @access public
     */
    init: function(values) {
        for (var i = 0; i < values.length; i++) {
            this.__push(values[i]);
        }
        return this.buffer;
    },

    /**
     * Add new value to buffer (FIFO queue)
     *
     * @param {integer|float} value
     * @returns {integer|float}
     * @access private
     */
    __push: function(value) {
        var removed = (this.buffer.length === this.bufferMaxSize)
            ? this.buffer.shift()
            : 0;

        this.buffer.push(value);
        return removed;
    },

    /**
     * Smooth value from stream
     *
     * @param {integer|float} nextValue
     * @returns {integer|float}
     * @access public
     */
    next: function (nextValue) {
        var self = this;
        // push new value to the end, and remove oldest one
        var removed = this.__push(nextValue);
        // smooth value using all values from buffer
        var result = this.buffer.reduce(function(last, current) {
            return self.smoothing * current + (1 - self.smoothing) * last;
        }, removed);
        // replace smoothed value
        this.buffer[this.buffer.length - 1] = result;
        return result;
    },

    /**
     * Smooth array of values
     *
     * @param {array} values
     * @returns {undefined}
     * @access public
     */
    smoothArray: function (values){
        var value = values[0];
        for (var i = 1; i < values.length; i++){
            var currentValue = values[i];
            value += (currentValue - value) * this.smoothing;
            values[i] = Math.round(value);
        }
        return values;
    }
};

module.exports = new LPF();
},{}],33:[function(require,module,exports){
module.exports = require('./LPF.js');
},{"./LPF.js":32}],34:[function(require,module,exports){
module.exports = require("./lib");
},{"./lib":39}],35:[function(require,module,exports){
"use strict";

var DEFAULT_MIN_FREQUENCY = 82;
var DEFAULT_MAX_FREQUENCY = 1000;
var DEFAULT_RATIO = 5;
var DEFAULT_SENSITIVITY = 0.1;
var DEFAULT_SAMPLE_RATE = 44100;

module.exports = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  var sampleRate = config.sampleRate || DEFAULT_SAMPLE_RATE;
  var minFrequency = config.minFrequency || DEFAULT_MIN_FREQUENCY;
  var maxFrequency = config.maxFrequency || DEFAULT_MAX_FREQUENCY;
  var sensitivity = config.sensitivity || DEFAULT_SENSITIVITY;
  var ratio = config.ratio || DEFAULT_RATIO;
  var amd = [];
  var maxPeriod = Math.round(sampleRate / minFrequency + 0.5);
  var minPeriod = Math.round(sampleRate / maxFrequency + 0.5);

  return function AMDFDetector(float32AudioBuffer) {
    "use strict";

    var maxShift = float32AudioBuffer.length;

    var t = 0;
    var minval = Infinity;
    var maxval = -Infinity;
    var frames1 = void 0,
        frames2 = void 0,
        calcSub = void 0,
        i = void 0,
        j = void 0,
        u = void 0,
        aux1 = void 0,
        aux2 = void 0;

    // Find the average magnitude difference for each possible period offset.
    for (i = 0; i < maxShift; i++) {
      if (minPeriod <= i && i <= maxPeriod) {
        for (aux1 = 0, aux2 = i, t = 0, frames1 = [], frames2 = []; aux1 < maxShift - i; t++, aux2++, aux1++) {
          frames1[t] = float32AudioBuffer[aux1];
          frames2[t] = float32AudioBuffer[aux2];
        }

        // Take the difference between these frames.
        var frameLength = frames1.length;
        calcSub = [];
        for (u = 0; u < frameLength; u++) {
          calcSub[u] = frames1[u] - frames2[u];
        }

        // Sum the differences.
        var summation = 0;
        for (u = 0; u < frameLength; u++) {
          summation += Math.abs(calcSub[u]);
        }
        amd[i] = summation;
      }
    }

    for (j = minPeriod; j < maxPeriod; j++) {
      if (amd[j] < minval) minval = amd[j];
      if (amd[j] > maxval) maxval = amd[j];
    }

    var cutoff = Math.round(sensitivity * (maxval - minval) + minval);
    for (j = minPeriod; j <= maxPeriod && amd[j] > cutoff; j++) {}

    var search_length = minPeriod / 2;
    minval = amd[j];
    var minpos = j;
    for (i = j - 1; i < j + search_length && i <= maxPeriod; i++) {
      if (amd[i] < minval) {
        minval = amd[i];
        minpos = i;
      }
    }

    if (Math.round(amd[minpos] * ratio) < maxval) {
      return sampleRate / minpos;
    } else {
      return null;
    }
  };
};
},{}],36:[function(require,module,exports){
"use strict";

var DEFAULT_SAMPLE_RATE = 44100;
var MAX_FLWT_LEVELS = 6;
var MAX_F = 3000;
var DIFFERENCE_LEVELS_N = 3;
var MAXIMA_THRESHOLD_RATIO = 0.75;

module.exports = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  var sampleRate = config.sampleRate || DEFAULT_SAMPLE_RATE;

  return function DynamicWaveletDetector(float32AudioBuffer) {
    "use strict";

    var mins = [];
    var maxs = [];
    var bufferLength = float32AudioBuffer.length;

    var freq = null;
    var theDC = 0;
    var minValue = 0;
    var maxValue = 0;

    // Compute max amplitude, amplitude threshold, and the DC.
    for (var i = 0; i < bufferLength; i++) {
      var sample = float32AudioBuffer[i];
      theDC = theDC + sample;
      maxValue = Math.max(maxValue, sample);
      minValue = Math.min(minValue, sample);
    }

    theDC /= bufferLength;
    minValue -= theDC;
    maxValue -= theDC;
    var amplitudeMax = maxValue > -1 * minValue ? maxValue : -1 * minValue;
    var amplitudeThreshold = amplitudeMax * MAXIMA_THRESHOLD_RATIO;

    // levels, start without downsampling...
    var curLevel = 0;
    var curModeDistance = -1;
    var curSamNb = float32AudioBuffer.length;
    var delta = void 0,
        nbMaxs = void 0,
        nbMins = void 0;

    // Search:
    while (true) {
      delta = ~~(sampleRate / (Math.pow(2, curLevel) * MAX_F));
      if (curSamNb < 2) break;

      var dv = void 0;
      var previousDV = -1000;
      var lastMinIndex = -1000000;
      var lastMaxIndex = -1000000;
      var findMax = false;
      var findMin = false;

      nbMins = 0;
      nbMaxs = 0;

      for (var _i = 2; _i < curSamNb; _i++) {
        var si = float32AudioBuffer[_i] - theDC;
        var si1 = float32AudioBuffer[_i - 1] - theDC;

        if (si1 <= 0 && si > 0) findMax = true;
        if (si1 >= 0 && si < 0) findMin = true;

        // min or max ?
        dv = si - si1;

        if (previousDV > -1000) {
          if (findMin && previousDV < 0 && dv >= 0) {
            // minimum
            if (Math.abs(si) >= amplitudeThreshold) {
              if (_i > lastMinIndex + delta) {
                mins[nbMins++] = _i;
                lastMinIndex = _i;
                findMin = false;
              }
            }
          }

          if (findMax && previousDV > 0 && dv <= 0) {
            // maximum
            if (Math.abs(si) >= amplitudeThreshold) {
              if (_i > lastMaxIndex + delta) {
                maxs[nbMaxs++] = _i;
                lastMaxIndex = _i;
                findMax = false;
              }
            }
          }
        }
        previousDV = dv;
      }

      if (nbMins === 0 && nbMaxs === 0) {
        // No best distance found!
        break;
      }

      var d = void 0;
      var distances = [];

      for (var _i2 = 0; _i2 < curSamNb; _i2++) {
        distances[_i2] = 0;
      }

      for (var _i3 = 0; _i3 < nbMins; _i3++) {
        for (var j = 1; j < DIFFERENCE_LEVELS_N; j++) {
          if (_i3 + j < nbMins) {
            d = Math.abs(mins[_i3] - mins[_i3 + j]);
            distances[d] += 1;
          }
        }
      }

      var bestDistance = -1;
      var bestValue = -1;

      for (var _i4 = 0; _i4 < curSamNb; _i4++) {
        var summed = 0;
        for (var _j = -1 * delta; _j <= delta; _j++) {
          if (_i4 + _j >= 0 && _i4 + _j < curSamNb) {
            summed += distances[_i4 + _j];
          }
        }

        if (summed === bestValue) {
          if (_i4 === 2 * bestDistance) {
            bestDistance = _i4;
          }
        } else if (summed > bestValue) {
          bestValue = summed;
          bestDistance = _i4;
        }
      }

      // averaging
      var distAvg = 0;
      var nbDists = 0;
      for (var _j2 = -delta; _j2 <= delta; _j2++) {
        if (bestDistance + _j2 >= 0 && bestDistance + _j2 < bufferLength) {
          var nbDist = distances[bestDistance + _j2];
          if (nbDist > 0) {
            nbDists += nbDist;
            distAvg += (bestDistance + _j2) * nbDist;
          }
        }
      }

      // This is our mode distance.
      distAvg /= nbDists;

      // Continue the levels?
      if (curModeDistance > -1) {
        if (Math.abs(distAvg * 2 - curModeDistance) <= 2 * delta) {
          // two consecutive similar mode distances : ok !
          freq = sampleRate / (Math.pow(2, curLevel - 1) * curModeDistance);
          break;
        }
      }

      // not similar, continue next level;
      curModeDistance = distAvg;

      curLevel++;
      if (curLevel >= MAX_FLWT_LEVELS || curSamNb < 2) {
        break;
      }

      //do not modify original audio buffer, make a copy buffer, if
      //downsampling is needed (only once).
      var newFloat32AudioBuffer = float32AudioBuffer.subarray(0);
      if (curSamNb === distances.length) {
        newFloat32AudioBuffer = new Float32Array(curSamNb / 2);
      }
      for (var _i5 = 0; _i5 < curSamNb / 2; _i5++) {
        newFloat32AudioBuffer[_i5] = (float32AudioBuffer[2 * _i5] + float32AudioBuffer[2 * _i5 + 1]) / 2;
      }
      float32AudioBuffer = newFloat32AudioBuffer;
      curSamNb /= 2;
    }

    return freq;
  };
};
},{}],37:[function(require,module,exports){
"use strict";

module.exports = function (config) {

  config = config || {};

  /**
   * The expected size of an audio buffer (in samples).
   */
  var DEFAULT_BUFFER_SIZE = 1024;

  /**
   * Defines the relative size the chosen peak (pitch) has. 0.93 means: choose
   * the first peak that is higher than 93% of the highest peak detected. 93%
   * is the default value used in the Tartini user interface.
   */
  var DEFAULT_CUTOFF = 0.97;

  var DEFAULT_SAMPLE_RATE = 44100;

  /**
   * For performance reasons, peaks below this cutoff are not even considered.
   */
  var SMALL_CUTOFF = 0.5;

  /**
   * Pitch annotations below this threshold are considered invalid, they are
   * ignored.
   */
  var LOWER_PITCH_CUTOFF = 80;

  /**
   * Defines the relative size the chosen peak (pitch) has.
   */
  var cutoff = config.cutoff || DEFAULT_CUTOFF;

  /**
   * The audio sample rate. Most audio has a sample rate of 44.1kHz.
   */
  var sampleRate = config.sampleRate || DEFAULT_SAMPLE_RATE;

  /**
   * Size of the input buffer.
   */
  var bufferSize = config.bufferSize || DEFAULT_BUFFER_SIZE;

  /**
   * Contains a normalized square difference function value for each delay
   * (tau).
   */
  var nsdf = new Float32Array(bufferSize);

  /**
   * The x and y coordinate of the top of the curve (nsdf).
   */
  var turningPointX = void 0;
  var turningPointY = void 0;

  /**
   * A list with minimum and maximum values of the nsdf curve.
   */
  var maxPositions = [];

  /**
   * A list of estimates of the period of the signal (in samples).
   */
  var periodEstimates = [];

  /**
   * A list of estimates of the amplitudes corresponding with the period
   * estimates.
   */
  var ampEstimates = [];

  /**
   * The result of the pitch detection iteration.
   */
  var result = {};

  /**
   * Implements the normalized square difference function. See section 4 (and
   * the explanation before) in the MPM article. This calculation can be
   * optimized by using an FFT. The results should remain the same.
   */
  var normalizedSquareDifference = function normalizedSquareDifference(float32AudioBuffer) {
    for (var tau = 0; tau < float32AudioBuffer.length; tau++) {
      var acf = 0;
      var divisorM = 0;
      for (var i = 0; i < float32AudioBuffer.length - tau; i++) {
        acf += float32AudioBuffer[i] * float32AudioBuffer[i + tau];
        divisorM += float32AudioBuffer[i] * float32AudioBuffer[i] + float32AudioBuffer[i + tau] * float32AudioBuffer[i + tau];
      }
      nsdf[tau] = 2 * acf / divisorM;
    }
  };

  /**
   * Finds the x value corresponding with the peak of a parabola.
   * Interpolates between three consecutive points centered on tau.
   */
  var parabolicInterpolation = function parabolicInterpolation(tau) {
    var nsdfa = nsdf[tau - 1],
        nsdfb = nsdf[tau],
        nsdfc = nsdf[tau + 1],
        bValue = tau,
        bottom = nsdfc + nsdfa - 2 * nsdfb;
    if (bottom === 0) {
      turningPointX = bValue;
      turningPointY = nsdfb;
    } else {
      var delta = nsdfa - nsdfc;
      turningPointX = bValue + delta / (2 * bottom);
      turningPointY = nsdfb - delta * delta / (8 * bottom);
    }
  };

  // Finds the highest value between each pair of positive zero crossings.
  var peakPicking = function peakPicking() {
    var pos = 0;
    var curMaxPos = 0;

    // find the first negative zero crossing.
    while (pos < (nsdf.length - 1) / 3 && nsdf[pos] > 0) {
      pos++;
    }

    // loop over all the values below zero.
    while (pos < nsdf.length - 1 && nsdf[pos] <= 0) {
      pos++;
    }

    // can happen if output[0] is NAN
    if (pos == 0) {
      pos = 1;
    }

    while (pos < nsdf.length - 1) {
      if (nsdf[pos] > nsdf[pos - 1] && nsdf[pos] >= nsdf[pos + 1]) {
        if (curMaxPos == 0) {
          // the first max (between zero crossings)
          curMaxPos = pos;
        } else if (nsdf[pos] > nsdf[curMaxPos]) {
          // a higher max (between the zero crossings)
          curMaxPos = pos;
        }
      }
      pos++;
      // a negative zero crossing
      if (pos < nsdf.length - 1 && nsdf[pos] <= 0) {
        // if there was a maximum add it to the list of maxima
        if (curMaxPos > 0) {
          maxPositions.push(curMaxPos);
          curMaxPos = 0; // clear the maximum position, so we start
          // looking for a new ones
        }
        while (pos < nsdf.length - 1 && nsdf[pos] <= 0) {
          pos++; // loop over all the values below zero
        }
      }
    }
    if (curMaxPos > 0) {
      maxPositions.push(curMaxPos);
    }
  };

  return function (float32AudioBuffer) {

    // 0. Clear old results.
    var pitch = void 0;
    maxPositions = [];
    periodEstimates = [];
    ampEstimates = [];

    // 1. Calculute the normalized square difference for each Tau value.
    normalizedSquareDifference(float32AudioBuffer);
    // 2. Peak picking time: time to pick some peaks.
    peakPicking();

    var highestAmplitude = -Infinity;

    for (var i = 0; i < maxPositions.length; i++) {
      var tau = maxPositions[i];
      // make sure every annotation has a probability attached
      highestAmplitude = Math.max(highestAmplitude, nsdf[tau]);

      if (nsdf[tau] > SMALL_CUTOFF) {
        // calculates turningPointX and Y
        parabolicInterpolation(tau);
        // store the turning points
        ampEstimates.push(turningPointY);
        periodEstimates.push(turningPointX);
        // remember the highest amplitude
        highestAmplitude = Math.max(highestAmplitude, turningPointY);
      }
    }

    if (periodEstimates.length) {
      // use the overall maximum to calculate a cutoff.
      // The cutoff value is based on the highest value and a relative
      // threshold.
      var actualCutoff = cutoff * highestAmplitude;
      var periodIndex = 0;

      for (var _i = 0; _i < ampEstimates.length; _i++) {
        if (ampEstimates[_i] >= actualCutoff) {
          periodIndex = _i;
          break;
        }
      }

      var period = periodEstimates[periodIndex],
          pitchEstimate = sampleRate / period;

      if (pitchEstimate > LOWER_PITCH_CUTOFF) {
        pitch = pitchEstimate;
      } else {
        pitch = -1;
      }
    } else {
      // no pitch detected.
      pitch = -1;
    }

    result.probability = highestAmplitude;
    result.freq = pitch;
    return result;
  };
};
},{}],38:[function(require,module,exports){
"use strict";

/*
  Copyright (C) 2003-2009 Paul Brossier <piem@aubio.org>
  This file is part of aubio.
  aubio is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  aubio is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  You should have received a copy of the GNU General Public License
  along with aubio.  If not, see <http://www.gnu.org/licenses/>.
*/

/* This algorithm was developed by A. de Cheveigné and H. Kawahara and
 * published in:
 * 
 * de Cheveigné, A., Kawahara, H. (2002) "YIN, a fundamental frequency
 * estimator for speech and music", J. Acoust. Soc. Am. 111, 1917-1930.  
 *
 * see http://recherche.ircam.fr/equipes/pcm/pub/people/cheveign.html
 */

var DEFAULT_THRESHOLD = 0.10;
var DEFAULT_SAMPLE_RATE = 44100;
var DEFAULT_PROBABILITY_THRESHOLD = 0.1;

module.exports = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  var threshold = config.threshold || DEFAULT_THRESHOLD;
  var sampleRate = config.sampleRate || DEFAULT_SAMPLE_RATE;
  var probabilityThreshold = config.probabilityThreshold || DEFAULT_PROBABILITY_THRESHOLD;

  return function YINDetector(float32AudioBuffer) {
    "use strict";

    // Set buffer size to the highest power of two below the provided buffer's length.

    var bufferSize = void 0;
    for (bufferSize = 1; bufferSize < float32AudioBuffer.length; bufferSize *= 2) {}
    bufferSize /= 2;

    // Set up the yinBuffer as described in step one of the YIN paper.
    var yinBufferLength = bufferSize / 2;
    var yinBuffer = new Float32Array(yinBufferLength);

    var probability = void 0,
        tau = void 0;

    // Compute the difference function as described in step 2 of the YIN paper.
    for (var t = 0; t < yinBufferLength; t++) {
      yinBuffer[t] = 0;
    }
    for (var _t = 1; _t < yinBufferLength; _t++) {
      for (var i = 0; i < yinBufferLength; i++) {
        var delta = float32AudioBuffer[i] - float32AudioBuffer[i + _t];
        yinBuffer[_t] += delta * delta;
      }
    }

    // Compute the cumulative mean normalized difference as described in step 3 of the paper.
    yinBuffer[0] = 1;
    yinBuffer[1] = 1;
    var runningSum = 0;
    for (var _t2 = 1; _t2 < yinBufferLength; _t2++) {
      runningSum += yinBuffer[_t2];
      yinBuffer[_t2] *= _t2 / runningSum;
    }

    // Compute the absolute threshold as described in step 4 of the paper.
    // Since the first two positions in the array are 1,
    // we can start at the third position.
    for (tau = 2; tau < yinBufferLength; tau++) {
      if (yinBuffer[tau] < threshold) {
        while (tau + 1 < yinBufferLength && yinBuffer[tau + 1] < yinBuffer[tau]) {
          tau++;
        }
        // found tau, exit loop and return
        // store the probability
        // From the YIN paper: The threshold determines the list of
        // candidates admitted to the set, and can be interpreted as the
        // proportion of aperiodic power tolerated
        // within a periodic signal.
        //
        // Since we want the periodicity and and not aperiodicity:
        // periodicity = 1 - aperiodicity
        probability = 1 - yinBuffer[tau];
        break;
      }
    }

    // if no pitch found, return null.
    if (tau == yinBufferLength || yinBuffer[tau] >= threshold) {
      return null;
    }

    // If probability too low, return -1.
    if (probability < probabilityThreshold) {
      return null;
    }

    /**
     * Implements step 5 of the AUBIO_YIN paper. It refines the estimated tau
     * value using parabolic interpolation. This is needed to detect higher
     * frequencies more precisely. See http://fizyka.umk.pl/nrbook/c10-2.pdf and
     * for more background
     * http://fedc.wiwi.hu-berlin.de/xplore/tutorials/xegbohtmlnode62.html
     */
    var betterTau = void 0,
        x0 = void 0,
        x2 = void 0;
    if (tau < 1) {
      x0 = tau;
    } else {
      x0 = tau - 1;
    }
    if (tau + 1 < yinBufferLength) {
      x2 = tau + 1;
    } else {
      x2 = tau;
    }
    if (x0 === tau) {
      if (yinBuffer[tau] <= yinBuffer[x2]) {
        betterTau = tau;
      } else {
        betterTau = x2;
      }
    } else if (x2 === tau) {
      if (yinBuffer[tau] <= yinBuffer[x0]) {
        betterTau = tau;
      } else {
        betterTau = x0;
      }
    } else {
      var s0 = yinBuffer[x0];
      var s1 = yinBuffer[tau];
      var s2 = yinBuffer[x2];
      // fixed AUBIO implementation, thanks to Karl Helgason:
      // (2.0f * s1 - s2 - s0) was incorrectly multiplied with -1
      betterTau = tau + (s2 - s0) / (2 * (2 * s1 - s2 - s0));
    }

    return sampleRate / betterTau;
  };
};
},{}],39:[function(require,module,exports){
"use strict";

var AMDF = require("./detectors/amdf");
var YIN = require("./detectors/yin");
var DynamicWavelet = require("./detectors/dynamic_wavelet");
var Macleod = require("./detectors/macleod");

var frequencies = require("./tools/frequencies");

module.exports = {
  AMDF: AMDF,
  YIN: YIN,
  DynamicWavelet: DynamicWavelet,
  Macleod: Macleod,
  frequencies: frequencies
};
},{"./detectors/amdf":35,"./detectors/dynamic_wavelet":36,"./detectors/macleod":37,"./detectors/yin":38,"./tools/frequencies":40}],40:[function(require,module,exports){
"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var DEFAULT_TEMPO = 120;
var DEFAULT_QUANTIZATION = 4;
var DEFAULT_SAMPLE_RATE = 44100;

function pitchConsensus(detectors, chunk) {
  var pitches = detectors.map(function (fn) {
    return fn(chunk);
  }).filter(Boolean).sort(function (a, b) {
    return a < b ? -1 : 1;
  });

  // In the case of one pitch, return it.
  if (pitches.length === 1) {
    return pitches[0];

    // In the case of two pitches, return the geometric mean if they
    // are close to each other, and the lower pitch otherwise.
  } else if (pitches.length === 2) {
    var _pitches = _slicedToArray(pitches, 2),
        first = _pitches[0],
        second = _pitches[1];

    return first * 2 > second ? Math.sqrt(first * second) : first;

    // In the case of three or more pitches, filter away the extremes
    // if they are very extreme, then take the geometric mean. 
  } else {
    var _first = pitches[0];
    var _second = pitches[1];
    var secondToLast = pitches[pitches.length - 2];
    var last = pitches[pitches.length - 1];

    var filtered1 = _first * 2 > _second ? pitches : pitches.slice(1);
    var filtered2 = secondToLast * 2 > last ? filtered1 : filtered1.slice(0, -1);
    return Math.pow(filtered2.reduce(function (t, p) {
      return t * p;
    }, 1), 1 / filtered2.length);
  }
}

module.exports = function (detector, float32AudioBuffer) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};


  var tempo = options.tempo || DEFAULT_TEMPO;
  var quantization = options.quantization || DEFAULT_QUANTIZATION;
  var sampleRate = options.sampleRate || DEFAULT_SAMPLE_RATE;

  var bufferLength = float32AudioBuffer.length;
  var chunkSize = Math.round(sampleRate * 60 / (quantization * tempo));

  var getPitch = void 0;
  if (Array.isArray(detector)) {
    getPitch = pitchConsensus.bind(null, detector);
  } else {
    getPitch = detector;
  }

  var pitches = [];
  for (var i = 0, max = bufferLength - chunkSize; i <= max; i += chunkSize) {
    var chunk = float32AudioBuffer.slice(i, i + chunkSize);
    var pitch = getPitch(chunk);
    pitches.push(pitch);
  }

  return pitches;
};
},{}],41:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

},{"./runtime":42}],42:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);

},{}],43:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/helpers/typeof'), require('@babel/runtime/helpers/classCallCheck'), require('@babel/runtime/helpers/slicedToArray'), require('@babel/runtime/helpers/createClass'), require('@babel/runtime/helpers/possibleConstructorReturn'), require('@babel/runtime/helpers/getPrototypeOf'), require('@babel/runtime/helpers/inherits'), require('@babel/runtime/regenerator'), require('@babel/runtime/helpers/asyncToGenerator'), require('@babel/runtime/helpers/toConsumableArray'), require('@babel/runtime/helpers/assertThisInitialized'), require('@babel/runtime/helpers/defineProperty'), require('tslib')) :
    typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/helpers/typeof', '@babel/runtime/helpers/classCallCheck', '@babel/runtime/helpers/slicedToArray', '@babel/runtime/helpers/createClass', '@babel/runtime/helpers/possibleConstructorReturn', '@babel/runtime/helpers/getPrototypeOf', '@babel/runtime/helpers/inherits', '@babel/runtime/regenerator', '@babel/runtime/helpers/asyncToGenerator', '@babel/runtime/helpers/toConsumableArray', '@babel/runtime/helpers/assertThisInitialized', '@babel/runtime/helpers/defineProperty', 'tslib'], factory) :
    (global = global || self, factory(global.standardizedAudioContext = {}, global._typeof, global._classCallCheck, global._slicedToArray, global._createClass, global._possibleConstructorReturn, global._getPrototypeOf, global._inherits, global._regeneratorRuntime, global._asyncToGenerator, global._toConsumableArray, global._assertThisInitialized, global._defineProperty, global.tslib_1));
}(this, function (exports, _typeof, _classCallCheck, _slicedToArray, _createClass, _possibleConstructorReturn, _getPrototypeOf, _inherits, _regeneratorRuntime, _asyncToGenerator, _toConsumableArray, _assertThisInitialized, _defineProperty, tslib_1) { 'use strict';

    _typeof = _typeof && _typeof.hasOwnProperty('default') ? _typeof['default'] : _typeof;
    _classCallCheck = _classCallCheck && _classCallCheck.hasOwnProperty('default') ? _classCallCheck['default'] : _classCallCheck;
    _slicedToArray = _slicedToArray && _slicedToArray.hasOwnProperty('default') ? _slicedToArray['default'] : _slicedToArray;
    _createClass = _createClass && _createClass.hasOwnProperty('default') ? _createClass['default'] : _createClass;
    _possibleConstructorReturn = _possibleConstructorReturn && _possibleConstructorReturn.hasOwnProperty('default') ? _possibleConstructorReturn['default'] : _possibleConstructorReturn;
    _getPrototypeOf = _getPrototypeOf && _getPrototypeOf.hasOwnProperty('default') ? _getPrototypeOf['default'] : _getPrototypeOf;
    _inherits = _inherits && _inherits.hasOwnProperty('default') ? _inherits['default'] : _inherits;
    _regeneratorRuntime = _regeneratorRuntime && _regeneratorRuntime.hasOwnProperty('default') ? _regeneratorRuntime['default'] : _regeneratorRuntime;
    _asyncToGenerator = _asyncToGenerator && _asyncToGenerator.hasOwnProperty('default') ? _asyncToGenerator['default'] : _asyncToGenerator;
    _toConsumableArray = _toConsumableArray && _toConsumableArray.hasOwnProperty('default') ? _toConsumableArray['default'] : _toConsumableArray;
    _assertThisInitialized = _assertThisInitialized && _assertThisInitialized.hasOwnProperty('default') ? _assertThisInitialized['default'] : _assertThisInitialized;
    _defineProperty = _defineProperty && _defineProperty.hasOwnProperty('default') ? _defineProperty['default'] : _defineProperty;

    /*!
     * modernizr v3.6.0
     * Build https://modernizr.com/download?-promises-typedarrays-webaudio-dontmin
     *
     * Copyright (c)
     *  Faruk Ates
     *  Paul Irish
     *  Alex Sexton
     *  Ryan Seddon
     *  Patrick Kettner
     *  Stu Cox
     *  Richard Herrera

     * MIT License
     */
    var browsernizr = (function (window) {
      var tests = [];
      /**
       *
       * ModernizrProto is the constructor for Modernizr
       *
       * @class
       * @access public
       */

      var ModernizrProto = {
        // The current version, dummy
        _version: '3.6.0',
        // Any settings that don't work as separate modules
        // can go in here as configuration.
        _config: {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        // Queue of tests
        _q: [],
        // Stub these for people who are listening
        on: function on(test, cb) {
          // I don't really think people should do this, but we can
          // safe guard it a bit.
          // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
          // This is in case people listen to synchronous tests. I would leave it out,
          // but the code to *disallow* sync tests in the real version of this
          // function is actually larger than this.
          var self = this;
          setTimeout(function () {
            cb(self[test]);
          }, 0);
        },
        addTest: function addTest(name, fn, options) {
          tests.push({
            name: name,
            fn: fn,
            options: options
          });
        },
        addAsyncTest: function addAsyncTest(fn) {
          tests.push({
            name: null,
            fn: fn
          });
        }
      }; // Fake some of Object.create so we can force non test results to be non "own" properties.

      var Modernizr = function Modernizr() {};

      Modernizr.prototype = ModernizrProto; // Leak modernizr globally when you `require` it rather than force it here.
      // Overwrite name so constructor name is nicer :D

      Modernizr = new Modernizr();
      var classes = [];
      /**
       * is returns a boolean if the typeof an obj is exactly type.
       *
       * @access private
       * @function is
       * @param {*} obj - A thing we want to check the type of
       * @param {string} type - A string to compare the typeof against
       * @returns {boolean}
       */

      function is(obj, type) {
        return _typeof(obj) === type;
      }
      /**
       * Run through all tests and detect their support in the current UA.
       *
       * @access private
       */

      function testRunner() {
        var featureNames;
        var feature;
        var aliasIdx;
        var result;
        var nameIdx;
        var featureName;
        var featureNameSplit;

        for (var featureIdx in tests) {
          if (tests.hasOwnProperty(featureIdx)) {
            featureNames = [];
            feature = tests[featureIdx]; // run the test, throw the return value into the Modernizr,
            // then based on that boolean, define an appropriate className
            // and push it into an array of classes we'll join later.
            //
            // If there is no name, it's an 'async' test that is run,
            // but not directly added to the object. That should
            // be done with a post-run addTest call.

            if (feature.name) {
              featureNames.push(feature.name.toLowerCase());

              if (feature.options && feature.options.aliases && feature.options.aliases.length) {
                // Add all the aliases into the names list
                for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
                  featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
                }
              }
            } // Run the test, or use the raw value if it's not a function


            result = is(feature.fn, 'function') ? feature.fn() : feature.fn; // Set each of the names on the Modernizr object

            for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
              featureName = featureNames[nameIdx]; // Support dot properties as sub tests. We don't do checking to make sure
              // that the implied parent tests have been added. You must call them in
              // order (either in the test, or make the parent test a dependency).
              //
              // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
              // hashtag famous last words

              featureNameSplit = featureName.split('.');

              if (featureNameSplit.length === 1) {
                Modernizr[featureNameSplit[0]] = result;
              } else {
                // cast to a Boolean, if not one already
                if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
                  Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
                }

                Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
              }

              classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
            }
          }
        }
      }
      /*!
      {
        "name": "ES6 Promises",
        "property": "promises",
        "caniuse": "promises",
        "polyfills": ["es6promises"],
        "authors": ["Krister Kari", "Jake Archibald"],
        "tags": ["es6"],
        "notes": [{
          "name": "The ES6 promises spec",
          "href": "https://github.com/domenic/promises-unwrapping"
        },{
          "name": "Chromium dashboard - ES6 Promises",
          "href": "https://www.chromestatus.com/features/5681726336532480"
        },{
          "name": "JavaScript Promises: There and back again - HTML5 Rocks",
          "href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
        }]
      }
      !*/

      /* DOC
      Check if browser implements ECMAScript 6 Promises per specification.
      */

      Modernizr.addTest('promises', function () {
        return 'Promise' in window && // Some of these methods are missing from
        // Firefox/Chrome experimental implementations
        'resolve' in window.Promise && 'reject' in window.Promise && 'all' in window.Promise && 'race' in window.Promise && // Older version of the spec had a resolver object
        // as the arg rather than a function
        function () {
          var resolve;
          new window.Promise(function (r) {
            resolve = r;
          });
          return typeof resolve === 'function';
        }();
      });
      /*!
      {
        "name": "Typed arrays",
        "property": "typedarrays",
        "caniuse": "typedarrays",
        "tags": ["js"],
        "authors": ["Stanley Stuart (@fivetanley)"],
        "notes": [{
          "name": "MDN documentation",
          "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
        },{
          "name": "Kronos spec",
          "href": "https://www.khronos.org/registry/typedarray/specs/latest/"
        }],
        "polyfills": ["joshuabell-polyfill"]
      }
      !*/

      /* DOC
      Detects support for native binary data manipulation via Typed Arrays in JavaScript.
      
      Does not check for DataView support; use `Modernizr.dataview` for that.
      */
      // Should fail in:
      // Internet Explorer <= 9
      // Firefox <= 3.6
      // Chrome <= 6.0
      // iOS Safari < 4.2
      // Safari < 5.1
      // Opera < 11.6
      // Opera Mini, <= 7.0
      // Android Browser < 4.0
      // Blackberry Browser < 10.0

      Modernizr.addTest('typedarrays', 'ArrayBuffer' in window);
      /*!
      {
        "name": "Web Audio API",
        "property": "webaudio",
        "caniuse": "audio-api",
        "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
        "tags": ["audio", "media"],
        "builderAliases": ["audio_webaudio_api"],
        "authors": ["Addy Osmani"],
        "notes": [{
          "name": "W3 Specification",
          "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
        }]
      }
      !*/

      /* DOC
      Detects the older non standard webaudio API, (as opposed to the standards based AudioContext API)
      */

      Modernizr.addTest('webaudio', function () {
        var prefixed = 'webkitAudioContext' in window;
        var unprefixed = 'AudioContext' in window;

        if (Modernizr._config.usePrefixes) {
          return prefixed || unprefixed;
        }

        return unprefixed;
      }); // Run each test

      testRunner();
      delete ModernizrProto.addTest;
      delete ModernizrProto.addAsyncTest; // Run the things that are supposed to run after the tests

      for (var i = 0; i < Modernizr._q.length; i++) {
        Modernizr._q[i]();
      } // Leak Modernizr namespace


      return Modernizr;
    })(window);

    var createAbortError = function createAbortError() {
      try {
        return new DOMException('', 'AbortError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 20;
        err.name = 'AbortError';
        return err;
      }
    };

    var AUDIO_NODE_STORE = new WeakMap();
    var AUDIO_GRAPHS = new WeakMap();
    var AUDIO_PARAM_STORE = new WeakMap();
    var BACKUP_NATIVE_CONTEXT_STORE = new WeakMap();
    var CONTEXT_STORE = new WeakMap();
    var DETACHED_ARRAY_BUFFERS = new WeakSet(); // This clunky name is borrowed from the spec. :-)

    var NODE_NAME_TO_PROCESSOR_DEFINITION_MAPS = new WeakMap();
    var NODE_TO_PROCESSOR_MAPS = new WeakMap();
    var TEST_RESULTS = new WeakMap();

    var evaluateSource = function evaluateSource(source) {
      return new Promise(function (resolve, reject) {
        var head = document.head;

        if (head === null) {
          reject(new SyntaxError());
        } else {
          var script = document.createElement('script'); // @todo Safari doesn't like URLs with a type of 'application/javascript; charset=utf-8'.

          var blob = new Blob([source], {
            type: 'application/javascript'
          });
          var url = URL.createObjectURL(blob);
          var originalOnErrorHandler = window.onerror;

          var removeErrorEventListenerAndRevokeUrl = function removeErrorEventListenerAndRevokeUrl() {
            window.onerror = originalOnErrorHandler;
            URL.revokeObjectURL(url);
          };

          window.onerror = function (message, src, lineno, colno, error) {
            // @todo Edge thinks the source is the one of the html document.
            if (src === url || src === location.href && lineno === 1 && colno === 1) {
              removeErrorEventListenerAndRevokeUrl();
              reject(error);
              return false;
            }

            if (originalOnErrorHandler !== null) {
              return originalOnErrorHandler(message, src, lineno, colno, error);
            }
          };

          script.onerror = function () {
            removeErrorEventListenerAndRevokeUrl();
            reject(new SyntaxError());
          };

          script.onload = function () {
            removeErrorEventListenerAndRevokeUrl();
            resolve();
          };

          script.src = url;
          script.type = 'module';
          head.appendChild(script);
        }
      });
    };

    var createInvalidStateError = function createInvalidStateError() {
      try {
        return new DOMException('', 'InvalidStateError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 11;
        err.name = 'InvalidStateError';
        return err;
      }
    };

    var getNativeContext = function getNativeContext(context) {
      var nativeContext = CONTEXT_STORE.get(context);

      if (nativeContext === undefined) {
        throw createInvalidStateError();
      }

      return nativeContext;
    };

    var handler = {
      construct: function construct() {
        return handler;
      }
    };
    var isConstructible = function isConstructible(constructible) {
      try {
        var proxy = new Proxy(constructible, handler);
        new proxy(); // tslint:disable-line:no-unused-expression
      } catch (_a) {
        return false;
      }

      return true;
    };

    /*
     * This massive regex tries to cover all the following cases.
     *
     * import './path';
     * import defaultImport from './path';
     * import { namedImport } from './path';
     * import { namedImport as renamendImport } from './path';
     * import * as namespaceImport from './path';
     * import defaultImport, { namedImport } from './path';
     * import defaultImport, { namedImport as renamendImport } from './path';
     * import defaultImport, * as namespaceImport from './path';
     */
    var IMPORT_STATEMENT_REGEX = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/; // tslint:disable-line:max-line-length

    var splitImportStatements = function splitImportStatements(source, url) {
      var importStatements = [];
      var sourceWithoutImportStatements = source.replace(/^[\s]+/, '');
      var result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);

      while (result !== null) {
        var unresolvedUrl = result[1].slice(1, -1);
        var importStatementWithResolvedUrl = result[0].replace(/([\s]+)?;?$/, '').replace(unresolvedUrl, new URL(unresolvedUrl, url).toString());
        importStatements.push(importStatementWithResolvedUrl);
        sourceWithoutImportStatements = sourceWithoutImportStatements.slice(result[0].length).replace(/^[\s]+/, '');
        result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
      }

      return [importStatements.join(';'), sourceWithoutImportStatements];
    };

    var verifyParameterDescriptors = function verifyParameterDescriptors(parameterDescriptors) {
      if (parameterDescriptors !== undefined && !Array.isArray(parameterDescriptors)) {
        throw new TypeError('The parameterDescriptors property of given value for processorCtor is not an array.');
      }
    };

    var verifyProcessorCtor = function verifyProcessorCtor(processorCtor) {
      if (!isConstructible(processorCtor)) {
        throw new TypeError('The given value for processorCtor should be a constructor.');
      }

      if (processorCtor.prototype === null || _typeof(processorCtor.prototype) !== 'object') {
        throw new TypeError('The given value for processorCtor should have a prototype.');
      }

      if (typeof processorCtor.prototype.process !== 'function') {
        throw new TypeError('The given value for processorCtor should have a callable process() function.');
      }
    };

    var ongoingRequests = new WeakMap();
    var resolvedRequests = new WeakMap();
    var createAddAudioWorkletModule = function createAddAudioWorkletModule(createAbortError, createNotSupportedError, fetchSource, getBackupNativeContext) {
      return function (context, moduleURL) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          credentials: 'omit'
        };
        var nativeContext = getNativeContext(context);
        var absoluteUrl = new URL(moduleURL, location.href).toString(); // Bug #59: Only Chrome & Opera do implement the audioWorklet property.

        if (nativeContext.audioWorklet !== undefined) {
          return fetchSource(moduleURL).then(function (source) {
            var _splitImportStatement = splitImportStatements(source, absoluteUrl),
                _splitImportStatement2 = _slicedToArray(_splitImportStatement, 2),
                importStatements = _splitImportStatement2[0],
                sourceWithoutImportStatements = _splitImportStatement2[1];
            /*
             * Bug #86: Chrome Canary does not invoke the process() function if the corresponding AudioWorkletNode has no output.
             *
             * This is the unminified version of the code used below:
             *
             * ```js
             * `${ importStatements };
             * ((registerProcessor) => {${ sourceWithoutImportStatements }
             * })((name, processorCtor) => registerProcessor(name, class extends processorCtor {
             *
             *     constructor (options) {
             *         const { hasNoOutput, ...otherParameterData } = options.parameterData;
             *
             *         if (hasNoOutput === 1) {
             *             super({ ...options, numberOfOutputs: 0, outputChannelCount: [ ], parameterData: otherParameterData });
             *
             *             this._hasNoOutput = true;
             *         } else {
             *             super(options);
             *
             *             this._hasNoOutput = false;
             *         }
             *     }
             *
             *     process (inputs, outputs, parameters) {
             *         return super.process(inputs, (this._hasNoOutput) ? [ ] : outputs, parameters);
             *     }
             *
             * }))`
             * ```
             */


            var wrappedSource = "".concat(importStatements, ";(registerProcessor=>{").concat(sourceWithoutImportStatements, "\n})((n,p)=>registerProcessor(n,class extends p{constructor(o){const{hasNoOutput,...q}=o.parameterData;if(hasNoOutput===1){super({...o,numberOfOutputs:0,outputChannelCount:[],parameterData:q});this._h=true}else{super(o);this._h=false}}process(i,o,p){return super.process(i,(this._h)?[]:o,p)}}))"); // tslint:disable-line:max-line-length

            var blob = new Blob([wrappedSource], {
              type: 'application/javascript; charset=utf-8'
            });
            var url = URL.createObjectURL(blob);
            var backupNativeContext = getBackupNativeContext(nativeContext);
            var nativeContextOrBackupNativeContext = backupNativeContext !== null ? backupNativeContext : nativeContext;
            return nativeContextOrBackupNativeContext.audioWorklet.addModule(url, options).then(function () {
              return URL.revokeObjectURL(url);
            }) // @todo This could be written more elegantly when Promise.finally() becomes avalaible.
            .catch(function (err) {
              URL.revokeObjectURL(url);
              throw err; // tslint:disable-line:rxjs-throw-error
            });
          });
        } else {
          var resolvedRequestsOfContext = resolvedRequests.get(context);

          if (resolvedRequestsOfContext !== undefined && resolvedRequestsOfContext.has(moduleURL)) {
            return Promise.resolve();
          }

          var ongoingRequestsOfContext = ongoingRequests.get(context);

          if (ongoingRequestsOfContext !== undefined) {
            var promiseOfOngoingRequest = ongoingRequestsOfContext.get(moduleURL);

            if (promiseOfOngoingRequest !== undefined) {
              return promiseOfOngoingRequest;
            }
          }

          var promise = fetchSource(moduleURL).then(function (source) {
            var _splitImportStatement3 = splitImportStatements(source, absoluteUrl),
                _splitImportStatement4 = _slicedToArray(_splitImportStatement3, 2),
                importStatements = _splitImportStatement4[0],
                sourceWithoutImportStatements = _splitImportStatement4[1];
            /*
             * This is the unminified version of the code used below:
             *
             * ```js
             * ${ importStatements };
             * ((a, b) => {
             *     (a[b] = a[b] || [ ]).push(
             *         (AudioWorkletProcessor, currentFrame, currentTime, global, egisterProcessor, sampleRate, self, window) => {
             *             ${ sourceWithoutImportStatements }
             *         }
             *     );
             * })(window, '_AWGS');
             * ```
             */
            // tslint:disable-next-line:max-line-length


            var wrappedSource = "".concat(importStatements, ";((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,currentFrame,currentTime,global,registerProcessor,sampleRate,self,window)=>{").concat(sourceWithoutImportStatements, "\n})})(window,'_AWGS')"); // @todo Evaluating the given source code is a possible security problem.

            return evaluateSource(wrappedSource);
          }).then(function () {
            var globalScope = Object.create(null, {
              currentFrame: {
                get: function get() {
                  return nativeContext.currentTime * nativeContext.sampleRate;
                }
              },
              currentTime: {
                get: function get() {
                  return nativeContext.currentTime;
                }
              },
              sampleRate: {
                get: function get() {
                  return nativeContext.sampleRate;
                }
              }
            });

            var evaluateAudioWorkletGlobalScope = window._AWGS.pop();

            if (evaluateAudioWorkletGlobalScope === undefined) {
              throw new SyntaxError();
            }

            evaluateAudioWorkletGlobalScope(function AudioWorkletProcessor() {
              _classCallCheck(this, AudioWorkletProcessor);
            }, globalScope.currentFrame, globalScope.currentTime, undefined, function (name, processorCtor) {
              if (name.trim() === '') {
                throw createNotSupportedError();
              }

              var nodeNameToProcessorDefinitionMap = NODE_NAME_TO_PROCESSOR_DEFINITION_MAPS.get(nativeContext);

              if (nodeNameToProcessorDefinitionMap !== undefined) {
                if (nodeNameToProcessorDefinitionMap.has(name)) {
                  throw createNotSupportedError();
                }

                verifyProcessorCtor(processorCtor);
                verifyParameterDescriptors(processorCtor.parameterDescriptors);
                nodeNameToProcessorDefinitionMap.set(name, processorCtor);
              } else {
                verifyProcessorCtor(processorCtor);
                verifyParameterDescriptors(processorCtor.parameterDescriptors);
                NODE_NAME_TO_PROCESSOR_DEFINITION_MAPS.set(nativeContext, new Map([[name, processorCtor]]));
              }
            }, globalScope.sampleRate, undefined, undefined);
          }).catch(function (err) {
            if (err.name === 'SyntaxError') {
              throw createAbortError();
            }

            throw err; // tslint:disable-line:rxjs-throw-error
          });

          if (ongoingRequestsOfContext === undefined) {
            ongoingRequests.set(context, new Map([[moduleURL, promise]]));
          } else {
            ongoingRequestsOfContext.set(moduleURL, promise);
          }

          promise.then(function () {
            var rslvdRqstsFCntxt = resolvedRequests.get(context);

            if (rslvdRqstsFCntxt === undefined) {
              resolvedRequests.set(context, new Set([moduleURL]));
            } else {
              rslvdRqstsFCntxt.add(moduleURL);
            }
          }).catch(function () {}) // tslint:disable-line:no-empty
          // @todo Use finally when it becomes available in all supported browsers.
          .then(function () {
            var ngngRqstsFCntxt = ongoingRequests.get(context);

            if (ngngRqstsFCntxt !== undefined) {
              ngngRqstsFCntxt.delete(moduleURL);
            }
          });
          return promise;
        }
      };
    };

    var DEFAULT_OPTIONS = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      fftSize: 2048,
      maxDecibels: -30,
      minDecibels: -100,
      smoothingTimeConstant: 0.8
    };
    var createAnalyserNodeConstructor = function createAnalyserNodeConstructor(createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(AnalyserNode, _noneAudioDestination);

          function AnalyserNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;

            _classCallCheck(this, AnalyserNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS, options);
            var nativeAnalyserNode = createNativeAnalyserNode(nativeContext, mergedOptions);
            var analyserNodeRenderer = isNativeOfflineAudioContext(nativeContext) ? createAnalyserNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AnalyserNode).call(this, context, nativeAnalyserNode, analyserNodeRenderer));
            _this._nativeAnalyserNode = nativeAnalyserNode;
            return _this;
          }

          _createClass(AnalyserNode, [{
            key: "getByteFrequencyData",
            value: function getByteFrequencyData(array) {
              this._nativeAnalyserNode.getByteFrequencyData(array);
            }
          }, {
            key: "getByteTimeDomainData",
            value: function getByteTimeDomainData(array) {
              this._nativeAnalyserNode.getByteTimeDomainData(array);
            }
          }, {
            key: "getFloatFrequencyData",
            value: function getFloatFrequencyData(array) {
              this._nativeAnalyserNode.getFloatFrequencyData(array);
            }
          }, {
            key: "getFloatTimeDomainData",
            value: function getFloatTimeDomainData(array) {
              this._nativeAnalyserNode.getFloatTimeDomainData(array);
            }
          }, {
            key: "fftSize",
            get: function get() {
              return this._nativeAnalyserNode.fftSize;
            },
            set: function set(value) {
              this._nativeAnalyserNode.fftSize = value;
            }
          }, {
            key: "frequencyBinCount",
            get: function get() {
              return this._nativeAnalyserNode.frequencyBinCount;
            }
          }, {
            key: "maxDecibels",
            get: function get() {
              return this._nativeAnalyserNode.maxDecibels;
            },
            set: function set(value) {
              // Bug #118: Safari does not throw an error if maxDecibels is not more than minDecibels.
              var maxDecibels = this._nativeAnalyserNode.maxDecibels;
              this._nativeAnalyserNode.maxDecibels = value;

              if (!(value > this._nativeAnalyserNode.minDecibels)) {
                this._nativeAnalyserNode.maxDecibels = maxDecibels;
                throw createIndexSizeError();
              }
            }
          }, {
            key: "minDecibels",
            get: function get() {
              return this._nativeAnalyserNode.minDecibels;
            },
            set: function set(value) {
              // Bug #118: Safari does not throw an error if maxDecibels is not more than minDecibels.
              var minDecibels = this._nativeAnalyserNode.minDecibels;
              this._nativeAnalyserNode.minDecibels = value;

              if (!(this._nativeAnalyserNode.maxDecibels > value)) {
                this._nativeAnalyserNode.minDecibels = minDecibels;
                throw createIndexSizeError();
              }
            }
          }, {
            key: "smoothingTimeConstant",
            get: function get() {
              return this._nativeAnalyserNode.smoothingTimeConstant;
            },
            set: function set(value) {
              this._nativeAnalyserNode.smoothingTimeConstant = value;
            }
          }]);

          return AnalyserNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var getNativeAudioNode = function getNativeAudioNode(audioNode) {
      var nativeAudioNode = AUDIO_NODE_STORE.get(audioNode);

      if (nativeAudioNode === undefined) {
        throw new Error('The associated nativeAudioNode is missing.');
      }

      return nativeAudioNode;
    };

    var isOwnedByContext = function isOwnedByContext(nativeAudioNode, nativeContext) {
      return nativeAudioNode.context === nativeContext;
    };

    function getAudioGraph(anyContext) {
      var audioGraph = AUDIO_GRAPHS.get(anyContext);

      if (audioGraph === undefined) {
        throw new Error('Missing the audio graph of the given context.');
      }

      return audioGraph;
    }

    var getAudioNodeConnections = function getAudioNodeConnections(anyAudioNode) {
      // The builtin types define the context property as BaseAudioContext which is why it needs to be casted here.
      var audioGraph = getAudioGraph(anyAudioNode.context);
      var audioNodeConnections = audioGraph.nodes.get(anyAudioNode);

      if (audioNodeConnections === undefined) {
        throw new Error('Missing the connections of the given AudioNode in the audio graph.');
      }

      return audioNodeConnections;
    };

    var getAudioNodeRenderer = function getAudioNodeRenderer(anyAudioNode) {
      var audioNodeConnections = getAudioNodeConnections(anyAudioNode);

      if (audioNodeConnections.renderer === null) {
        throw new Error('Missing the renderer of the given AudioNode in the audio graph.');
      }

      return audioNodeConnections.renderer;
    };

    var renderInputsOfAudioNode = function renderInputsOfAudioNode(audioNode, nativeOfflineAudioContext, nativeAudioNode) {
      var audioNodeConnections = getAudioNodeConnections(audioNode);
      return Promise.all(audioNodeConnections.inputs.map(function (connections, input) {
        return Array.from(connections.values()).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              source = _ref2[0],
              output = _ref2[1];

          return getAudioNodeRenderer(source).render(source, nativeOfflineAudioContext).then(function (node) {
            return node.connect(nativeAudioNode, output, input);
          });
        });
      }).reduce(function (allRenderingPromises, renderingPromises) {
        return [].concat(_toConsumableArray(allRenderingPromises), _toConsumableArray(renderingPromises));
      }, []));
    };

    var createAnalyserNodeRendererFactory = function createAnalyserNodeRendererFactory(createNativeAnalyserNode) {
      return function () {
        var nativeAnalyserNodePromise = null;

        var createAnalyserNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAnalyserNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAnalyserNode = getNativeAudioNode(proxy); // If the initially used nativeAnalyserNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeAnalyserNode, nativeOfflineAudioContext)) {
                      options = {
                        channelCount: nativeAnalyserNode.channelCount,
                        channelCountMode: nativeAnalyserNode.channelCountMode,
                        channelInterpretation: nativeAnalyserNode.channelInterpretation,
                        fftSize: nativeAnalyserNode.fftSize,
                        maxDecibels: nativeAnalyserNode.maxDecibels,
                        minDecibels: nativeAnalyserNode.minDecibels,
                        smoothingTimeConstant: nativeAnalyserNode.smoothingTimeConstant
                      };
                      nativeAnalyserNode = createNativeAnalyserNode(nativeOfflineAudioContext, options);
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAnalyserNode);

                  case 4:
                    return _context.abrupt("return", nativeAnalyserNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createAnalyserNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAnalyserNodePromise === null) {
              nativeAnalyserNodePromise = createAnalyserNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAnalyserNodePromise;
          }
        };
      };
    };

    var ONGOING_TESTS = new Map();

    function cacheTestResult(tester, test) {
      var cachedTestResult = TEST_RESULTS.get(tester);

      if (cachedTestResult !== undefined) {
        return cachedTestResult;
      }

      var ongoingTest = ONGOING_TESTS.get(tester);

      if (ongoingTest !== undefined) {
        return ongoingTest;
      }

      var synchronousTestResult = test();

      if (synchronousTestResult instanceof Promise) {
        ONGOING_TESTS.set(tester, synchronousTestResult);
        return synchronousTestResult.then(function (finalTestResult) {
          ONGOING_TESTS.delete(tester);
          TEST_RESULTS.set(tester, finalTestResult);
          return finalTestResult;
        });
      }

      TEST_RESULTS.set(tester, synchronousTestResult);
      return synchronousTestResult;
    }

    var testAudioBufferCopyChannelMethodsSubarraySupport = function testAudioBufferCopyChannelMethodsSubarraySupport(nativeAudioBuffer) {
      var source = new Float32Array(2);

      try {
        /*
         * Only Firefox does not fully support the copyFromChannel() and copyToChannel() methods. Therefore testing one of those
         * methods is enough to know if the other one it supported as well.
         */
        nativeAudioBuffer.copyToChannel(source, 0, nativeAudioBuffer.length - 1);
      } catch (_a) {
        return false;
      }

      return true;
    };

    var createIndexSizeError = function createIndexSizeError() {
      try {
        return new DOMException('', 'IndexSizeError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 1;
        err.name = 'IndexSizeError';
        return err;
      }
    };

    var wrapAudioBufferCopyChannelMethods = function wrapAudioBufferCopyChannelMethods(audioBuffer) {
      audioBuffer.copyFromChannel = function (destination, channelNumber) {
        var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (channelNumber >= audioBuffer.numberOfChannels || startInChannel >= audioBuffer.length) {
          throw createIndexSizeError();
        }

        var channelData = audioBuffer.getChannelData(channelNumber);
        var channelLength = channelData.length;
        var destinationLength = destination.length;

        for (var i = 0; i + startInChannel < channelLength && i < destinationLength; i += 1) {
          destination[i] = channelData[i + startInChannel];
        }
      };

      audioBuffer.copyToChannel = function (source, channelNumber) {
        var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (channelNumber >= audioBuffer.numberOfChannels || startInChannel >= audioBuffer.length) {
          throw createIndexSizeError();
        }

        var channelData = audioBuffer.getChannelData(channelNumber);
        var channelLength = channelData.length;
        var sourceLength = source.length;

        for (var i = 0; i + startInChannel < channelLength && i < sourceLength; i += 1) {
          channelData[i + startInChannel] = source[i];
        }
      };
    };

    var wrapAudioBufferCopyChannelMethodsSubarray = function wrapAudioBufferCopyChannelMethodsSubarray(audioBuffer) {
      audioBuffer.copyFromChannel = function (copyFromChannel) {
        return function (destination, channelNumber) {
          var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (channelNumber >= audioBuffer.numberOfChannels || startInChannel >= audioBuffer.length) {
            throw createIndexSizeError();
          }

          if (startInChannel < audioBuffer.length && audioBuffer.length - startInChannel < destination.length) {
            return copyFromChannel.call(audioBuffer, destination.subarray(0, audioBuffer.length - startInChannel), channelNumber, startInChannel);
          }

          return copyFromChannel.call(audioBuffer, destination, channelNumber, startInChannel);
        };
      }(audioBuffer.copyFromChannel);

      audioBuffer.copyToChannel = function (copyToChannel) {
        return function (source, channelNumber) {
          var startInChannel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          if (channelNumber >= audioBuffer.numberOfChannels || startInChannel >= audioBuffer.length) {
            throw createIndexSizeError();
          }

          if (startInChannel < audioBuffer.length && audioBuffer.length - startInChannel < source.length) {
            return copyToChannel.call(audioBuffer, source.subarray(0, audioBuffer.length - startInChannel), channelNumber, startInChannel);
          }

          return copyToChannel.call(audioBuffer, source, channelNumber, startInChannel);
        };
      }(audioBuffer.copyToChannel);
    };

    var wrapAudioBufferGetChannelDataMethod = function wrapAudioBufferGetChannelDataMethod(audioBuffer) {
      audioBuffer.getChannelData = function (getChannelData) {
        return function (channel) {
          try {
            return getChannelData.call(audioBuffer, channel);
          } catch (err) {
            if (err.code === 12) {
              throw createIndexSizeError();
            }

            throw err; // tslint:disable-line:rxjs-throw-error
          }
        };
      }(audioBuffer.getChannelData);
    };

    var DEFAULT_OPTIONS$1 = {
      numberOfChannels: 1
    };
    var createAudioBufferConstructor = function createAudioBufferConstructor(createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, testNativeAudioBufferConstructorSupport) {
      var nativeOfflineAudioContext = null;
      return (
        /*#__PURE__*/
        function () {
          function AudioBuffer(options) {
            _classCallCheck(this, AudioBuffer);

            if (nativeOfflineAudioContextConstructor === null) {
              throw new Error(); // @todo
            }

            var _Object$assign = Object.assign({}, DEFAULT_OPTIONS$1, options),
                length = _Object$assign.length,
                numberOfChannels = _Object$assign.numberOfChannels,
                sampleRate = _Object$assign.sampleRate;

            if (nativeOfflineAudioContext === null) {
              nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
            }
            /*
             * Bug #99: Firefox does not throw a NotSupportedError when the numberOfChannels is zero. But it only does it when using the
             * factory function. But since Firefox also supports the constructor everything should be fine.
             */


            var audioBuffer = nativeAudioBufferConstructor !== null && cacheTestResult(testNativeAudioBufferConstructorSupport, testNativeAudioBufferConstructorSupport) ? new nativeAudioBufferConstructor({
              length: length,
              numberOfChannels: numberOfChannels,
              sampleRate: sampleRate
            }) : nativeOfflineAudioContext.createBuffer(numberOfChannels, length, sampleRate); // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
            // Bug #100: Safari does throw a wrong error when calling getChannelData() with an out-of-bounds value.

            if (typeof audioBuffer.copyFromChannel !== 'function') {
              wrapAudioBufferCopyChannelMethods(audioBuffer);
              wrapAudioBufferGetChannelDataMethod(audioBuffer); // Bug #42: Firefox does not yet fully support copyFromChannel() and copyToChannel().
            } else if (!cacheTestResult(testAudioBufferCopyChannelMethodsSubarraySupport, function () {
              return testAudioBufferCopyChannelMethodsSubarraySupport(audioBuffer);
            })) {
              wrapAudioBufferCopyChannelMethodsSubarray(audioBuffer);
            } // Bug #99: Safari does not throw an error when the numberOfChannels is zero.


            if (audioBuffer.numberOfChannels === 0) {
              throw createNotSupportedError();
            }
            /*
             * This does violate all good pratices but it is necessary to allow this AudioBuffer to be used with native
             * (Offline)AudioContexts.
             */


            return audioBuffer;
          } // This method needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.


          _createClass(AudioBuffer, [{
            key: "copyFromChannel",
            value: function copyFromChannel(_1, _2) {
            } // tslint:disable-line:no-empty
            // This method needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.

          }, {
            key: "copyToChannel",
            value: function copyToChannel(_1, _2) {
            } // tslint:disable-line:no-empty
            // This method needs to be defined to convince TypeScript that the IAudioBuffer will be implemented.

          }, {
            key: "getChannelData",
            value: function getChannelData(_) {
              return new Float32Array(0);
            }
          }]);

          return AudioBuffer;
        }()
      );
    };

    var MOST_NEGATIVE_SINGLE_FLOAT = -3.4028234663852886e38;
    var MOST_POSITIVE_SINGLE_FLOAT = -MOST_NEGATIVE_SINGLE_FLOAT;

    var wrapEventListener = function wrapEventListener(target, eventListener) {
      if (typeof eventListener === 'function') {
        return function (event) {
          var descriptor = {
            value: target
          };
          Object.defineProperties(event, {
            currentTarget: descriptor,
            target: descriptor
          });
          return eventListener.call(target, event);
        };
      }

      return eventListener;
    };

    var DEFAULT_OPTIONS$2 = {
      buffer: null,
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      detune: 0,
      loop: false,
      loopEnd: 0,
      loopStart: 0,
      playbackRate: 1
    };
    var createAudioBufferSourceNodeConstructor = function createAudioBufferSourceNodeConstructor(createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(AudioBufferSourceNode, _noneAudioDestination);

          function AudioBufferSourceNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$2;

            _classCallCheck(this, AudioBufferSourceNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$2, options);
            var nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var audioBufferSourceNodeRenderer = isOffline ? createAudioBufferSourceNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioBufferSourceNode).call(this, context, nativeAudioBufferSourceNode, audioBufferSourceNodeRenderer));
            _this._audioBufferSourceNodeRenderer = audioBufferSourceNodeRenderer;
            _this._detune = createAudioParam(context, isOffline, nativeAudioBufferSourceNode.detune);
            _this._isBufferNullified = false;
            _this._isBufferSet = false;
            _this._nativeAudioBufferSourceNode = nativeAudioBufferSourceNode;
            _this._onended = null; // Bug #73: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._playbackRate = createAudioParam(context, isOffline, nativeAudioBufferSourceNode.playbackRate, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            return _this;
          }

          _createClass(AudioBufferSourceNode, [{
            key: "start",
            value: function start() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
              var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var duration = arguments.length > 2 ? arguments[2] : undefined;

              this._nativeAudioBufferSourceNode.start(when, offset, duration);

              if (this._audioBufferSourceNodeRenderer !== null) {
                this._audioBufferSourceNodeRenderer.start = duration === undefined ? [when, offset] : [when, offset, duration];
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeAudioBufferSourceNode.stop(when);

              if (this._audioBufferSourceNodeRenderer !== null) {
                this._audioBufferSourceNodeRenderer.stop = when;
              }
            }
          }, {
            key: "buffer",
            get: function get() {
              if (this._isBufferNullified) {
                return null;
              }

              return this._nativeAudioBufferSourceNode.buffer;
            },
            set: function set(value) {
              // Bug #71: Edge does not allow to set the buffer to null.
              try {
                this._nativeAudioBufferSourceNode.buffer = value;
              } catch (err) {
                if (value !== null || err.code !== 17) {
                  throw err; // tslint:disable-line:rxjs-throw-error
                } // @todo Create a new internal nativeAudioBufferSourceNode.


                this._isBufferNullified = this._nativeAudioBufferSourceNode.buffer !== null;
              } // Bug #72: Only Chrome, Edge & Opera do not allow to reassign the buffer yet.


              if (value !== null) {
                if (this._isBufferSet) {
                  throw createInvalidStateError();
                }

                this._isBufferSet = true;
              }
            }
          }, {
            key: "onended",
            get: function get() {
              return this._onended;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeAudioBufferSourceNode.onended = wrappedListener;
              var nativeOnEnded = this._nativeAudioBufferSourceNode.onended;
              this._onended = nativeOnEnded === wrappedListener ? value : nativeOnEnded;
            }
          }, {
            key: "detune",
            get: function get() {
              return this._detune;
            }
          }, {
            key: "loop",
            get: function get() {
              return this._nativeAudioBufferSourceNode.loop;
            },
            set: function set(value) {
              this._nativeAudioBufferSourceNode.loop = value;
            }
          }, {
            key: "loopEnd",
            get: function get() {
              return this._nativeAudioBufferSourceNode.loopEnd;
            },
            set: function set(value) {
              this._nativeAudioBufferSourceNode.loopEnd = value;
            }
          }, {
            key: "loopStart",
            get: function get() {
              return this._nativeAudioBufferSourceNode.loopStart;
            },
            set: function set(value) {
              this._nativeAudioBufferSourceNode.loopStart = value;
            }
          }, {
            key: "playbackRate",
            get: function get() {
              return this._playbackRate;
            }
          }]);

          return AudioBufferSourceNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createAudioBufferSourceNodeRendererFactory = function createAudioBufferSourceNodeRendererFactory(createNativeAudioBufferSourceNode) {
      return function () {
        var nativeAudioBufferSourceNodePromise = null;
        var start = null;
        var stop = null;

        var createAudioBufferSourceNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAudioBufferSourceNode, options, _nativeAudioBufferSou;

            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAudioBufferSourceNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeAudioBufferSourceNode was not constructed on the same OfflineAudioContext it needs to be created
                     * again.
                     */

                    if (!isOwnedByContext(nativeAudioBufferSourceNode, nativeOfflineAudioContext)) {
                      options = {
                        buffer: nativeAudioBufferSourceNode.buffer,
                        channelCount: nativeAudioBufferSourceNode.channelCount,
                        channelCountMode: nativeAudioBufferSourceNode.channelCountMode,
                        channelInterpretation: nativeAudioBufferSourceNode.channelInterpretation,
                        detune: 0,
                        loop: nativeAudioBufferSourceNode.loop,
                        loopEnd: nativeAudioBufferSourceNode.loopEnd,
                        loopStart: nativeAudioBufferSourceNode.loopStart,
                        playbackRate: nativeAudioBufferSourceNode.playbackRate.value
                      };
                      nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext, options);

                      if (start !== null) {
                        (_nativeAudioBufferSou = nativeAudioBufferSourceNode).start.apply(_nativeAudioBufferSou, _toConsumableArray(start));
                      }

                      if (stop !== null) {
                        nativeAudioBufferSourceNode.stop(stop);
                      }
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioBufferSourceNode);

                  case 4:
                    return _context.abrupt("return", nativeAudioBufferSourceNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createAudioBufferSourceNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          set start(value) {
            start = value;
          },

          set stop(value) {
            stop = value;
          },

          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioBufferSourceNodePromise === null) {
              nativeAudioBufferSourceNodePromise = createAudioBufferSourceNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioBufferSourceNodePromise;
          }
        };
      };
    };

    var isValidLatencyHint = function isValidLatencyHint(latencyHint) {
      return latencyHint === undefined || typeof latencyHint === 'number' || typeof latencyHint === 'string' && (latencyHint === 'balanced' || latencyHint === 'interactive' || latencyHint === 'playback');
    };

    var createAudioContextConstructor = function createAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioSourceNodeConstructor, nativeAudioContextConstructor) {
      return (
        /*#__PURE__*/
        function (_baseAudioContextCons) {
          _inherits(AudioContext, _baseAudioContextCons);

          function AudioContext() {
            var _this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, AudioContext);

            if (nativeAudioContextConstructor === null) {
              throw new Error(); // @todo
            }

            var nativeAudioContext = new nativeAudioContextConstructor(options); // Bug #131 Safari returns null when there are four other AudioContexts running already.

            if (nativeAudioContext === null) {
              throw createUnknownError();
            } // Bug #51 Only Chrome and Opera throw an error if the given latencyHint is invalid.


            if (!isValidLatencyHint(options.latencyHint)) {
              throw new TypeError("The provided value '".concat(options.latencyHint, "' is not a valid enum value of type AudioContextLatencyCategory."));
            }

            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioContext).call(this, nativeAudioContext, nativeAudioContext.destination.channelCount));
            var latencyHint = options.latencyHint;
            var sampleRate = nativeAudioContext.sampleRate; // @todo The values for 'balanced', 'interactive' and 'playback' are just copied from Chrome's implementation.

            _this._baseLatency = typeof nativeAudioContext.baseLatency === 'number' ? nativeAudioContext.baseLatency : latencyHint === 'balanced' ? 512 / sampleRate : latencyHint === 'interactive' || latencyHint === undefined ? 256 / sampleRate : latencyHint === 'playback' ? 1024 / sampleRate :
            /*
             * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
             * ScriptProcessorNode.
             */
            Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate;
            _this._nativeAudioContext = nativeAudioContext;
            _this._state = null;
            /*
             * Bug #34: Chrome and Opera pretend to be running right away, but fire an onstatechange event when the state actually changes
             * to 'running'.
             */

            if (nativeAudioContext.state === 'running') {
              _this._state = 'suspended';

              var revokeState = function revokeState() {
                if (_this._state === 'suspended') {
                  _this._state = null;
                }

                nativeAudioContext.removeEventListener('statechange', revokeState);
              };

              nativeAudioContext.addEventListener('statechange', revokeState);
            }

            return _this;
          }

          _createClass(AudioContext, [{
            key: "close",
            value: function close() {
              // Bug #35: Firefox does not throw an error if the AudioContext was closed before.
              if (this.state === 'closed') {
                return this._nativeAudioContext.close().then(function () {
                  throw createInvalidStateError();
                });
              } // Bug #34: If the state was set to suspended before it should be revoked now.


              if (this._state === 'suspended') {
                this._state = null;
              }

              return this._nativeAudioContext.close();
              /*
               * Bug #50: Deleting the AudioGraph is currently not possible anymore.
               * ...then(() => deleteAudioGraph(this, this._nativeAudioContext));
               */
            }
          }, {
            key: "createMediaElementSource",
            value: function createMediaElementSource(mediaElement) {
              return new mediaElementAudioSourceNodeConstructor(this, {
                mediaElement: mediaElement
              });
            }
          }, {
            key: "createMediaStreamSource",
            value: function createMediaStreamSource(mediaStream) {
              return new mediaStreamAudioSourceNodeConstructor(this, {
                mediaStream: mediaStream
              });
            }
          }, {
            key: "resume",
            value: function resume() {
              var _this2 = this;

              if (this._state === 'suspended') {
                return new Promise(function (resolve, reject) {
                  var resolvePromise = function resolvePromise() {
                    _this2._nativeAudioContext.removeEventListener('statechange', resolvePromise);

                    if (_this2._nativeAudioContext.state === 'running') {
                      resolve();
                    } else {
                      _this2.resume().then(resolve, reject);
                    }
                  };

                  _this2._nativeAudioContext.addEventListener('statechange', resolvePromise);
                });
              }

              return this._nativeAudioContext.resume().catch(function (err) {
                // Bug #55: Chrome, Edge and Opera do throw an InvalidAccessError instead of an InvalidStateError.
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined || err.code === 15) {
                  throw createInvalidStateError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "suspend",
            value: function suspend() {
              return this._nativeAudioContext.suspend().catch(function (err) {
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined) {
                  throw createInvalidStateError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "baseLatency",
            get: function get() {
              return this._baseLatency;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state !== null ? this._state : this._nativeAudioContext.state;
            }
          }]);

          return AudioContext;
        }(baseAudioContextConstructor)
      );
    };

    var createAudioDestinationNodeConstructor = function createAudioDestinationNodeConstructor(audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError, createInvalidStateError, createNativeAudioDestinationNode, isNativeOfflineAudioContext) {
      return (
        /*#__PURE__*/
        function (_audioNodeConstructor) {
          _inherits(AudioDestinationNode, _audioNodeConstructor);

          function AudioDestinationNode(context, channelCount) {
            var _this;

            _classCallCheck(this, AudioDestinationNode);

            var nativeContext = getNativeContext(context);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var nativeAudioDestinationNode = createNativeAudioDestinationNode(nativeContext, channelCount, isOffline);
            var audioDestinationNodeRenderer = isOffline ? createAudioDestinationNodeRenderer() : null;
            var audioGraph = {
              audioWorkletGlobalScope: null,
              nodes: new WeakMap(),
              params: new WeakMap()
            };
            AUDIO_GRAPHS.set(context, audioGraph);
            AUDIO_GRAPHS.set(nativeContext, audioGraph);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioDestinationNode).call(this, context, nativeAudioDestinationNode, audioDestinationNodeRenderer));
            _this._isNodeOfNativeOfflineAudioContext = isOffline;
            _this._nativeAudioDestinationNode = nativeAudioDestinationNode;
            return _this;
          }

          _createClass(AudioDestinationNode, [{
            key: "channelCount",
            get: function get() {
              return this._nativeAudioDestinationNode.channelCount;
            },
            set: function set(value) {
              // Bug #52: Chrome, Edge, Opera & Safari do not throw an exception at all.
              // Bug #54: Firefox does throw an IndexSizeError.
              if (this._isNodeOfNativeOfflineAudioContext) {
                throw createInvalidStateError();
              } // Bug #47: The AudioDestinationNode in Edge and Safari do not initialize the maxChannelCount property correctly.


              if (value > this._nativeAudioDestinationNode.maxChannelCount) {
                throw createIndexSizeError();
              }

              this._nativeAudioDestinationNode.channelCount = value;
            }
          }, {
            key: "channelCountMode",
            get: function get() {
              return this._nativeAudioDestinationNode.channelCountMode;
            },
            set: function set(value) {
              // Bug #53: No browser does throw an exception yet.
              if (this._isNodeOfNativeOfflineAudioContext) {
                throw createInvalidStateError();
              }

              this._nativeAudioDestinationNode.channelCountMode = value;
            }
          }, {
            key: "maxChannelCount",
            get: function get() {
              return this._nativeAudioDestinationNode.maxChannelCount;
            }
          }]);

          return AudioDestinationNode;
        }(audioNodeConstructor)
      );
    };

    var createAudioDestinationNodeRenderer = function createAudioDestinationNodeRenderer() {
      var nativeAudioDestinationNodePromise = null;

      var createAudioDestinationNode =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
          var nativeAudioDestinationNode;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  nativeAudioDestinationNode = nativeOfflineAudioContext.destination;
                  _context.next = 3;
                  return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);

                case 3:
                  return _context.abrupt("return", nativeAudioDestinationNode);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function createAudioDestinationNode(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();

      return {
        render: function render(proxy, nativeOfflineAudioContext) {
          if (nativeAudioDestinationNodePromise === null) {
            nativeAudioDestinationNodePromise = createAudioDestinationNode(proxy, nativeOfflineAudioContext);
          }

          return nativeAudioDestinationNodePromise;
        }
      };
    };

    var createAudioListenerFactory = function createAudioListenerFactory(createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, isNativeOfflineAudioContext) {
      return function (context, nativeContext) {
        var nativeListener = nativeContext.listener; // Bug #117: Only Chrome & Opera support the new interface already.

        var createFakeAudioParams = function createFakeAudioParams() {
          var channelMergerNode = createNativeChannelMergerNode(nativeContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 9
          });
          var isOffline = isNativeOfflineAudioContext(nativeContext);
          var scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, 256, 9, 0);

          var createFakeAudioParam = function createFakeAudioParam(input, value) {
            var constantSourceNode = createNativeConstantSourceNode(nativeContext, {
              channelCount: 1,
              channelCountMode: 'explicit',
              channelInterpretation: 'discrete',
              offset: value
            });
            constantSourceNode.connect(channelMergerNode, 0, input); // @todo This should be stopped when the context is closed.

            constantSourceNode.start();
            Object.defineProperty(constantSourceNode.offset, 'defaultValue', {
              get: function get() {
                return value;
              }
            });
            /*
             * Bug #62 & #74: Edge & Safari do not support ConstantSourceNodes and do not export the correct values for maxValue and
             * minValue for GainNodes.
             */

            return createAudioParam(context, isOffline, constantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
          };

          var lastOrientation = [0, 0, -1, 0, 1, 0];
          var lastPosition = [0, 0, 0];

          scriptProcessorNode.onaudioprocess = function (_ref) {
            var inputBuffer = _ref.inputBuffer;
            var orientation = [inputBuffer.getChannelData(0)[0], inputBuffer.getChannelData(1)[0], inputBuffer.getChannelData(2)[0], inputBuffer.getChannelData(3)[0], inputBuffer.getChannelData(4)[0], inputBuffer.getChannelData(5)[0]];

            if (orientation.some(function (value, index) {
              return value !== lastOrientation[index];
            })) {
              nativeListener.setOrientation.apply(nativeListener, orientation); // tslint:disable-line:deprecation

              lastOrientation = orientation;
            }

            var positon = [inputBuffer.getChannelData(6)[0], inputBuffer.getChannelData(7)[0], inputBuffer.getChannelData(8)[0]];

            if (positon.some(function (value, index) {
              return value !== lastPosition[index];
            })) {
              nativeListener.setPosition.apply(nativeListener, positon); // tslint:disable-line:deprecation

              lastPosition = positon;
            }
          };

          channelMergerNode.connect(scriptProcessorNode);
          return {
            forwardX: createFakeAudioParam(0, 0),
            forwardY: createFakeAudioParam(1, 0),
            forwardZ: createFakeAudioParam(2, -1),
            positionX: createFakeAudioParam(6, 0),
            positionY: createFakeAudioParam(7, 0),
            positionZ: createFakeAudioParam(8, 0),
            upX: createFakeAudioParam(3, 0),
            upY: createFakeAudioParam(4, 1),
            upZ: createFakeAudioParam(5, 0)
          };
        };

        var _ref2 = nativeListener.forwardX === undefined ? createFakeAudioParams() : nativeListener,
            forwardX = _ref2.forwardX,
            forwardY = _ref2.forwardY,
            forwardZ = _ref2.forwardZ,
            positionX = _ref2.positionX,
            positionY = _ref2.positionY,
            positionZ = _ref2.positionZ,
            upX = _ref2.upX,
            upY = _ref2.upY,
            upZ = _ref2.upZ;

        return {
          get forwardX() {
            return forwardX;
          },

          get forwardY() {
            return forwardY;
          },

          get forwardZ() {
            return forwardZ;
          },

          get positionX() {
            return positionX;
          },

          get positionY() {
            return positionY;
          },

          get positionZ() {
            return positionZ;
          },

          get upX() {
            return upX;
          },

          get upY() {
            return upY;
          },

          get upZ() {
            return upZ;
          }

        };
      };
    };

    var EventTarget =
    /*#__PURE__*/
    function () {
      function EventTarget(_nativeEventTarget) {
        _classCallCheck(this, EventTarget);

        this._nativeEventTarget = _nativeEventTarget;
        this._listeners = new WeakMap();
      }

      _createClass(EventTarget, [{
        key: "addEventListener",
        value: function addEventListener(type, listener, // @todo EventListenerOrEventListenerObject | null = null,
        options) {
          var wrappedEventListener = this._listeners.get(listener);

          if (wrappedEventListener === undefined) {
            wrappedEventListener = wrapEventListener(this, listener);

            if (typeof listener === 'function') {
              this._listeners.set(listener, wrappedEventListener);
            }
          }

          return this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
        }
      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(event) {
          return this._nativeEventTarget.dispatchEvent(event);
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(type, listener, // @todo EventListenerOrEventListenerObject | null = null,
        options) {
          var wrappedEventListener = this._listeners.get(listener);

          return this._nativeEventTarget.removeEventListener(type, wrappedEventListener === undefined ? null : wrappedEventListener, options);
        }
      }]);

      return EventTarget;
    }();

    var isAudioNode = function isAudioNode(audioNodeOrAudioParam) {
      return audioNodeOrAudioParam.context !== undefined;
    };

    function getAudioParamConnections(anyContext, audioParam) {
      var audioGraph = getAudioGraph(anyContext);
      var audioParamConnections = audioGraph.params.get(audioParam);

      if (audioParamConnections === undefined) {
        throw new Error('Missing the connections of the given AudioParam in the audio graph.');
      }

      return audioParamConnections;
    }

    var getNativeAudioParam = function getNativeAudioParam(audioParam) {
      var nativeAudioParam = AUDIO_PARAM_STORE.get(audioParam);

      if (nativeAudioParam === undefined) {
        throw new Error('The associated nativeAudioParam is missing.');
      }

      return nativeAudioParam;
    };

    var testAudioNodeDisconnectMethodSupport = function testAudioNodeDisconnectMethodSupport(nativeAudioContext) {
      return new Promise(function (resolve) {
        var analyzer = nativeAudioContext.createScriptProcessor(256, 1, 1);
        var dummy = nativeAudioContext.createGain(); // Bug #95: Safari does not play one sample buffers.

        var ones = nativeAudioContext.createBuffer(1, 2, 44100);
        var channelData = ones.getChannelData(0);
        channelData[0] = 1;
        channelData[1] = 1;
        var source = nativeAudioContext.createBufferSource();
        source.buffer = ones;
        source.loop = true;
        source.connect(analyzer);
        analyzer.connect(nativeAudioContext.destination);
        source.connect(dummy);
        source.disconnect(dummy);

        analyzer.onaudioprocess = function (event) {
          var chnnlDt = event.inputBuffer.getChannelData(0);

          if (Array.prototype.some.call(chnnlDt, function (sample) {
            return sample === 1;
          })) {
            resolve(true);
          } else {
            resolve(false);
          }

          source.stop();
          analyzer.onaudioprocess = null; // tslint:disable-line:deprecation

          source.disconnect(analyzer);
          analyzer.disconnect(nativeAudioContext.destination);
        };

        source.start();
      });
    };

    var wrapAudioNodeDisconnectMethod = function wrapAudioNodeDisconnectMethod(nativeAudioNode) {
      var destinations = new Map();

      nativeAudioNode.connect = function (connect) {
        return function (destination) {
          var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          destinations.set(destination, {
            input: input,
            output: output
          });

          if (destination instanceof AudioNode) {
            // @todo TypeScript cannot infer the overloaded signature with 3 arguments yet.
            return connect.call(nativeAudioNode, destination, output, input);
          }

          return connect.call(nativeAudioNode, destination, output);
        };
      }(nativeAudioNode.connect);

      nativeAudioNode.disconnect = function (disconnect) {
        return function (outputOrDestination, _output, _input) {
          disconnect.apply(nativeAudioNode);

          if (outputOrDestination === undefined) {
            destinations.clear();
          } else if (destinations.has(outputOrDestination)) {
            destinations.delete(outputOrDestination);
            destinations.forEach(function (_ref, dstntn) {
              var input = _ref.input,
                  output = _ref.output;
              nativeAudioNode.connect(dstntn, input, output);
            });
          }
        };
      }(nativeAudioNode.disconnect);
    };

    var addAudioNode = function addAudioNode(context, audioNode, audioNoderRender, nativeAudioNode) {
      var audioGraph = getAudioGraph(context);
      var inputs = [];

      for (var i = 0; i < nativeAudioNode.numberOfInputs; i += 1) {
        inputs.push(new Set());
      }

      var audioNodeConnections = {
        inputs: inputs,
        outputs: new Set(),
        renderer: audioNoderRender
      };
      audioGraph.nodes.set(audioNode, audioNodeConnections);
      audioGraph.nodes.set(nativeAudioNode, audioNodeConnections);
    };

    var addConnectionToAudioNode = function addConnectionToAudioNode(source, destination, output, input) {
      var audioNodeConnectionsOfSource = getAudioNodeConnections(source);
      var audioNodeConnectionsOfDestination = getAudioNodeConnections(destination);
      audioNodeConnectionsOfSource.outputs.add([destination, output, input]);
      audioNodeConnectionsOfDestination.inputs[input].add([source, output]);
    };

    var addConnectionToAudioParam = function addConnectionToAudioParam(source, destination, output) {
      var audioNodeConnections = getAudioNodeConnections(source);
      var audioParamConnections = getAudioParamConnections(source.context, destination);
      audioNodeConnections.outputs.add([destination, output]);
      audioParamConnections.inputs.add([source, output]);
    };

    var deleteInputsOfAudioNode = function deleteInputsOfAudioNode(source, destination, output, input) {
      var _getAudioNodeConnecti = getAudioNodeConnections(destination),
          inputs = _getAudioNodeConnecti.inputs;

      var length = inputs.length;

      for (var i = 0; i < length; i += 1) {
        if (input === undefined || input === i) {
          var connectionsToInput = inputs[i];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = connectionsToInput.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var connection = _step.value;

              if (connection[0] === source && (output === undefined || connection[1] === output)) {
                connectionsToInput.delete(connection);
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }
    };

    var deleteInputsOfAudioParam = function deleteInputsOfAudioParam(source, destination, output) {
      var audioParamConnections = getAudioParamConnections(source.context, destination);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = audioParamConnections.inputs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var connection = _step2.value;

          if (connection[0] === source && (output === undefined || connection[1] === output)) {
            audioParamConnections.inputs.delete(connection);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    };

    var deleteOutputsOfAudioNode = function deleteOutputsOfAudioNode(source, destination, output, input) {
      var audioNodeConnectionsOfSource = getAudioNodeConnections(source);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = audioNodeConnectionsOfSource.outputs.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var connection = _step3.value;

          if (connection[0] === destination && (output === undefined || connection[1] === output) && (input === undefined || connection[2] === input)) {
            audioNodeConnectionsOfSource.outputs.delete(connection);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    };

    var deleteAnyConnection = function deleteAnyConnection(source) {
      var audioNodeConnectionsOfSource = getAudioNodeConnections(source);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = audioNodeConnectionsOfSource.outputs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _slicedToArray(_step4.value, 1),
              destination = _step4$value[0];

          if (isAudioNode(destination)) {
            deleteInputsOfAudioNode(source, destination);
          } else {
            deleteInputsOfAudioParam(source, destination);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      audioNodeConnectionsOfSource.outputs.clear();
    };

    var deleteConnectionAtOutput = function deleteConnectionAtOutput(source, output) {
      var audioNodeConnectionsOfSource = getAudioNodeConnections(source);
      Array.from(audioNodeConnectionsOfSource.outputs).filter(function (connection) {
        return connection[1] === output;
      }).forEach(function (connection) {
        var _connection = _slicedToArray(connection, 1),
            destination = _connection[0];

        if (isAudioNode(destination)) {
          deleteInputsOfAudioNode(source, destination, connection[1], connection[2]);
        } else {
          deleteInputsOfAudioParam(source, destination, connection[1]);
        }

        audioNodeConnectionsOfSource.outputs.delete(connection);
      });
    };

    var deleteConnectionToDestination = function deleteConnectionToDestination(source, destination, output, input) {
      deleteOutputsOfAudioNode(source, destination, output, input);

      if (isAudioNode(destination)) {
        deleteInputsOfAudioNode(source, destination, output, input);
      } else {
        deleteInputsOfAudioParam(source, destination, output);
      }
    };

    var createAudioNodeConstructor = function createAudioNodeConstructor(createInvalidAccessError, isNativeOfflineAudioContext) {
      return (
        /*#__PURE__*/
        function (_EventTarget) {
          _inherits(AudioNode, _EventTarget);

          function AudioNode(context, nativeAudioNode, audioNodeRenderer) {
            var _this;

            _classCallCheck(this, AudioNode);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioNode).call(this, nativeAudioNode));
            _this._context = context;
            _this._nativeAudioNode = nativeAudioNode;
            var nativeContext = getNativeContext(context); // Bug #12: Firefox and Safari do not support to disconnect a specific destination.
            // @todo Make sure this is not used with an OfflineAudioContext.

            if (!isNativeOfflineAudioContext(nativeContext) && true !== cacheTestResult(testAudioNodeDisconnectMethodSupport, function () {
              return testAudioNodeDisconnectMethodSupport(nativeContext);
            })) {
              wrapAudioNodeDisconnectMethod(nativeAudioNode);
            }

            AUDIO_NODE_STORE.set(_assertThisInitialized(_assertThisInitialized(_this)), nativeAudioNode);
            addAudioNode(context, _assertThisInitialized(_assertThisInitialized(_this)), audioNodeRenderer, nativeAudioNode);
            return _this;
          }

          _createClass(AudioNode, [{
            key: "connect",
            value: function connect(destination) {
              var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
              var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
              var nativeContext = getNativeContext(this._context);

              if (isAudioNode(destination)) {
                var nativeDestinationNode = getNativeAudioNode(destination);
                var inputs = nativeDestinationNode.inputs;

                try {
                  if (inputs !== undefined) {
                    this._nativeAudioNode.connect(inputs[input], output, 0);
                  } else {
                    this._nativeAudioNode.connect(nativeDestinationNode, output, input);
                  } // @todo Calling connect() is only needed to throw possible errors when the nativeContext is an OfflineAudioContext.


                  if (isNativeOfflineAudioContext(nativeContext)) {
                    if (inputs !== undefined) {
                      this._nativeAudioNode.disconnect(inputs[input], output, 0);
                    } else {
                      this._nativeAudioNode.disconnect(nativeDestinationNode, output, input);
                    }
                  }
                } catch (err) {
                  // Bug #41: Only Chrome, Firefox and Opera throw the correct exception by now.
                  if (err.code === 12) {
                    throw createInvalidAccessError();
                  }

                  throw err; // tslint:disable-line:rxjs-throw-error
                }

                addConnectionToAudioNode(this, destination, output, input);
                return destination;
              }

              var nativeAudioParam = getNativeAudioParam(destination);

              try {
                this._nativeAudioNode.connect(nativeAudioParam, output); // @todo Calling connect() is only needed to throw possible errors when the nativeContext is an OfflineAudioContext.


                if (isNativeOfflineAudioContext(nativeContext)) {
                  this._nativeAudioNode.disconnect(nativeAudioParam, output);
                }
              } catch (err) {
                // Bug #58: Only Firefox does throw an InvalidStateError yet.
                if (err.code === 12) {
                  throw createInvalidAccessError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              }

              addConnectionToAudioParam(this, destination, output);
            }
          }, {
            key: "disconnect",
            value: function disconnect(destinationOrOutput, output, input) {
              var nativeContext = getNativeContext(this._context);

              if (!isNativeOfflineAudioContext(nativeContext)) {
                if (destinationOrOutput === undefined) {
                  this._nativeAudioNode.disconnect();
                } else if (typeof destinationOrOutput === 'number') {
                  this._nativeAudioNode.disconnect(destinationOrOutput);
                } else if (isAudioNode(destinationOrOutput)) {
                  var nativeDestinationNode = getNativeAudioNode(destinationOrOutput);

                  if (nativeDestinationNode.inputs !== undefined) {
                    var inputs = nativeDestinationNode.inputs;
                    var numberOfInputs = inputs.length;

                    for (var i = 0; i < numberOfInputs; i += 1) {
                      if (input === undefined || input === i) {
                        if (output === undefined) {
                          this._nativeAudioNode.disconnect(inputs[i]);
                        } else {
                          this._nativeAudioNode.disconnect(inputs[i], output);
                        }
                      }
                    }
                  } else {
                    if (output === undefined) {
                      this._nativeAudioNode.disconnect(nativeDestinationNode);
                    } else if (input === undefined) {
                      this._nativeAudioNode.disconnect(nativeDestinationNode, output);
                    } else {
                      this._nativeAudioNode.disconnect(nativeDestinationNode, output, input);
                    }
                  }
                } else {
                  var nativeAudioParam = getNativeAudioParam(destinationOrOutput);

                  if (output === undefined) {
                    this._nativeAudioNode.disconnect(nativeAudioParam);
                  } else {
                    this._nativeAudioNode.disconnect(nativeAudioParam, output);
                  }
                }
              }

              if (destinationOrOutput === undefined) {
                deleteAnyConnection(this);
              } else if (typeof destinationOrOutput === 'number') {
                deleteConnectionAtOutput(this, destinationOrOutput);
              } else {
                deleteConnectionToDestination(this, destinationOrOutput, output, input);
              }
            }
          }, {
            key: "channelCount",
            get: function get() {
              return this._nativeAudioNode.channelCount;
            },
            set: function set(value) {
              this._nativeAudioNode.channelCount = value;
            }
          }, {
            key: "channelCountMode",
            get: function get() {
              return this._nativeAudioNode.channelCountMode;
            },
            set: function set(value) {
              this._nativeAudioNode.channelCountMode = value;
            }
          }, {
            key: "channelInterpretation",
            get: function get() {
              return this._nativeAudioNode.channelInterpretation;
            },
            set: function set(value) {
              this._nativeAudioNode.channelInterpretation = value;
            }
          }, {
            key: "context",
            get: function get() {
              return this._context;
            }
          }, {
            key: "numberOfInputs",
            get: function get() {
              return this._nativeAudioNode.numberOfInputs;
            }
          }, {
            key: "numberOfOutputs",
            get: function get() {
              return this._nativeAudioNode.numberOfOutputs;
            }
          }]);

          return AudioNode;
        }(EventTarget)
      );
    };

    var addAudioParam = function addAudioParam(context, audioParam, audioParamRenderer) {
      var audioGraph = getAudioGraph(context);
      audioGraph.params.set(audioParam, {
        inputs: new Set(),
        renderer: audioParamRenderer
      });
    };

    var createAudioParamFactory = function createAudioParamFactory(createAudioParamRenderer) {
      return function (context, isAudioParamOfOfflineAudioContext, nativeAudioParam) {
        var maxValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var minValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var audioParamRenderer = isAudioParamOfOfflineAudioContext ? createAudioParamRenderer() : null;
        var audioParam = {
          get defaultValue() {
            return nativeAudioParam.defaultValue;
          },

          get maxValue() {
            return maxValue === null ? nativeAudioParam.maxValue : maxValue;
          },

          get minValue() {
            return minValue === null ? nativeAudioParam.minValue : minValue;
          },

          get value() {
            return nativeAudioParam.value;
          },

          set value(value) {
            nativeAudioParam.value = value; // Bug #98: Edge, Firefox & Safari do not yet treat the value setter like a call to setValueAtTime().

            audioParam.setValueAtTime(value, context.currentTime);
          },

          cancelScheduledValues: function cancelScheduledValues(cancelTime) {
            nativeAudioParam.cancelScheduledValues(cancelTime);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                cancelTime: cancelTime,
                type: 'cancelScheduledValues'
              });
            }

            return audioParam;
          },
          exponentialRampToValueAtTime: function exponentialRampToValueAtTime(value, endTime) {
            nativeAudioParam.exponentialRampToValueAtTime(value, endTime);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                endTime: endTime,
                type: 'exponentialRampToValue',
                value: value
              });
            }

            return audioParam;
          },
          linearRampToValueAtTime: function linearRampToValueAtTime(value, endTime) {
            nativeAudioParam.linearRampToValueAtTime(value, endTime);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                endTime: endTime,
                type: 'linearRampToValue',
                value: value
              });
            }

            return audioParam;
          },
          setTargetAtTime: function setTargetAtTime(target, startTime, timeConstant) {
            nativeAudioParam.setTargetAtTime(target, startTime, timeConstant);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                startTime: startTime,
                target: target,
                timeConstant: timeConstant,
                type: 'setTarget'
              });
            }

            return audioParam;
          },
          setValueAtTime: function setValueAtTime(value, startTime) {
            nativeAudioParam.setValueAtTime(value, startTime);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                startTime: startTime,
                type: 'setValue',
                value: value
              });
            }

            return audioParam;
          },
          setValueCurveAtTime: function setValueCurveAtTime(values, startTime, duration) {
            nativeAudioParam.setValueCurveAtTime(values, startTime, duration);

            if (audioParamRenderer !== null) {
              audioParamRenderer.record({
                duration: duration,
                startTime: startTime,
                type: 'setValueCurve',
                values: values
              });
            }

            return audioParam;
          }
        };
        AUDIO_PARAM_STORE.set(audioParam, nativeAudioParam);
        addAudioParam(context, audioParam, audioParamRenderer);
        return audioParam;
      };
    };

    var createAudioParamRenderer = function createAudioParamRenderer() {
      var automations = [];
      return {
        record: function record(automation) {
          automations.push(automation);
        },
        replay: function replay(audioParam) {
          for (var _i = 0; _i < automations.length; _i++) {
            var automation = automations[_i];

            if (automation.type === 'cancelScheduledValues') {
              var cancelTime = automation.cancelTime;
              audioParam.cancelScheduledValues(cancelTime);
            } else if (automation.type === 'exponentialRampToValue') {
              var endTime = automation.endTime,
                  value = automation.value;
              audioParam.exponentialRampToValueAtTime(value, endTime);
            } else if (automation.type === 'linearRampToValue') {
              var _endTime = automation.endTime,
                  _value = automation.value;
              audioParam.linearRampToValueAtTime(_value, _endTime);
            } else if (automation.type === 'setTarget') {
              var startTime = automation.startTime,
                  target = automation.target,
                  timeConstant = automation.timeConstant;
              audioParam.setTargetAtTime(target, startTime, timeConstant);
            } else if (automation.type === 'setValue') {
              var _startTime = automation.startTime,
                  _value2 = automation.value;
              audioParam.setValueAtTime(_value2, _startTime);
            } else if (automation.type === 'setValueCurve') {
              var duration = automation.duration,
                  _startTime2 = automation.startTime,
                  values = automation.values;
              /*
               * @todo TypeScript can't combine the call signatures of setValueCurveAtTime() of IAudioParam and TNativeAudioParam as
               * their return types are incompatible.
               */

              audioParam.setValueCurveAtTime(values, _startTime2, duration);
            } else {
              throw new Error("Can't apply an unknown automation.");
            }
          }
        }
      };
    };

    var ReadOnlyMap =
    /*#__PURE__*/
    function () {
      function ReadOnlyMap(parameters) {
        _classCallCheck(this, ReadOnlyMap);

        this._map = new Map(parameters);
      }

      _createClass(ReadOnlyMap, [{
        key: "entries",
        value: function entries() {
          return this._map.entries();
        }
      }, {
        key: "forEach",
        value: function forEach(callback) {
          var _this = this;

          var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return this._map.forEach(function (value, key) {
            return callback.call(thisArg, value, key, _this);
          });
        }
      }, {
        key: "get",
        value: function get(name) {
          return this._map.get(name);
        }
      }, {
        key: "has",
        value: function has(name) {
          return this._map.has(name);
        }
      }, {
        key: "keys",
        value: function keys() {
          return this._map.keys();
        }
      }, {
        key: "values",
        value: function values() {
          return this._map.values();
        }
      }, {
        key: "size",
        get: function get() {
          return this._map.size;
        }
      }]);

      return ReadOnlyMap;
    }();

    var DEFAULT_OPTIONS$3 = {
      channelCount: 2,
      // Bug #61: The channelCountMode should be 'max' according to the spec but is set to 'explicit' to achieve consistent behavior.
      channelCountMode: 'explicit',
      channelInterpretation: 'speakers',
      numberOfInputs: 1,
      numberOfOutputs: 1,
      outputChannelCount: undefined,
      parameterData: {},
      processorOptions: null
    };

    var createChannelCount = function createChannelCount(length) {
      var channelCount = [];

      for (var i = 0; i < length; i += 1) {
        channelCount.push(1);
      }

      return channelCount;
    };

    var sanitizedOptions = function sanitizedOptions(options) {
      return Object.assign({}, options, {
        outputChannelCount: options.outputChannelCount !== undefined ? options.outputChannelCount : options.numberOfInputs === 1 && options.numberOfOutputs === 1 ?
        /*
         * Bug #61: This should be the computedNumberOfChannels, but unfortunately that is almost impossible to fake. That's why
         * the channelCountMode is required to be 'explicit' as long as there is not a native implementation in every browser. That
         * makes sure the computedNumberOfChannels is equivilant to the channelCount which makes it much easier to compute.
         */
        [options.channelCount] : createChannelCount(options.numberOfOutputs),
        // Bug #66: The default value of processorOptions should be null, but Chrome Canary doesn't like it.
        processorOptions: options.processorOptions === null ? {} : options.processorOptions
      });
    };

    var createAudioWorkletNodeConstructor = function createAudioWorkletNodeConstructor(createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, gainNodeConstructor, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(AudioWorkletNode, _noneAudioDestination);

          function AudioWorkletNode(context, name) {
            var _this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS$3;

            _classCallCheck(this, AudioWorkletNode);

            var nativeContext = getNativeContext(context);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var mergedOptions = sanitizedOptions(Object.assign({}, DEFAULT_OPTIONS$3, options));
            var nodeNameToProcessorDefinitionMap = NODE_NAME_TO_PROCESSOR_DEFINITION_MAPS.get(nativeContext);
            var processorDefinition = nodeNameToProcessorDefinitionMap === undefined ? undefined : nodeNameToProcessorDefinitionMap.get(name);
            var nativeAudioWorkletNode = createNativeAudioWorkletNode(nativeContext, isOffline ? null : context.baseLatency, nativeAudioWorkletNodeConstructor, name, processorDefinition, mergedOptions);
            var audioWorkletNodeRenderer = isOffline ? createAudioWorkletNodeRenderer(name, mergedOptions, processorDefinition) : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioWorkletNode).call(this, context, nativeAudioWorkletNode, audioWorkletNodeRenderer));
            var parameters = [];
            nativeAudioWorkletNode.parameters.forEach(function (nativeAudioParam, nm) {
              var audioParam = createAudioParam(context, isOffline, nativeAudioParam);
              parameters.push([nm, audioParam]);
            });
            _this._nativeAudioWorkletNode = nativeAudioWorkletNode; // Bug #86 & #87: Every browser but Firefox needs to get an unused output which should not be exposed.

            _this._numberOfOutputs = options.numberOfOutputs === 0 ? 0 : _this._nativeAudioWorkletNode.numberOfOutputs;
            _this._onprocessorerror = null;
            _this._parameters = new ReadOnlyMap(parameters);
            /*
             * Bug #86 & #87: Every browser but Firefox needs an output to be connected.
             *
             * Bug #50: Only Safari does yet allow to create AudioNodes on a closed AudioContext. Therefore this is currently faked by
             * using another AudioContext. And that is the reason why this will fail in case of a closed AudioContext.
             */

            if (context.state !== 'closed') {
              var gainNode = new gainNodeConstructor(context, {
                gain: 0
              });

              try {
                _this.connect(gainNode).connect(context.destination);
              } catch (err) {
                if (err.name !== 'IndexSizeError') {
                  throw err; // tslint:disable-line:rxjs-throw-error
                }
              }
            }

            return _this;
          }

          _createClass(AudioWorkletNode, [{
            key: "numberOfOutputs",
            get: function get() {
              return this._numberOfOutputs;
            }
          }, {
            key: "onprocessorerror",
            get: function get() {
              return this._onprocessorerror;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeAudioWorkletNode.onprocessorerror = wrappedListener;
              var nativeOnProcessorError = this._nativeAudioWorkletNode.onprocessorerror;
              this._onprocessorerror = nativeOnProcessorError === wrappedListener ? value : nativeOnProcessorError;
            }
          }, {
            key: "parameters",
            get: function get() {
              if (this._parameters === null) {
                // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
                return this._nativeAudioWorkletNode.parameters;
              }

              return this._parameters;
            }
          }, {
            key: "port",
            get: function get() {
              return this._nativeAudioWorkletNode.port;
            }
          }]);

          return AudioWorkletNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var renderInputsOfAudioParam = function renderInputsOfAudioParam(context, audioParam, nativeOfflineAudioContext, nativeAudioParam) {
      var audioParamConnections = getAudioParamConnections(context, audioParam);
      return Promise.all(Array.from(audioParamConnections.inputs).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            source = _ref2[0],
            output = _ref2[1];

        var audioNodeRenderer = getAudioNodeRenderer(source);
        return audioNodeRenderer.render(source, nativeOfflineAudioContext).then(function (node) {
          return node.connect(nativeAudioParam, output);
        });
      }));
    };

    var connectAudioParam = function connectAudioParam(context, nativeOfflineAudioContext, audioParam) {
      var nativeAudioParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getNativeAudioParam(audioParam);
      return renderInputsOfAudioParam(context, audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };

    function copyFromChannel(audioBuffer, // @todo There is currently no way to define something like { [ key: number | string ]: Float32Array }
    parent, key, channelNumber, startInChannel) {
      if (typeof audioBuffer.copyFromChannel === 'function') {
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength === 0) {
          parent[key] = new Float32Array(128);
        }

        audioBuffer.copyFromChannel(parent[key], channelNumber, startInChannel); // Bug #5: Safari does not support copyFromChannel().
      } else {
        var channelData = audioBuffer.getChannelData(channelNumber); // The byteLength will be 0 when the ArrayBuffer was transferred.

        if (parent[key].byteLength === 0) {
          parent[key] = channelData.slice(startInChannel, startInChannel + 128);
        } else {
          var slicedInput = new Float32Array(channelData.buffer, startInChannel * Float32Array.BYTES_PER_ELEMENT, 128);
          parent[key].set(slicedInput);
        }
      }
    }

    var copyToChannel = function copyToChannel(audioBuffer, parent, key, channelNumber, startInChannel) {
      if (typeof audioBuffer.copyToChannel === 'function') {
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength !== 0) {
          audioBuffer.copyToChannel(parent[key], channelNumber, startInChannel);
        } // Bug #5: Safari does not support copyToChannel().

      } else {
        // The byteLength will be 0 when the ArrayBuffer was transferred.
        if (parent[key].byteLength !== 0) {
          audioBuffer.getChannelData(channelNumber).set(parent[key], startInChannel);
        }
      }
    };

    var createNestedArrays = function createNestedArrays(x, y) {
      var arrays = [];

      for (var i = 0; i < x; i += 1) {
        var array = [];
        var length = typeof y === 'number' ? y : y[i];

        for (var j = 0; j < length; j += 1) {
          array.push(new Float32Array(128));
        }

        arrays.push(array);
      }

      return arrays;
    };

    var getAudioWorkletProcessor = function getAudioWorkletProcessor(nativeOfflineAudioContext, proxy) {
      var nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeOfflineAudioContext);

      if (nodeToProcessorMap === undefined) {
        throw new Error('Missing the processor map for the given OfflineAudioContext.');
      }

      var nativeAudioWorkletNode = getNativeAudioNode(proxy);
      var audioWorkletProcessorPromise = nodeToProcessorMap.get(nativeAudioWorkletNode);

      if (audioWorkletProcessorPromise === undefined) {
        throw new Error('Missing the promise for the given AudioWorkletNode.');
      }

      return audioWorkletProcessorPromise;
    };

    function getAudioParamRenderer(anyContext, audioParam) {
      var audioParamConnections = getAudioParamConnections(anyContext, audioParam);

      if (audioParamConnections.renderer === null) {
        throw new Error('Missing the renderer of the given AudioParam in the audio graph.');
      }

      return audioParamConnections.renderer;
    }

    var renderAutomation = function renderAutomation(context, nativeOfflineAudioContext, audioParam, nativeAudioParam) {
      var audioParamRenderer = getAudioParamRenderer(context, audioParam);
      audioParamRenderer.replay(nativeAudioParam);
      return renderInputsOfAudioParam(context, audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };

    var processBuffer =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(proxy, renderedBuffer, nativeOfflineAudioContext, options, processorDefinition) {
        var length, numberOfInputChannels, numberOfOutputChannels, processedBuffer, audioNodeConnections, audioWorkletProcessor, inputs, outputs, parameters, _loop, i, _ret;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                length = renderedBuffer.length;
                numberOfInputChannels = options.channelCount * options.numberOfInputs;
                numberOfOutputChannels = options.outputChannelCount.reduce(function (sum, value) {
                  return sum + value;
                }, 0);
                processedBuffer = numberOfOutputChannels === 0 ? null : nativeOfflineAudioContext.createBuffer(numberOfOutputChannels, length, renderedBuffer.sampleRate);

                if (!(processorDefinition === undefined)) {
                  _context.next = 6;
                  break;
                }

                throw new Error();

              case 6:
                audioNodeConnections = getAudioNodeConnections(proxy);
                _context.next = 9;
                return getAudioWorkletProcessor(nativeOfflineAudioContext, proxy);

              case 9:
                audioWorkletProcessor = _context.sent;
                inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
                outputs = createNestedArrays(options.numberOfOutputs, options.outputChannelCount);
                parameters = Array.from(proxy.parameters.keys()).reduce(function (prmtrs, name) {
                  return Object.assign({}, prmtrs, _defineProperty({}, name, new Float32Array(128)));
                }, {});

                _loop = function _loop(i) {
                  for (var j = 0; j < options.numberOfInputs; j += 1) {
                    for (var k = 0; k < options.channelCount; k += 1) {
                      copyFromChannel(renderedBuffer, inputs[j], k, k, i);
                    }
                  }

                  if (processorDefinition.parameterDescriptors !== undefined) {
                    processorDefinition.parameterDescriptors.forEach(function (_ref2, index) {
                      var name = _ref2.name;
                      copyFromChannel(renderedBuffer, parameters, name, numberOfInputChannels + index, i);
                    });
                  }

                  for (var _j = 0; _j < options.numberOfInputs; _j += 1) {
                    for (var _k = 0; _k < options.outputChannelCount[_j]; _k += 1) {
                      // The byteLength will be 0 when the ArrayBuffer was transferred.
                      if (outputs[_j][_k].byteLength === 0) {
                        outputs[_j][_k] = new Float32Array(128);
                      }
                    }
                  }

                  try {
                    var potentiallyEmptyInputs = inputs.map(function (input, index) {
                      if (audioNodeConnections.inputs[index].size === 0) {
                        return [new Float32Array(0)];
                      }

                      return input;
                    });
                    var activeSourceFlag = audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters);

                    if (processedBuffer !== null) {
                      for (var _j2 = 0, outputChannelSplitterNodeOutput = 0; _j2 < options.numberOfOutputs; _j2 += 1) {
                        for (var _k2 = 0; _k2 < options.outputChannelCount[_j2]; _k2 += 1) {
                          copyToChannel(processedBuffer, outputs[_j2], _k2, outputChannelSplitterNodeOutput + _k2, i);
                        }

                        outputChannelSplitterNodeOutput += options.outputChannelCount[_j2];
                      }
                    }

                    if (!activeSourceFlag) {
                      return "break";
                    }
                  } catch (_a) {
                    proxy.dispatchEvent(new ErrorEvent('processorerror'));
                    return "break";
                  }
                };

                i = 0;

              case 15:
                if (!(i < length)) {
                  _context.next = 22;
                  break;
                }

                _ret = _loop(i);

                if (!(_ret === "break")) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt("break", 22);

              case 19:
                i += 128;
                _context.next = 15;
                break;

              case 22:
                return _context.abrupt("return", processedBuffer);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function processBuffer(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var createAudioWorkletNodeRendererFactory = function createAudioWorkletNodeRendererFactory(connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, disconnectMultipleOutputs, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderNativeOfflineAudioContext) {
      return function (name, options, processorDefinition) {
        var nativeAudioNodePromise = null;

        var createNativeAudioNode =
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee4(proxy, nativeOfflineAudioContext) {
            var nativeAudioNode, numberOfInputChannels, numberOfParameters, partialOfflineAudioContext, gainNodes, inputChannelSplitterNodes, i, constantSourceNodes, inputChannelMergerNode, _i, j, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, index, constantSourceNode, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _step2$value, nm, audioParam, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value;

            return _regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    nativeAudioNode = getNativeAudioNode(proxy); // Bug #61: Only Chrome & Opera have an implementation of the AudioWorkletNode yet.

                    if (!(nativeAudioWorkletNodeConstructor === null)) {
                      _context4.next = 38;
                      break;
                    }

                    if (!(processorDefinition === undefined)) {
                      _context4.next = 4;
                      break;
                    }

                    throw new Error('Missing the processor definition.');

                  case 4:
                    if (!(nativeOfflineAudioContextConstructor === null)) {
                      _context4.next = 6;
                      break;
                    }

                    throw new Error('Missing the native (Offline)AudioContext constructor.');

                  case 6:
                    // Bug #47: The AudioDestinationNode in Edge and Safari gets not initialized correctly.
                    numberOfInputChannels = proxy.channelCount * proxy.numberOfInputs;
                    numberOfParameters = processorDefinition.parameterDescriptors === undefined ? 0 : processorDefinition.parameterDescriptors.length;
                    partialOfflineAudioContext = new nativeOfflineAudioContextConstructor(numberOfInputChannels + numberOfParameters, // Ceil the length to the next full render quantum.
                    // Bug #17: Safari does not yet expose the length.
                    Math.ceil(proxy.context.length / 128) * 128, nativeOfflineAudioContext.sampleRate);
                    gainNodes = [];
                    inputChannelSplitterNodes = [];

                    for (i = 0; i < options.numberOfInputs; i += 1) {
                      gainNodes.push(createNativeGainNode(partialOfflineAudioContext, {
                        channelCount: options.channelCount,
                        channelCountMode: options.channelCountMode,
                        channelInterpretation: options.channelInterpretation,
                        gain: 1
                      }));
                      inputChannelSplitterNodes.push(createNativeChannelSplitterNode(partialOfflineAudioContext, {
                        channelCount: options.channelCount,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        numberOfOutputs: options.channelCount
                      }));
                    }

                    _context4.next = 14;
                    return Promise.all(Array.from(proxy.parameters.values()).map(
                    /*#__PURE__*/
                    function () {
                      var _ref4 = _asyncToGenerator(
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee2(audioParam) {
                        var constantSourceNode;
                        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                constantSourceNode = createNativeConstantSourceNode(partialOfflineAudioContext, {
                                  channelCount: 1,
                                  channelCountMode: 'explicit',
                                  channelInterpretation: 'discrete',
                                  offset: audioParam.value
                                });
                                _context2.next = 3;
                                return renderAutomation(proxy.context, partialOfflineAudioContext, audioParam, constantSourceNode.offset);

                              case 3:
                                return _context2.abrupt("return", constantSourceNode);

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));

                      return function (_x8) {
                        return _ref4.apply(this, arguments);
                      };
                    }()));

                  case 14:
                    constantSourceNodes = _context4.sent;
                    inputChannelMergerNode = createNativeChannelMergerNode(partialOfflineAudioContext, {
                      channelCount: 1,
                      channelCountMode: 'explicit',
                      channelInterpretation: 'speakers',
                      numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
                    });

                    for (_i = 0; _i < options.numberOfInputs; _i += 1) {
                      gainNodes[_i].connect(inputChannelSplitterNodes[_i]);

                      for (j = 0; j < options.channelCount; j += 1) {
                        inputChannelSplitterNodes[_i].connect(inputChannelMergerNode, j, _i * options.channelCount + j);
                      }
                    }

                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context4.prev = 20;

                    for (_iterator = constantSourceNodes.entries()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      _step$value = _slicedToArray(_step.value, 2), index = _step$value[0], constantSourceNode = _step$value[1];
                      constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
                      constantSourceNode.start(0);
                    }

                    _context4.next = 28;
                    break;

                  case 24:
                    _context4.prev = 24;
                    _context4.t0 = _context4["catch"](20);
                    _didIteratorError = true;
                    _iteratorError = _context4.t0;

                  case 28:
                    _context4.prev = 28;
                    _context4.prev = 29;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 31:
                    _context4.prev = 31;

                    if (!_didIteratorError) {
                      _context4.next = 34;
                      break;
                    }

                    throw _iteratorError;

                  case 34:
                    return _context4.finish(31);

                  case 35:
                    return _context4.finish(28);

                  case 36:
                    inputChannelMergerNode.connect(partialOfflineAudioContext.destination);
                    return _context4.abrupt("return", Promise.all(gainNodes.map(function (gainNode) {
                      return renderInputsOfAudioNode(proxy, partialOfflineAudioContext, gainNode);
                    })).then(function () {
                      return renderNativeOfflineAudioContext(partialOfflineAudioContext);
                    }).then(
                    /*#__PURE__*/
                    function () {
                      var _ref5 = _asyncToGenerator(
                      /*#__PURE__*/
                      _regeneratorRuntime.mark(function _callee3(renderedBuffer) {
                        var audioBufferSourceNode, numberOfOutputChannels, outputChannelSplitterNode, outputChannelMergerNodes, _i2, processedBuffer, _i3, outputChannelSplitterNodeOutput, outputChannelMergerNode, _j3, outputAudioNodes;

                        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                audioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext);
                                numberOfOutputChannels = options.outputChannelCount.reduce(function (sum, value) {
                                  return sum + value;
                                }, 0);
                                outputChannelSplitterNode = createNativeChannelSplitterNode(nativeOfflineAudioContext, {
                                  channelCount: Math.max(1, numberOfOutputChannels),
                                  channelCountMode: 'explicit',
                                  channelInterpretation: 'discrete',
                                  numberOfOutputs: Math.max(1, numberOfOutputChannels)
                                });
                                outputChannelMergerNodes = [];

                                for (_i2 = 0; _i2 < proxy.numberOfOutputs; _i2 += 1) {
                                  outputChannelMergerNodes.push(createNativeChannelMergerNode(nativeOfflineAudioContext, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: options.outputChannelCount[_i2]
                                  }));
                                }

                                _context3.next = 7;
                                return processBuffer(proxy, renderedBuffer, nativeOfflineAudioContext, options, processorDefinition);

                              case 7:
                                processedBuffer = _context3.sent;

                                if (processedBuffer !== null) {
                                  audioBufferSourceNode.buffer = processedBuffer;
                                  audioBufferSourceNode.start(0);
                                }

                                audioBufferSourceNode.connect(outputChannelSplitterNode);

                                for (_i3 = 0, outputChannelSplitterNodeOutput = 0; _i3 < proxy.numberOfOutputs; _i3 += 1) {
                                  outputChannelMergerNode = outputChannelMergerNodes[_i3];

                                  for (_j3 = 0; _j3 < options.outputChannelCount[_i3]; _j3 += 1) {
                                    outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + _j3, _j3);
                                  }

                                  outputChannelSplitterNodeOutput += options.outputChannelCount[_i3];
                                } // Bug #87: Expose at least one output to make this node connectable.


                                outputAudioNodes = options.numberOfOutputs === 0 ? [outputChannelSplitterNode] : outputChannelMergerNodes;

                                audioBufferSourceNode.connect = function () {
                                  return connectMultipleOutputs(outputAudioNodes, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
                                };

                                audioBufferSourceNode.disconnect = function () {
                                  return disconnectMultipleOutputs(outputAudioNodes, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
                                };

                                return _context3.abrupt("return", audioBufferSourceNode);

                              case 15:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));

                      return function (_x9) {
                        return _ref5.apply(this, arguments);
                      };
                    }()));

                  case 38:
                    if (isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext)) {
                      _context4.next = 68;
                      break;
                    }

                    nativeAudioNode = new nativeAudioWorkletNodeConstructor(nativeOfflineAudioContext, name);
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context4.prev = 43;
                    _iterator2 = proxy.parameters.entries()[Symbol.iterator]();

                  case 45:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      _context4.next = 52;
                      break;
                    }

                    _step2$value = _slicedToArray(_step2.value, 2), nm = _step2$value[0], audioParam = _step2$value[1];
                    _context4.next = 49;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, audioParam, // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
                    nativeAudioNode.parameters.get(nm));

                  case 49:
                    _iteratorNormalCompletion2 = true;
                    _context4.next = 45;
                    break;

                  case 52:
                    _context4.next = 58;
                    break;

                  case 54:
                    _context4.prev = 54;
                    _context4.t1 = _context4["catch"](43);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context4.t1;

                  case 58:
                    _context4.prev = 58;
                    _context4.prev = 59;

                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                      _iterator2.return();
                    }

                  case 61:
                    _context4.prev = 61;

                    if (!_didIteratorError2) {
                      _context4.next = 64;
                      break;
                    }

                    throw _iteratorError2;

                  case 64:
                    return _context4.finish(61);

                  case 65:
                    return _context4.finish(58);

                  case 66:
                    _context4.next = 94;
                    break;

                  case 68:
                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    _context4.prev = 71;
                    _iterator3 = proxy.parameters.entries()[Symbol.iterator]();

                  case 73:
                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                      _context4.next = 80;
                      break;
                    }

                    _step3$value = _slicedToArray(_step3.value, 2), nm = _step3$value[0], audioParam = _step3$value[1];
                    _context4.next = 77;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, audioParam, // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
                    nativeAudioNode.parameters.get(nm));

                  case 77:
                    _iteratorNormalCompletion3 = true;
                    _context4.next = 73;
                    break;

                  case 80:
                    _context4.next = 86;
                    break;

                  case 82:
                    _context4.prev = 82;
                    _context4.t2 = _context4["catch"](71);
                    _didIteratorError3 = true;
                    _iteratorError3 = _context4.t2;

                  case 86:
                    _context4.prev = 86;
                    _context4.prev = 87;

                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                      _iterator3.return();
                    }

                  case 89:
                    _context4.prev = 89;

                    if (!_didIteratorError3) {
                      _context4.next = 92;
                      break;
                    }

                    throw _iteratorError3;

                  case 92:
                    return _context4.finish(89);

                  case 93:
                    return _context4.finish(86);

                  case 94:
                    _context4.next = 96;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);

                  case 96:
                    return _context4.abrupt("return", nativeAudioNode);

                  case 97:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[20, 24, 28, 36], [29,, 31, 35], [43, 54, 58, 66], [59,, 61, 65], [71, 82, 86, 94], [87,, 89, 93]]);
          }));

          return function createNativeAudioNode(_x6, _x7) {
            return _ref3.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioNodePromise === null) {
              nativeAudioNodePromise = createNativeAudioNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioNodePromise;
          }
        };
      };
    };

    var createBaseAudioContextConstructor = function createBaseAudioContextConstructor(addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, _decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_minimalBaseAudioCont) {
          _inherits(BaseAudioContext, _minimalBaseAudioCont);

          function BaseAudioContext(_nativeContext, numberOfChannels) {
            var _this;

            _classCallCheck(this, BaseAudioContext);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseAudioContext).call(this, _nativeContext, numberOfChannels));
            _this._nativeContext = _nativeContext;
            _this._audioWorklet = addAudioWorkletModule === undefined ? undefined : {
              addModule: function addModule(moduleURL, options) {
                return addAudioWorkletModule(_assertThisInitialized(_assertThisInitialized(_this)), moduleURL, options);
              }
            };
            return _this;
          }

          _createClass(BaseAudioContext, [{
            key: "createAnalyser",
            value: function createAnalyser() {
              return new analyserNodeConstructor(this);
            }
          }, {
            key: "createBiquadFilter",
            value: function createBiquadFilter() {
              return new biquadFilterNodeConstructor(this);
            }
          }, {
            key: "createBuffer",
            value: function createBuffer(numberOfChannels, length, sampleRate) {
              return new audioBufferConstructor({
                length: length,
                numberOfChannels: numberOfChannels,
                sampleRate: sampleRate
              });
            }
          }, {
            key: "createBufferSource",
            value: function createBufferSource() {
              return new audioBufferSourceNodeConstructor(this);
            }
          }, {
            key: "createChannelMerger",
            value: function createChannelMerger() {
              var numberOfInputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
              return new channelMergerNodeConstructor(this, {
                numberOfInputs: numberOfInputs
              });
            }
          }, {
            key: "createChannelSplitter",
            value: function createChannelSplitter() {
              var numberOfOutputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
              return new channelSplitterNodeConstructor(this, {
                numberOfOutputs: numberOfOutputs
              });
            }
          }, {
            key: "createConstantSource",
            value: function createConstantSource() {
              return new constantSourceNodeConstructor(this);
            }
          }, {
            key: "createConvolver",
            value: function createConvolver() {
              return new convolverNodeConstructor(this);
            }
          }, {
            key: "createDelay",
            value: function createDelay() {
              var maxDelayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              return new delayNodeConstructor(this, {
                maxDelayTime: maxDelayTime
              });
            }
          }, {
            key: "createDynamicsCompressor",
            value: function createDynamicsCompressor() {
              return new dynamicsCompressorNodeConstructor(this);
            }
          }, {
            key: "createGain",
            value: function createGain() {
              return new gainNodeConstructor(this);
            }
          }, {
            key: "createIIRFilter",
            value: function createIIRFilter(feedforward, feedback) {
              return new iIRFilterNodeConstructor(this, {
                feedback: feedback,
                feedforward: feedforward
              });
            }
          }, {
            key: "createOscillator",
            value: function createOscillator() {
              return new oscillatorNodeConstructor(this);
            }
          }, {
            key: "createPanner",
            value: function createPanner() {
              return new pannerNodeConstructor(this);
            }
          }, {
            key: "createPeriodicWave",
            value: function createPeriodicWave(real, imag) {
              var constraints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
                disableNormalization: false
              };
              return new periodicWaveConstructor(this, Object.assign({}, constraints, {
                imag: imag,
                real: real
              }));
            }
          }, {
            key: "createStereoPanner",
            value: function createStereoPanner() {
              return new stereoPannerNodeConstructor(this);
            }
          }, {
            key: "createWaveShaper",
            value: function createWaveShaper() {
              return new waveShaperNodeConstructor(this);
            }
          }, {
            key: "decodeAudioData",
            value: function decodeAudioData(audioData, successCallback, errorCallback) {
              return _decodeAudioData(this._nativeContext, audioData).then(function (audioBuffer) {
                if (typeof successCallback === 'function') {
                  successCallback(audioBuffer);
                }

                return audioBuffer;
              }).catch(function (err) {
                if (typeof errorCallback === 'function') {
                  errorCallback(err);
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "audioWorklet",
            get: function get() {
              return this._audioWorklet;
            }
          }]);

          return BaseAudioContext;
        }(minimalBaseAudioContextConstructor)
      );
    };

    var DEFAULT_OPTIONS$4 = {
      Q: 1,
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      detune: 0,
      frequency: 350,
      gain: 0,
      type: 'lowpass'
    };
    var createBiquadFilterNodeConstructor = function createBiquadFilterNodeConstructor(createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(BiquadFilterNode, _noneAudioDestination);

          function BiquadFilterNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$4;

            _classCallCheck(this, BiquadFilterNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$4, options);
            var nativeBiquadFilterNode = createNativeBiquadFilterNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var biquadFilterNodeRenderer = isOffline ? createBiquadFilterNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(BiquadFilterNode).call(this, context, nativeBiquadFilterNode, biquadFilterNodeRenderer)); // Bug #80: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._Q = createAudioParam(context, isOffline, nativeBiquadFilterNode.Q, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT); // Bug #78: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._detune = createAudioParam(context, isOffline, nativeBiquadFilterNode.detune, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT); // Bug #77: Chrome, Edge, Firefox, Opera & Safari do not export the correct values for maxValue and minValue.

            _this._frequency = createAudioParam(context, isOffline, nativeBiquadFilterNode.frequency, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT); // Bug #79: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._gain = createAudioParam(context, isOffline, nativeBiquadFilterNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._nativeBiquadFilterNode = nativeBiquadFilterNode;
            return _this;
          }

          _createClass(BiquadFilterNode, [{
            key: "getFrequencyResponse",
            value: function getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
              this._nativeBiquadFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse); // Bug #68: Only Chrome & Opera do throw an error if the parameters differ in their length.


              if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
                throw createInvalidAccessError();
              }
            }
          }, {
            key: "Q",
            get: function get() {
              return this._Q;
            }
          }, {
            key: "detune",
            get: function get() {
              return this._detune;
            }
          }, {
            key: "frequency",
            get: function get() {
              return this._frequency;
            }
          }, {
            key: "gain",
            get: function get() {
              return this._gain;
            }
          }, {
            key: "type",
            get: function get() {
              return this._nativeBiquadFilterNode.type;
            },
            set: function set(value) {
              this._nativeBiquadFilterNode.type = value;
            }
          }]);

          return BiquadFilterNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createBiquadFilterNodeRendererFactory = function createBiquadFilterNodeRendererFactory(createNativeBiquadFilterNode) {
      return function () {
        var nativeBiquadFilterNodePromise = null;

        var createBiquadFilterNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeBiquadFilterNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeBiquadFilterNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeBiquadFilterNode was not constructed on the same OfflineAudioContext it needs to be created
                     * again.
                     */

                    if (isOwnedByContext(nativeBiquadFilterNode, nativeOfflineAudioContext)) {
                      _context.next = 14;
                      break;
                    }

                    options = {
                      Q: nativeBiquadFilterNode.Q.value,
                      channelCount: nativeBiquadFilterNode.channelCount,
                      channelCountMode: nativeBiquadFilterNode.channelCountMode,
                      channelInterpretation: nativeBiquadFilterNode.channelInterpretation,
                      detune: nativeBiquadFilterNode.detune.value,
                      frequency: nativeBiquadFilterNode.frequency.value,
                      gain: nativeBiquadFilterNode.gain.value,
                      type: nativeBiquadFilterNode.type
                    };
                    nativeBiquadFilterNode = createNativeBiquadFilterNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);

                  case 6:
                    _context.next = 8;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);

                  case 8:
                    _context.next = 10;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);

                  case 10:
                    _context.next = 12;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);

                  case 12:
                    _context.next = 22;
                    break;

                  case 14:
                    _context.next = 16;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.Q);

                  case 16:
                    _context.next = 18;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.detune);

                  case 18:
                    _context.next = 20;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.frequency);

                  case 20:
                    _context.next = 22;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.gain);

                  case 22:
                    _context.next = 24;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeBiquadFilterNode);

                  case 24:
                    return _context.abrupt("return", nativeBiquadFilterNode);

                  case 25:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createBiquadFilterNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeBiquadFilterNodePromise === null) {
              nativeBiquadFilterNodePromise = createBiquadFilterNode(proxy, nativeOfflineAudioContext);
            }

            return nativeBiquadFilterNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$5 = {
      channelCount: 1,
      channelCountMode: 'explicit',
      channelInterpretation: 'speakers',
      numberOfInputs: 6
    };
    var createChannelMergerNodeConstructor = function createChannelMergerNodeConstructor(createChannelMergerNodeRenderer, createNativeChannelMergerNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(ChannelMergerNode, _noneAudioDestination);

          function ChannelMergerNode(context) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$5;

            _classCallCheck(this, ChannelMergerNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$5, options);
            var nativeChannelMergerNode = createNativeChannelMergerNode(nativeContext, mergedOptions);
            var channelMergerNodeRenderer = isNativeOfflineAudioContext(nativeContext) ? createChannelMergerNodeRenderer() : null;
            return _possibleConstructorReturn(this, _getPrototypeOf(ChannelMergerNode).call(this, context, nativeChannelMergerNode, channelMergerNodeRenderer));
          }

          return ChannelMergerNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createChannelMergerNodeRendererFactory = function createChannelMergerNodeRendererFactory(createNativeChannelMergerNode) {
      return function () {
        var nativeAudioNodePromise = null;

        var createAudioNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAudioNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAudioNode = getNativeAudioNode(proxy); // If the initially used nativeAudioNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext)) {
                      options = {
                        channelCount: nativeAudioNode.channelCount,
                        channelCountMode: nativeAudioNode.channelCountMode,
                        channelInterpretation: nativeAudioNode.channelInterpretation,
                        numberOfInputs: nativeAudioNode.numberOfInputs
                      };
                      nativeAudioNode = createNativeChannelMergerNode(nativeOfflineAudioContext, options);
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);

                  case 4:
                    return _context.abrupt("return", nativeAudioNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createAudioNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioNodePromise === null) {
              nativeAudioNodePromise = createAudioNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$6 = {
      channelCount: 6,
      channelCountMode: 'explicit',
      channelInterpretation: 'discrete',
      numberOfOutputs: 6
    };

    var sanitizedOptions$1 = function sanitizedOptions(options) {
      return Object.assign({}, options, {
        channelCount: options.numberOfOutputs
      });
    };

    var createChannelSplitterNodeConstructor = function createChannelSplitterNodeConstructor(createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(ChannelSplitterNode, _noneAudioDestination);

          function ChannelSplitterNode(context) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$6;

            _classCallCheck(this, ChannelSplitterNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = sanitizedOptions$1(Object.assign({}, DEFAULT_OPTIONS$6, options));
            var nativeChannelSplitterNode = createNativeChannelSplitterNode(nativeContext, mergedOptions);
            var channelSplitterNodeRenderer = isNativeOfflineAudioContext(nativeContext) ? createChannelSplitterNodeRenderer() : null;
            return _possibleConstructorReturn(this, _getPrototypeOf(ChannelSplitterNode).call(this, context, nativeChannelSplitterNode, channelSplitterNodeRenderer));
          }

          return ChannelSplitterNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createChannelSplitterNodeRendererFactory = function createChannelSplitterNodeRendererFactory(createNativeChannelSplitterNode) {
      return function () {
        var nativeAudioNodePromise = null;

        var createAudioNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAudioNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAudioNode = getNativeAudioNode(proxy); // If the initially used nativeAudioNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext)) {
                      options = {
                        channelCount: nativeAudioNode.channelCount,
                        channelCountMode: nativeAudioNode.channelCountMode,
                        channelInterpretation: nativeAudioNode.channelInterpretation,
                        numberOfOutputs: nativeAudioNode.numberOfOutputs
                      };
                      nativeAudioNode = createNativeChannelSplitterNode(nativeOfflineAudioContext, options);
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);

                  case 4:
                    return _context.abrupt("return", nativeAudioNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createAudioNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioNodePromise === null) {
              nativeAudioNodePromise = createAudioNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioNodePromise;
          }
        };
      };
    };

    var isNativeAudioNode = function isNativeAudioNode(nativeAudioNodeOrAudioParam) {
      return nativeAudioNodeOrAudioParam.context !== undefined;
    };

    var createConnectMultipleOutputs = function createConnectMultipleOutputs(createIndexSizeError) {
      return function (outputAudioNodes, destinationAudioNodeOrAudioParam) {
        var output = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var outputAudioNode = outputAudioNodes[output];

        if (outputAudioNode === undefined) {
          throw createIndexSizeError();
        }

        if (isNativeAudioNode(destinationAudioNodeOrAudioParam)) {
          return outputAudioNode.connect(destinationAudioNodeOrAudioParam, 0, input);
        }

        return outputAudioNode.connect(destinationAudioNodeOrAudioParam, 0);
      };
    };

    var DEFAULT_OPTIONS$7 = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      offset: 1
    };
    var createConstantSourceNodeConstructor = function createConstantSourceNodeConstructor(createAudioParam, createConstantSourceNodeRendererFactory, createNativeConstantSourceNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(ConstantSourceNode, _noneAudioDestination);

          function ConstantSourceNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$7;

            _classCallCheck(this, ConstantSourceNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$7, options);
            var nativeConstantSourceNode = createNativeConstantSourceNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var constantSourceNodeRenderer = isOffline ? createConstantSourceNodeRendererFactory() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(ConstantSourceNode).call(this, context, nativeConstantSourceNode, constantSourceNodeRenderer));
            _this._constantSourceNodeRenderer = constantSourceNodeRenderer;
            _this._nativeConstantSourceNode = nativeConstantSourceNode;
            /*
             * Bug #62 & #74: Edge & Safari do not support ConstantSourceNodes and do not export the correct values for maxValue and
             * minValue for GainNodes.
             */

            _this._offset = createAudioParam(context, isOffline, nativeConstantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._onended = null;
            return _this;
          }

          _createClass(ConstantSourceNode, [{
            key: "start",
            value: function start() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeConstantSourceNode.start(when);

              if (this._constantSourceNodeRenderer !== null) {
                this._constantSourceNodeRenderer.start = when;
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeConstantSourceNode.stop(when);

              if (this._constantSourceNodeRenderer !== null) {
                this._constantSourceNodeRenderer.stop = when;
              }
            }
          }, {
            key: "offset",
            get: function get() {
              return this._offset;
            }
          }, {
            key: "onended",
            get: function get() {
              return this._onended;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeConstantSourceNode.onended = wrappedListener;
              var nativeOnEnded = this._nativeConstantSourceNode.onended;
              this._onended = nativeOnEnded === wrappedListener ? value : nativeOnEnded;
            }
          }]);

          return ConstantSourceNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createConstantSourceNodeRendererFactory = function createConstantSourceNodeRendererFactory(createNativeConstantSourceNode) {
      return function () {
        var nativeConstantSourceNodePromise = null;
        var start = null;
        var stop = null;

        var createConstantSourceNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeConstantSourceNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeConstantSourceNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeConstantSourceNode was not constructed on the same OfflineAudioContext it needs to be created
                     * again.
                     */

                    if (isOwnedByContext(nativeConstantSourceNode, nativeOfflineAudioContext)) {
                      _context.next = 10;
                      break;
                    }

                    options = {
                      channelCount: nativeConstantSourceNode.channelCount,
                      channelCountMode: nativeConstantSourceNode.channelCountMode,
                      channelInterpretation: nativeConstantSourceNode.channelInterpretation,
                      offset: nativeConstantSourceNode.offset.value
                    };
                    nativeConstantSourceNode = createNativeConstantSourceNode(nativeOfflineAudioContext, options);

                    if (start !== null) {
                      nativeConstantSourceNode.start(start);
                    }

                    if (stop !== null) {
                      nativeConstantSourceNode.stop(stop);
                    }

                    _context.next = 8;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);

                  case 8:
                    _context.next = 12;
                    break;

                  case 10:
                    _context.next = 12;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.offset);

                  case 12:
                    _context.next = 14;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConstantSourceNode);

                  case 14:
                    return _context.abrupt("return", nativeConstantSourceNode);

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createConstantSourceNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          set start(value) {
            start = value;
          },

          set stop(value) {
            stop = value;
          },

          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeConstantSourceNodePromise === null) {
              nativeConstantSourceNodePromise = createConstantSourceNode(proxy, nativeOfflineAudioContext);
            }

            return nativeConstantSourceNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$8 = {
      buffer: null,
      channelCount: 2,
      channelCountMode: 'clamped-max',
      channelInterpretation: 'speakers',
      disableNormalization: false
    };
    var createConvolverNodeConstructor = function createConvolverNodeConstructor(createConvolverNodeRenderer, createNativeConvolverNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(ConvolverNode, _noneAudioDestination);

          function ConvolverNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$8;

            _classCallCheck(this, ConvolverNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$8, options);
            var nativeConvolverNode = createNativeConvolverNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var convolverNodeRenderer = isOffline ? createConvolverNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(ConvolverNode).call(this, context, nativeConvolverNode, convolverNodeRenderer));
            _this._isBufferNullified = false;
            _this._nativeConvolverNode = nativeConvolverNode;
            return _this;
          }

          _createClass(ConvolverNode, [{
            key: "buffer",
            get: function get() {
              if (this._isBufferNullified) {
                return null;
              }

              return this._nativeConvolverNode.buffer;
            },
            set: function set(value) {
              this._nativeConvolverNode.buffer = value; // Bug #115: Safari does not allow to set the buffer to null.
              // @todo Create a new internal nativeConvolverNode.

              this._isBufferNullified = value === null && this._nativeConvolverNode.buffer !== null;
            }
          }, {
            key: "normalize",
            get: function get() {
              return this._nativeConvolverNode.normalize;
            },
            set: function set(value) {
              this._nativeConvolverNode.normalize = value;
            }
          }]);

          return ConvolverNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createConvolverNodeRendererFactory = function createConvolverNodeRendererFactory(createNativeConvolverNode) {
      return function () {
        var nativeConvolverNodePromise = null;

        var createConvolverNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeConvolverNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeConvolverNode = getNativeAudioNode(proxy); // If the initially used nativeConvolverNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeConvolverNode, nativeOfflineAudioContext)) {
                      options = {
                        buffer: nativeConvolverNode.buffer,
                        channelCount: nativeConvolverNode.channelCount,
                        channelCountMode: nativeConvolverNode.channelCountMode,
                        channelInterpretation: nativeConvolverNode.channelInterpretation,
                        disableNormalization: !nativeConvolverNode.normalize
                      };
                      nativeConvolverNode = createNativeConvolverNode(nativeOfflineAudioContext, options);
                    }

                    _context.next = 4;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConvolverNode);

                  case 4:
                    return _context.abrupt("return", nativeConvolverNode);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createConvolverNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeConvolverNodePromise === null) {
              nativeConvolverNodePromise = createConvolverNode(proxy, nativeOfflineAudioContext);
            }

            return nativeConvolverNodePromise;
          }
        };
      };
    };

    var createCreateNativeOfflineAudioContext = function createCreateNativeOfflineAudioContext(createNotSupportedError, nativeOfflineAudioContextConstructor) {
      return function (numberOfChannels, length, sampleRate) {
        if (nativeOfflineAudioContextConstructor === null) {
          throw new Error(); // @todo
        }

        try {
          return new nativeOfflineAudioContextConstructor(numberOfChannels, length, sampleRate);
        } catch (err) {
          // Bug #143, #144 & #146: Safari throws a SyntaxError when numberOfChannels, length or sampleRate are invalid.
          // Bug #143: Edge throws a SyntaxError when numberOfChannels or length are invalid.
          // Bug #145: Edge throws an IndexSizeError when sampleRate is zero.
          if (err.name === 'IndexSizeError' || err.name === 'SyntaxError') {
            throw createNotSupportedError();
          }

          throw err; // tslint:disable-line:rxjs-throw-error
        }
      };
    };

    var createDataCloneError = function createDataCloneError() {
      try {
        return new DOMException('', 'DataCloneError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 25;
        err.name = 'DataCloneError';
        return err;
      }
    };

    var detachArrayBuffer = function detachArrayBuffer(arrayBuffer) {
      var _ref = new MessageChannel(),
          port1 = _ref.port1;

      port1.postMessage(arrayBuffer, [arrayBuffer]);
    };

    var createDecodeAudioData = function createDecodeAudioData(createDataCloneError, createEncodingError, nativeOfflineAudioContextConstructor, isNativeContext, isNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsSubarraySupport, testPromiseSupport) {
      return function (anyContext, audioData) {
        var nativeContext = isNativeContext(anyContext) ? anyContext : getNativeContext(anyContext); // Bug #43: Only Chrome and Opera do throw a DataCloneError.

        if (DETACHED_ARRAY_BUFFERS.has(audioData)) {
          var err = createDataCloneError();
          return Promise.reject(err);
        } // The audioData parameter maybe of a type which can't be added to a WeakSet.


        try {
          DETACHED_ARRAY_BUFFERS.add(audioData);
        } catch (_a) {} // Ignore errors.
        // Bug #21: Safari does not support promises yet.


        if (cacheTestResult(testPromiseSupport, function () {
          return testPromiseSupport(nativeContext);
        })) {
          // Bug #101: Edge does not decode something on a closed OfflineAudioContext.
          var nativeContextOrBackupNativeContext = nativeContext.state === 'closed' && nativeOfflineAudioContextConstructor !== null && isNativeOfflineAudioContext(nativeContext) ? new nativeOfflineAudioContextConstructor(1, 1, nativeContext.sampleRate) : nativeContext;
          var promise = nativeContextOrBackupNativeContext.decodeAudioData(audioData).catch(function (err) {
            // Bug #27: Edge is rejecting invalid arrayBuffers with a DOMException.
            if (err instanceof DOMException && err.name === 'NotSupportedError') {
              throw new TypeError();
            }

            throw err;
          });
          return promise.then(function (audioBuffer) {
            // Bug #42: Firefox does not yet fully support copyFromChannel() and copyToChannel().
            if (!cacheTestResult(testAudioBufferCopyChannelMethodsSubarraySupport, function () {
              return testAudioBufferCopyChannelMethodsSubarraySupport(audioBuffer);
            })) {
              wrapAudioBufferCopyChannelMethodsSubarray(audioBuffer);
            }

            return audioBuffer;
          });
        } // Bug #21: Safari does not return a Promise yet.


        return new Promise(function (resolve, reject) {
          var complete = function complete() {
            // Bug #133: Safari does neuter the ArrayBuffer.
            try {
              detachArrayBuffer(audioData);
            } catch (
            /* Ignore errors. */
            _a) {
              /* Ignore errors. */
            }
          };

          var fail = function fail(err) {
            reject(err);
            complete();
          }; // Bug #26: Safari throws a synchronous error.


          try {
            // Bug #1: Safari requires a successCallback.
            nativeContext.decodeAudioData(audioData, function (audioBuffer) {
              // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
              // Bug #100: Safari does throw a wrong error when calling getChannelData() with an out-of-bounds value.
              if (typeof audioBuffer.copyFromChannel !== 'function') {
                wrapAudioBufferCopyChannelMethods(audioBuffer);
                wrapAudioBufferGetChannelDataMethod(audioBuffer);
              }

              complete();
              resolve(audioBuffer);
            }, function (err) {
              // Bug #4: Safari returns null instead of an error.
              if (err === null) {
                fail(createEncodingError());
              } else {
                fail(err);
              }
            });
          } catch (err) {
            fail(err);
          }
        });
      };
    };

    var DEFAULT_OPTIONS$9 = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      delayTime: 0,
      maxDelayTime: 1
    };
    var createDelayNodeConstructor = function createDelayNodeConstructor(createAudioParam, createDelayNodeRenderer, createNativeDelayNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(DelayNode, _noneAudioDestination);

          function DelayNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$9;

            _classCallCheck(this, DelayNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$9, options);
            var nativeDelayNode = createNativeDelayNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var delayNodeRenderer = isOffline ? createDelayNodeRenderer(mergedOptions.maxDelayTime) : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(DelayNode).call(this, context, nativeDelayNode, delayNodeRenderer)); // @todo Edge does not export the correct values for maxValue and minValue.

            _this._delayTime = createAudioParam(context, isOffline, nativeDelayNode.delayTime, mergedOptions.maxDelayTime, 0);
            return _this;
          }

          _createClass(DelayNode, [{
            key: "delayTime",
            get: function get() {
              return this._delayTime;
            }
          }]);

          return DelayNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createDelayNodeRendererFactory = function createDelayNodeRendererFactory(createNativeDelayNode) {
      return function (maxDelayTime) {
        var nativeDelayNodePromise = null;

        var createDelayNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeDelayNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeDelayNode = getNativeAudioNode(proxy); // If the initially used nativeDelayNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (isOwnedByContext(nativeDelayNode, nativeOfflineAudioContext)) {
                      _context.next = 8;
                      break;
                    }

                    options = {
                      channelCount: nativeDelayNode.channelCount,
                      channelCountMode: nativeDelayNode.channelCountMode,
                      channelInterpretation: nativeDelayNode.channelInterpretation,
                      delayTime: nativeDelayNode.delayTime.value,
                      maxDelayTime: maxDelayTime
                    };
                    nativeDelayNode = createNativeDelayNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);

                  case 6:
                    _context.next = 10;
                    break;

                  case 8:
                    _context.next = 10;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.delayTime);

                  case 10:
                    _context.next = 12;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeDelayNode);

                  case 12:
                    return _context.abrupt("return", nativeDelayNode);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createDelayNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeDelayNodePromise === null) {
              nativeDelayNodePromise = createDelayNode(proxy, nativeOfflineAudioContext);
            }

            return nativeDelayNodePromise;
          }
        };
      };
    };

    var getOutputAudioNodeAtIndex = function getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output) {
      var outputAudioNode = outputAudioNodes[output];

      if (outputAudioNode === undefined) {
        throw createIndexSizeError();
      }

      return outputAudioNode;
    };

    var createDisconnectMultipleOutputs = function createDisconnectMultipleOutputs(createIndexSizeError) {
      return function (outputAudioNodes) {
        var outputOrDestinationAudioNodeOrAudioParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        var output = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
        var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        if (outputOrDestinationAudioNodeOrAudioParam === undefined) {
          return outputAudioNodes.forEach(function (outputAudioNode) {
            return outputAudioNode.disconnect();
          });
        }

        if (typeof outputOrDestinationAudioNodeOrAudioParam === 'number') {
          return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, outputOrDestinationAudioNodeOrAudioParam).disconnect();
        }

        if (isNativeAudioNode(outputOrDestinationAudioNodeOrAudioParam)) {
          if (output === undefined) {
            return outputAudioNodes.forEach(function (outputAudioNode) {
              return outputAudioNode.disconnect(outputOrDestinationAudioNodeOrAudioParam);
            });
          }

          if (input === undefined) {
            return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output).disconnect(outputOrDestinationAudioNodeOrAudioParam, 0);
          }

          return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output).disconnect(outputOrDestinationAudioNodeOrAudioParam, 0, input);
        }

        if (output === undefined) {
          return outputAudioNodes.forEach(function (outputAudioNode) {
            return outputAudioNode.disconnect(outputOrDestinationAudioNodeOrAudioParam);
          });
        }

        return getOutputAudioNodeAtIndex(createIndexSizeError, outputAudioNodes, output).disconnect(outputOrDestinationAudioNodeOrAudioParam, 0);
      };
    };

    var DEFAULT_OPTIONS$a = {
      attack: 0.003,
      channelCount: 2,
      channelCountMode: 'clamped-max',
      channelInterpretation: 'speakers',
      knee: 30,
      ratio: 12,
      release: 0.25,
      threshold: -24
    };
    var createDynamicsCompressorNodeConstructor = function createDynamicsCompressorNodeConstructor(createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(DynamicsCompressorNode, _noneAudioDestination);

          function DynamicsCompressorNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$a;

            _classCallCheck(this, DynamicsCompressorNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$a, options);
            var nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var dynamicsCompressorNodeRenderer = isOffline ? createDynamicsCompressorNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(DynamicsCompressorNode).call(this, context, nativeDynamicsCompressorNode, dynamicsCompressorNodeRenderer)); // Bug #110: Edge does not export the correct values for maxValue and minValue.

            _this._attack = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.attack, 1, 0);
            _this._knee = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.knee, 40, 0);
            _this._nativeDynamicsCompressorNode = nativeDynamicsCompressorNode;
            _this._ratio = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.ratio, 20, 1);
            _this._release = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.release, 1, 0);
            _this._threshold = createAudioParam(context, isOffline, nativeDynamicsCompressorNode.threshold, 0, -100);
            return _this;
          }

          _createClass(DynamicsCompressorNode, [{
            key: "attack",
            get: function get() {
              return this._attack;
            }
            /*
             * Bug #108: Only Chrome and Opera disallow a channelCount of three and above yet which is why the getter and setter needs to be
             * overwritten here.
             */

          }, {
            key: "channelCount",
            get: function get() {
              return this._nativeDynamicsCompressorNode.channelCount;
            },
            set: function set(value) {
              var previousChannelCount = this._nativeDynamicsCompressorNode.channelCount;
              this._nativeDynamicsCompressorNode.channelCount = value;

              if (value > 2) {
                this._nativeDynamicsCompressorNode.channelCount = previousChannelCount;
                throw createNotSupportedError();
              }
            }
            /*
             * Bug #109: Only Chrome and Opera disallow a channelCountMode of 'max' yet which is why the getter and setter needs to be
             * overwritten here.
             */

          }, {
            key: "channelCountMode",
            get: function get() {
              return this._nativeDynamicsCompressorNode.channelCountMode;
            },
            set: function set(value) {
              var previousChannelCount = this._nativeDynamicsCompressorNode.channelCountMode;
              this._nativeDynamicsCompressorNode.channelCountMode = value;

              if (value === 'max') {
                this._nativeDynamicsCompressorNode.channelCountMode = previousChannelCount;
                throw createNotSupportedError();
              }
            }
          }, {
            key: "knee",
            get: function get() {
              return this._knee;
            }
          }, {
            key: "ratio",
            get: function get() {
              return this._ratio;
            }
          }, {
            key: "reduction",
            get: function get() {
              // Bug #111: Safari returns an AudioParam instead of a number.
              if (typeof this._nativeDynamicsCompressorNode.reduction.value === 'number') {
                return this._nativeDynamicsCompressorNode.reduction.value;
              }

              return this._nativeDynamicsCompressorNode.reduction;
            }
          }, {
            key: "release",
            get: function get() {
              return this._release;
            }
          }, {
            key: "threshold",
            get: function get() {
              return this._threshold;
            }
          }]);

          return DynamicsCompressorNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createDynamicsCompressorNodeRendererFactory = function createDynamicsCompressorNodeRendererFactory(createNativeDynamicsCompressorNode) {
      return function () {
        var nativeDynamicsCompressorNodePromise = null;

        var createDynamicsCompressorNodes =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeDynamicsCompressorNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeDynamicsCompressorNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeDynamicsCompressorNode was not constructed on the same OfflineAudioContext it needs to be
                     * created again.
                     */

                    if (isOwnedByContext(nativeDynamicsCompressorNode, nativeOfflineAudioContext)) {
                      _context.next = 16;
                      break;
                    }

                    options = {
                      attack: nativeDynamicsCompressorNode.attack.value,
                      channelCount: nativeDynamicsCompressorNode.channelCount,
                      channelCountMode: nativeDynamicsCompressorNode.channelCountMode,
                      channelInterpretation: nativeDynamicsCompressorNode.channelInterpretation,
                      knee: nativeDynamicsCompressorNode.knee.value,
                      ratio: nativeDynamicsCompressorNode.ratio.value,
                      release: nativeDynamicsCompressorNode.release.value,
                      threshold: nativeDynamicsCompressorNode.threshold.value
                    };
                    nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);

                  case 6:
                    _context.next = 8;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);

                  case 8:
                    _context.next = 10;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);

                  case 10:
                    _context.next = 12;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);

                  case 12:
                    _context.next = 14;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);

                  case 14:
                    _context.next = 26;
                    break;

                  case 16:
                    _context.next = 18;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.attack);

                  case 18:
                    _context.next = 20;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.knee);

                  case 20:
                    _context.next = 22;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.ratio);

                  case 22:
                    _context.next = 24;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.release);

                  case 24:
                    _context.next = 26;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.threshold);

                  case 26:
                    _context.next = 28;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeDynamicsCompressorNode);

                  case 28:
                    return _context.abrupt("return", nativeDynamicsCompressorNode);

                  case 29:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createDynamicsCompressorNodes(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeDynamicsCompressorNodePromise === null) {
              nativeDynamicsCompressorNodePromise = createDynamicsCompressorNodes(proxy, nativeOfflineAudioContext);
            }

            return nativeDynamicsCompressorNodePromise;
          }
        };
      };
    };

    var createEncodingError = function createEncodingError() {
      try {
        return new DOMException('', 'EncodingError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 0;
        err.name = 'EncodingError';
        return err;
      }
    };

    var createFetchSource = function createFetchSource(createAbortError) {
      return (
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(url) {
            var response;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return fetch(url);

                  case 3:
                    response = _context.sent;

                    if (!response.ok) {
                      _context.next = 6;
                      break;
                    }

                    return _context.abrupt("return", response.text());

                  case 6:
                    _context.next = 10;
                    break;

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);

                  case 10:
                    throw createAbortError();

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 8]]);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    };

    var DEFAULT_OPTIONS$b = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      gain: 1
    };
    var createGainNodeConstructor = function createGainNodeConstructor(createAudioParam, createGainNodeRenderer, createNativeGainNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(GainNode, _noneAudioDestination);

          function GainNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$b;

            _classCallCheck(this, GainNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$b, options);
            var nativeGainNode = createNativeGainNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var gainNodeRenderer = isOffline ? createGainNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(GainNode).call(this, context, nativeGainNode, gainNodeRenderer)); // Bug #74: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._gain = createAudioParam(context, isOffline, nativeGainNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            return _this;
          }

          _createClass(GainNode, [{
            key: "gain",
            get: function get() {
              return this._gain;
            }
          }]);

          return GainNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createGainNodeRendererFactory = function createGainNodeRendererFactory(createNativeGainNode) {
      return function () {
        var nativeGainNodePromise = null;

        var createGainNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeGainNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeGainNode = getNativeAudioNode(proxy); // If the initially used nativeGainNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (isOwnedByContext(nativeGainNode, nativeOfflineAudioContext)) {
                      _context.next = 8;
                      break;
                    }

                    options = {
                      channelCount: nativeGainNode.channelCount,
                      channelCountMode: nativeGainNode.channelCountMode,
                      channelInterpretation: nativeGainNode.channelInterpretation,
                      gain: nativeGainNode.gain.value
                    };
                    nativeGainNode = createNativeGainNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);

                  case 6:
                    _context.next = 10;
                    break;

                  case 8:
                    _context.next = 10;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.gain);

                  case 10:
                    _context.next = 12;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeGainNode);

                  case 12:
                    return _context.abrupt("return", nativeGainNode);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createGainNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeGainNodePromise === null) {
              nativeGainNodePromise = createGainNode(proxy, nativeOfflineAudioContext);
            }

            return nativeGainNodePromise;
          }
        };
      };
    };

    var createGetBackupNativeContext = function createGetBackupNativeContext(isNativeOfflineAudioContext, nativeAudioContextConstructor, nativeOfflineAudioContextConstructor) {
      return function (nativeContext) {
        /*
         * Bug #50: Only Safari does currently allow to create AudioNodes on a closed context yet which is why there needs to be no
         * backupNativeContext in that case.
         */
        if (nativeContext.state === 'closed' && !window.hasOwnProperty('webkitAudioContext')) {
          if (isNativeOfflineAudioContext(nativeContext)) {
            var backupNativeContext = BACKUP_NATIVE_CONTEXT_STORE.get(nativeContext);

            if (backupNativeContext !== undefined) {
              return backupNativeContext;
            }

            if (nativeOfflineAudioContextConstructor !== null) {
              // @todo Copy the attached AudioWorkletProcessors and other settings.
              var bckpNtveCntxt = new nativeOfflineAudioContextConstructor(1, 1, 44100);
              BACKUP_NATIVE_CONTEXT_STORE.set(nativeContext, bckpNtveCntxt);
              return bckpNtveCntxt;
            }
          } else {
            var _backupNativeContext = BACKUP_NATIVE_CONTEXT_STORE.get(nativeContext);

            if (_backupNativeContext !== undefined) {
              return _backupNativeContext;
            }

            if (nativeAudioContextConstructor !== null) {
              // @todo Copy the attached AudioWorkletProcessors and other settings.
              var _bckpNtveCntxt = new nativeAudioContextConstructor();

              BACKUP_NATIVE_CONTEXT_STORE.set(nativeContext, _bckpNtveCntxt);
              return _bckpNtveCntxt;
            }
          }
        }

        return null;
      };
    };

    var createInvalidAccessError = function createInvalidAccessError() {
      try {
        return new DOMException('', 'InvalidAccessError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 15;
        err.name = 'InvalidAccessError';
        return err;
      }
    };

    var wrapIIRFilterNodeGetFrequencyResponseMethod = function wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode) {
      nativeIIRFilterNode.getFrequencyResponse = function (getFrequencyResponse) {
        return function (frequencyHz, magResponse, phaseResponse) {
          if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
            throw createInvalidAccessError();
          }

          return getFrequencyResponse.call(nativeIIRFilterNode, frequencyHz, magResponse, phaseResponse);
        };
      }(nativeIIRFilterNode.getFrequencyResponse);
    };

    var DEFAULT_OPTIONS$c = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers'
    };
    var createIIRFilterNodeConstructor = function createIIRFilterNodeConstructor(createNativeIIRFilterNode, createIIRFilterNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(IIRFilterNode, _noneAudioDestination);

          function IIRFilterNode(context, options) {
            var _this;

            _classCallCheck(this, IIRFilterNode);

            var nativeContext = getNativeContext(context);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$c, options);
            var nativeIIRFilterNode = createNativeIIRFilterNode(nativeContext, isOffline ? null : context.baseLatency, mergedOptions);
            var iirFilterNodeRenderer = isOffline ? createIIRFilterNodeRenderer(mergedOptions.feedback, mergedOptions.feedforward) : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(IIRFilterNode).call(this, context, nativeIIRFilterNode, iirFilterNodeRenderer)); // Bug #23 & #24: FirefoxDeveloper does not throw an InvalidAccessError.
            // @todo Write a test which allows other browsers to remain unpatched.

            wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);
            _this._nativeIIRFilterNode = nativeIIRFilterNode;
            return _this;
          }

          _createClass(IIRFilterNode, [{
            key: "getFrequencyResponse",
            value: function getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
              return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
            }
          }]);

          return IIRFilterNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    // This implementation as shamelessly inspired by source code of
    // tslint:disable-next-line:max-line-length
    // {@link https://chromium.googlesource.com/chromium/src.git/+/master/third_party/WebKit/Source/platform/audio/IIRFilter.cpp|Chromium's IIRFilter}.
    var filterBuffer = function filterBuffer(feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, bufferIndex, bufferLength, input, output) {
      var inputLength = input.length;
      var i = bufferIndex;

      for (var j = 0; j < inputLength; j += 1) {
        var y = feedforward[0] * input[j];

        for (var k = 1; k < minLength; k += 1) {
          var x = i - k & bufferLength - 1; // tslint:disable-line:no-bitwise

          y += feedforward[k] * xBuffer[x];
          y -= feedback[k] * yBuffer[x];
        }

        for (var _k = minLength; _k < feedforwardLength; _k += 1) {
          y += feedforward[_k] * xBuffer[i - _k & bufferLength - 1]; // tslint:disable-line:no-bitwise
        }

        for (var _k2 = minLength; _k2 < feedbackLength; _k2 += 1) {
          y -= feedback[_k2] * yBuffer[i - _k2 & bufferLength - 1]; // tslint:disable-line:no-bitwise
        }

        xBuffer[i] = input[j];
        yBuffer[i] = y;
        i = i + 1 & bufferLength - 1; // tslint:disable-line:no-bitwise

        output[j] = y;
      }

      return i;
    };

    var filterFullBuffer = function filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward) {
      var feedbackLength = feedback.length;
      var feedforwardLength = feedforward.length;
      var minLength = Math.min(feedbackLength, feedforwardLength);

      if (feedback[0] !== 1) {
        for (var i = 0; i < feedbackLength; i += 1) {
          feedforward[i] /= feedback[0];
        }

        for (var _i = 1; _i < feedforwardLength; _i += 1) {
          feedback[_i] /= feedback[0];
        }
      }

      var bufferLength = 32;
      var xBuffer = new Float32Array(bufferLength);
      var yBuffer = new Float32Array(bufferLength);
      var filteredBuffer = nativeOfflineAudioContext.createBuffer(renderedBuffer.numberOfChannels, renderedBuffer.length, renderedBuffer.sampleRate);
      var numberOfChannels = renderedBuffer.numberOfChannels;

      for (var _i2 = 0; _i2 < numberOfChannels; _i2 += 1) {
        var input = renderedBuffer.getChannelData(_i2);
        var output = filteredBuffer.getChannelData(_i2); // @todo Add a test which checks support for TypedArray.prototype.fill().

        xBuffer.fill(0);
        yBuffer.fill(0);
        filterBuffer(feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, 0, bufferLength, input, output);
      }

      return filteredBuffer;
    };

    var createIIRFilterNodeRendererFactory = function createIIRFilterNodeRendererFactory(createNativeAudioBufferSourceNode, createNativeAudioNode, nativeOfflineAudioContextConstructor, renderNativeOfflineAudioContext) {
      return function (feedback, feedforward) {
        var nativeAudioNodePromise = null;

        var createAudioNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeAudioNode, partialOfflineAudioContext, renderedBuffer, audioBufferSourceNode;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeAudioNode = getNativeAudioNode(proxy);

                    if (!(nativeOfflineAudioContextConstructor === null)) {
                      _context.next = 3;
                      break;
                    }

                    throw new Error();

                  case 3:
                    if (!(nativeOfflineAudioContext.createIIRFilter === undefined)) {
                      _context.next = 16;
                      break;
                    }

                    partialOfflineAudioContext = new nativeOfflineAudioContextConstructor( // Bug #47: The AudioDestinationNode in Edge and Safari gets not initialized correctly.
                    proxy.context.destination.channelCount, // Bug #17: Safari does not yet expose the length.
                    proxy.context.length, nativeOfflineAudioContext.sampleRate);
                    _context.next = 7;
                    return renderInputsOfAudioNode(proxy, partialOfflineAudioContext, partialOfflineAudioContext.destination);

                  case 7:
                    _context.next = 9;
                    return renderNativeOfflineAudioContext(partialOfflineAudioContext);

                  case 9:
                    renderedBuffer = _context.sent;
                    audioBufferSourceNode = createNativeAudioBufferSourceNode(nativeOfflineAudioContext);
                    audioBufferSourceNode.buffer = filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward);
                    audioBufferSourceNode.start(0);
                    return _context.abrupt("return", audioBufferSourceNode);

                  case 16:
                    // If the initially used nativeAudioNode was not constructed on the same OfflineAudioContext it needs to be created again.
                    if (!isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext)) {
                      nativeAudioNode = createNativeAudioNode(nativeOfflineAudioContext, function (ntvCntxt) {
                        return ntvCntxt.createIIRFilter(feedforward, feedback);
                      });
                    }

                    _context.next = 19;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);

                  case 19:
                    return _context.abrupt("return", nativeAudioNode);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createAudioNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeAudioNodePromise === null) {
              nativeAudioNodePromise = createAudioNode(proxy, nativeOfflineAudioContext);
            }

            return nativeAudioNodePromise;
          }
        };
      };
    };

    var createIsNativeContext = function createIsNativeContext(isNativeOfflineAudioContext, nativeAudioContextConstructor) {
      return function (anyContext) {
        if (nativeAudioContextConstructor === null) {
          throw new Error('The native AudioContext constructor is missing.');
        }

        return anyContext instanceof nativeAudioContextConstructor || isNativeOfflineAudioContext(anyContext);
      };
    };

    var createIsNativeOfflineAudioContext = function createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor) {
      return function (anyContext) {
        if (nativeOfflineAudioContextConstructor === null) {
          throw new Error('The native OfflineAudioContext constructor is missing.');
        }

        return anyContext instanceof nativeOfflineAudioContextConstructor;
      };
    };

    var createIsSecureContext = function createIsSecureContext(window) {
      return window !== null && window.isSecureContext;
    };

    var createIsSupportedPromise = function createIsSupportedPromise(browsernizr, testAudioContextCloseMethodSupport, testAudioContextDecodeAudioDataMethodTypeErrorSupport, testAudioContextOptionsSupport, testAudioWorkletProcessorNoOutputsSupport, testChannelMergerNodeSupport, testChannelSplitterNodeChannelCountSupport, testConstantSourceNodeAccurateSchedulingSupport, testConvolverNodeBufferReassignabilitySupport, testIsSecureContextSupport, testStereoPannerNodeDefaultValueSupport, testTransferablesSupport) {
      if (browsernizr.promises && browsernizr.typedarrays && browsernizr.webaudio && cacheTestResult(testAudioContextCloseMethodSupport, testAudioContextCloseMethodSupport) && cacheTestResult(testAudioContextOptionsSupport, testAudioContextOptionsSupport) && cacheTestResult(testChannelSplitterNodeChannelCountSupport, testChannelSplitterNodeChannelCountSupport) && cacheTestResult(testConstantSourceNodeAccurateSchedulingSupport, testConstantSourceNodeAccurateSchedulingSupport) && cacheTestResult(testConvolverNodeBufferReassignabilitySupport, testConvolverNodeBufferReassignabilitySupport) && cacheTestResult(testIsSecureContextSupport, testIsSecureContextSupport)) {
        return Promise.all([cacheTestResult(testAudioContextDecodeAudioDataMethodTypeErrorSupport, testAudioContextDecodeAudioDataMethodTypeErrorSupport), cacheTestResult(testAudioWorkletProcessorNoOutputsSupport, testAudioWorkletProcessorNoOutputsSupport), cacheTestResult(testChannelMergerNodeSupport, testChannelMergerNodeSupport), cacheTestResult(testStereoPannerNodeDefaultValueSupport, testStereoPannerNodeDefaultValueSupport), cacheTestResult(testTransferablesSupport, testTransferablesSupport)]).then(function (results) {
          return results.every(function (result) {
            return result;
          });
        });
      }

      return Promise.resolve(false);
    };

    var getNativeAudioContext = function getNativeAudioContext(audioContext) {
      var nativeContext = CONTEXT_STORE.get(audioContext);

      if (nativeContext === undefined) {
        throw createInvalidStateError();
      }

      return nativeContext;
    };

    var DEFAULT_OPTIONS$d = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers'
    };
    var createMediaElementAudioSourceNodeConstructor = function createMediaElementAudioSourceNodeConstructor(createNativeMediaElementAudioSourceNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(MediaElementAudioSourceNode, _noneAudioDestination);

          function MediaElementAudioSourceNode(context, options) {
            var _this;

            _classCallCheck(this, MediaElementAudioSourceNode);

            var nativeContext = getNativeAudioContext(context);

            if (isNativeOfflineAudioContext(nativeContext)) {
              throw createNotSupportedError();
            }

            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$d, options);
            var nativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNode(nativeContext, mergedOptions);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(MediaElementAudioSourceNode).call(this, context, nativeMediaElementAudioSourceNode, null)); // Bug #63: Edge & Firefox do not expose the mediaElement yet.

            _this._mediaElement = mergedOptions.mediaElement;
            _this._nativeMediaElementAudioSourceNode = nativeMediaElementAudioSourceNode;
            return _this;
          }

          _createClass(MediaElementAudioSourceNode, [{
            key: "mediaElement",
            get: function get() {
              return this._nativeMediaElementAudioSourceNode.mediaElement === undefined ? this._mediaElement : this._nativeMediaElementAudioSourceNode.mediaElement;
            }
          }]);

          return MediaElementAudioSourceNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var DEFAULT_OPTIONS$e = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers'
    };
    var createMediaStreamAudioSourceNodeConstructor = function createMediaStreamAudioSourceNodeConstructor(createNativeMediaStreamAudioSourceNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(MediaStreamAudioSourceNode, _noneAudioDestination);

          function MediaStreamAudioSourceNode(context, options) {
            var _this;

            _classCallCheck(this, MediaStreamAudioSourceNode);

            var nativeContext = getNativeAudioContext(context);

            if (isNativeOfflineAudioContext(nativeContext)) {
              throw createNotSupportedError();
            }

            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$e, options);
            var nativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNode(nativeContext, mergedOptions);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(MediaStreamAudioSourceNode).call(this, context, nativeMediaStreamAudioSourceNode, null)); // Bug #63: Edge & Firefox do not expose the mediaStream yet.

            _this._mediaStream = mergedOptions.mediaStream;
            _this._nativeMediaStreamAudioSourceNode = nativeMediaStreamAudioSourceNode;
            return _this;
          }

          _createClass(MediaStreamAudioSourceNode, [{
            key: "mediaStream",
            get: function get() {
              return this._nativeMediaStreamAudioSourceNode.mediaStream === undefined ? this._mediaStream : this._nativeMediaStreamAudioSourceNode.mediaStream;
            }
          }]);

          return MediaStreamAudioSourceNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createMinimalAudioContextConstructor = function createMinimalAudioContextConstructor(createInvalidStateError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor) {
      return (
        /*#__PURE__*/
        function (_minimalBaseAudioCont) {
          _inherits(MinimalAudioContext, _minimalBaseAudioCont);

          function MinimalAudioContext() {
            var _this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, MinimalAudioContext);

            if (nativeAudioContextConstructor === null) {
              throw new Error(); // @todo
            }

            var nativeAudioContext = new nativeAudioContextConstructor(options); // Bug #131 Safari returns null when there are four other AudioContexts running already.

            if (nativeAudioContext === null) {
              throw createUnknownError();
            } // Bug #51 Only Chrome and Opera throw an error if the given latencyHint is invalid.


            if (!isValidLatencyHint(options.latencyHint)) {
              throw new TypeError("The provided value '".concat(options.latencyHint, "' is not a valid enum value of type AudioContextLatencyCategory."));
            }

            _this = _possibleConstructorReturn(this, _getPrototypeOf(MinimalAudioContext).call(this, nativeAudioContext, nativeAudioContext.destination.channelCount));
            var latencyHint = options.latencyHint;
            var sampleRate = nativeAudioContext.sampleRate; // @todo The values for 'balanced', 'interactive' and 'playback' are just copied from Chrome's implementation.

            _this._baseLatency = typeof nativeAudioContext.baseLatency === 'number' ? nativeAudioContext.baseLatency : latencyHint === 'balanced' ? 512 / sampleRate : latencyHint === 'interactive' || latencyHint === undefined ? 256 / sampleRate : latencyHint === 'playback' ? 1024 / sampleRate :
            /*
             * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
             * ScriptProcessorNode.
             */
            Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate;
            _this._nativeAudioContext = nativeAudioContext;
            _this._state = null;
            /*
             * Bug #34: Chrome and Opera pretend to be running right away, but fire an onstatechange event when the state actually
             * changes to 'running'.
             */

            if (nativeAudioContext.state === 'running') {
              _this._state = 'suspended';

              var revokeState = function revokeState() {
                if (_this._state === 'suspended') {
                  _this._state = null;
                }

                nativeAudioContext.removeEventListener('statechange', revokeState);
              };

              nativeAudioContext.addEventListener('statechange', revokeState);
            }

            return _this;
          }

          _createClass(MinimalAudioContext, [{
            key: "close",
            value: function close() {
              // Bug #35: Firefox does not throw an error if the AudioContext was closed before.
              if (this.state === 'closed') {
                return this._nativeAudioContext.close().then(function () {
                  throw createInvalidStateError();
                });
              } // Bug #34: If the state was set to suspended before it should be revoked now.


              if (this._state === 'suspended') {
                this._state = null;
              }

              return this._nativeAudioContext.close();
              /*
               * Bug #50: Deleting the AudioGraph is currently not possible anymore.
               * ...then(() => deleteAudioGraph(this, this._nativeAudioContext));
               */
            }
          }, {
            key: "resume",
            value: function resume() {
              var _this2 = this;

              if (this._state === 'suspended') {
                return new Promise(function (resolve, reject) {
                  var resolvePromise = function resolvePromise() {
                    _this2._nativeAudioContext.removeEventListener('statechange', resolvePromise);

                    if (_this2._nativeAudioContext.state === 'running') {
                      resolve();
                    } else {
                      _this2.resume().then(resolve, reject);
                    }
                  };

                  _this2._nativeAudioContext.addEventListener('statechange', resolvePromise);
                });
              }

              return this._nativeAudioContext.resume().catch(function (err) {
                // Bug #55: Chrome, Edge and Opera do throw an InvalidAccessError instead of an InvalidStateError.
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined || err.code === 15) {
                  throw createInvalidStateError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "suspend",
            value: function suspend() {
              return this._nativeAudioContext.suspend().catch(function (err) {
                // Bug #56: Safari invokes the catch handler but without an error.
                if (err === undefined) {
                  throw createInvalidStateError();
                }

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "baseLatency",
            get: function get() {
              return this._baseLatency;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state !== null ? this._state : this._nativeAudioContext.state;
            }
          }]);

          return MinimalAudioContext;
        }(minimalBaseAudioContextConstructor)
      );
    };

    var createMinimalBaseAudioContextConstructor = function createMinimalBaseAudioContextConstructor(audioDestinationNodeConstructor, createAudioListener) {
      return (
        /*#__PURE__*/
        function (_EventTarget) {
          _inherits(MinimalBaseAudioContext, _EventTarget);

          function MinimalBaseAudioContext(_nativeContext, numberOfChannels) {
            var _this;

            _classCallCheck(this, MinimalBaseAudioContext);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(MinimalBaseAudioContext).call(this, _nativeContext));
            _this._nativeContext = _nativeContext;
            CONTEXT_STORE.set(_assertThisInitialized(_assertThisInitialized(_this)), _nativeContext); // Bug #93: Edge will set the sampleRate of an AudioContext to zero when it is closed.

            var sampleRate = _nativeContext.sampleRate;
            Object.defineProperty(_nativeContext, 'sampleRate', {
              get: function get() {
                return sampleRate;
              }
            });
            _this._destination = new audioDestinationNodeConstructor(_assertThisInitialized(_assertThisInitialized(_this)), numberOfChannels);
            _this._listener = createAudioListener(_assertThisInitialized(_assertThisInitialized(_this)), _nativeContext);
            _this._onstatechange = null;
            return _this;
          }

          _createClass(MinimalBaseAudioContext, [{
            key: "currentTime",
            get: function get() {
              return this._nativeContext.currentTime;
            }
          }, {
            key: "destination",
            get: function get() {
              return this._destination;
            }
          }, {
            key: "listener",
            get: function get() {
              return this._listener;
            }
          }, {
            key: "onstatechange",
            get: function get() {
              return this._onstatechange;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeContext.onstatechange = wrappedListener;
              var nativeOnStateChange = this._nativeContext.onstatechange;
              this._onstatechange = nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
            }
          }, {
            key: "sampleRate",
            get: function get() {
              return this._nativeContext.sampleRate;
            }
          }, {
            key: "state",
            get: function get() {
              return this._nativeContext.state;
            }
          }]);

          return MinimalBaseAudioContext;
        }(EventTarget)
      );
    };

    var testPromiseSupport = function testPromiseSupport(nativeContext) {
      // This 12 numbers represent the 48 bytes of an empty WAVE file with a single sample.
      var uint32Array = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);

      try {
        // Bug #1: Safari requires a successCallback.
        var promise = nativeContext.decodeAudioData(uint32Array.buffer, function () {// Ignore the success callback.
        });

        if (promise === undefined) {
          return false;
        }

        promise.catch(function () {// Ignore rejected errors.
        });
        return true;
      } catch (_a) {// Ignore errors.
      }

      return false;
    };

    var DEFAULT_OPTIONS$f = {
      numberOfChannels: 1
    };
    var createMinimalOfflineAudioContextConstructor = function createMinimalOfflineAudioContextConstructor(createInvalidStateError, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, _startRendering) {
      return (
        /*#__PURE__*/
        function (_minimalBaseAudioCont) {
          _inherits(MinimalOfflineAudioContext, _minimalBaseAudioCont);

          function MinimalOfflineAudioContext(options) {
            var _this;

            _classCallCheck(this, MinimalOfflineAudioContext);

            var _Object$assign = Object.assign({}, DEFAULT_OPTIONS$f, options),
                length = _Object$assign.length,
                numberOfChannels = _Object$assign.numberOfChannels,
                sampleRate = _Object$assign.sampleRate;

            var nativeOfflineAudioContext = createNativeOfflineAudioContext(numberOfChannels, length, sampleRate); // #21 Safari does not support promises and therefore would fire the statechange event before the promise can be resolved.

            if (!cacheTestResult(testPromiseSupport, function () {
              return testPromiseSupport(nativeOfflineAudioContext);
            })) {
              nativeOfflineAudioContext.addEventListener('statechange', function () {
                var i = 0;

                var delayStateChangeEvent = function delayStateChangeEvent(event) {
                  if (_this._state === 'running') {
                    if (i > 0) {
                      nativeOfflineAudioContext.removeEventListener('statechange', delayStateChangeEvent);
                      event.stopImmediatePropagation();

                      _this._waitForThePromiseToSettle(event);
                    } else {
                      i += 1;
                    }
                  }
                };

                return delayStateChangeEvent;
              }());
            }

            _this = _possibleConstructorReturn(this, _getPrototypeOf(MinimalOfflineAudioContext).call(this, nativeOfflineAudioContext, numberOfChannels));
            _this._length = length;
            _this._nativeOfflineAudioContext = nativeOfflineAudioContext;
            _this._state = null;
            return _this;
          }

          _createClass(MinimalOfflineAudioContext, [{
            key: "startRendering",
            value: function startRendering() {
              var _this2 = this;

              /*
               * Bug #9 & #59: It is theoretically possible that startRendering() will first render a partialOfflineAudioContext. Therefore
               * the state of the nativeOfflineAudioContext might no transition to running immediately.
               */
              if (this._state === 'running') {
                return Promise.reject(createInvalidStateError());
              }

              this._state = 'running';
              return _startRendering(this.destination, this._nativeOfflineAudioContext).then(function (audioBuffer) {
                _this2._state = null;
                /*
                 * Bug #50: Deleting the AudioGraph is currently not possible anymore.
                 * deleteAudioGraph(this, this._nativeOfflineAudioContext);
                 */

                return audioBuffer;
              }) // @todo This could be written more elegantly when Promise.finally() becomes avalaible.
              .catch(function (err) {
                _this2._state = null;
                /*
                 * Bug #50: Deleting the AudioGraph is currently not possible anymore.
                 * deleteAudioGraph(this, this._nativeOfflineAudioContext);
                 */

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "_waitForThePromiseToSettle",
            value: function _waitForThePromiseToSettle(event) {
              var _this3 = this;

              if (this._state === null) {
                this._nativeOfflineAudioContext.dispatchEvent(event);
              } else {
                setTimeout(function () {
                  return _this3._waitForThePromiseToSettle(event);
                });
              }
            }
          }, {
            key: "length",
            get: function get() {
              // Bug #17: Safari does not yet expose the length.
              if (this._nativeOfflineAudioContext.length === undefined) {
                return this._length;
              }

              return this._nativeOfflineAudioContext.length;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
            }
          }]);

          return MinimalOfflineAudioContext;
        }(minimalBaseAudioContextConstructor)
      );
    };

    var assignNativeAudioNodeOption = function assignNativeAudioNodeOption(nativeAudioNode, options, option) {
      var value = options[option];

      if (value !== undefined && value !== nativeAudioNode[option]) {
        nativeAudioNode[option] = value;
      }
    };

    var assignNativeAudioNodeOptions = function assignNativeAudioNodeOptions(nativeAudioNode, options) {
      assignNativeAudioNodeOption(nativeAudioNode, options, 'channelCount');
      assignNativeAudioNodeOption(nativeAudioNode, options, 'channelCountMode');
      assignNativeAudioNodeOption(nativeAudioNode, options, 'channelInterpretation');
    };

    var testAnalyserNodeGetFloatTimeDomainDataMethodSupport = function testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode) {
      return typeof nativeAnalyserNode.getFloatTimeDomainData === 'function';
    };

    var wrapAnalyserNodeGetFloatTimeDomainDataMethod = function wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode) {
      nativeAnalyserNode.getFloatTimeDomainData = function (array) {
        var byteTimeDomainData = new Uint8Array(array.length);
        nativeAnalyserNode.getByteTimeDomainData(byteTimeDomainData);
        var length = Math.max(byteTimeDomainData.length, nativeAnalyserNode.fftSize);

        for (var i = 0; i < length; i += 1) {
          array[i] = (byteTimeDomainData[i] - 128) * 0.0078125;
        }

        return array;
      };
    };

    var createNativeAnalyserNodeFactory = function createNativeAnalyserNodeFactory(createIndexSizeError, createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeAnalyserNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createAnalyser();
        }); // Bug #37: Firefox does not create an AnalyserNode with the default properties.

        assignNativeAudioNodeOptions(nativeAnalyserNode, options); // Bug #118: Safari does not throw an error if maxDecibels is not more than minDecibels.

        if (!(options.maxDecibels > options.minDecibels)) {
          throw createIndexSizeError();
        }

        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'fftSize');
        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'maxDecibels');
        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'minDecibels');
        assignNativeAudioNodeOption(nativeAnalyserNode, options, 'smoothingTimeConstant'); // Bug #36: Safari does not support getFloatTimeDomainData() yet.

        if (!cacheTestResult(testAnalyserNodeGetFloatTimeDomainDataMethodSupport, function () {
          return testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode);
        })) {
          wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode);
        }

        return nativeAnalyserNode;
      };
    };

    var createNativeAudioBufferConstructor = function createNativeAudioBufferConstructor(window) {
      if (window === null) {
        return null;
      }

      if (window.hasOwnProperty('AudioBuffer')) {
        // @todo TypeScript doesn't know yet about the AudioBuffer constructor.
        return window.AudioBuffer;
      }

      return null;
    };

    var assignNativeAudioNodeAudioParamValue = function assignNativeAudioNodeAudioParamValue(nativeAudioNode, options, audioParam) {
      var value = options[audioParam];

      if (value !== undefined && value !== nativeAudioNode[audioParam].value) {
        nativeAudioNode[audioParam].value = value;
      }
    };

    var wrapAudioBufferSourceNodeStartMethodConsecutiveCalls = function wrapAudioBufferSourceNodeStartMethodConsecutiveCalls(nativeAudioBufferSourceNode) {
      nativeAudioBufferSourceNode.start = function (start) {
        var isScheduled = false;
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var duration = arguments.length > 2 ? arguments[2] : undefined;

          if (isScheduled) {
            throw createInvalidStateError();
          }

          start.call(nativeAudioBufferSourceNode, when, offset, duration);
          isScheduled = true;
        };
      }(nativeAudioBufferSourceNode.start);
    };

    var wrapAudioBufferSourceNodeStartMethodDurationParameter = function wrapAudioBufferSourceNodeStartMethodDurationParameter(nativeAudioScheduledSourceNode, nativeContext) {
      var endTime = Number.POSITIVE_INFINITY;
      var stopTime = Number.POSITIVE_INFINITY;

      nativeAudioScheduledSourceNode.start = function (start, stop) {
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.POSITIVE_INFINITY;
          start.call(nativeAudioScheduledSourceNode, when, offset);

          if (duration >= 0 && duration < Number.POSITIVE_INFINITY) {
            var actualStartTime = Math.max(when, nativeContext.currentTime); // @todo The playbackRate could of course also have been automated and is not always fixed.

            var durationInBufferTime = duration / nativeAudioScheduledSourceNode.playbackRate.value;
            endTime = actualStartTime + durationInBufferTime;
            stop.call(nativeAudioScheduledSourceNode, Math.min(endTime, stopTime));
          }
        };
      }(nativeAudioScheduledSourceNode.start, nativeAudioScheduledSourceNode.stop);

      nativeAudioScheduledSourceNode.stop = function (stop) {
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          stopTime = Math.max(when, nativeContext.currentTime);
          stop.call(nativeAudioScheduledSourceNode, Math.min(endTime, stopTime));
        };
      }(nativeAudioScheduledSourceNode.stop);
    };

    var wrapAudioScheduledSourceNodeStartMethodNegativeParameters = function wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeAudioScheduledSourceNode) {
      nativeAudioScheduledSourceNode.start = function (start) {
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var duration = arguments.length > 2 ? arguments[2] : undefined;

          if (typeof duration === 'number' && duration < 0 || offset < 0 || when < 0) {
            throw new RangeError("The parameters can't be negative.");
          } // @todo TypeScript cannot infer the overloaded signature with 3 arguments yet.


          start.call(nativeAudioScheduledSourceNode, when, offset, duration);
        };
      }(nativeAudioScheduledSourceNode.start);
    };

    var wrapAudioScheduledSourceNodeStopMethodNegativeParameters = function wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioScheduledSourceNode) {
      nativeAudioScheduledSourceNode.stop = function (stop) {
        return function () {
          var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          if (when < 0) {
            throw new RangeError("The parameter can't be negative.");
          }

          stop.call(nativeAudioScheduledSourceNode, when);
        };
      }(nativeAudioScheduledSourceNode.stop);
    };

    var createNativeAudioBufferSourceNodeFactory = function createNativeAudioBufferSourceNodeFactory(createNativeAudioNode, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, testAudioBufferSourceNodeStartMethodDurationParameterSupport, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls) {
      return function (nativeContext) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBufferSource();
        });
        assignNativeAudioNodeOptions(nativeAudioBufferSourceNode, options);
        assignNativeAudioNodeAudioParamValue(nativeAudioBufferSourceNode, options, 'playbackRate'); // Bug #71: Edge does not allow to set the buffer to null.

        assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'buffer'); // @todo assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'detune');

        assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'loop');
        assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'loopEnd');
        assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, 'loopStart'); // Bug #69: Safari does allow calls to start() of an already scheduled AudioBufferSourceNode.

        if (!cacheTestResult(testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, function () {
          return testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport(nativeContext);
        })) {
          wrapAudioBufferSourceNodeStartMethodConsecutiveCalls(nativeAudioBufferSourceNode);
        } // Bug #92: Edge does not respect the duration parameter yet.


        if (!cacheTestResult(testAudioBufferSourceNodeStartMethodDurationParameterSupport, testAudioBufferSourceNodeStartMethodDurationParameterSupport)) {
          wrapAudioBufferSourceNodeStartMethodDurationParameter(nativeAudioBufferSourceNode, nativeContext);
        } // Bug #44: Only Chrome, Firefox & Opera throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStartMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeAudioBufferSourceNode);
        } // Bug #19: Safari does not ignore calls to stop() of an already stopped AudioBufferSourceNode.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, function () {
          return testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(nativeAudioBufferSourceNode, nativeContext);
        } // Bug #44: Only Firefox does throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStopMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioBufferSourceNode);
        }

        return nativeAudioBufferSourceNode;
      };
    };

    var createNativeAudioContextConstructor = function createNativeAudioContextConstructor(window) {
      if (window === null) {
        return null;
      }

      if (window.hasOwnProperty('AudioContext')) {
        return window.AudioContext;
      }

      return window.hasOwnProperty('webkitAudioContext') ? window.webkitAudioContext : null;
    };

    var createNativeAudioDestinationNode = function createNativeAudioDestinationNode(nativeContext, channelCount, isNodeOfNativeOfflineAudioContext) {
      var nativeAudioDestinationNode = nativeContext.destination; // Bug #132: Edge & Safari do not have the correct channelCount.

      if (nativeAudioDestinationNode.channelCount !== channelCount) {
        nativeAudioDestinationNode.channelCount = channelCount;
      } // Bug #83: Edge & Safari do not have the correct channelCountMode.


      if (isNodeOfNativeOfflineAudioContext && nativeAudioDestinationNode.channelCountMode !== 'explicit') {
        nativeAudioDestinationNode.channelCountMode = 'explicit';
      } // Bug #47: The AudioDestinationNode in Edge and Safari does not initialize the maxChannelCount property correctly.


      if (nativeAudioDestinationNode.maxChannelCount === 0) {
        Object.defineProperty(nativeAudioDestinationNode, 'maxChannelCount', {
          get: function get() {
            return nativeAudioDestinationNode.channelCount;
          }
        });
      }

      return nativeAudioDestinationNode;
    };

    var createNativeAudioNodeFactory = function createNativeAudioNodeFactory(getBackupNativeContext) {
      return function (nativeContext, factoryFunction) {
        // Bug #50: Only Safari does currently allow to create AudioNodes on a closed context yet.
        var backupNativeContext = getBackupNativeContext(nativeContext);

        if (backupNativeContext !== null) {
          return factoryFunction(backupNativeContext);
        }

        return factoryFunction(nativeContext);
      };
    };

    var createNativeAudioWorkletNodeConstructor = function createNativeAudioWorkletNodeConstructor(window) {
      if (window === null) {
        return null;
      } // @todo TypeScript doesn't know yet about the AudioWorkletNode constructor.


      return window.hasOwnProperty('AudioWorkletNode') ? window.AudioWorkletNode : null;
    };

    var testClonabilityOfAudioWorkletNodeOptions = function testClonabilityOfAudioWorkletNodeOptions(audioWorkletNodeOptions) {
      var _ref = new MessageChannel(),
          port1 = _ref.port1;

      try {
        // This will throw an error if the audioWorkletNodeOptions are not clonable.
        port1.postMessage(audioWorkletNodeOptions);
      } finally {
        port1.close();
      }
    };

    var createNativeAudioWorkletNodeFactory = function createNativeAudioWorkletNodeFactory(createInvalidStateError, createNativeAudioNode, createNativeAudioWorkletNodeFaker, createNotSupportedError, isNativeOfflineAudioContext) {
      return function (nativeContext, baseLatency, nativeAudioWorkletNodeConstructor, name, processorDefinition, options) {
        if (nativeAudioWorkletNodeConstructor !== null) {
          try {
            // Bug #86: Chrome Canary does not invoke the process() function if the corresponding AudioWorkletNode has no output.
            var nativeAudioWorkletNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
              return isNativeOfflineAudioContext(ntvCntxt) && options.numberOfInputs !== 0 && options.numberOfOutputs === 0 ? new nativeAudioWorkletNodeConstructor(ntvCntxt, name, Object.assign({}, options, {
                numberOfOutputs: 1,
                outputChannelCount: [1],
                parameterData: Object.assign({}, options.parameterData, {
                  hasNoOutput: 1
                })
              })) : new nativeAudioWorkletNodeConstructor(ntvCntxt, name, options);
            });
            /*
             * Bug #61: Overwriting the property accessors is necessary as long as some browsers have no native implementation to
             * achieve a consistent behavior.
             */

            Object.defineProperties(nativeAudioWorkletNode, {
              channelCount: {
                get: function get() {
                  return options.channelCount;
                },
                set: function set() {
                  throw createInvalidStateError();
                }
              },
              channelCountMode: {
                get: function get() {
                  return 'explicit';
                },
                set: function set() {
                  throw createInvalidStateError();
                }
              }
            });
            return nativeAudioWorkletNode;
          } catch (err) {
            // Bug #60: Chrome Canary throws an InvalidStateError instead of a NotSupportedError.
            if (err.code === 11) {
              throw createNotSupportedError();
            }

            throw err; // tslint:disable-line:rxjs-throw-error
          }
        } // Bug #61: Only Chrome & Opera have an implementation of the AudioWorkletNode yet.


        if (processorDefinition === undefined) {
          throw createNotSupportedError();
        }

        testClonabilityOfAudioWorkletNodeOptions(options);
        return createNativeAudioWorkletNodeFaker(nativeContext, baseLatency, processorDefinition, options);
      };
    };

    var computeBufferSize = function computeBufferSize(baseLatency, sampleRate) {
      if (baseLatency === null) {
        return 512;
      }

      return Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(baseLatency * sampleRate)))));
    };

    var cloneAudioWorkletNodeOptions = function cloneAudioWorkletNodeOptions(audioWorkletNodeOptions) {
      return new Promise(function (resolve, reject) {
        var _ref = new MessageChannel(),
            port1 = _ref.port1,
            port2 = _ref.port2;

        port1.onmessage = function (_ref2) {
          var data = _ref2.data;
          port1.close();
          port2.close();
          resolve(data);
        };

        port1.onmessageerror = function (_ref3) {
          var data = _ref3.data;
          port1.close();
          port2.close();
          reject(data);
        }; // This will throw an error if the audioWorkletNodeOptions are not clonable.


        port2.postMessage(audioWorkletNodeOptions);
      });
    };

    var createAudioWorkletProcessorPromise =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(processorDefinition, audioWorkletNodeOptions) {
        var clonedAudioWorkletNodeOptions;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return cloneAudioWorkletNodeOptions(audioWorkletNodeOptions);

              case 2:
                clonedAudioWorkletNodeOptions = _context.sent;
                return _context.abrupt("return", new processorDefinition(clonedAudioWorkletNodeOptions));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function createAudioWorkletProcessorPromise(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    var createAudioWorkletProcessor = function createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNode, processorDefinition, audioWorkletNodeOptions) {
      var nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeContext);

      if (nodeToProcessorMap === undefined) {
        nodeToProcessorMap = new WeakMap();
        NODE_TO_PROCESSOR_MAPS.set(nativeContext, nodeToProcessorMap);
      }

      var audioWorkletProcessorPromise = createAudioWorkletProcessorPromise(processorDefinition, audioWorkletNodeOptions);
      nodeToProcessorMap.set(nativeAudioWorkletNode, audioWorkletProcessorPromise);
      return audioWorkletProcessorPromise;
    };

    var createNativeAudioWorkletNodeFakerFactory = function createNativeAudioWorkletNodeFakerFactory(connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs) {
      return function (nativeContext, baseLatency, processorDefinition, options) {
        if (options.numberOfInputs === 0 && options.numberOfOutputs === 0) {
          throw createNotSupportedError();
        }

        if (options.outputChannelCount !== undefined) {
          if (options.outputChannelCount.length !== options.numberOfOutputs) {
            throw createIndexSizeError();
          } // @todo Check if any of the channelCount values is greater than the implementation's maximum number of channels.


          if (options.outputChannelCount.some(function (channelCount) {
            return channelCount < 1;
          })) {
            throw createNotSupportedError();
          }
        } // Bug #61: This is not part of the standard but required for the faker to work.


        if (options.channelCountMode !== 'explicit') {
          throw createNotSupportedError();
        }

        var numberOfInputChannels = options.channelCount * options.numberOfInputs;
        var numberOfOutputChannels = options.outputChannelCount.reduce(function (sum, value) {
          return sum + value;
        }, 0);
        var numberOfParameters = processorDefinition.parameterDescriptors === undefined ? 0 : processorDefinition.parameterDescriptors.length; // Bug #61: This is not part of the standard but required for the faker to work.

        if (numberOfInputChannels + numberOfParameters > 6 || numberOfOutputChannels > 6) {
          throw createNotSupportedError();
        }

        var messageChannel = new MessageChannel();
        var gainNodes = [];
        var inputChannelSplitterNodes = [];

        for (var i = 0; i < options.numberOfInputs; i += 1) {
          gainNodes.push(createNativeGainNode(nativeContext, {
            channelCount: options.channelCount,
            channelCountMode: options.channelCountMode,
            channelInterpretation: options.channelInterpretation,
            gain: 1
          }));
          inputChannelSplitterNodes.push(createNativeChannelSplitterNode(nativeContext, {
            channelCount: options.channelCount,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: options.channelCount
          }));
        }

        var constantSourceNodes = [];

        if (processorDefinition.parameterDescriptors !== undefined) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var _step$value = _step.value,
                  defaultValue = _step$value.defaultValue,
                  maxValue = _step$value.maxValue,
                  minValue = _step$value.minValue;
              var constantSourceNode = createNativeConstantSourceNode(nativeContext, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                offset: defaultValue === undefined ? 0 : defaultValue
              });
              Object.defineProperties(constantSourceNode.offset, {
                defaultValue: {
                  get: function get() {
                    return defaultValue === undefined ? 0 : defaultValue;
                  }
                },
                maxValue: {
                  get: function get() {
                    return maxValue === undefined ? MOST_POSITIVE_SINGLE_FLOAT : maxValue;
                  }
                },
                minValue: {
                  get: function get() {
                    return minValue === undefined ? MOST_NEGATIVE_SINGLE_FLOAT : minValue;
                  }
                }
              });
              constantSourceNodes.push(constantSourceNode);
            };

            for (var _iterator = processorDefinition.parameterDescriptors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              _loop();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        var inputChannelMergerNode = createNativeChannelMergerNode(nativeContext, {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'speakers',
          numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
        });
        var bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
        var scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, bufferSize, numberOfInputChannels + numberOfParameters, // Bug #87: Only Firefox will fire an AudioProcessingEvent if there is no connected output.
        Math.max(1, numberOfOutputChannels));
        var outputChannelSplitterNode = createNativeChannelSplitterNode(nativeContext, {
          channelCount: Math.max(1, numberOfOutputChannels),
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete',
          numberOfOutputs: Math.max(1, numberOfOutputChannels)
        });
        var outputChannelMergerNodes = [];

        for (var _i = 0; _i < options.numberOfOutputs; _i += 1) {
          outputChannelMergerNodes.push(createNativeChannelMergerNode(nativeContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: options.outputChannelCount[_i]
          }));
        }

        for (var _i2 = 0; _i2 < options.numberOfInputs; _i2 += 1) {
          gainNodes[_i2].connect(inputChannelSplitterNodes[_i2]);

          for (var j = 0; j < options.channelCount; j += 1) {
            inputChannelSplitterNodes[_i2].connect(inputChannelMergerNode, j, _i2 * options.channelCount + j);
          }
        }

        var parameterMap = new ReadOnlyMap(processorDefinition.parameterDescriptors === undefined ? [] : processorDefinition.parameterDescriptors.map(function (_ref, index) {
          var name = _ref.name;
          var constantSourceNode = constantSourceNodes[index];
          constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
          constantSourceNode.start(0);
          return [name, constantSourceNode.offset];
        }));
        inputChannelMergerNode.connect(scriptProcessorNode);

        if (options.numberOfOutputs > 0) {
          scriptProcessorNode.connect(outputChannelSplitterNode);
        }

        for (var _i3 = 0, outputChannelSplitterNodeOutput = 0; _i3 < options.numberOfOutputs; _i3 += 1) {
          var outputChannelMergerNode = outputChannelMergerNodes[_i3];

          for (var _j = 0; _j < options.outputChannelCount[_i3]; _j += 1) {
            outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + _j, _j);
          }

          outputChannelSplitterNodeOutput += options.outputChannelCount[_i3];
        }

        var onprocessorerror = null; // Bug #87: Expose at least one output to make this node connectable.

        var outputAudioNodes = options.numberOfOutputs === 0 ? [scriptProcessorNode] : outputChannelMergerNodes;
        var nativeAudioWorkletNodeFaker = {
          get bufferSize() {
            return bufferSize;
          },

          get channelCount() {
            return options.channelCount;
          },

          set channelCount(_) {
            // Bug #61: This is not part of the standard but required for the faker to work.
            throw createInvalidStateError();
          },

          get channelCountMode() {
            return options.channelCountMode;
          },

          set channelCountMode(_) {
            // Bug #61: This is not part of the standard but required for the faker to work.
            throw createInvalidStateError();
          },

          get channelInterpretation() {
            return gainNodes[0].channelInterpretation;
          },

          set channelInterpretation(value) {
            for (var _i4 = 0; _i4 < gainNodes.length; _i4++) {
              var gainNode = gainNodes[_i4];
              gainNode.channelInterpretation = value;
            }
          },

          get context() {
            return gainNodes[0].context;
          },

          get inputs() {
            return gainNodes;
          },

          get numberOfInputs() {
            return options.numberOfInputs;
          },

          get numberOfOutputs() {
            return options.numberOfOutputs;
          },

          get onprocessorerror() {
            return onprocessorerror;
          },

          set onprocessorerror(value) {
            if (typeof onprocessorerror === 'function') {
              nativeAudioWorkletNodeFaker.removeEventListener('processorerror', onprocessorerror);
            }

            onprocessorerror = typeof value === 'function' ? value : null;

            if (typeof onprocessorerror === 'function') {
              nativeAudioWorkletNodeFaker.addEventListener('processorerror', onprocessorerror);
            }
          },

          get parameters() {
            return parameterMap;
          },

          get port() {
            return messageChannel.port2;
          },

          addEventListener: function addEventListener() {
            return gainNodes[0].addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          connect: function connect() {
            return connectMultipleOutputs(outputAudioNodes, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          disconnect: function disconnect() {
            return disconnectMultipleOutputs(outputAudioNodes, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return gainNodes[0].dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return gainNodes[0].removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };
        processorDefinition.prototype.port = messageChannel.port1;
        var audioWorkletProcessor = null;
        var audioWorkletProcessorPromise = createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNodeFaker, processorDefinition, options);
        audioWorkletProcessorPromise.then(function (dWrkltPrcssr) {
          return audioWorkletProcessor = dWrkltPrcssr;
        });
        var inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
        var outputs = createNestedArrays(options.numberOfOutputs, options.outputChannelCount);
        var parameters = processorDefinition.parameterDescriptors === undefined ? [] : processorDefinition.parameterDescriptors.reduce(function (prmtrs, _ref2) {
          var name = _ref2.name;
          return Object.assign({}, prmtrs, _defineProperty({}, name, new Float32Array(128)));
        }, {});
        var isActive = true;

        scriptProcessorNode.onaudioprocess = function (_ref3) {
          var inputBuffer = _ref3.inputBuffer,
              outputBuffer = _ref3.outputBuffer;

          if (audioWorkletProcessor !== null) {
            var _loop2 = function _loop2(_i5) {
              for (var _j2 = 0; _j2 < options.numberOfInputs; _j2 += 1) {
                for (var k = 0; k < options.channelCount; k += 1) {
                  copyFromChannel(inputBuffer, inputs[_j2], k, k, _i5);
                }
              }

              if (processorDefinition.parameterDescriptors !== undefined) {
                processorDefinition.parameterDescriptors.forEach(function (_ref4, index) {
                  var name = _ref4.name;
                  copyFromChannel(inputBuffer, parameters, name, numberOfInputChannels + index, _i5);
                });
              }

              for (var _j3 = 0; _j3 < options.numberOfInputs; _j3 += 1) {
                for (var _k = 0; _k < options.outputChannelCount[_j3]; _k += 1) {
                  // The byteLength will be 0 when the ArrayBuffer was transferred.
                  if (outputs[_j3][_k].byteLength === 0) {
                    outputs[_j3][_k] = new Float32Array(128);
                  }
                }
              }

              try {
                var audioNodeConnections = getAudioNodeConnections(nativeAudioWorkletNodeFaker);
                var potentiallyEmptyInputs = inputs.map(function (input, index) {
                  if (audioNodeConnections.inputs[index].size === 0) {
                    return [new Float32Array(0)];
                  }

                  return input;
                });
                var activeSourceFlag = audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters);
                isActive = activeSourceFlag;

                for (var _j4 = 0, _outputChannelSplitterNodeOutput = 0; _j4 < options.numberOfOutputs; _j4 += 1) {
                  for (var _k2 = 0; _k2 < options.outputChannelCount[_j4]; _k2 += 1) {
                    copyToChannel(outputBuffer, outputs[_j4], _k2, _outputChannelSplitterNodeOutput + _k2, _i5);
                  }

                  _outputChannelSplitterNodeOutput += options.outputChannelCount[_j4];
                }
              } catch (_a) {
                isActive = false;
                nativeAudioWorkletNodeFaker.dispatchEvent(new ErrorEvent('processorerror'));
              }

              if (!isActive) {
                scriptProcessorNode.onaudioprocess = null; // tslint:disable-line:deprecation

                return "break";
              }
            };

            for (var _i5 = 0; _i5 < bufferSize; _i5 += 128) {
              var _ret = _loop2(_i5);

              if (_ret === "break") break;
            }
          }
        };

        return nativeAudioWorkletNodeFaker;
      };
    };

    var createNativeBiquadFilterNodeFactory = function createNativeBiquadFilterNodeFactory(createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeBiquadFilterNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBiquadFilter();
        });
        assignNativeAudioNodeOptions(nativeBiquadFilterNode, options);
        assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'Q');
        assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'detune');
        assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'frequency');
        assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, 'gain');
        assignNativeAudioNodeOption(nativeBiquadFilterNode, options, 'type');
        return nativeBiquadFilterNode;
      };
    };

    var createNativeChannelMergerNodeFactory = function createNativeChannelMergerNodeFactory(createNativeAudioNode, wrapChannelMergerNode) {
      return function (nativeContext, options) {
        var nativeChannelMergerNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createChannelMerger(options.numberOfInputs);
        });
        assignNativeAudioNodeOptions(nativeChannelMergerNode, options); // Bug #15: Safari does not return the default properties.

        if (nativeChannelMergerNode.channelCount !== 1 && nativeChannelMergerNode.channelCountMode !== 'explicit') {
          wrapChannelMergerNode(nativeContext, nativeChannelMergerNode);
        } // Bug #16: Firefox does not throw an error when setting a different channelCount or channelCountMode.


        try {
          nativeChannelMergerNode.channelCount = options.numberOfInputs === undefined ? 6 : options.numberOfInputs;
          wrapChannelMergerNode(nativeContext, nativeChannelMergerNode);
        } catch (
        /* Ignore errors. */
        _a) {}
        /* Ignore errors. */
        // tslint:disable-line:no-empty


        return nativeChannelMergerNode;
      };
    };

    var wrapChannelSplitterNode = function wrapChannelSplitterNode(channelSplitterNode) {
      var channelCount = channelSplitterNode.numberOfOutputs; // Bug #97: Safari does not throw an error when attempting to change the channelCount to something other than its initial value.

      Object.defineProperty(channelSplitterNode, 'channelCount', {
        get: function get() {
          return channelCount;
        },
        set: function set(value) {
          if (value !== channelCount) {
            throw createInvalidStateError();
          }
        }
      });
      /*
       * Bug #30: Only Chrome, Firefox & Opera throw an error when attempting to change the channelCountMode to something other than
       * explicit.
       */

      Object.defineProperty(channelSplitterNode, 'channelCountMode', {
        get: function get() {
          return 'explicit';
        },
        set: function set(value) {
          if (value !== 'explicit') {
            throw createInvalidStateError();
          }
        }
      });
      /*
       * Bug #32: Only Chrome, Firefox & Opera throws an error when attempting to change the channelInterpretation to something other than
       * discrete.
       */

      Object.defineProperty(channelSplitterNode, 'channelInterpretation', {
        get: function get() {
          return 'discrete';
        },
        set: function set(value) {
          if (value !== 'discrete') {
            throw createInvalidStateError();
          }
        }
      });
    };

    var createNativeChannelSplitterNodeFactory = function createNativeChannelSplitterNodeFactory(createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeChannelSplitterNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createChannelSplitter(options.numberOfOutputs);
        }); // Bug #96: Safari does not have the correct channelCount.
        // Bug #29: Edge & Safari do not have the correct channelCountMode.
        // Bug #31: Edge & Safari do not have the correct channelInterpretation.

        assignNativeAudioNodeOptions(nativeChannelSplitterNode, options); // Bug #29, #30, #31, #32, #96 & #97: Only Chrome, Firefox & Opera partially support the spec yet.

        wrapChannelSplitterNode(nativeChannelSplitterNode);
        return nativeChannelSplitterNode;
      };
    };

    var createNativeConstantSourceNodeFactory = function createNativeConstantSourceNodeFactory(createNativeAudioNode, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport) {
      return function (nativeContext, options) {
        // Bug #62: Edge & Safari do not support ConstantSourceNodes.
        if (nativeContext.createConstantSource === undefined) {
          return createNativeConstantSourceNodeFaker(nativeContext, options);
        }

        var nativeConstantSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createConstantSource();
        });
        assignNativeAudioNodeOptions(nativeConstantSourceNode, options);
        assignNativeAudioNodeAudioParamValue(nativeConstantSourceNode, options, 'offset'); // Bug #44: Only Chrome, Firefox & Opera throw a RangeError yet.

        if (!cacheTestResult(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStartMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeConstantSourceNode);
        } // Bug #44: Only Firefox does throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStopMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeConstantSourceNode);
        }

        return nativeConstantSourceNode;
      };
    };

    var interceptConnections = function interceptConnections(original, interceptor) {
      original.connect = function (destination) {
        var output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var input = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (destination instanceof AudioNode) {
          // @todo TypeScript cannot infer the overloaded signature with 3 arguments yet.
          interceptor.connect.call(interceptor, destination, output, input); // Bug #11: Safari does not support chaining yet.

          return destination;
        } // @todo TypeScript does still assume that connect() returns void.


        return interceptor.connect.call(interceptor, destination, output);
      };

      original.disconnect = function () {
        // @todo TypeScript cannot infer all the signatures yet.
        interceptor.disconnect.apply(interceptor, arguments);
      };

      return original;
    };

    var createNativeConstantSourceNodeFakerFactory = function createNativeConstantSourceNodeFakerFactory(createNativeAudioBufferSourceNode, createNativeGainNode) {
      return function (nativeContext, _a) {
        var offset = _a.offset,
            audioNodeOptions = tslib_1.__rest(_a, ["offset"]);

        var audioBufferSourceNode = createNativeAudioBufferSourceNode(nativeContext);
        /*
         * @todo Edge will throw a NotSupportedError when calling createBuffer() on a closed context. That's why the audioBuffer is created
         * after the audioBufferSourceNode in this case. If the context is closed createNativeAudioBufferSourceNode() will throw the
         * expected error and createBuffer() never gets called.
         */

        var audioBuffer = nativeContext.createBuffer(1, 2, nativeContext.sampleRate);
        var gainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: offset
        })); // Bug #5: Safari does not support copyFromChannel() and copyToChannel().

        var channelData = audioBuffer.getChannelData(0); // Bug #95: Safari does not play or loop one sample buffers.

        channelData[0] = 1;
        channelData[1] = 1;
        audioBufferSourceNode.buffer = audioBuffer;
        audioBufferSourceNode.loop = true;
        audioBufferSourceNode.connect(gainNode);
        var nativeConstantSourceNodeFaker = {
          get bufferSize() {
            return undefined;
          },

          get channelCount() {
            return gainNode.channelCount;
          },

          set channelCount(value) {
            gainNode.channelCount = value;
          },

          get channelCountMode() {
            return gainNode.channelCountMode;
          },

          set channelCountMode(value) {
            gainNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return gainNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            gainNode.channelInterpretation = value;
          },

          get context() {
            return gainNode.context;
          },

          get inputs() {
            return undefined;
          },

          get numberOfInputs() {
            return audioBufferSourceNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return gainNode.numberOfOutputs;
          },

          get offset() {
            return gainNode.gain;
          },

          get onended() {
            return audioBufferSourceNode.onended;
          },

          set onended(value) {
            audioBufferSourceNode.onended = value;
          },

          addEventListener: function addEventListener() {
            return audioBufferSourceNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return audioBufferSourceNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return audioBufferSourceNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          start: function start() {
            var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            audioBufferSourceNode.start.call(audioBufferSourceNode, when);
          },
          stop: function stop() {
            var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            audioBufferSourceNode.stop.call(audioBufferSourceNode, when);
          }
        };
        return interceptConnections(nativeConstantSourceNodeFaker, gainNode);
      };
    };

    var createNativeConvolverNodeFactory = function createNativeConvolverNodeFactory(createNativeAudioNode, createNotSupportedError) {
      return function (nativeContext, options) {
        var nativeConvolverNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createConvolver();
        });
        assignNativeAudioNodeOptions(nativeConvolverNode, options);
        assignNativeAudioNodeOption(nativeConvolverNode, options, 'buffer');

        if (options.disableNormalization === nativeConvolverNode.normalize) {
          nativeConvolverNode.normalize = !options.disableNormalization;
        } // Bug #113: Edge & Safari allow to change the channelCount


        if (options.channelCount !== 2) {
          throw createNotSupportedError();
        }

        Object.defineProperty(nativeConvolverNode, 'channelCount', {
          get: function get() {
            return options.channelCount;
          },
          set: function set(value) {
            if (value !== options.channelCount) {
              throw createNotSupportedError();
            }
          }
        }); // Bug #114: Edge & Safari allow to change the channelCountMode

        if (options.channelCountMode !== 'clamped-max') {
          throw createNotSupportedError();
        }

        Object.defineProperty(nativeConvolverNode, 'channelCountMode', {
          get: function get() {
            return options.channelCountMode;
          },
          set: function set(value) {
            if (value !== options.channelCountMode) {
              throw createNotSupportedError();
            }
          }
        });
        return nativeConvolverNode;
      };
    };

    var createNativeDelayNodeFactory = function createNativeDelayNodeFactory(createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeDelayNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createDelay(options.maxDelayTime);
        });
        assignNativeAudioNodeOptions(nativeDelayNode, options);
        assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, 'delayTime');
        return nativeDelayNode;
      };
    };

    var createNativeDynamicsCompressorNodeFactory = function createNativeDynamicsCompressorNodeFactory(createNativeAudioNode, createNotSupportedError) {
      return function (nativeContext, options) {
        var nativeDynamicsCompressorNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createDynamicsCompressor();
        });
        assignNativeAudioNodeOptions(nativeDynamicsCompressorNode, options); // Bug #108: Only Chrome and Opera disallow a channelCount of three and above yet.

        if (options.channelCount > 2) {
          throw createNotSupportedError();
        } // Bug #109: Only Chrome and Opera disallow a channelCountMode of 'max'.


        if (options.channelCountMode === 'max') {
          throw createNotSupportedError();
        }

        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'attack');
        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'knee');
        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'ratio');
        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'release');
        assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, 'threshold');
        return nativeDynamicsCompressorNode;
      };
    };

    var createNativeGainNodeFactory = function createNativeGainNodeFactory(createNativeAudioNode) {
      return function (nativeContext, options) {
        var nativeGainNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createGain();
        });
        assignNativeAudioNodeOptions(nativeGainNode, options);
        assignNativeAudioNodeAudioParamValue(nativeGainNode, options, 'gain');
        return nativeGainNode;
      };
    };

    var createNativeIIRFilterNodeFactory = function createNativeIIRFilterNodeFactory(createNativeAudioNode, createNativeIIRFilterNodeFaker) {
      return function (nativeContext, baseLatency, options) {
        // Bug #9: Safari does not support IIRFilterNodes.
        if (nativeContext.createIIRFilter === undefined) {
          return createNativeIIRFilterNodeFaker(nativeContext, baseLatency, options);
        }

        var nativeIIRFilterNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createIIRFilter(options.feedforward, options.feedback);
        });
        assignNativeAudioNodeOptions(nativeIIRFilterNode, options);
        return nativeIIRFilterNode;
      };
    };

    function divide(a, b) {
      var denominator = b[0] * b[0] + b[1] * b[1];
      return [(a[0] * b[0] + a[1] * b[1]) / denominator, (a[1] * b[0] - a[0] * b[1]) / denominator];
    }

    function multiply(a, b) {
      return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
    }

    function evaluatePolynomial(coefficient, z) {
      var result = [0, 0];

      for (var i = coefficient.length - 1; i >= 0; i -= 1) {
        result = multiply(result, z);
        result[0] += coefficient[i];
      }

      return result;
    }

    var createNativeIIRFilterNodeFakerFactory = function createNativeIIRFilterNodeFakerFactory(createInvalidAccessError, createInvalidStateError, createNativeScriptProcessorNode, createNotSupportedError) {
      return function (nativeContext, baseLatency, _ref) {
        var channelCount = _ref.channelCount,
            channelCountMode = _ref.channelCountMode,
            channelInterpretation = _ref.channelInterpretation,
            feedback = _ref.feedback,
            feedforward = _ref.feedforward;
        var bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
        var feedbackLength = feedback.length;
        var feedforwardLength = feedforward.length;
        var minLength = Math.min(feedbackLength, feedforwardLength);

        if (feedback.length === 0 || feedback.length > 20) {
          throw createNotSupportedError();
        }

        if (feedback[0] === 0) {
          throw createInvalidStateError();
        }

        if (feedforward.length === 0 || feedforward.length > 20) {
          throw createNotSupportedError();
        }

        if (feedforward[0] === 0) {
          throw createInvalidStateError();
        }

        if (feedback[0] !== 1) {
          for (var i = 0; i < feedforwardLength; i += 1) {
            feedforward[i] /= feedback[0];
          }

          for (var _i = 1; _i < feedbackLength; _i += 1) {
            feedback[_i] /= feedback[0];
          }
        }

        var scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, bufferSize, channelCount, channelCount);
        scriptProcessorNode.channelCount = channelCount;
        scriptProcessorNode.channelCountMode = channelCountMode;
        scriptProcessorNode.channelInterpretation = channelInterpretation;
        var bufferLength = 32;
        var bufferIndexes = [];
        var xBuffers = [];
        var yBuffers = [];

        for (var _i2 = 0; _i2 < channelCount; _i2 += 1) {
          bufferIndexes.push(0);
          var xBuffer = new Float32Array(bufferLength);
          var yBuffer = new Float32Array(bufferLength); // @todo Add a test which checks support for TypedArray.prototype.fill().

          xBuffer.fill(0);
          yBuffer.fill(0);
          xBuffers.push(xBuffer);
          yBuffers.push(yBuffer);
        }

        scriptProcessorNode.onaudioprocess = function (event) {
          var inputBuffer = event.inputBuffer;
          var outputBuffer = event.outputBuffer;
          var numberOfChannels = inputBuffer.numberOfChannels;

          for (var _i3 = 0; _i3 < numberOfChannels; _i3 += 1) {
            var input = inputBuffer.getChannelData(_i3);
            var output = outputBuffer.getChannelData(_i3);
            bufferIndexes[_i3] = filterBuffer(feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffers[_i3], yBuffers[_i3], bufferIndexes[_i3], bufferLength, input, output);
          }
        };

        var nyquist = nativeContext.sampleRate / 2;
        var nativeIIRFilterNodeFaker = {
          get bufferSize() {
            return bufferSize;
          },

          get channelCount() {
            return scriptProcessorNode.channelCount;
          },

          set channelCount(value) {
            scriptProcessorNode.channelCount = value;
          },

          get channelCountMode() {
            return scriptProcessorNode.channelCountMode;
          },

          set channelCountMode(value) {
            scriptProcessorNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return scriptProcessorNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            scriptProcessorNode.channelInterpretation = value;
          },

          get context() {
            return scriptProcessorNode.context;
          },

          get inputs() {
            return [scriptProcessorNode];
          },

          get numberOfInputs() {
            return scriptProcessorNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return scriptProcessorNode.numberOfOutputs;
          },

          addEventListener: function addEventListener() {
            // @todo Dissallow adding an audioprocess listener.
            return scriptProcessorNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return scriptProcessorNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          getFrequencyResponse: function getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
            if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
              throw createInvalidAccessError();
            }

            var length = frequencyHz.length;

            for (var _i4 = 0; _i4 < length; _i4 += 1) {
              var omega = -Math.PI * (frequencyHz[_i4] / nyquist);
              var z = [Math.cos(omega), Math.sin(omega)];
              var numerator = evaluatePolynomial(feedforward, z);
              var denominator = evaluatePolynomial(feedback, z);
              var response = divide(numerator, denominator);
              magResponse[_i4] = Math.sqrt(response[0] * response[0] + response[1] * response[1]);
              phaseResponse[_i4] = Math.atan2(response[1], response[0]);
            }
          },
          removeEventListener: function removeEventListener() {
            return scriptProcessorNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };
        return interceptConnections(nativeIIRFilterNodeFaker, scriptProcessorNode);
      };
    };

    var createNativeMediaElementAudioSourceNodeFactory = function createNativeMediaElementAudioSourceNodeFactory(createNativeAudioNode) {
      return function (nativeAudioContext, options) {
        return createNativeAudioNode(nativeAudioContext, function (ntvDCntxt) {
          return ntvDCntxt.createMediaElementSource(options.mediaElement);
        });
      };
    };

    var createNativeMediaStreamAudioSourceNodeFactory = function createNativeMediaStreamAudioSourceNodeFactory(createInvalidStateError, createNativeAudioNode) {
      return function (nativeAudioContext, _ref) {
        var mediaStream = _ref.mediaStream;
        var nativeMediaElementAudioSourceNode = createNativeAudioNode(nativeAudioContext, function (ntvDCntxt) {
          return ntvDCntxt.createMediaStreamSource(mediaStream);
        }); // Bug #120: Firefox does not throw an error if the mediaStream has no audio track.

        var audioTracks = mediaStream.getAudioTracks();

        if (audioTracks.length === 0) {
          throw createInvalidStateError();
        }

        return nativeMediaElementAudioSourceNode;
      };
    };

    var createNativeOfflineAudioContextConstructor = function createNativeOfflineAudioContextConstructor(window) {
      if (window === null) {
        return null;
      }

      if (window.hasOwnProperty('OfflineAudioContext')) {
        return window.OfflineAudioContext;
      }

      return window.hasOwnProperty('webkitOfflineAudioContext') ? window.webkitOfflineAudioContext : null;
    };

    var createNativeOscillatorNodeFactory = function createNativeOscillatorNodeFactory(createNativeAudioNode, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls) {
      return function (nativeContext, options) {
        var nativeOscillatorNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createOscillator();
        });
        assignNativeAudioNodeOptions(nativeOscillatorNode, options);
        assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, 'detune');
        assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, 'frequency');

        if (options.periodicWave !== undefined) {
          nativeOscillatorNode.setPeriodicWave(options.periodicWave);
        } else {
          assignNativeAudioNodeOption(nativeOscillatorNode, options, 'type');
        } // Bug #44: Only Chrome & Opera throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStartMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeOscillatorNode);
        } // Bug #19: Safari does not ignore calls to stop() of an already stopped AudioBufferSourceNode.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, function () {
          return testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(nativeOscillatorNode, nativeContext);
        } // Bug #44: No browser does throw a RangeError yet.


        if (!cacheTestResult(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, function () {
          return testAudioScheduledSourceNodeStopMethodNegativeParametersSupport(nativeContext);
        })) {
          wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeOscillatorNode);
        }

        return nativeOscillatorNode;
      };
    };

    var createNativePannerNodeFactory = function createNativePannerNodeFactory(createNativeAudioNode, createNativePannerNodeFaker) {
      return function (nativeContext, options) {
        var nativePannerNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createPanner();
        }); // Bug #124: Edge & Safari do not support modifying the orientation and the position with AudioParams.

        if (nativePannerNode.orientationX === undefined) {
          return createNativePannerNodeFaker(nativeContext, options);
        }

        assignNativeAudioNodeOptions(nativePannerNode, options);
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'orientationX');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'orientationY');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'orientationZ');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'positionX');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'positionY');
        assignNativeAudioNodeAudioParamValue(nativePannerNode, options, 'positionZ');
        assignNativeAudioNodeOption(nativePannerNode, options, 'coneInnerAngle');
        assignNativeAudioNodeOption(nativePannerNode, options, 'coneOuterAngle');
        assignNativeAudioNodeOption(nativePannerNode, options, 'coneOuterGain');
        assignNativeAudioNodeOption(nativePannerNode, options, 'distanceModel');
        assignNativeAudioNodeOption(nativePannerNode, options, 'maxDistance');
        assignNativeAudioNodeOption(nativePannerNode, options, 'panningModel');
        assignNativeAudioNodeOption(nativePannerNode, options, 'refDistance');
        assignNativeAudioNodeOption(nativePannerNode, options, 'rolloffFactor');
        return nativePannerNode;
      };
    };

    var createNativePannerNodeFakerFactory = function createNativePannerNodeFakerFactory(createInvalidStateError, createNativeAudioNode, createNativeChannelMergerNode, createNativeGainNode, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError) {
      return function (nativeContext, _a) {
        var coneInnerAngle = _a.coneInnerAngle,
            coneOuterAngle = _a.coneOuterAngle,
            coneOuterGain = _a.coneOuterGain,
            distanceModel = _a.distanceModel,
            maxDistance = _a.maxDistance,
            orientationX = _a.orientationX,
            orientationY = _a.orientationY,
            orientationZ = _a.orientationZ,
            panningModel = _a.panningModel,
            positionX = _a.positionX,
            positionY = _a.positionY,
            positionZ = _a.positionZ,
            refDistance = _a.refDistance,
            rolloffFactor = _a.rolloffFactor,
            audioNodeOptions = tslib_1.__rest(_a, ["coneInnerAngle", "coneOuterAngle", "coneOuterGain", "distanceModel", "maxDistance", "orientationX", "orientationY", "orientationZ", "panningModel", "positionX", "positionY", "positionZ", "refDistance", "rolloffFactor"]);

        var pannerNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createPanner();
        }); // Bug #125: Safari does not throw an error yet.

        if (audioNodeOptions.channelCount > 2) {
          throw createNotSupportedError();
        } // Bug #126: Safari does not throw an error yet.


        if (audioNodeOptions.channelCountMode === 'max') {
          throw createNotSupportedError();
        }

        assignNativeAudioNodeOptions(pannerNode, audioNodeOptions);
        var SINGLE_CHANNEL_OPTIONS = {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete'
        };
        var channelMergerNode = createNativeChannelMergerNode(nativeContext, {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'speakers',
          numberOfInputs: 6
        });
        var inputGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: 1
        }));
        var orientationXGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 1
        }));
        var orientationYGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var orientationZGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var positionXGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var positionYGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var positionZGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        }));
        var scriptProcessorNode = createNativeScriptProcessorNode(nativeContext, 256, 6, 0);
        var waveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          curve: new Float32Array([1, 1]),
          oversample: 'none'
        }));
        var lastOrientation = [1, 0, 0];
        var lastPosition = [0, 0, 0];

        scriptProcessorNode.onaudioprocess = function (_ref) {
          var inputBuffer = _ref.inputBuffer;
          var orientation = [inputBuffer.getChannelData(0)[0], inputBuffer.getChannelData(1)[0], inputBuffer.getChannelData(2)[0]];

          if (orientation.some(function (value, index) {
            return value !== lastOrientation[index];
          })) {
            pannerNode.setOrientation.apply(pannerNode, orientation); // tslint:disable-line:deprecation

            lastOrientation = orientation;
          }

          var positon = [inputBuffer.getChannelData(6)[0], inputBuffer.getChannelData(7)[0], inputBuffer.getChannelData(8)[0]];

          if (positon.some(function (value, index) {
            return value !== lastPosition[index];
          })) {
            pannerNode.setPosition.apply(pannerNode, positon); // tslint:disable-line:deprecation

            lastPosition = positon;
          }
        };

        inputGainNode.connect(pannerNode); // Bug #119: Safari does not fully support the WaveShaperNode.

        inputGainNode.connect(waveShaperNode.inputs === undefined ? waveShaperNode : waveShaperNode.inputs[0]);
        waveShaperNode.connect(orientationXGainNode);
        waveShaperNode.connect(orientationYGainNode);
        waveShaperNode.connect(orientationZGainNode);
        waveShaperNode.connect(positionXGainNode);
        waveShaperNode.connect(positionYGainNode);
        waveShaperNode.connect(positionZGainNode);
        orientationXGainNode.connect(channelMergerNode);
        orientationYGainNode.connect(channelMergerNode);
        orientationZGainNode.connect(channelMergerNode);
        positionXGainNode.connect(channelMergerNode);
        positionYGainNode.connect(channelMergerNode);
        positionZGainNode.connect(channelMergerNode);
        channelMergerNode.connect(scriptProcessorNode);
        Object.defineProperty(orientationYGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        Object.defineProperty(orientationZGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        Object.defineProperty(positionXGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        Object.defineProperty(positionYGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        Object.defineProperty(positionZGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        var nativePannerNodeFaker = {
          get bufferSize() {
            return undefined;
          },

          get channelCount() {
            return pannerNode.channelCount;
          },

          set channelCount(value) {
            // Bug #125: Safari does not throw an error yet.
            if (value > 2) {
              throw createNotSupportedError();
            }

            inputGainNode.channelCount = value;
            pannerNode.channelCount = value;
          },

          get channelCountMode() {
            return pannerNode.channelCountMode;
          },

          set channelCountMode(value) {
            // Bug #126: Safari does not throw an error yet.
            if (value === 'max') {
              throw createNotSupportedError();
            }

            inputGainNode.channelCountMode = value;
            pannerNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return pannerNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            inputGainNode.channelInterpretation = value;
            pannerNode.channelInterpretation = value;
          },

          get coneInnerAngle() {
            return pannerNode.coneInnerAngle;
          },

          set coneInnerAngle(value) {
            pannerNode.coneInnerAngle = value;
          },

          get coneOuterAngle() {
            return pannerNode.coneOuterAngle;
          },

          set coneOuterAngle(value) {
            pannerNode.coneOuterAngle = value;
          },

          get coneOuterGain() {
            return pannerNode.coneOuterGain;
          },

          set coneOuterGain(value) {
            // Bug #127: Edge & Safari do not throw an InvalidStateError yet.
            if (value < 0 || value > 1) {
              throw createInvalidStateError();
            }

            pannerNode.coneOuterGain = value;
          },

          get context() {
            return pannerNode.context;
          },

          get distanceModel() {
            return pannerNode.distanceModel;
          },

          set distanceModel(value) {
            pannerNode.distanceModel = value;
          },

          get inputs() {
            return [inputGainNode];
          },

          get maxDistance() {
            return pannerNode.maxDistance;
          },

          set maxDistance(value) {
            // Bug #128: Edge & Safari do not throw an error yet.
            if (value < 0) {
              throw new RangeError();
            }

            pannerNode.maxDistance = value;
          },

          get numberOfInputs() {
            return pannerNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return pannerNode.numberOfOutputs;
          },

          get orientationX() {
            return orientationXGainNode.gain;
          },

          get orientationY() {
            return orientationYGainNode.gain;
          },

          get orientationZ() {
            return orientationZGainNode.gain;
          },

          get panningModel() {
            return pannerNode.panningModel;
          },

          set panningModel(value) {
            pannerNode.panningModel = value; // Bug #123: Edge does not support HRTF as panningModel.

            if (pannerNode.panningModel !== value && value === 'HRTF') {
              throw createNotSupportedError();
            }
          },

          get positionX() {
            return positionXGainNode.gain;
          },

          get positionY() {
            return positionYGainNode.gain;
          },

          get positionZ() {
            return positionZGainNode.gain;
          },

          get refDistance() {
            return pannerNode.refDistance;
          },

          set refDistance(value) {
            // Bug #129: Edge & Safari do not throw an error yet.
            if (value < 0) {
              throw new RangeError();
            }

            pannerNode.refDistance = value;
          },

          get rolloffFactor() {
            return pannerNode.rolloffFactor;
          },

          set rolloffFactor(value) {
            // Bug #130: Edge & Safari do not throw an error yet.
            if (value < 0) {
              throw new RangeError();
            }

            pannerNode.rolloffFactor = value;
          },

          addEventListener: function addEventListener() {
            return inputGainNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return inputGainNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return inputGainNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };

        if (coneInnerAngle !== nativePannerNodeFaker.coneInnerAngle) {
          nativePannerNodeFaker.coneInnerAngle = coneInnerAngle;
        }

        if (coneOuterAngle !== nativePannerNodeFaker.coneOuterAngle) {
          nativePannerNodeFaker.coneOuterAngle = coneOuterAngle;
        }

        if (coneOuterGain !== nativePannerNodeFaker.coneOuterGain) {
          nativePannerNodeFaker.coneOuterGain = coneOuterGain;
        }

        if (distanceModel !== nativePannerNodeFaker.distanceModel) {
          nativePannerNodeFaker.distanceModel = distanceModel;
        }

        if (maxDistance !== nativePannerNodeFaker.maxDistance) {
          nativePannerNodeFaker.maxDistance = maxDistance;
        }

        if (orientationX !== nativePannerNodeFaker.orientationX.value) {
          nativePannerNodeFaker.orientationX.value = orientationX;
        }

        if (orientationY !== nativePannerNodeFaker.orientationY.value) {
          nativePannerNodeFaker.orientationY.value = orientationY;
        }

        if (orientationZ !== nativePannerNodeFaker.orientationZ.value) {
          nativePannerNodeFaker.orientationZ.value = orientationZ;
        }

        if (panningModel !== nativePannerNodeFaker.panningModel) {
          nativePannerNodeFaker.panningModel = panningModel;
        }

        if (positionX !== nativePannerNodeFaker.positionX.value) {
          nativePannerNodeFaker.positionX.value = positionX;
        }

        if (positionY !== nativePannerNodeFaker.positionY.value) {
          nativePannerNodeFaker.positionY.value = positionY;
        }

        if (positionZ !== nativePannerNodeFaker.positionZ.value) {
          nativePannerNodeFaker.positionZ.value = positionZ;
        }

        if (refDistance !== nativePannerNodeFaker.refDistance) {
          nativePannerNodeFaker.refDistance = refDistance;
        }

        if (rolloffFactor !== nativePannerNodeFaker.rolloffFactor) {
          nativePannerNodeFaker.rolloffFactor = rolloffFactor;
        }

        return interceptConnections(nativePannerNodeFaker, pannerNode);
      };
    };

    var createNativePeriodicWaveFactory = function createNativePeriodicWaveFactory(getBackupNativeContext) {
      return function (nativeContext, _ref) {
        var disableNormalization = _ref.disableNormalization,
            imag = _ref.imag,
            real = _ref.real;
        // Bug #50: Only Safari does currently allow to create AudioNodes (and other objects) on a closed context yet.
        var backupNativeContext = getBackupNativeContext(nativeContext); // @todo Edge, Firefox & Safari do only accept Float32Arrays.

        var wrappedImag = new Float32Array(imag);
        var wrappedReal = new Float32Array(real);

        if (backupNativeContext !== null) {
          return backupNativeContext.createPeriodicWave(wrappedReal, wrappedImag, {
            disableNormalization: disableNormalization
          });
        }

        return nativeContext.createPeriodicWave(wrappedReal, wrappedImag, {
          disableNormalization: disableNormalization
        });
      };
    };

    var createNativeScriptProcessorNodeFactory = function createNativeScriptProcessorNodeFactory(createNativeAudioNode) {
      return function (nativeContext, bufferSize, numberOfInputChannels, numberOfOutputChannels) {
        return createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
        });
      };
    };

    var createNativeStereoPannerNodeFactory = function createNativeStereoPannerNodeFactory(createNativeAudioNode, createNativeStereoPannerNodeFaker, createNotSupportedError) {
      return function (nativeContext, options) {
        return createNativeAudioNode(nativeContext, function (ntvCntxt) {
          var channelCountMode = options.channelCountMode;
          /*
           * Bug #105: The channelCountMode of 'clamped-max' should be supported. However it is not possible to write a polyfill for Safari
           * which supports it and therefore it can't be supported at all.
           */

          if (channelCountMode === 'clamped-max') {
            throw createNotSupportedError();
          } // Bug #105: Safari does not support the StereoPannerNode.


          if (nativeContext.createStereoPanner === undefined) {
            return createNativeStereoPannerNodeFaker(nativeContext, options);
          }

          var nativeStereoPannerNode = ntvCntxt.createStereoPanner();
          assignNativeAudioNodeOptions(nativeStereoPannerNode, options);
          assignNativeAudioNodeAudioParamValue(nativeStereoPannerNode, options, 'pan');
          /*
           * Bug #105: The channelCountMode of 'clamped-max' should be supported. However it is not possible to write a polyfill for Safari
           * which supports it and therefore it can't be supported at all.
           */

          Object.defineProperty(nativeStereoPannerNode, 'channelCountMode', {
            get: function get() {
              return channelCountMode;
            },
            set: function set(value) {
              if (value !== channelCountMode) {
                throw createNotSupportedError();
              }
            }
          });
          return nativeStereoPannerNode;
        });
      };
    };

    var createNativeStereoPannerNodeFakerFactory = function createNativeStereoPannerNodeFakerFactory(createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError) {
      // The curve has a size of 14bit plus 1 value to have an exact representation for zero. This value has been determined experimentally.
      var CURVE_SIZE = 16385;
      var DC_CURVE = new Float32Array([1, 1]);
      var HALF_PI = Math.PI / 2;
      var SINGLE_CHANNEL_OPTIONS = {
        channelCount: 1,
        channelCountMode: 'explicit',
        channelInterpretation: 'discrete'
      };
      var SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS = Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
        oversample: 'none'
      });

      var buildInternalGraphForMono = function buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode) {
        var leftWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var rightWaveShaperCurve = new Float32Array(CURVE_SIZE);

        for (var i = 0; i < CURVE_SIZE; i += 1) {
          var x = i / (CURVE_SIZE - 1) * HALF_PI;
          leftWaveShaperCurve[i] = Math.cos(x);
          rightWaveShaperCurve[i] = Math.sin(x);
        }

        var leftGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var leftWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: leftWaveShaperCurve
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var panWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: DC_CURVE
        }));
        var rightGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var rightWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: rightWaveShaperCurve
        }));
        inputGainNode.connect(leftGainNode);
        inputGainNode.connect(panWaveShaperNode.inputs[0]);
        inputGainNode.connect(rightGainNode);
        panWaveShaperNode.connect(panGainNode);
        panGainNode.connect(leftWaveShaperNode.inputs[0]);
        panGainNode.connect(rightWaveShaperNode.inputs[0]);
        leftWaveShaperNode.connect(leftGainNode.gain);
        rightWaveShaperNode.connect(rightGainNode.gain);
        leftGainNode.connect(channelMergerNode, 0, 0);
        rightGainNode.connect(channelMergerNode, 0, 1);
        return [leftGainNode, rightGainNode];
      };

      var buildInternalGraphForStereo = function buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode) {
        var leftInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var leftInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var rightInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var rightInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
        var centerIndex = Math.floor(CURVE_SIZE / 2);

        for (var i = 0; i < CURVE_SIZE; i += 1) {
          if (i > centerIndex) {
            var x = (i - centerIndex) / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
            leftInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
            leftInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
            rightInputForLeftOutputWaveShaperCurve[i] = 0;
            rightInputForRightOutputWaveShaperCurve[i] = 1;
          } else {
            var _x = i / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;

            leftInputForLeftOutputWaveShaperCurve[i] = 1;
            leftInputForRightOutputWaveShaperCurve[i] = 0;
            rightInputForLeftOutputWaveShaperCurve[i] = Math.cos(_x);
            rightInputForRightOutputWaveShaperCurve[i] = Math.sin(_x);
          }
        }

        var channelSplitterNode = createNativeChannelSplitterNode(nativeContext, {
          channelCount: 2,
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete',
          numberOfOutputs: 2
        });
        var leftInputForLeftOutputGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var leftInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: leftInputForLeftOutputWaveShaperCurve
        }));
        var leftInputForRightOutputGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var leftInputForRightOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: leftInputForRightOutputWaveShaperCurve
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var panWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: DC_CURVE
        }));
        var rightInputForLeftOutputGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var rightInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: rightInputForLeftOutputWaveShaperCurve
        }));
        var rightInputForRightOutputGainNode = createNativeGainNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_OPTIONS, {
          gain: 0
        })); // Bug #119: Safari does not fully support the WaveShaperNode.

        var rightInputForRightOutputWaveShaperNode = createNativeWaveShaperNode(nativeContext, Object.assign({}, SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, {
          curve: rightInputForRightOutputWaveShaperCurve
        }));
        inputGainNode.connect(channelSplitterNode);
        inputGainNode.connect(panWaveShaperNode.inputs[0]);
        channelSplitterNode.connect(leftInputForLeftOutputGainNode, 1);
        channelSplitterNode.connect(leftInputForRightOutputGainNode, 1);
        channelSplitterNode.connect(rightInputForLeftOutputGainNode, 1);
        channelSplitterNode.connect(rightInputForRightOutputGainNode, 1);
        panWaveShaperNode.connect(panGainNode);
        panGainNode.connect(leftInputForLeftOutputWaveShaperNode.inputs[0]);
        panGainNode.connect(leftInputForRightOutputWaveShaperNode.inputs[0]);
        panGainNode.connect(rightInputForLeftOutputWaveShaperNode.inputs[0]);
        panGainNode.connect(rightInputForRightOutputWaveShaperNode.inputs[0]);
        leftInputForLeftOutputWaveShaperNode.connect(leftInputForLeftOutputGainNode.gain);
        leftInputForRightOutputWaveShaperNode.connect(leftInputForRightOutputGainNode.gain);
        rightInputForLeftOutputWaveShaperNode.connect(rightInputForLeftOutputGainNode.gain);
        rightInputForRightOutputWaveShaperNode.connect(rightInputForRightOutputGainNode.gain);
        leftInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
        rightInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
        leftInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
        rightInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
        return [leftInputForLeftOutputGainNode, rightInputForLeftOutputGainNode, leftInputForRightOutputGainNode, rightInputForRightOutputGainNode];
      };

      var buildInternalGraph = function buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode) {
        if (channelCount === 1) {
          return buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode);
        } else if (channelCount === 2) {
          return buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode);
        }

        throw createNotSupportedError();
      };

      return function (nativeContext, _a) {
        var channelCount = _a.channelCount,
            channelCountMode = _a.channelCountMode,
            pan = _a.pan,
            audioNodeOptions = tslib_1.__rest(_a, ["channelCount", "channelCountMode", "pan"]);

        if (channelCountMode === 'max') {
          throw createNotSupportedError();
        }

        var channelMergerNode = createNativeChannelMergerNode(nativeContext, Object.assign({}, audioNodeOptions, {
          channelCount: 1,
          channelCountMode: channelCountMode,
          numberOfInputs: 2
        }));
        var inputGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          channelCount: channelCount,
          channelCountMode: channelCountMode,
          gain: 1
        }));
        var panGainNode = createNativeGainNode(nativeContext, {
          channelCount: 1,
          channelCountMode: 'explicit',
          channelInterpretation: 'discrete',
          gain: pan
        });
        var outputNodes = buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode);
        Object.defineProperty(panGainNode.gain, 'defaultValue', {
          get: function get() {
            return 0;
          }
        });
        var nativeStereoPannerNodeFakerFactory = {
          get bufferSize() {
            return undefined;
          },

          get channelCount() {
            return inputGainNode.channelCount;
          },

          set channelCount(value) {
            if (inputGainNode.channelCount !== value) {
              inputGainNode.disconnect();
              outputNodes.forEach(function (outputNode) {
                return outputNode.disconnect();
              });
              outputNodes = buildInternalGraph(nativeContext, value, inputGainNode, panGainNode, channelMergerNode);
            }

            inputGainNode.channelCount = value;
          },

          get channelCountMode() {
            return inputGainNode.channelCountMode;
          },

          set channelCountMode(value) {
            if (value === 'clamped-max' || value === 'max') {
              throw createNotSupportedError();
            }

            inputGainNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return inputGainNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            inputGainNode.channelInterpretation = value;
          },

          get context() {
            return inputGainNode.context;
          },

          get inputs() {
            return [inputGainNode];
          },

          get numberOfInputs() {
            return inputGainNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return inputGainNode.numberOfOutputs;
          },

          get pan() {
            return panGainNode.gain;
          },

          addEventListener: function addEventListener() {
            return inputGainNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return inputGainNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return inputGainNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };
        return interceptConnections(nativeStereoPannerNodeFakerFactory, channelMergerNode);
      };
    };

    var createNativeWaveShaperNodeFactory = function createNativeWaveShaperNodeFactory(createInvalidStateError, createNativeAudioNode, createNativeWaveShaperNodeFaker) {
      return function (nativeContext, options) {
        var nativeWaveShaperNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createWaveShaper();
        });

        try {
          // Bug #102: Safari does not throw an InvalidStateError when the curve has less than two samples.
          // Bug #119: Safari does not correctly map the values. Bug #102 is only used to detect Safari in this case.
          nativeWaveShaperNode.curve = new Float32Array([1]);
          return createNativeWaveShaperNodeFaker(nativeContext, options);
        } catch (
        /* Ignore errors. */
        _a) {
          /* Ignore errors. */
        }

        assignNativeAudioNodeOptions(nativeWaveShaperNode, options);
        var curve = options.curve; // Bug #104: Chrome will throw an InvalidAccessError when the curve has less than two samples.

        if (curve !== null && curve.length < 2) {
          throw createInvalidStateError();
        }

        assignNativeAudioNodeOption(nativeWaveShaperNode, options, 'curve');
        assignNativeAudioNodeOption(nativeWaveShaperNode, options, 'oversample');
        return nativeWaveShaperNode;
      };
    };

    var createNativeWaveShaperNodeFakerFactory = function createNativeWaveShaperNodeFakerFactory(createInvalidStateError, createNativeAudioNode, createNativeGainNode) {
      return function (nativeContext, _a) {
        var curve = _a.curve,
            oversample = _a.oversample,
            audioNodeOptions = tslib_1.__rest(_a, ["curve", "oversample"]);

        var negativeWaveShaperNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createWaveShaper();
        });
        var positiveWaveShaperNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createWaveShaper();
        });
        assignNativeAudioNodeOptions(negativeWaveShaperNode, audioNodeOptions);
        assignNativeAudioNodeOptions(positiveWaveShaperNode, audioNodeOptions);
        var inputGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: 1
        }));
        var invertGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: -1
        }));
        var outputGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: 1
        }));
        var revertGainNode = createNativeGainNode(nativeContext, Object.assign({}, audioNodeOptions, {
          gain: -1
        }));
        inputGainNode.connect(negativeWaveShaperNode);
        negativeWaveShaperNode.connect(outputGainNode);
        inputGainNode.connect(invertGainNode);
        invertGainNode.connect(positiveWaveShaperNode);
        positiveWaveShaperNode.connect(revertGainNode);
        revertGainNode.connect(outputGainNode);
        var unmodifiedCurve = null;
        var nativeWaveShaperNodeFaker = {
          get bufferSize() {
            return undefined;
          },

          get channelCount() {
            return negativeWaveShaperNode.channelCount;
          },

          set channelCount(value) {
            inputGainNode.channelCount = value;
            invertGainNode.channelCount = value;
            negativeWaveShaperNode.channelCount = value;
            outputGainNode.channelCount = value;
            positiveWaveShaperNode.channelCount = value;
            revertGainNode.channelCount = value;
          },

          get channelCountMode() {
            return negativeWaveShaperNode.channelCountMode;
          },

          set channelCountMode(value) {
            inputGainNode.channelCountMode = value;
            invertGainNode.channelCountMode = value;
            negativeWaveShaperNode.channelCountMode = value;
            outputGainNode.channelCountMode = value;
            positiveWaveShaperNode.channelCountMode = value;
            revertGainNode.channelCountMode = value;
          },

          get channelInterpretation() {
            return negativeWaveShaperNode.channelInterpretation;
          },

          set channelInterpretation(value) {
            inputGainNode.channelInterpretation = value;
            invertGainNode.channelInterpretation = value;
            negativeWaveShaperNode.channelInterpretation = value;
            outputGainNode.channelInterpretation = value;
            positiveWaveShaperNode.channelInterpretation = value;
            revertGainNode.channelInterpretation = value;
          },

          get context() {
            return negativeWaveShaperNode.context;
          },

          get curve() {
            return unmodifiedCurve;
          },

          set curve(value) {
            // Bug #102: Safari does not throw an InvalidStateError when the curve has less than two samples.
            if (curve !== null && curve.length < 2) {
              throw createInvalidStateError();
            }

            if (value === null) {
              negativeWaveShaperNode.curve = value;
              positiveWaveShaperNode.curve = value;
            } else {
              var curveLength = value.length;
              var negativeCurve = new Float32Array(curveLength + 2 - curveLength % 2);
              var positiveCurve = new Float32Array(curveLength + 2 - curveLength % 2);
              negativeCurve[0] = value[0];
              positiveCurve[0] = -value[curveLength - 1];
              var length = Math.ceil((curveLength + 1) / 2);
              var centerIndex = (curveLength + 1) / 2 - 1;

              for (var i = 1; i < length; i += 1) {
                var theoreticIndex = i / length * centerIndex;
                var lowerIndex = Math.floor(theoreticIndex);
                var upperIndex = Math.ceil(theoreticIndex);
                negativeCurve[i] = lowerIndex === upperIndex ? value[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * value[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * value[upperIndex];
                positiveCurve[i] = lowerIndex === upperIndex ? -value[curveLength - 1 - lowerIndex] : -((1 - (theoreticIndex - lowerIndex)) * value[curveLength - 1 - lowerIndex]) - (1 - (upperIndex - theoreticIndex)) * value[curveLength - 1 - upperIndex];
              }

              negativeCurve[length] = curveLength % 2 === 1 ? value[length - 1] : (value[length - 2] + value[length - 1]) / 2;
              negativeWaveShaperNode.curve = negativeCurve;
              positiveWaveShaperNode.curve = positiveCurve;
            }

            unmodifiedCurve = value;
          },

          get inputs() {
            return [inputGainNode];
          },

          get numberOfInputs() {
            return negativeWaveShaperNode.numberOfInputs;
          },

          get numberOfOutputs() {
            return negativeWaveShaperNode.numberOfOutputs;
          },

          get oversample() {
            return negativeWaveShaperNode.oversample;
          },

          set oversample(value) {
            negativeWaveShaperNode.oversample = value;
            positiveWaveShaperNode.oversample = value;
          },

          addEventListener: function addEventListener() {
            return inputGainNode.addEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          },
          dispatchEvent: function dispatchEvent() {
            return inputGainNode.dispatchEvent(arguments.length <= 0 ? undefined : arguments[0]);
          },
          removeEventListener: function removeEventListener() {
            return inputGainNode.removeEventListener(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
          }
        };

        if (curve !== nativeWaveShaperNodeFaker.curve) {
          nativeWaveShaperNodeFaker.curve = curve;
        }

        if (oversample !== nativeWaveShaperNodeFaker.oversample) {
          nativeWaveShaperNodeFaker.oversample = oversample;
        }

        return interceptConnections(nativeWaveShaperNodeFaker, outputGainNode);
      };
    };

    var createNoneAudioDestinationNodeConstructor = function createNoneAudioDestinationNodeConstructor(audioNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_audioNodeConstructor) {
          _inherits(NoneAudioDestinationNode, _audioNodeConstructor);

          function NoneAudioDestinationNode(context, nativeAudioNode, audioNodeRenderer) {
            _classCallCheck(this, NoneAudioDestinationNode);

            return _possibleConstructorReturn(this, _getPrototypeOf(NoneAudioDestinationNode).call(this, context, nativeAudioNode, audioNodeRenderer));
          }

          return NoneAudioDestinationNode;
        }(audioNodeConstructor)
      );
    };

    var createNotSupportedError = function createNotSupportedError() {
      try {
        return new DOMException('', 'NotSupportedError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.code = 9;
        err.name = 'NotSupportedError';
        return err;
      }
    };

    var DEFAULT_OPTIONS$g = {
      numberOfChannels: 1
    };
    var createOfflineAudioContextConstructor = function createOfflineAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createNativeOfflineAudioContext, _startRendering) {
      return (
        /*#__PURE__*/
        function (_baseAudioContextCons) {
          _inherits(OfflineAudioContext, _baseAudioContextCons);

          function OfflineAudioContext(a, b, c) {
            var _this;

            _classCallCheck(this, OfflineAudioContext);

            var options;

            if (typeof a === 'number' && b !== undefined && c !== undefined) {
              options = {
                length: b,
                numberOfChannels: a,
                sampleRate: c
              };
            } else if (_typeof(a) === 'object') {
              options = a;
            } else {
              throw new Error('The given parameters are not valid.');
            }

            var _Object$assign = Object.assign({}, DEFAULT_OPTIONS$g, options),
                length = _Object$assign.length,
                numberOfChannels = _Object$assign.numberOfChannels,
                sampleRate = _Object$assign.sampleRate;

            var nativeOfflineAudioContext = createNativeOfflineAudioContext(numberOfChannels, length, sampleRate); // #21 Safari does not support promises and therefore would fire the statechange event before the promise can be resolved.

            if (!cacheTestResult(testPromiseSupport, function () {
              return testPromiseSupport(nativeOfflineAudioContext);
            })) {
              nativeOfflineAudioContext.addEventListener('statechange', function () {
                var i = 0;

                var delayStateChangeEvent = function delayStateChangeEvent(event) {
                  if (_this._state === 'running') {
                    if (i > 0) {
                      nativeOfflineAudioContext.removeEventListener('statechange', delayStateChangeEvent);
                      event.stopImmediatePropagation();

                      _this._waitForThePromiseToSettle(event);
                    } else {
                      i += 1;
                    }
                  }
                };

                return delayStateChangeEvent;
              }());
            }

            _this = _possibleConstructorReturn(this, _getPrototypeOf(OfflineAudioContext).call(this, nativeOfflineAudioContext, numberOfChannels));
            _this._length = length;
            _this._nativeOfflineAudioContext = nativeOfflineAudioContext;
            _this._state = null;
            return _this;
          }

          _createClass(OfflineAudioContext, [{
            key: "startRendering",
            value: function startRendering() {
              var _this2 = this;

              /*
               * Bug #9 & #59: It is theoretically possible that startRendering() will first render a partialOfflineAudioContext. Therefore
               * the state of the nativeOfflineAudioContext might no transition to running immediately.
               */
              if (this._state === 'running') {
                return Promise.reject(createInvalidStateError());
              }

              this._state = 'running';
              return _startRendering(this.destination, this._nativeOfflineAudioContext).then(function (audioBuffer) {
                _this2._state = null;
                /*
                 * Bug #50: Deleting the AudioGraph is currently not possible anymore.
                 * deleteAudioGraph(this, this._nativeOfflineAudioContext);
                 */

                return audioBuffer;
              }) // @todo This could be written more elegantly when Promise.finally() becomes avalaible.
              .catch(function (err) {
                _this2._state = null;
                /*
                 * Bug #50: Deleting the AudioGraph is currently not possible anymore.
                 * deleteAudioGraph(this, this._nativeOfflineAudioContext);
                 */

                throw err; // tslint:disable-line:rxjs-throw-error
              });
            }
          }, {
            key: "_waitForThePromiseToSettle",
            value: function _waitForThePromiseToSettle(event) {
              var _this3 = this;

              if (this._state === null) {
                this._nativeOfflineAudioContext.dispatchEvent(event);
              } else {
                setTimeout(function () {
                  return _this3._waitForThePromiseToSettle(event);
                });
              }
            }
          }, {
            key: "length",
            get: function get() {
              // Bug #17: Safari does not yet expose the length.
              if (this._nativeOfflineAudioContext.length === undefined) {
                return this._length;
              }

              return this._nativeOfflineAudioContext.length;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
            }
          }]);

          return OfflineAudioContext;
        }(baseAudioContextConstructor)
      );
    };

    var DEFAULT_OPTIONS$h = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      detune: 0,
      frequency: 440,
      type: 'sine'
    };
    var createOscillatorNodeConstructor = function createOscillatorNodeConstructor(createAudioParam, createInvalidStateError, createNativeOscillatorNode, createOscillatorNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(OscillatorNode, _noneAudioDestination);

          function OscillatorNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$h;

            _classCallCheck(this, OscillatorNode);

            var absoluteValue = 1200 * Math.log2(context.sampleRate);
            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$h, options);
            var nativeOscillatorNode = createNativeOscillatorNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var oscillatorNodeRenderer = isOffline ? createOscillatorNodeRenderer() : null;
            var nyquist = context.sampleRate / 2;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(OscillatorNode).call(this, context, nativeOscillatorNode, oscillatorNodeRenderer)); // Bug #81: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._detune = createAudioParam(context, isOffline, nativeOscillatorNode.detune, absoluteValue, -absoluteValue); // Bug #76: Edge & Safari do not export the correct values for maxValue and minValue.

            _this._frequency = createAudioParam(context, isOffline, nativeOscillatorNode.frequency, nyquist, -nyquist);
            _this._nativeOscillatorNode = nativeOscillatorNode;
            _this._onended = null;
            _this._oscillatorNodeRenderer = oscillatorNodeRenderer;

            if (_this._oscillatorNodeRenderer !== null && mergedOptions.periodicWave !== undefined) {
              _this._oscillatorNodeRenderer.periodicWave = mergedOptions.periodicWave;
            }

            return _this;
          }

          _createClass(OscillatorNode, [{
            key: "setPeriodicWave",
            value: function setPeriodicWave(periodicWave) {
              this._nativeOscillatorNode.setPeriodicWave(periodicWave);

              if (this._oscillatorNodeRenderer !== null) {
                this._oscillatorNodeRenderer.periodicWave = periodicWave;
              }
            }
          }, {
            key: "start",
            value: function start() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeOscillatorNode.start(when);

              if (this._oscillatorNodeRenderer !== null) {
                this._oscillatorNodeRenderer.start = when;
              }
            }
          }, {
            key: "stop",
            value: function stop() {
              var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

              this._nativeOscillatorNode.stop(when);

              if (this._oscillatorNodeRenderer !== null) {
                this._oscillatorNodeRenderer.stop = when;
              }
            }
          }, {
            key: "detune",
            get: function get() {
              return this._detune;
            }
          }, {
            key: "frequency",
            get: function get() {
              return this._frequency;
            }
          }, {
            key: "onended",
            get: function get() {
              return this._onended;
            },
            set: function set(value) {
              var wrappedListener = wrapEventListener(this, value);
              this._nativeOscillatorNode.onended = wrappedListener;
              var nativeOnStateChange = this._nativeOscillatorNode.onended;
              this._onended = nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
            }
          }, {
            key: "type",
            get: function get() {
              return this._nativeOscillatorNode.type;
            },
            set: function set(value) {
              this._nativeOscillatorNode.type = value; // Bug #57: Edge will not throw an error when assigning the type to 'custom'. But it still will change the value.

              if (value === 'custom') {
                throw createInvalidStateError();
              }

              if (this._oscillatorNodeRenderer !== null) {
                this._oscillatorNodeRenderer.periodicWave = null;
              }
            }
          }]);

          return OscillatorNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createOscillatorNodeRendererFactory = function createOscillatorNodeRendererFactory(createNativeOscillatorNode) {
      return function () {
        var nativeOscillatorNodePromise = null;
        var periodicWave = null;
        var start = null;
        var stop = null;

        var createOscillatorNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeOscillatorNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeOscillatorNode = getNativeAudioNode(proxy); // If the initially used nativeOscillatorNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (isOwnedByContext(nativeOscillatorNode, nativeOfflineAudioContext)) {
                      _context.next = 13;
                      break;
                    }

                    options = {
                      channelCount: nativeOscillatorNode.channelCount,
                      channelCountMode: nativeOscillatorNode.channelCountMode,
                      channelInterpretation: nativeOscillatorNode.channelInterpretation,
                      detune: nativeOscillatorNode.detune.value,
                      frequency: nativeOscillatorNode.frequency.value,
                      type: nativeOscillatorNode.type
                    };

                    if (periodicWave !== null) {
                      options.periodicWave = periodicWave;
                    }

                    nativeOscillatorNode = createNativeOscillatorNode(nativeOfflineAudioContext, options);

                    if (start !== null) {
                      nativeOscillatorNode.start(start);
                    }

                    if (stop !== null) {
                      nativeOscillatorNode.stop(stop);
                    }

                    _context.next = 9;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);

                  case 9:
                    _context.next = 11;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);

                  case 11:
                    _context.next = 17;
                    break;

                  case 13:
                    _context.next = 15;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.detune);

                  case 15:
                    _context.next = 17;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.frequency);

                  case 17:
                    _context.next = 19;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeOscillatorNode);

                  case 19:
                    return _context.abrupt("return", nativeOscillatorNode);

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createOscillatorNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          set periodicWave(value) {
            periodicWave = value;
          },

          set start(value) {
            start = value;
          },

          set stop(value) {
            stop = value;
          },

          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeOscillatorNodePromise === null) {
              nativeOscillatorNodePromise = createOscillatorNode(proxy, nativeOfflineAudioContext);
            }

            return nativeOscillatorNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$i = {
      channelCount: 2,
      channelCountMode: 'clamped-max',
      channelInterpretation: 'speakers',
      coneInnerAngle: 360,
      coneOuterAngle: 360,
      coneOuterGain: 0,
      distanceModel: 'inverse',
      maxDistance: 10000,
      orientationX: 1,
      orientationY: 0,
      orientationZ: 0,
      panningModel: 'equalpower',
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      refDistance: 1,
      rolloffFactor: 1
    };
    var createPannerNodeConstructor = function createPannerNodeConstructor(createAudioParam, createNativePannerNode, createPannerNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(PannerNode, _noneAudioDestination);

          function PannerNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$i;

            _classCallCheck(this, PannerNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$i, options);
            var nativePannerNode = createNativePannerNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var pannerNodeRenderer = isOffline ? createPannerNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(PannerNode).call(this, context, nativePannerNode, pannerNodeRenderer));
            _this._nativePannerNode = nativePannerNode; // Bug #74: Edge & Safari do not export the correct values for maxValue and minValue for GainNodes.

            _this._orientationX = createAudioParam(context, isOffline, nativePannerNode.orientationX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._orientationY = createAudioParam(context, isOffline, nativePannerNode.orientationY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._orientationZ = createAudioParam(context, isOffline, nativePannerNode.orientationZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._positionX = createAudioParam(context, isOffline, nativePannerNode.positionX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._positionY = createAudioParam(context, isOffline, nativePannerNode.positionY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            _this._positionZ = createAudioParam(context, isOffline, nativePannerNode.positionZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            return _this;
          }

          _createClass(PannerNode, [{
            key: "coneInnerAngle",
            get: function get() {
              return this._nativePannerNode.coneInnerAngle;
            },
            set: function set(value) {
              this._nativePannerNode.coneInnerAngle = value;
            }
          }, {
            key: "coneOuterAngle",
            get: function get() {
              return this._nativePannerNode.coneOuterAngle;
            },
            set: function set(value) {
              this._nativePannerNode.coneOuterAngle = value;
            }
          }, {
            key: "coneOuterGain",
            get: function get() {
              return this._nativePannerNode.coneOuterGain;
            },
            set: function set(value) {
              this._nativePannerNode.coneOuterGain = value;
            }
          }, {
            key: "distanceModel",
            get: function get() {
              return this._nativePannerNode.distanceModel;
            },
            set: function set(value) {
              this._nativePannerNode.distanceModel = value;
            }
          }, {
            key: "maxDistance",
            get: function get() {
              return this._nativePannerNode.maxDistance;
            },
            set: function set(value) {
              this._nativePannerNode.maxDistance = value;
            }
          }, {
            key: "orientationX",
            get: function get() {
              return this._orientationX;
            }
          }, {
            key: "orientationY",
            get: function get() {
              return this._orientationY;
            }
          }, {
            key: "orientationZ",
            get: function get() {
              return this._orientationZ;
            }
          }, {
            key: "panningModel",
            get: function get() {
              return this._nativePannerNode.panningModel;
            },
            set: function set(value) {
              this._nativePannerNode.panningModel = value;
            }
          }, {
            key: "positionX",
            get: function get() {
              return this._positionX;
            }
          }, {
            key: "positionY",
            get: function get() {
              return this._positionY;
            }
          }, {
            key: "positionZ",
            get: function get() {
              return this._positionZ;
            }
          }, {
            key: "refDistance",
            get: function get() {
              return this._nativePannerNode.refDistance;
            },
            set: function set(value) {
              this._nativePannerNode.refDistance = value;
            }
          }, {
            key: "rolloffFactor",
            get: function get() {
              return this._nativePannerNode.rolloffFactor;
            },
            set: function set(value) {
              this._nativePannerNode.rolloffFactor = value;
            }
          }]);

          return PannerNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createPannerNodeRendererFactory = function createPannerNodeRendererFactory(createNativePannerNode) {
      return function () {
        var nativePannerNodePromise = null;

        var createPannerNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativePannerNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativePannerNode = getNativeAudioNode(proxy); // If the initially used nativePannerNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (isOwnedByContext(nativePannerNode, nativeOfflineAudioContext)) {
                      _context.next = 18;
                      break;
                    }

                    options = {
                      channelCount: nativePannerNode.channelCount,
                      channelCountMode: nativePannerNode.channelCountMode,
                      channelInterpretation: nativePannerNode.channelInterpretation,
                      coneInnerAngle: nativePannerNode.coneInnerAngle,
                      coneOuterAngle: nativePannerNode.coneOuterAngle,
                      coneOuterGain: nativePannerNode.coneOuterGain,
                      distanceModel: nativePannerNode.distanceModel,
                      maxDistance: nativePannerNode.maxDistance,
                      orientationX: nativePannerNode.orientationX.value,
                      orientationY: nativePannerNode.orientationY.value,
                      orientationZ: nativePannerNode.orientationZ.value,
                      panningModel: nativePannerNode.panningModel,
                      positionX: nativePannerNode.positionX.value,
                      positionY: nativePannerNode.positionY.value,
                      positionZ: nativePannerNode.positionZ.value,
                      refDistance: nativePannerNode.refDistance,
                      rolloffFactor: nativePannerNode.rolloffFactor
                    };
                    nativePannerNode = createNativePannerNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);

                  case 6:
                    _context.next = 8;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);

                  case 8:
                    _context.next = 10;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);

                  case 10:
                    _context.next = 12;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);

                  case 12:
                    _context.next = 14;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);

                  case 14:
                    _context.next = 16;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);

                  case 16:
                    _context.next = 30;
                    break;

                  case 18:
                    _context.next = 20;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.orientationX);

                  case 20:
                    _context.next = 22;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.orientationY);

                  case 22:
                    _context.next = 24;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.orientationZ);

                  case 24:
                    _context.next = 26;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.positionX);

                  case 26:
                    _context.next = 28;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.positionY);

                  case 28:
                    _context.next = 30;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.positionZ);

                  case 30:
                    if (!(nativePannerNode.inputs !== undefined)) {
                      _context.next = 35;
                      break;
                    }

                    _context.next = 33;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativePannerNode.inputs[0]);

                  case 33:
                    _context.next = 37;
                    break;

                  case 35:
                    _context.next = 37;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativePannerNode);

                  case 37:
                    return _context.abrupt("return", nativePannerNode);

                  case 38:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createPannerNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativePannerNodePromise === null) {
              nativePannerNodePromise = createPannerNode(proxy, nativeOfflineAudioContext);
            }

            return nativePannerNodePromise;
          }
        };
      };
    };

    var DEFAULT_OPTIONS$j = {
      disableNormalization: false
    };
    var createPeriodicWaveConstructor = function createPeriodicWaveConstructor(createNativePeriodicWave) {
      return function PeriodicWave(context, options) {
        _classCallCheck(this, PeriodicWave);

        var nativeContext = getNativeContext(context);
        var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$j, options); // This does violate all good pratices but it is used here to simplify the handling of periodic waves.

        return createNativePeriodicWave(nativeContext, mergedOptions);
      };
    };

    var createRenderNativeOfflineAudioContext = function createRenderNativeOfflineAudioContext(createNativeGainNode) {
      return function (nativeOfflineAudioContext) {
        // Bug #21: Safari does not support promises yet.
        if (cacheTestResult(testPromiseSupport, function () {
          return testPromiseSupport(nativeOfflineAudioContext);
        })) {
          return nativeOfflineAudioContext.startRendering();
        }

        return new Promise(function (resolve) {
          // Bug #48: Safari does not render an OfflineAudioContext without any connected node.
          var gainNode = createNativeGainNode(nativeOfflineAudioContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
          });

          nativeOfflineAudioContext.oncomplete = function (event) {
            gainNode.disconnect();
            resolve(event.renderedBuffer);
          };

          gainNode.connect(nativeOfflineAudioContext.destination);
          nativeOfflineAudioContext.startRendering();
        });
      };
    };

    var createStartRendering = function createStartRendering(renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsSubarraySupport) {
      return function (destination, nativeOfflineAudioContext) {
        return getAudioNodeRenderer(destination).render(destination, nativeOfflineAudioContext).then(function () {
          return renderNativeOfflineAudioContext(nativeOfflineAudioContext);
        }).then(function (audioBuffer) {
          // Bug #5: Safari does not support copyFromChannel() and copyToChannel().
          // Bug #100: Safari does throw a wrong error when calling getChannelData() with an out-of-bounds value.
          if (typeof audioBuffer.copyFromChannel !== 'function') {
            wrapAudioBufferCopyChannelMethods(audioBuffer);
            wrapAudioBufferGetChannelDataMethod(audioBuffer); // Bug #42: Firefox does not yet fully support copyFromChannel() and copyToChannel().
          } else if (!cacheTestResult(testAudioBufferCopyChannelMethodsSubarraySupport, function () {
            return testAudioBufferCopyChannelMethodsSubarraySupport(audioBuffer);
          })) {
            wrapAudioBufferCopyChannelMethodsSubarray(audioBuffer);
          }

          return audioBuffer;
        });
      };
    };

    var DEFAULT_OPTIONS$k = {
      channelCount: 2,

      /*
       * Bug #105: The channelCountMode should be 'clamped-max' according to the spec but is set to 'explicit' to achieve consistent
       * behavior.
       */
      channelCountMode: 'explicit',
      channelInterpretation: 'speakers',
      pan: 0
    };
    var createStereoPannerNodeConstructor = function createStereoPannerNodeConstructor(createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(StereoPannerNode, _noneAudioDestination);

          function StereoPannerNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$k;

            _classCallCheck(this, StereoPannerNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$k, options);
            var nativeStereoPannerNode = createNativeStereoPannerNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var stereoPannerNodeRenderer = isOffline ? createStereoPannerNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(StereoPannerNode).call(this, context, nativeStereoPannerNode, stereoPannerNodeRenderer)); // Bug #106: Edge does not export a maxValue and minValue property.

            _this._pan = createAudioParam(context, isOffline, nativeStereoPannerNode.pan, 1, -1);
            return _this;
          }

          _createClass(StereoPannerNode, [{
            key: "pan",
            get: function get() {
              return this._pan;
            }
          }]);

          return StereoPannerNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createStereoPannerNodeRendererFactory = function createStereoPannerNodeRendererFactory(createNativeStereoPannerNode) {
      return function () {
        var nativeStereoPannerNodePromise = null;

        var createStereoPannerNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeStereoPannerNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeStereoPannerNode = getNativeAudioNode(proxy);
                    /*
                     * If the initially used nativeStereoPannerNode was not constructed on the same OfflineAudioContext it needs to be created
                     * again.
                     */

                    if (isOwnedByContext(nativeStereoPannerNode, nativeOfflineAudioContext)) {
                      _context.next = 8;
                      break;
                    }

                    options = {
                      channelCount: nativeStereoPannerNode.channelCount,
                      channelCountMode: nativeStereoPannerNode.channelCountMode,
                      channelInterpretation: nativeStereoPannerNode.channelInterpretation,
                      pan: nativeStereoPannerNode.pan.value
                    };
                    nativeStereoPannerNode = createNativeStereoPannerNode(nativeOfflineAudioContext, options);
                    _context.next = 6;
                    return renderAutomation(proxy.context, nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);

                  case 6:
                    _context.next = 10;
                    break;

                  case 8:
                    _context.next = 10;
                    return connectAudioParam(proxy.context, nativeOfflineAudioContext, proxy.pan);

                  case 10:
                    if (!(nativeStereoPannerNode.inputs !== undefined)) {
                      _context.next = 15;
                      break;
                    }

                    _context.next = 13;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeStereoPannerNode.inputs[0]);

                  case 13:
                    _context.next = 17;
                    break;

                  case 15:
                    _context.next = 17;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeStereoPannerNode);

                  case 17:
                    return _context.abrupt("return", nativeStereoPannerNode);

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createStereoPannerNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeStereoPannerNodePromise === null) {
              nativeStereoPannerNodePromise = createStereoPannerNode(proxy, nativeOfflineAudioContext);
            }

            return nativeStereoPannerNodePromise;
          }
        };
      };
    };

    // Bug #33: Edge & Safari expose an AudioBuffer but it can't be used as a constructor.
    var createTestAudioBufferConstructorSupport = function createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor) {
      return function () {
        if (nativeAudioBufferConstructor === null) {
          return false;
        }

        try {
          new nativeAudioBufferConstructor({
            length: 1,
            sampleRate: 44100
          }); // tslint:disable-line:no-unused-expression
        } catch (_a) {
          return false;
        }

        return true;
      };
    };

    var createTestAudioBufferSourceNodeStartMethodConsecutiveCallsSupport = function createTestAudioBufferSourceNodeStartMethodConsecutiveCallsSupport(createNativeAudioNode) {
      return function (nativeContext) {
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBufferSource();
        });
        nativeAudioBufferSourceNode.start();

        try {
          nativeAudioBufferSourceNode.start();
        } catch (_a) {
          return true;
        }

        return false;
      };
    };

    // Bug #92: Edge does not respect the duration parameter yet.
    var createTestAudioBufferSourceNodeStartMethodDurationParameterSupport = function createTestAudioBufferSourceNodeStartMethodDurationParameterSupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return Promise.resolve(false);
        }

        var offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        var audioBuffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
        var audioBufferSourceNode = offlineAudioContext.createBufferSource();
        audioBuffer.getChannelData(0)[0] = 1;
        audioBufferSourceNode.buffer = audioBuffer;
        audioBufferSourceNode.start(0, 0, 0);
        audioBufferSourceNode.connect(offlineAudioContext.destination); // Bug #21: Safari does not support promises yet.

        return new Promise(function (resolve) {
          offlineAudioContext.oncomplete = function (_ref) {
            var renderedBuffer = _ref.renderedBuffer;
            // Bug #5: Safari does not support copyFromChannel().
            resolve(renderedBuffer.getChannelData(0)[0] === 0);
          };

          offlineAudioContext.startRendering();
        });
      };
    };

    var createTestAudioContextCloseMethodSupport = function createTestAudioContextCloseMethodSupport(nativeAudioContextConstructor) {
      return function () {
        if (nativeAudioContextConstructor === null) {
          return false;
        } // Try to check the prototype before constructing the AudioContext.


        if (nativeAudioContextConstructor.prototype !== undefined && nativeAudioContextConstructor.prototype.close !== undefined) {
          return true;
        }

        var audioContext = new nativeAudioContextConstructor();
        var isAudioContextClosable = audioContext.close !== undefined;

        try {
          audioContext.close();
        } catch (_a) {// Ignore errors.
        }

        return isAudioContextClosable;
      };
    };

    /**
     * Edge up to version 14, Firefox up to version 52, Safari up to version 9 and maybe other browsers
     * did not refuse to decode invalid parameters with a TypeError.
     */
    var createTestAudioContextDecodeAudioDataMethodTypeErrorSupport = function createTestAudioContextDecodeAudioDataMethodTypeErrorSupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return Promise.resolve(false);
        }

        var offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100); // Bug #21: Safari does not support promises yet.

        return new Promise(function (resolve) {
          var isPending = true;

          var resolvePromise = function resolvePromise(err) {
            if (isPending) {
              isPending = false;
              offlineAudioContext.startRendering();
              resolve(err instanceof TypeError);
            }
          };

          offlineAudioContext // Bug #1: Safari requires a successCallback.
          .decodeAudioData(null, function () {// Ignore the success callback.
          }, resolvePromise) // Bug #6 Chrome does not call the errorCallback
          .catch(resolvePromise);
        });
      };
    };

    var createTestAudioContextOptionsSupport = function createTestAudioContextOptionsSupport(nativeAudioContextConstructor) {
      return function () {
        if (nativeAudioContextConstructor === null) {
          return false;
        }

        var audioContext;

        try {
          audioContext = new nativeAudioContextConstructor({
            latencyHint: 'balanced'
          });
        } catch (_a) {
          return false;
        }

        audioContext.close();
        return true;
      };
    };

    var createTestAudioScheduledSourceNodeStartMethodNegativeParametersSupport = function createTestAudioScheduledSourceNodeStartMethodNegativeParametersSupport(createNativeAudioNode) {
      return function (nativeContext) {
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createOscillator();
        });

        try {
          nativeAudioBufferSourceNode.start(-1);
        } catch (err) {
          return err instanceof RangeError;
        }

        return false;
      };
    };

    var createTestAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = function createTestAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(createNativeAudioNode) {
      return function (nativeContext) {
        var nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBufferSource();
        });
        nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
        nativeAudioBufferSourceNode.start();
        nativeAudioBufferSourceNode.stop();

        try {
          nativeAudioBufferSourceNode.stop();
          return true;
        } catch (_a) {
          return false;
        }
      };
    };

    var createTestAudioScheduledSourceNodeStopMethodNegativeParametersSupport = function createTestAudioScheduledSourceNodeStopMethodNegativeParametersSupport(createNativeAudioNode) {
      return function (nativeContext) {
        var nativeAudioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createOscillator();
        });

        try {
          nativeAudioBufferSourceNode.stop(-1);
        } catch (err) {
          return err instanceof RangeError;
        }

        return false;
      };
    };

    /**
     * Chrome version 66 and 67 did not call the process() function of an AudioWorkletProcessor if it had no outputs. AudioWorklet support was
     * enabled by default in version 66.
     */
    var createTestAudioWorkletProcessorNoOutputsSupport = function createTestAudioWorkletProcessorNoOutputsSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor) {
      return (
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime.mark(function _callee() {
          var blob, offlineAudioContext, url, isCallingProcess, gainNode, audioWorkletNode;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(nativeAudioWorkletNodeConstructor === null)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", true);

                case 2:
                  if (!(nativeOfflineAudioContextConstructor === null)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return", false);

                case 4:
                  blob = new Blob(['class A extends AudioWorkletProcessor{process(){this.port.postMessage(0)}}registerProcessor("a",A)'], {
                    type: 'application/javascript; charset=utf-8'
                  });
                  offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 128, 3200);
                  url = URL.createObjectURL(blob);
                  isCallingProcess = false;
                  _context.prev = 8;
                  _context.next = 11;
                  return offlineAudioContext.audioWorklet.addModule(url);

                case 11:
                  gainNode = offlineAudioContext.createGain();
                  audioWorkletNode = new nativeAudioWorkletNodeConstructor(offlineAudioContext, 'a', {
                    numberOfOutputs: 0
                  });

                  audioWorkletNode.port.onmessage = function () {
                    return isCallingProcess = true;
                  };

                  gainNode.connect(audioWorkletNode);
                  _context.next = 17;
                  return offlineAudioContext.startRendering();

                case 17:
                  _context.next = 21;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t0 = _context["catch"](8);

                case 21:
                  _context.prev = 21;
                  URL.revokeObjectURL(url);
                  return _context.finish(21);

                case 24:
                  return _context.abrupt("return", isCallingProcess);

                case 25:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 19, 21, 24]]);
        }))
      );
    };

    /**
     * Firefox up to version 44 had a bug which resulted in a misbehaving ChannelMergerNode. If one of
     * its channels would be unconnected the remaining channels were somehow upmixed to spread the
     * signal across all available channels.
     */
    var createTestChannelMergerNodeSupport = function createTestChannelMergerNodeSupport(nativeAudioContextConstructor) {
      return function () {
        if (nativeAudioContextConstructor === null) {
          return Promise.resolve(false);
        }

        var audioContext = new nativeAudioContextConstructor();
        var audioBuffer = audioContext.createBuffer(2, 2, audioContext.sampleRate);
        var audioBufferSourceNode = audioContext.createBufferSource();
        var channelMergerNode = audioContext.createChannelMerger(2);
        var scriptProcessorNode = audioContext.createScriptProcessor(256);
        return new Promise(function (resolve) {
          var startTime; // Bug #95: Safari does not play/loop one sample buffers.

          audioBuffer.getChannelData(0)[0] = 1;
          audioBuffer.getChannelData(0)[1] = 1;
          audioBuffer.getChannelData(1)[0] = 1;
          audioBuffer.getChannelData(1)[1] = 1;
          audioBufferSourceNode.buffer = audioBuffer;
          audioBufferSourceNode.loop = true;

          scriptProcessorNode.onaudioprocess = function (event) {
            var channelData = event.inputBuffer.getChannelData(1);
            var length = channelData.length;

            for (var i = 0; i < length; i += 1) {
              if (channelData[i] !== 0) {
                resolve(false);
                return;
              }
            }

            if (startTime + 1 / audioContext.sampleRate < event.playbackTime) {
              resolve(true);
            }
          };

          audioBufferSourceNode.connect(channelMergerNode, 0, 0);
          channelMergerNode.connect(scriptProcessorNode);
          scriptProcessorNode.connect(audioContext.destination);
          startTime = audioContext.currentTime;
          audioBufferSourceNode.start(startTime);
        }).then(function (result) {
          audioBufferSourceNode.stop();
          audioBufferSourceNode.disconnect();
          channelMergerNode.disconnect();
          scriptProcessorNode.disconnect();
          audioContext.close();
          return result;
        });
      };
    };

    /**
     * Firefox up to version 61 had a bug which caused the ChannelSplitterNode to expose a wrong channelCount property.
     */
    var createTestChannelSplitterNodeChannelCountSupport = function createTestChannelSplitterNodeChannelCountSupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return false;
        }

        var offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        var channelSplitterNode = offlineAudioContext.createChannelSplitter(4);
        return channelSplitterNode.channelCount === 4;
      };
    };

    var createTestConstantSourceNodeAccurateSchedulingSupport = function createTestConstantSourceNodeAccurateSchedulingSupport(createNativeAudioNode, nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return false;
        }

        var nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        var nativeConstantSourceNode = createNativeAudioNode(nativeOfflineAudioContext, function (ntvCntxt) {
          return ntvCntxt.createConstantSource();
        });
        /*
         * @todo This is using bug #75 to detect bug #70. That works because both bugs were unique to
         * the implementation of Firefox right now, but it could probably be done in a better way.
         */

        return nativeConstantSourceNode.offset.maxValue !== Number.POSITIVE_INFINITY;
      };
    };

    // Opera up to version 57 did not allow to reassign the buffer of a ConvolverNode.
    var createTestConvolverNodeBufferReassignabilitySupport = function createTestConvolverNodeBufferReassignabilitySupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return false;
        }

        var offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 128, 3200);
        var nativeConvolverNode = offlineAudioContext.createConvolver();
        nativeConvolverNode.buffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);

        try {
          nativeConvolverNode.buffer = offlineAudioContext.createBuffer(1, 1, offlineAudioContext.sampleRate);
        } catch (_a) {
          return false;
        }

        return true;
      };
    };

    var createTestIsSecureContextSupport = function createTestIsSecureContextSupport(window) {
      return function () {
        return window !== null && window.hasOwnProperty('isSecureContext');
      };
    };

    /**
     * Firefox up to version 62 did not kick off the processing of the StereoPannerNode if the value of pan was zero.
     */
    var createTestStereoPannerNodeDefaultValueSupport = function createTestStereoPannerNodeDefaultValueSupport(nativeOfflineAudioContextConstructor) {
      return function () {
        if (nativeOfflineAudioContextConstructor === null) {
          return Promise.resolve(false);
        }

        var nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor(1, 1, 44100);
        /*
         * Bug #105: Safari does not support the StereoPannerNode. Therefore the returned value should normally be false but the faker does
         * support the tested behaviour.
         */

        if (nativeOfflineAudioContext.createStereoPanner === undefined) {
          return Promise.resolve(true);
        }

        var constantSourceNode = nativeOfflineAudioContext.createConstantSource();
        var stereoPanner = nativeOfflineAudioContext.createStereoPanner();
        constantSourceNode.channelCount = 1;
        constantSourceNode.offset.value = 1;
        stereoPanner.channelCount = 1;
        constantSourceNode.start();
        constantSourceNode.connect(stereoPanner).connect(nativeOfflineAudioContext.destination);
        return nativeOfflineAudioContext.startRendering().then(function (buffer) {
          return buffer.getChannelData(0)[0] !== 1;
        });
      };
    };

    var createUnknownError = function createUnknownError() {
      try {
        return new DOMException('', 'UnknownError');
      } catch (err) {
        // Bug #122: Edge is the only browser that does not yet allow to construct a DOMException.
        err.name = 'UnknownError';
        return err;
      }
    };

    var DEFAULT_OPTIONS$l = {
      channelCount: 2,
      channelCountMode: 'max',
      channelInterpretation: 'speakers',
      curve: null,
      oversample: 'none'
    };
    var createWaveShaperNodeConstructor = function createWaveShaperNodeConstructor(createInvalidStateError, createNativeWaveShaperNode, createWaveShaperNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor) {
      return (
        /*#__PURE__*/
        function (_noneAudioDestination) {
          _inherits(WaveShaperNode, _noneAudioDestination);

          function WaveShaperNode(context) {
            var _this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS$l;

            _classCallCheck(this, WaveShaperNode);

            var nativeContext = getNativeContext(context);
            var mergedOptions = Object.assign({}, DEFAULT_OPTIONS$l, options);
            var nativeWaveShaperNode = createNativeWaveShaperNode(nativeContext, mergedOptions);
            var isOffline = isNativeOfflineAudioContext(nativeContext);
            var waveShaperNodeRenderer = isOffline ? createWaveShaperNodeRenderer() : null;
            _this = _possibleConstructorReturn(this, _getPrototypeOf(WaveShaperNode).call(this, context, nativeWaveShaperNode, waveShaperNodeRenderer));
            _this._isCurveNullified = false;
            _this._nativeWaveShaperNode = nativeWaveShaperNode;
            return _this;
          }

          _createClass(WaveShaperNode, [{
            key: "curve",
            get: function get() {
              if (this._isCurveNullified) {
                return null;
              }

              return this._nativeWaveShaperNode.curve;
            },
            set: function set(value) {
              // Bug #103: Safari does not allow to set the curve to null.
              if (value === null) {
                this._isCurveNullified = true;
                this._nativeWaveShaperNode.curve = new Float32Array([0, 0]); // Bug #102: Safari does not throw an InvalidStateError when the curve has less than two samples.
                // Bug #104: Chrome will throw an InvalidAccessError when the curve has less than two samples.
              } else if (value.length < 2) {
                throw createInvalidStateError();
              } else {
                this._isCurveNullified = false;
                this._nativeWaveShaperNode.curve = value;
              }
            }
          }, {
            key: "oversample",
            get: function get() {
              return this._nativeWaveShaperNode.oversample;
            },
            set: function set(value) {
              this._nativeWaveShaperNode.oversample = value;
            }
          }]);

          return WaveShaperNode;
        }(noneAudioDestinationNodeConstructor)
      );
    };

    var createWaveShaperNodeRendererFactory = function createWaveShaperNodeRendererFactory(createNativeWaveShaperNode) {
      return function () {
        var nativeWaveShaperNodePromise = null;

        var createWaveShaperNode =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(proxy, nativeOfflineAudioContext) {
            var nativeWaveShaperNode, options;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nativeWaveShaperNode = getNativeAudioNode(proxy); // If the initially used nativeWaveShaperNode was not constructed on the same OfflineAudioContext it needs to be created again.

                    if (!isOwnedByContext(nativeWaveShaperNode, nativeOfflineAudioContext)) {
                      options = {
                        channelCount: nativeWaveShaperNode.channelCount,
                        channelCountMode: nativeWaveShaperNode.channelCountMode,
                        channelInterpretation: nativeWaveShaperNode.channelInterpretation,
                        curve: nativeWaveShaperNode.curve,
                        oversample: nativeWaveShaperNode.oversample
                      };
                      nativeWaveShaperNode = createNativeWaveShaperNode(nativeOfflineAudioContext, options);
                    }

                    if (!(nativeWaveShaperNode.inputs !== undefined)) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 5;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeWaveShaperNode.inputs[0]);

                  case 5:
                    _context.next = 9;
                    break;

                  case 7:
                    _context.next = 9;
                    return renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);

                  case 9:
                    return _context.abrupt("return", nativeWaveShaperNode);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function createWaveShaperNode(_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }();

        return {
          render: function render(proxy, nativeOfflineAudioContext) {
            if (nativeWaveShaperNodePromise === null) {
              nativeWaveShaperNodePromise = createWaveShaperNode(proxy, nativeOfflineAudioContext);
            }

            return nativeWaveShaperNodePromise;
          }
        };
      };
    };

    var createWindow = function createWindow() {
      return typeof window === 'undefined' ? null : window;
    };

    var createWrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = function createWrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(createNativeAudioNode) {
      return function (nativeAudioScheduledSourceNode, nativeContext) {
        var nativeGainNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createGain();
        });
        nativeAudioScheduledSourceNode.connect(nativeGainNode);

        var disconnectGainNode = function (disconnect) {
          return function () {
            // @todo TypeScript cannot infer the overloaded signature with 1 argument yet.
            disconnect.call(nativeAudioScheduledSourceNode, nativeGainNode);
            nativeAudioScheduledSourceNode.removeEventListener('ended', disconnectGainNode);
          };
        }(nativeAudioScheduledSourceNode.disconnect);

        nativeAudioScheduledSourceNode.addEventListener('ended', disconnectGainNode);
        interceptConnections(nativeAudioScheduledSourceNode, nativeGainNode);

        nativeAudioScheduledSourceNode.stop = function (stop) {
          var isStopped = false;
          return function () {
            var when = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (isStopped) {
              try {
                stop.call(nativeAudioScheduledSourceNode, when);
              } catch (_a) {
                nativeGainNode.gain.setValueAtTime(0, when);
              }
            } else {
              stop.call(nativeAudioScheduledSourceNode, when);
              isStopped = true;
            }
          };
        }(nativeAudioScheduledSourceNode.stop);
      };
    };

    var createWrapChannelMergerNode = function createWrapChannelMergerNode(createInvalidStateError, createNativeAudioNode) {
      return function (nativeContext, channelMergerNode) {
        var audioBufferSourceNode = createNativeAudioNode(nativeContext, function (ntvCntxt) {
          return ntvCntxt.createBufferSource();
        });
        channelMergerNode.channelCount = 1;
        channelMergerNode.channelCountMode = 'explicit'; // Bug #20: Safari requires a connection of any kind to treat the input signal correctly.

        var length = channelMergerNode.numberOfInputs;

        for (var i = 0; i < length; i += 1) {
          audioBufferSourceNode.connect(channelMergerNode, 0, i);
        }

        Object.defineProperty(channelMergerNode, 'channelCount', {
          get: function get() {
            return 1;
          },
          set: function set() {
            throw createInvalidStateError();
          }
        });
        Object.defineProperty(channelMergerNode, 'channelCountMode', {
          get: function get() {
            return 'explicit';
          },
          set: function set() {
            throw createInvalidStateError();
          }
        });
      };
    };

    // Safari at version 11 did not support transferables.
    var testTransferablesSupport = function testTransferablesSupport() {
      return new Promise(function (resolve) {
        var arrayBuffer = new ArrayBuffer(0);

        var _ref = new MessageChannel(),
            port1 = _ref.port1,
            port2 = _ref.port2;

        port1.onmessage = function (_ref2) {
          var data = _ref2.data;
          return resolve(data !== null);
        };

        port2.postMessage(arrayBuffer, [arrayBuffer]);
      });
    };

    var window$1 = createWindow();
    var nativeOfflineAudioContextConstructor = createNativeOfflineAudioContextConstructor(window$1);
    var isNativeOfflineAudioContext = createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
    var nativeAudioContextConstructor = createNativeAudioContextConstructor(window$1);
    var getBackupNativeContext = createGetBackupNativeContext(isNativeOfflineAudioContext, nativeAudioContextConstructor, nativeOfflineAudioContextConstructor);
    var createNativeAudioNode = createNativeAudioNodeFactory(getBackupNativeContext);
    var createNativeAnalyserNode = createNativeAnalyserNodeFactory(createIndexSizeError, createNativeAudioNode);
    var createAnalyserNodeRenderer = createAnalyserNodeRendererFactory(createNativeAnalyserNode);
    var audioNodeConstructor = createAudioNodeConstructor(createInvalidAccessError, isNativeOfflineAudioContext);
    var noneAudioDestinationNodeConstructor = createNoneAudioDestinationNodeConstructor(audioNodeConstructor);
    var analyserNodeConstructor = createAnalyserNodeConstructor(createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var nativeAudioBufferConstructor = createNativeAudioBufferConstructor(window$1);
    var audioBufferConstructor = createAudioBufferConstructor(createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor));
    var testAudioScheduledSourceNodeStartMethodNegativeParametersSupport = createTestAudioScheduledSourceNodeStartMethodNegativeParametersSupport(createNativeAudioNode);
    var testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = createTestAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport(createNativeAudioNode);
    var testAudioScheduledSourceNodeStopMethodNegativeParametersSupport = createTestAudioScheduledSourceNodeStopMethodNegativeParametersSupport(createNativeAudioNode);
    var wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = createWrapAudioScheduledSourceNodeStopMethodConsecutiveCalls(createNativeAudioNode);
    var createNativeAudioBufferSourceNode = createNativeAudioBufferSourceNodeFactory(createNativeAudioNode, createTestAudioBufferSourceNodeStartMethodConsecutiveCallsSupport(createNativeAudioNode), createTestAudioBufferSourceNodeStartMethodDurationParameterSupport(nativeOfflineAudioContextConstructor), testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
    var createAudioBufferSourceNodeRenderer = createAudioBufferSourceNodeRendererFactory(createNativeAudioBufferSourceNode);
    var createAudioParam = createAudioParamFactory(createAudioParamRenderer);
    var audioBufferSourceNodeConstructor = createAudioBufferSourceNodeConstructor(createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var audioDestinationNodeConstructor = createAudioDestinationNodeConstructor(audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError, createInvalidStateError, createNativeAudioDestinationNode, isNativeOfflineAudioContext);
    var createNativeBiquadFilterNode = createNativeBiquadFilterNodeFactory(createNativeAudioNode);
    var createBiquadFilterNodeRenderer = createBiquadFilterNodeRendererFactory(createNativeBiquadFilterNode);
    var biquadFilterNodeConstructor = createBiquadFilterNodeConstructor(createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var wrapChannelMergerNode = createWrapChannelMergerNode(createInvalidStateError, createNativeAudioNode);
    var createNativeChannelMergerNode = createNativeChannelMergerNodeFactory(createNativeAudioNode, wrapChannelMergerNode);
    var createChannelMergerNodeRenderer = createChannelMergerNodeRendererFactory(createNativeChannelMergerNode);
    var channelMergerNodeConstructor = createChannelMergerNodeConstructor(createChannelMergerNodeRenderer, createNativeChannelMergerNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeChannelSplitterNode = createNativeChannelSplitterNodeFactory(createNativeAudioNode);
    var createChannelSplitterNodeRenderer = createChannelSplitterNodeRendererFactory(createNativeChannelSplitterNode);
    var channelSplitterNodeConstructor = createChannelSplitterNodeConstructor(createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeGainNode = createNativeGainNodeFactory(createNativeAudioNode);
    var createNativeConstantSourceNodeFaker = createNativeConstantSourceNodeFakerFactory(createNativeAudioBufferSourceNode, createNativeGainNode);
    var createNativeConstantSourceNode = createNativeConstantSourceNodeFactory(createNativeAudioNode, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport);
    var createConstantSourceNodeRenderer = createConstantSourceNodeRendererFactory(createNativeConstantSourceNode);
    var constantSourceNodeConstructor = createConstantSourceNodeConstructor(createAudioParam, createConstantSourceNodeRenderer, createNativeConstantSourceNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeConvolverNode = createNativeConvolverNodeFactory(createNativeAudioNode, createNotSupportedError);
    var createConvolverNodeRenderer = createConvolverNodeRendererFactory(createNativeConvolverNode);
    var convolverNodeConstructor = createConvolverNodeConstructor(createConvolverNodeRenderer, createNativeConvolverNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeDelayNode = createNativeDelayNodeFactory(createNativeAudioNode);
    var createDelayNodeRenderer = createDelayNodeRendererFactory(createNativeDelayNode);
    var delayNodeConstructor = createDelayNodeConstructor(createAudioParam, createDelayNodeRenderer, createNativeDelayNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeDynamicsCompressorNode = createNativeDynamicsCompressorNodeFactory(createNativeAudioNode, createNotSupportedError);
    var createDynamicsCompressorNodeRenderer = createDynamicsCompressorNodeRendererFactory(createNativeDynamicsCompressorNode);
    var dynamicsCompressorNodeConstructor = createDynamicsCompressorNodeConstructor(createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createGainNodeRenderer = createGainNodeRendererFactory(createNativeGainNode);
    var gainNodeConstructor = createGainNodeConstructor(createAudioParam, createGainNodeRenderer, createNativeGainNode, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeScriptProcessorNode = createNativeScriptProcessorNodeFactory(createNativeAudioNode);
    var createNativeIIRFilterNodeFaker = createNativeIIRFilterNodeFakerFactory(createInvalidAccessError, createInvalidStateError, createNativeScriptProcessorNode, createNotSupportedError);
    var renderNativeOfflineAudioContext = createRenderNativeOfflineAudioContext(createNativeGainNode);
    var createIIRFilterNodeRenderer = createIIRFilterNodeRendererFactory(createNativeAudioBufferSourceNode, createNativeAudioNode, nativeOfflineAudioContextConstructor, renderNativeOfflineAudioContext);
    var createNativeIIRFilterNode = createNativeIIRFilterNodeFactory(createNativeAudioNode, createNativeIIRFilterNodeFaker);
    var iIRFilterNodeConstructor = createIIRFilterNodeConstructor(createNativeIIRFilterNode, createIIRFilterNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createAudioListener = createAudioListenerFactory(createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, isNativeOfflineAudioContext);
    var minimalBaseAudioContextConstructor = createMinimalBaseAudioContextConstructor(audioDestinationNodeConstructor, createAudioListener);
    var createNativeOscillatorNode = createNativeOscillatorNodeFactory(createNativeAudioNode, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
    var createOscillatorNodeRenderer = createOscillatorNodeRendererFactory(createNativeOscillatorNode);
    var oscillatorNodeConstructor = createOscillatorNodeConstructor(createAudioParam, createInvalidStateError, createNativeOscillatorNode, createOscillatorNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeWaveShaperNodeFaker = createNativeWaveShaperNodeFakerFactory(createInvalidStateError, createNativeAudioNode, createNativeGainNode);
    var createNativeWaveShaperNode = createNativeWaveShaperNodeFactory(createInvalidStateError, createNativeAudioNode, createNativeWaveShaperNodeFaker);
    var createNativePannerNodeFaker = createNativePannerNodeFakerFactory(createInvalidStateError, createNativeAudioNode, createNativeChannelMergerNode, createNativeGainNode, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError);
    var createNativePannerNode = createNativePannerNodeFactory(createNativeAudioNode, createNativePannerNodeFaker);
    var createPannerNodeRenderer = createPannerNodeRendererFactory(createNativePannerNode);
    var pannerNodeConstructor = createPannerNodeConstructor(createAudioParam, createNativePannerNode, createPannerNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativePeriodicWave = createNativePeriodicWaveFactory(getBackupNativeContext);
    var periodicWaveConstructor = createPeriodicWaveConstructor(createNativePeriodicWave);
    var nativeStereoPannerNodeFakerFactory = createNativeStereoPannerNodeFakerFactory(createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError);
    var createNativeStereoPannerNode = createNativeStereoPannerNodeFactory(createNativeAudioNode, nativeStereoPannerNodeFakerFactory, createNotSupportedError);
    var createStereoPannerNodeRenderer = createStereoPannerNodeRendererFactory(createNativeStereoPannerNode);
    var stereoPannerNodeConstructor = createStereoPannerNodeConstructor(createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createWaveShaperNodeRenderer = createWaveShaperNodeRendererFactory(createNativeWaveShaperNode);
    var waveShaperNodeConstructor = createWaveShaperNodeConstructor(createInvalidStateError, createNativeWaveShaperNode, createWaveShaperNodeRenderer, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var isSecureContext = createIsSecureContext(window$1); // The addAudioWorkletModule() function is only available in a SecureContext.

    var addAudioWorkletModule = isSecureContext ? createAddAudioWorkletModule(createAbortError, createNotSupportedError, createFetchSource(createAbortError), getBackupNativeContext) : undefined;
    var isNativeContext = createIsNativeContext(isNativeOfflineAudioContext, nativeAudioContextConstructor);
    var decodeAudioData = createDecodeAudioData(createDataCloneError, createEncodingError, nativeOfflineAudioContextConstructor, isNativeContext, isNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsSubarraySupport, testPromiseSupport);
    var baseAudioContextConstructor = createBaseAudioContextConstructor(addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor);
    var createNativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNodeFactory(createNativeAudioNode);
    var mediaElementAudioSourceNodeConstructor = createMediaElementAudioSourceNodeConstructor(createNativeMediaElementAudioSourceNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var createNativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNodeFactory(createInvalidStateError, createNativeAudioNode);
    var mediaStreamAudioSourceNodeConstructor = createMediaStreamAudioSourceNodeConstructor(createNativeMediaStreamAudioSourceNode, createNotSupportedError, isNativeOfflineAudioContext, noneAudioDestinationNodeConstructor);
    var audioContextConstructor = createAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioSourceNodeConstructor, nativeAudioContextConstructor);
    var connectMultipleOutputs = createConnectMultipleOutputs(createIndexSizeError);
    var disconnectMultipleOutputs = createDisconnectMultipleOutputs(createIndexSizeError);
    var createNativeAudioWorkletNodeFaker = createNativeAudioWorkletNodeFakerFactory(connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs);
    var createNativeAudioWorkletNode = createNativeAudioWorkletNodeFactory(createInvalidStateError, createNativeAudioNode, createNativeAudioWorkletNodeFaker, createNotSupportedError, isNativeOfflineAudioContext);
    var nativeAudioWorkletNodeConstructor = createNativeAudioWorkletNodeConstructor(window$1);
    var createAudioWorkletNodeRenderer = createAudioWorkletNodeRendererFactory(connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, disconnectMultipleOutputs, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderNativeOfflineAudioContext); // The AudioWorkletNode constructor is only available in a SecureContext.

    var audioWorkletNodeConstructor = isSecureContext ? createAudioWorkletNodeConstructor(createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, gainNodeConstructor, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, noneAudioDestinationNodeConstructor) : undefined;
    var minimalAudioContextConstructor = createMinimalAudioContextConstructor(createInvalidStateError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor);
    var createNativeOfflineAudioContext = createCreateNativeOfflineAudioContext(createNotSupportedError, nativeOfflineAudioContextConstructor);
    var startRendering = createStartRendering(renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsSubarraySupport);
    var minimalOfflineAudioContextConstructor = createMinimalOfflineAudioContextConstructor(createInvalidStateError, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, startRendering);
    var offlineAudioContextConstructor = createOfflineAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createNativeOfflineAudioContext, startRendering);
    var isSupported = function isSupported() {
      return createIsSupportedPromise(browsernizr, createTestAudioContextCloseMethodSupport(nativeAudioContextConstructor), createTestAudioContextDecodeAudioDataMethodTypeErrorSupport(nativeOfflineAudioContextConstructor), createTestAudioContextOptionsSupport(nativeAudioContextConstructor), createTestAudioWorkletProcessorNoOutputsSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor), createTestChannelMergerNodeSupport(nativeAudioContextConstructor), createTestChannelSplitterNodeChannelCountSupport(nativeOfflineAudioContextConstructor), createTestConstantSourceNodeAccurateSchedulingSupport(createNativeAudioNode, nativeOfflineAudioContextConstructor), createTestConvolverNodeBufferReassignabilitySupport(nativeOfflineAudioContextConstructor), createTestIsSecureContextSupport(window$1), createTestStereoPannerNodeDefaultValueSupport(nativeOfflineAudioContextConstructor), testTransferablesSupport);
    };

    exports.AnalyserNode = analyserNodeConstructor;
    exports.AudioBuffer = audioBufferConstructor;
    exports.AudioBufferSourceNode = audioBufferSourceNodeConstructor;
    exports.addAudioWorkletModule = addAudioWorkletModule;
    exports.decodeAudioData = decodeAudioData;
    exports.AudioContext = audioContextConstructor;
    exports.AudioWorkletNode = audioWorkletNodeConstructor;
    exports.BiquadFilterNode = biquadFilterNodeConstructor;
    exports.ChannelMergerNode = channelMergerNodeConstructor;
    exports.ChannelSplitterNode = channelSplitterNodeConstructor;
    exports.ConvolverNode = convolverNodeConstructor;
    exports.ConstantSourceNode = constantSourceNodeConstructor;
    exports.DelayNode = delayNodeConstructor;
    exports.DynamicsCompressorNode = dynamicsCompressorNodeConstructor;
    exports.GainNode = gainNodeConstructor;
    exports.IIRFilterNode = iIRFilterNodeConstructor;
    exports.MediaElementAudioSourceNode = mediaElementAudioSourceNodeConstructor;
    exports.MediaStreamAudioSourceNode = mediaStreamAudioSourceNodeConstructor;
    exports.MinimalAudioContext = minimalAudioContextConstructor;
    exports.MinimalOfflineAudioContext = minimalOfflineAudioContextConstructor;
    exports.OfflineAudioContext = offlineAudioContextConstructor;
    exports.OscillatorNode = oscillatorNodeConstructor;
    exports.PannerNode = pannerNodeConstructor;
    exports.PeriodicWave = periodicWaveConstructor;
    exports.StereoPannerNode = stereoPannerNodeConstructor;
    exports.WaveShaperNode = waveShaperNodeConstructor;
    exports.isSupported = isSupported;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

},{"@babel/runtime/helpers/assertThisInitialized":4,"@babel/runtime/helpers/asyncToGenerator":5,"@babel/runtime/helpers/classCallCheck":6,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":9,"@babel/runtime/helpers/inherits":10,"@babel/runtime/helpers/possibleConstructorReturn":15,"@babel/runtime/helpers/slicedToArray":17,"@babel/runtime/helpers/toConsumableArray":18,"@babel/runtime/helpers/typeof":19,"@babel/runtime/regenerator":20,"tslib":44}],44:[function(require,module,exports){
(function (global){
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],45:[function(require,module,exports){
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@babel/runtime/regenerator'), require('@babel/runtime/helpers/asyncToGenerator'), require('fast-unique-numbers'), require('standardized-audio-context')) :
    typeof define === 'function' && define.amd ? define(['exports', '@babel/runtime/regenerator', '@babel/runtime/helpers/asyncToGenerator', 'fast-unique-numbers', 'standardized-audio-context'], factory) :
    (global = global || self, factory(global.webAudioBeatDetectorBroker = {}, global._regeneratorRuntime, global._asyncToGenerator, global.fastUniqueNumbers, global.standardizedAudioContext));
}(this, function (exports, _regeneratorRuntime, _asyncToGenerator, fastUniqueNumbers, standardizedAudioContext) { 'use strict';

    _regeneratorRuntime = _regeneratorRuntime && _regeneratorRuntime.hasOwnProperty('default') ? _regeneratorRuntime['default'] : _regeneratorRuntime;
    _asyncToGenerator = _asyncToGenerator && _asyncToGenerator.hasOwnProperty('default') ? _asyncToGenerator['default'] : _asyncToGenerator;

    var render = function render(audioBuffer, offset, duration) {
      var offlineAudioContext = new standardizedAudioContext.OfflineAudioContext(audioBuffer.numberOfChannels, duration * audioBuffer.sampleRate, audioBuffer.sampleRate);
      var biquadFilter = offlineAudioContext.createBiquadFilter();
      var bufferSourceNode = offlineAudioContext.createBufferSource();
      biquadFilter.frequency.value = 240;
      biquadFilter.type = 'lowpass';
      bufferSourceNode.buffer = audioBuffer;
      bufferSourceNode.connect(biquadFilter).connect(offlineAudioContext.destination);
      bufferSourceNode.start(0, offset, duration);
      return offlineAudioContext.startRendering().then(function (renderedBuffer) {
        var channelData = renderedBuffer.getChannelData(0);
        var sampleRate = renderedBuffer.sampleRate;
        return {
          channelData: channelData,
          sampleRate: sampleRate
        };
      });
    };

    var load = function load(url) {
      var worker = new Worker(url);
      var ongoingRecordingRequests = new Set();

      var analyze = function analyze(audioBuffer) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : audioBuffer.duration - offset;
        return new Promise(
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee(resolve, reject) {
            var _ref2, channelData, sampleRate, id, onMessage;

            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return render(audioBuffer, offset, duration);

                  case 2:
                    _ref2 = _context.sent;
                    channelData = _ref2.channelData;
                    sampleRate = _ref2.sampleRate;
                    id = fastUniqueNumbers.addUniqueNumber(ongoingRecordingRequests);

                    onMessage = function onMessage(_ref3) {
                      var data = _ref3.data;

                      if (data.id === id) {
                        ongoingRecordingRequests.delete(id);
                        worker.removeEventListener('message', onMessage);

                        if (data.error === null) {
                          resolve(data.result.tempo);
                        } else {
                          reject(new Error(data.error.message));
                        }
                      }
                    };

                    worker.addEventListener('message', onMessage);
                    worker.postMessage({
                      id: id,
                      method: 'analyze',
                      params: {
                        channelData: channelData,
                        sampleRate: sampleRate
                      }
                    }, [channelData.buffer]);

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      };

      var guess = function guess(audioBuffer) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : audioBuffer.duration - offset;
        return new Promise(
        /*#__PURE__*/
        function () {
          var _ref4 = _asyncToGenerator(
          /*#__PURE__*/
          _regeneratorRuntime.mark(function _callee2(resolve, reject) {
            var _ref5, channelData, sampleRate, id, onMessage;

            return _regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return render(audioBuffer, offset, duration);

                  case 2:
                    _ref5 = _context2.sent;
                    channelData = _ref5.channelData;
                    sampleRate = _ref5.sampleRate;
                    id = fastUniqueNumbers.addUniqueNumber(ongoingRecordingRequests);

                    onMessage = function onMessage(_ref6) {
                      var data = _ref6.data;

                      if (data.id === id) {
                        ongoingRecordingRequests.delete(id);
                        worker.removeEventListener('message', onMessage);

                        if (data.error === null) {
                          resolve(data.result);
                        } else {
                          reject(new Error(data.error.message));
                        }
                      }
                    };

                    worker.addEventListener('message', onMessage);
                    worker.postMessage({
                      id: id,
                      method: 'guess',
                      params: {
                        channelData: channelData,
                        sampleRate: sampleRate
                      }
                    }, [channelData.buffer]);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function (_x3, _x4) {
            return _ref4.apply(this, arguments);
          };
        }());
      };

      return {
        analyze: analyze,
        guess: guess
      };
    };

    exports.isSupported = standardizedAudioContext.isSupported;
    exports.load = load;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

},{"@babel/runtime/helpers/asyncToGenerator":5,"@babel/runtime/regenerator":20,"fast-unique-numbers":25,"standardized-audio-context":43}],46:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('web-audio-beat-detector-broker')) :
	typeof define === 'function' && define.amd ? define(['exports', 'web-audio-beat-detector-broker'], factory) :
	(global = global || self, factory(global.webAudioBeatDetector = {}, global.webAudioBeatDetectorBroker));
}(this, function (exports, webAudioBeatDetectorBroker) { 'use strict';

	// tslint:disable-next-line:max-line-length
	var worker = "!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,\"a\",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p=\"\",r(r.s=0)}([function(e,t,r){\"use strict\";r.r(t);r(1)},function(e,t,r){!function(e){\"use strict\";e=e&&e.hasOwnProperty(\"default\")?e.default:e;var t=function(e,t,r){for(var n=e.length,o=[],a=!1,u=0;u<n;u+=1)e[u]>t?a=!0:a&&(a=!1,o.push(u-1),u+=r/4-1);return a&&o.push(n-1),o},r=function(r,n){var o=function(e){for(var t=0,r=e.length,n=0;n<r;n+=1)e[n]>t&&(t=e[n]);return t}(r),a=.3*o,u=[],i=o-.05*o;if(o>.25)for(;u.length<30&&i>=a;)u=t(r,i,n),i-=.05*o;var s=function(e){var t=[];return e.forEach(function(r,n){for(var o=Math.min(e.length-n,10),a=function(o){var a=e[n+o]-r;t.some(function(e){return e.interval===a&&(e.peaks.push(r),!0)})||t.push({interval:a,peaks:[r]})},u=1;u<o;u+=1)a(u)}),t}(u),f=function(t,r){var n=[];return t.forEach(function(t){for(var o=60/(t.interval/r);o<90;)o*=2;for(;o>180;)o/=2;var a=!1,u=t.peaks.length;n.forEach(function(r){if(r.tempo===o&&(r.score+=t.peaks.length,r.peaks=[].concat(e(r.peaks),e(t.peaks)),a=!0),r.tempo>o-.5&&r.tempo<o+.5){var n=2*Math.abs(r.tempo-o);u+=(1-n)*r.peaks.length,r.score+=(1-n)*t.peaks.length}}),a||n.push({peaks:t.peaks,score:u,tempo:o})}),n}(s,n);return f.sort(function(e,t){return t.score-e.score}),f};addEventListener(\"message\",function(e){var t=e.data;try{if(\"analyze\"===t.method){var n=t.id,o=t.params,a=o.channelData,u=o.sampleRate,i=function(e,t){var n=r(e,t);if(0===n.length)throw new Error(\"The given channelData does not contain any detectable beats.\");return n[0].tempo}(a,u);postMessage({error:null,id:n,result:{tempo:i}})}else{if(\"guess\"!==t.method)throw new Error('The given method \"'.concat(t.method,'\" is not supported'));var s=t.id,f=t.params,c=f.channelData,l=f.sampleRate,p=function(e,t){var n=r(e,t);if(0===n.length)throw new Error(\"The given channelData does not contain any detectable beats.\");var o=n[0],a=o.peaks,u=o.tempo,i=Math.round(u),s=60/i;a.sort(function(e,t){return e-t});for(var f=a[0]/t;f>s;)f-=s;return{bpm:i,offset:f}}(c,l),h=p.bpm,d=p.offset;postMessage({error:null,id:s,result:{bpm:h,offset:d}})}}catch(e){postMessage({error:{message:e.message},id:t.id,result:null})}})}(r(2))},function(e,t,r){var n=r(3),o=r(4),a=r(5);e.exports=function(e){return n(e)||o(e)||a()}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||\"[object Arguments]\"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}}]);";

	var blob = new Blob([worker], {
	  type: 'application/javascript; charset=utf-8'
	});
	var url = URL.createObjectURL(blob);
	var webAudioBeatDetector = webAudioBeatDetectorBroker.load(url);
	var analyze = webAudioBeatDetector.analyze;
	var guess = webAudioBeatDetector.guess;
	URL.revokeObjectURL(url);

	exports.analyze = analyze;
	exports.guess = guess;

	Object.defineProperty(exports, '__esModule', { value: true });

}));

},{"web-audio-beat-detector-broker":45}]},{},[1])(1)
});
