

class Quadrante1 {
  
  constructor(backList){

		this.sliderActiv= createSprite(width/2, height/2 - 20, 400, 30);
		this.sliderActiv.shapeColor = color(0);

    this.spr1 = createSprite(620, 160, 40, 20);

    this.clouds = new Group();

    for (var i = 0; i < 6; i++) {
      var c = createSprite(495 + i*50, 15 , 15, 15);
      c.shapeColor = color(200);
      this.clouds.add(c);
    }


    this.slider = createSlider(0, 0.5, 0.1, 0.001);
    this.slider.position(550, 290);


    this.sliderActiv.onMouseOver = function() {
      self.notify1= 1;      
    }
    this.sliderActiv.onMouseOut = function() {
      self.notify1= 0;      
    }

    backList[1].onMouseOver = function() {
      self.notify2= 1;
      this.scale = 1.02;        
    }
    backList[1].onMouseOut = function() {
      self.notify2 = 0;
      this.scale = 1;
    }
  }

  drawObject() {

    let d = map(mouseX, 420, 820, 10, 350);

    
    if(self.notify2 == 1 && mouseIsPressed && self.notify1== 0){ 
      this.spr1.width = d; 
    }

    var val = this.slider.value();

    for (var i = 0; i < this.clouds.length; i++) {
  	  if(this.clouds[i].overlap(this.spr1)){
  		this.clouds[i].shapeColor = color(0,0,255);
  	  }
      this.clouds[i].position.y += this.clouds[i].width * val;
      if (this.clouds[i].position.y > 280) {
        this.clouds[i].position.y = 10;
        this.clouds[i].shapeColor = color(200);
      }
    }
  }
}





