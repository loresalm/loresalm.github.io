
let loopBeat
let bassSynth

function preload(){

	bassSynth = new Tone.Synth().toMaster()

	loopBeat = new Tone.Loop(song, '4n')

}

function setup() {


	Tone.Transport.start()
	loopBeat.start(0)
}

function song(time){
	console.log(time)
	bassSynth..triggerAttackRelease('C4', '8n', time)
}