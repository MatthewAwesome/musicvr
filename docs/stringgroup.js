/**** 

	Part of MUSICVR, a web-based music VR experience. I'm viewing this, at least for now, as a 
	music education tool!

	Author: Matthew Ellis 
	   
	All rights reserved, 2019. 

	Making a string group! Basically, these are 'strings' that vibrate with the songs waveform!

****/

AFRAME.registerComponent('string-group',{

	// Schematize it: 
	schema:{
		fftSize:{default:0}, 
		waveform:{default:[]},
		toneInfo:{default:[]},
	}, 

	// We initiate our lines: 
	init: async function(){

		// Variables called in the loops below: 
	  var thetaLength      = Math.PI * 2 / 12; 
	  var noteLineLength   = Math.sqrt(Math.pow(30,2) + Math.pow(6,2));
	  var segmentLength = noteLineLength/(this.data.fftSize/2 + 1), lineVerts = [], z_position = 0;    

	  // Making the strings as long as our waveform plus two endpoints (the 'knots' that attach our string to the wall.)
	  for(let i = 0; i < this.data.fftSize/2 + 2; i++){
	    var currentVert = new THREE.Vector3();
	    currentVert.setComponent(2,z_position); 
	    lineVerts.push(currentVert); 
	    z_position += segmentLength; 
	  }


	  // We tie all our our strings to a single point, somewhere behind the colorwheel
	  var fromVert = new THREE.Vector3(0,0,1); 

	  // Making a string for every note: 
	  for(let i = 0; i<this.data.toneInfo.length; i++){

	  	// making a element: 
	  	var lineEl = document.createElement('a-entity'); 

	    // We want the strings tied around a circle, or a hoop, positioned behind the user's head: 
	    var thetaStart = (i) * ( 2*Math.PI / 12) - Math.PI/6; 
	    var sectGeo = await new THREE.CircleGeometry(6,4,thetaStart,thetaLength); 
	    var toVert = new THREE.Vector3(sectGeo.vertices[1].x,sectGeo.vertices[1].y,30); 
	    toVert.normalize();
	    var qq     = new THREE.Quaternion(); 
	    qq.setFromUnitVectors(fromVert,toVert); 

	    // Hashing out a color: 
	    var lineColor = this.data.toneInfo[i].color; 

	    // Using the color, and vector determined above: we make the line, THREE.js style: 
	    var noteLineGeo           = new THREE.Geometry(); 
	    noteLineGeo.vertices      = lineVerts;
	    var noteLineMaterial      = new THREE.LineBasicMaterial({color:lineColor,linewidth:3,transparent:true}); 
	    var noteLineObject        = new THREE.Line(noteLineGeo,noteLineMaterial); 
	    noteLineObject.rotation.z = thetaStart; 
	    noteLineObject.applyQuaternion(qq); 
	    noteLineObject.needsUpdate = true; 

	    // giving our lineEl and object to play with: 
	    lineEl.setObject3D('liner',noteLineObject); 
	    lineEl.setAttribute('visible',false); 
	    lineEl.setAttribute('class',this.data.toneInfo[i].noteid); 

	    // Toss the lineEl into the 'string-group'!
	    this.el.appendChild(lineEl); 
	  }

	  // Position and rotate the string-group:
	  this.el.setAttribute('rotation',{x:0,y:0,z:180}); 
	  this.el.setAttribute('position',{x:0,y:0,z:-10});

	}
})
