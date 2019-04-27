// A line circle Component: 

AFRAME.registerComponent('line-circle',{
	schema:{
		verts:{default:[]}
	}, 
	update:function(){
		console.log('verts updated'); 
	}
})