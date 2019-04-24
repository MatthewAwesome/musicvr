// Our group of note 'letters'
AFRAME.registerComponent('lettergroup',{
	// schema? 
	schema: {
		toneInfo:{default:[]}, 
	},
	init: async function(){
		// Using toneinfo, let's make our thing:
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
	schema:{
		info:{default:{}},
		detected:{default:false},
	},
	init: function(){ 
	  var value = this.data.info.text; 
	  var textEl = document.createElement('a-entity');
	  // Loop through attribute keys and assign them to 
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


// make a component for each textEl: 

// AFRAME.registerComponent('notetext',{
// 	init: function(){
// 		//
// 		console.log('text init');
// 		console.log(this);
// 	}, 
// 	update: async function(){
// 		this.getBox = AFRAME.utils.bind(this.getBox, this)
// 		console.log('text update'); 
// 		var obj =  await this.el.object3D;
// 		var child = await obj.children[0]; 
// 		console.log(child); 
// 		var boxx = await this.getBox(child); 
// 		console.log(boxx);
// 	}, 
// 	getBox: async function(object){
//     var bbox = await new THREE.Box3().setFromObject(object);
//     return bbox;
//   }
// });
