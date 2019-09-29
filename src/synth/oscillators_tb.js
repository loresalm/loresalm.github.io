let osc_list 
let loopBeat

function preload(){

	console.log("jjj");

	// make 2 oscillators 
	osc_list = new Oscillators(2)

	//make connection to master for both oscillators 
	osc_list.connect_to(0, Tone.Master)
	osc_list.connect_to(1, Tone.Master)

	// start a loop
	loopBeat = new Tone.Loop(song, '8n').start(0)
	Tone.Transport.bpm.value = 120
	Tone.Transport.start()
	loopBeat.start(0)
	
}

function setup() {

}

function song(time){

	console.log(time)

	// start oscilloscope 0
	osc_list.start(0)

	if (time >= 5){

		// stop oscilloscope 0 
		osc_list.stop(0)

	}

	if (time >= 6){

		// change frequency of oscilloscope 1 over time 
		osc_list.set_frequency(1, 10000/time)

		// start oscilloscope 1 
		osc_list.start(1)
		
	}

}






