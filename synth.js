
var loop = new Tone.Loop(function(time){
	//triggered every eighth note.

	console.log(time);
	
}, "8n").start(0);
Tone.Transport.start();