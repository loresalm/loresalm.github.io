
let gb;
let p5;
let bpm;
let osc;
let env;
	
function setup() {

	createCanvas(1240, 630);
	noStroke();
	gb = new GeneralBackground();
  	p5 = new Quadrante5(gb.getBackList());

  	env = new Envelopes(1);
  	env.config(0, 0.01, 0.09, 0., 0.12)
  	osc = new Oscillators(1);

  	env.connect_to(0,Tone.Master);
  	osc.connect_to(0,env.get_envelope(0));
  	osc.start(0);

  	loopBeat = new Tone.Loop(song, '3n').start(0)
	Tone.Transport.bpm.value = 170
	Tone.Transport.start()
	loopBeat.start(0)
 	
}

function song(time) {

	env.triggerAttackRelease(0,3);

}


function draw() {
 	
	background(50);

	Tone.Transport.bpm.value = p5.get_bpm()

	osc.set_frequency(0, p5.get_freq())

  	drawSprites();

  	p5.drawObject();
  	
	
}