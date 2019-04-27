// Our group of note 'letters'

AFRAME.registerComponent('lettergroup',{

	// schema? 
	schema: {
		toneInfo:{default:[]}
	},
	init: function(){
		// Using toneinfo, let's make our thing:
		console.log('initing letter group'); 
		for(let j = 0; j<this.data.toneInfo.length; j++){
			// make at textEl 
			var textEl = createTextEl(toneInfo[i]);  
	    textObj = textEl.el.object3D;
	    // get the target box! 
	    textObj.boundingBox = new THREE.Box3().setFromObject(textEl);
	    console.log(textObj.boundingBox); 
		}

	}

})


function createTextEl (info) { 
  var value = info.str; 
  var color = "#" + info.color.getHexString(); 
  var textEl = document.createElement('a-entity');
  // Loop through attribute keys and assign them to 
  textEl.setAttribute('geometry',{primitive:'plane',height:'auto',width:'auto'}); 
  textEl.setAttribute('material',{color:'#000',transparent:'true',opacity:0.5}); 
  textEl.setAttribute('text',{value:str,color:color,side:'double',align:'center',baseline:'center',font:'dejavu',wrapCount:str.length+2});;  
  textEl.setAttribute('side', 'double');
  textEl.setAttribute('scale',{x: 12, y: 12, z: 1})
  textEl.setAttribute('position', {x: 0, y: 0, z: 0});
  textEl.setAttribute('rotation', {x: 0, y: 180, z: 0});
  textEl.setAttribute('class',info.noteid); 
  textEl.setAttribute('visible',true); 
  return textEl;
}