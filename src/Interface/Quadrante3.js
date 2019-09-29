

class Quadrante3 {


	constructor(x_pos, y_pos, backList){
		self.backList = backList;

		this.line1 = createSprite(x_pos,y_pos,
    		300, 40);
    	this.line1.shapeColor = color(50, 0, 20);
    	self.button1 = createSprite(x_pos,y_pos,
    		20, 40);
    	self.button1.shapeColor = color(0, 0, 255);
    	this.line1.onMouseOver = function(){
    		self.notify1= 1;
    	}
    	this.line1.onMouseOut = function(){
    		self.notify1= 0;
    	}


	    this.line2 = createSprite(x_pos,y_pos+100,
	    		300, 40);
	    this.line2.shapeColor = color(50, 0, 20);
	   	self.button2 = createSprite(x_pos,y_pos+100,
	    		20, 40);
	    self.button2.shapeColor = color(0, 0, 255);
	    this.line2.onMouseOver = function(){
	    	self.notify2= 1;
	    }
	    this.line2.onMouseOut = function(){
	    	self.notify2= 0;
	    }

	    this.line3 = createSprite(x_pos,y_pos+200,
    		300, 40);
    	this.line3.shapeColor = color(50, 0, 20);
    	self.button3 = createSprite(x_pos,y_pos+200,
    		20, 40);
    	self.button3.shapeColor = color(0, 0, 255);
    	this.line3.onMouseOver = function(){
    		self.notify3= 1;
    	}
    	this.line3.onMouseOut = function(){
    		self.notify3= 0;
    	}
	}

	drawObject(){
		if (self.notify1 == 1 && self.button1.position.x < (this.line1.position.x+ this.line1.width/2) && self.button1.position.x > (this.line1.position.x- this.line1.width/2)){
			if (mouseX< 350){
				self.button1.velocity.x= (mouseX-self.button1.position.x)*0.6;
			}
		} else {
			self.button1.velocity.x= 0;
		}

		if (self.notify2 == 1 && self.button2.position.x < (this.line2.position.x+ this.line2.width/2) && self.button2.position.x > (this.line2.position.x- this.line2.width/2)){
			if (mouseX< 350){
				self.button2.velocity.x= (mouseX-self.button2.position.x)*0.6;
			}
		} else {
			self.button2.velocity.x= 0;
		}

		if (self.notify3 == 1 && self.button3.position.x < (this.line3.position.x+ this.line3.width/2) && self.button3.position.x > (this.line3.position.x- this.line3.width/2)){
			if (mouseX< 350){
			self.button3.velocity.x= (mouseX-self.button3.position.x)*0.6;
		}
		} else {
			self.button3.velocity.x= 0;
		}
	}
}
