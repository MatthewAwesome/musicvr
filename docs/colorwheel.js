/****
	Part of MUSICVR, a web-based music VR experience. I'm viewing this, at least for now, as a 
	music education tool!

	Author: Matthew Ellis 
	   
	All rights reserved, 2019. 

	Our color-wheel: Pieslices of various colors that correspond to the spectrum of musical notes!
	Similar to the structure of lettergroup.js a toneInfo array is used to provide position/color data 
	for all 12 notes. This data array us looped through to make a color-wheel of sorts. 
 ****/

AFRAME.registerComponent('colorwheel',{
	schema: {
		toneInfo:{default:[]},  
	},
	init: async function(){
		// Each sector has an angular length of 30 degrees (1/12th of the circle!)
		var thetaLength = 30; 
		for(let j = 0; j<this.data.toneInfo.length; j++){
			// make at sector: 
			var sector = document.createElement('a-entity'); 
			// where does thetaStart?
			var thetaStart = 30*j-30; 
			sector.setAttribute('geometry',{primitive:'circle',radius:6,thetaStart:thetaStart,thetaLength:thetaLength})
			sector.setAttribute('pieslice',{info:this.data.toneInfo[j]}); 
	    this.el.appendChild(sector);
		}
		this.el.setAttribute('rotation',{x:0,y:0,z:165}); 
		this.el.setAttribute('position',{x:0,y:0,z:0.2})
	}, 
});

// Component for individual sectors: the detected is use to update the apperance of a given slice when the corresponding is detected.
AFRAME.registerComponent('pieslice',{
	schema:{
		info:{default:{}},
		detected:{default:false},
	},
	init: function(){
		this.el.setAttribute('material',{color:this.data.info.color,transparent:true,opacity:0.15}); 
		this.el.setAttribute('class',this.data.info.noteid)
	}
})