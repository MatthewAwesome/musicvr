// Making a string group: 

AFRAME.registerComponent('string-group',{
	
	// Schematize it: 
	schema:{
		fftSize:{default:0}, 
		waveform:{default:[]},
		toneInfo:{default:[]},
	}, 
	// We initiate our lines: 
	init: async function(){
		// we add our strings, 12 of them! 
	  // Variables....
	  var thetaLength      = Math.PI * 2 / 12; 
	  var noteLineLength   = Math.sqrt(Math.pow(30,2) + Math.pow(6,2));
	  var segmentLength = noteLineLength/(this.data.fftSize/2 + 1), lineVerts = [], z_position = 0;    

	  // 'connecting' the dots... 
	  for(let i = 0; i < this.data.fftSize/2 + 2; i++){
	    var currentVert = new THREE.Vector3();
	    currentVert.setComponent(2,z_position); 
	    lineVerts.push(currentVert); 
	    z_position += segmentLength; 
	  }


	  var fromVert = new THREE.Vector3(0,0,1); 
	  fromVert.normalize(); 

	  // var flatStrings = new THREE.Group(); 

	  for(let i = 0; i<this.data.toneInfo.length; i++){
	  	// making a element: 
	  	var lineEl = document.createElement('a-entity'); 
	    // Defining an angle: 
	    var thetaStart = (12-i) * ( 2*Math.PI / 12); 
	    var sectGeo = new THREE.CircleGeometry(6,4,thetaStart,thetaLength); 
	    // A 'cone-of-lines'. One line per sector: 
	    // Hashing out a color: 
	    var lineColor = this.data.toneInfo[i].color; 
	    // lineColor.setHSL((i)/(12),0.99,0.5); 
	    // Where is this line pointing?
	    var toVert = new THREE.Vector3(sectGeo.vertices[1].x,sectGeo.vertices[1].y,30); 
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
	    lineEl.setObject3D('liner',noteLineObject); 
	    lineEl.setAttribute('visible',false); 
	    lineEl.setAttribute('class',this.data.toneInfo[i].noteid); 
	    this.el.appendChild(lineEl); 
			// okay, we appear to have a not ling object made: set this object in 

	  }
	  this.el.setAttribute('rotation',{x:0,y:0,z:180}); 
	  this.el.setAttribute('position',{x:0,y:0,z:-10});
	}, 
	// This thing gets called when we get a new waveform..the lines will 'jiggle'!
	update: async function(oldData){
		// if(this.data.waveform != oldData.waveform){
			// update the waveforms: 
			console.log(this.data.waveform); 
			// Loop through child node: 

			// Update the waveform: 
		// }
	},

})
// we make a bunch of strings: 

AFRAME.registerComponent('string-component',{
	init: function(){

	}, 
	update: function(){

	}
})