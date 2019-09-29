class Envelopes{

	constructor(no_envelopes){

		this.envelopes_list = []

		for (var i = 0; i < no_envelopes; i++) {
			let e = new Tone.AmplitudeEnvelope({
												"attack" : 0.11,
												"decay" : 0.9,
												"sustain" : 0.19,
												"release" : 1.2})
			this.envelopes_list.push(e)
		}
	}

	config(index, attack, decay, sustain, release){
		this.envelopes_list[index].attack = attack;
		this.envelopes_list[index].decay= decay;
		this.envelopes_list[index].sustain = sustain;
		this.envelopes_list[index].release= release;
	}

	attack(index){
		this.envelopes_list[index].triggerAttack();
	}

	release(index){
		this.envelopes_list[index].triggerRelease();
	}

	triggerAttackRelease(index, time){
		this.envelopes_list[index].triggerAttackRelease(time);
	}

	connect_to(index, next_block){
		this.envelopes_list[index].connect(next_block);
	}

	get_envelope(index){
		return this.envelopes_list[index];
	}
}

	
