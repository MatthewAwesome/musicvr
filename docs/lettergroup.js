/*************************

	Part of MUSICVR, a web-based music VR experience. I'm viewing this, at least for now, as a 
	music education tool!

	Author: Matthew Ellis 
	   
	All rights reserved, 2019. 

  This script specifies a group of note 'letters'. A cirle of letters that signify the musical notes, e.g. C! 

 *************************/

// All letter components will be accumulated in this group, called 'lettergroup':
AFRAME.registerComponent('lettergroup',{
	// We loop through some data below, let's give it some data to loop though, a toneInfo array (which is filled in main.js). 
	schema: {
		toneInfo:{default:[]}, 
	},
	init: async function(){
		// looping through toneInfo array, making our circle of letters: 
		for(let j = 0; j<this.data.toneInfo.length; j++){
			var textEl = document.createElement('a-entity'); 
			textEl.setAttribute('letter-component',{info:this.data.toneInfo[j]}); 
	    this.el.appendChild(textEl);
		}
		this.el.setAttribute('rotation',{x:0,y:180,z:0}); 
		this.el.setAttribute('position',{x:0,y:0,z:0})
	}, 
});

// A component for the individual letters: 
AFRAME.registerComponent('letter-component',{
	// the detected field is used to toggle the visibility/opacity of a given note. It's updated in main.js as the song progresses. 
	schema:{
		info:{default:{}},
		detected:{default:false},
	},
	init: function(){ 
	  var value = this.data.info.text; 
	  var textEl = document.createElement('a-entity');
	  // Use the data in toneInfo to make some letters for each note! (and color/position them accordingly!)
	  this.el.setAttribute('geometry',{primitive:'plane',height:'auto',width:'auto'}); 
	  this.el.setAttribute('material',{color:'#000',transparent:'true',opacity:0.2}); 
	  this.el.setAttribute('text',{value:value,color:this.data.info.color,side:'double',align:'center',baseline:'center',font:'dejavu',wrapCount:value.length+2,transparent:true,opacity:0.25});;  
	  this.el.setAttribute('side', 'double');
	  this.el.setAttribute('scale',{x: 5, y: 5, z: 5})
	  this.el.setAttribute('position', {x: 0, y: 0, z: 0});
	  this.el.setAttribute('rotation', {x: 0, y: 180, z: 0});
	  this.el.setAttribute('class',this.data.info.noteid); 
	  this.el.setAttribute('visible',true); 
	  this.el.setAttribute('position',{x:this.data.info.vert.x,y:this.data.info.vert.y,z:0}); 
	}
}); 

