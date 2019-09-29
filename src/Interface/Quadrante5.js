class Quadrante5{

	constructor(backList){
		
		self.backList = backList;
		self.count= 0; 

		self.freq_slider = createSlider(0, 700, 100);
		self.freq_slider.position(40, 90);

		self.bpm_slider = createSlider(10, 500, 250);
		self.bpm_slider.position(40, 50);

		var xpad=59;
		var ypad=300;

  		strokeWeight(20);
  		stroke(31, 190);
	}

	get_freq(){
		return self.freq_slider.value();
	}

	get_bpm(){
		return self.bpm_slider.value();
	}

	drawObject(){

		self.count += 1;
		text('bpm', 40, 40);
		text(self.bpm_slider.value(), 100, 40);
		text('freq', 40, 80);
		text(self.freq_slider.value(), 100, 80)

	}
}
