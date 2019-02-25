// Our color-wheel: 
AFRAME.registerComponent('colorwheel',{
	schema: {
		toneInfo:{default:[]},  
	},
	init: async function(){
		var thetaLength = 30; 
		for(let j = 0; j<this.data.toneInfo.length; j++){
			// make at sector: 
			var sector = document.createElement('a-entity'); 
			// where does thetaStart?
			var thetaStart = 360-30*j; 
			sector.setAttribute('geometry',{primitive:'circle',radius:6,thetaStart:thetaStart,thetaLength:thetaLength})
			sector.setAttribute('pieslice',{info:this.data.toneInfo[j]}); 
	    this.el.appendChild(sector);
		}
		this.el.setAttribute('rotation',{x:0,y:0,z:165}); 
		this.el.setAttribute('position',{x:0,y:0,z:-7.8})
	}, 
});

// Component for individual sectors: 
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