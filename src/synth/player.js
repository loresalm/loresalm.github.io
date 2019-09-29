

class Players{

	constructor(no_players){

		this.players_list = []

		for (var i = 0; i < no_players; i++) {
			let o = new Tone.Player("../../res/FWDL.mp3").toMaster();
			player.autostart = true;
		}
	}

	connect_to(index, next_block){
	this.players_list[index].connect(next_block)
	}

}