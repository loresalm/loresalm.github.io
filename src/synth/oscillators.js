

class Oscillators{

	constructor(no_oscillators){

		this.oscillators_list = []

		for (var i = 0; i < no_oscillators; i++) {
			let o = new Tone.Oscillator(174, "sine")
			this.oscillators_list.push(o)
		}
	}

	set_frequency(index, fr){
		this.oscillators_list[index].frequency.value = fr
	}

	set_type(index, type){
		this.oscillators_list[index].type = type
	}

	start(index){
		this.oscillators_list[index].start()
	}

	stop(index){
		this.oscillators_list[index].stop()
	}

	connect_to(index, next_block){
	this.oscillators_list[index].connect(next_block)
	}

}


