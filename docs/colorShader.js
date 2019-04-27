// Making a shader: 

AFRAME.registerShader( 'color-shader',{
	// A schema: 
	schema:{
		color:{type:'color',is:'uniform',default:'blue'}
	}, 
	// We define our shader here: 
	fragmentShader: 
	`
	  // Use medium precision.
  	precision mediump float;

		// initialize the variables:
		uniform vec3 color; 

		// describe the main function: 
		void main(){
			gl_FragColor = vec4(color,1.0); 
		}
	`
	// init: 
	// init: function(){
	// 	// do stuff: 
	// },
	// //update: 
	// update: function(){
	// 	// check for update: 
	// }
});