
let loopBeat
let bassSynth

function preload(){

	bassSynth = new Tone.MembraneSynth().toMaster()

	loopBeat = new Tone.Loop(song, '4n')

}

function setup() {
	Tone.Transport.bpm.value = 180
	Tone.Transport.start()
	loopBeat.start(0)
}

function song(time){
	console.log(time)
	bassSynth.triggerAttackRelease('c1', '8n', time)

	if (time >= 12){
		Tone.Transport.bpm.value = 70
	}

}