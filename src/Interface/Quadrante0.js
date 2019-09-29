
class Quadrante0{

	constructor(backList){
		self.spr0List=[];
		self.spr0padList=[];
		self.reset0= 0;
		self.backList = backList;
		self.count= 0; 

		var xpad=59;
		var ypad=300;
		for (var i = 0; i < 4; i++) {
			self.spr = createSprite(xpad,ypad, 98, 20);
	    	self.spr.shapeColor = color(110,120,124);
	  		self.spr0padList.push(self.spr);
	  		xpad+=100.7;
		}


		self.r0=createSprite(20,20,10, 10);
		self.r0.shapeColor = color(255,0,0);
		self.r0.onMouseOver = function() {
			self.reset0=1;
	  	}
	  	self.r0.onMouseOut = function() {
			self.reset0=0;
	  	}

	  	
  		strokeWeight(20);
  		stroke(31, 190);

  		
	}

	drawObject(){

		self.count += 1;

		for (var i = 0; i < self.spr0List.length; i++) {
    		if (self.spr0List[i].position.y > 300) {
    			self.spr0List[i].velocity.y *= -1;
    			self.spr0List[i].position.y = 300;
    			for (var j = 0; j < self.spr0padList.length; j++){
    				if(self.spr0List[i].overlap(self.spr0padList[j])){
    					self.spr0padList[j].scale = 0.95;
    				}else{
    					self.spr0padList[j].scale = 1;
          
    				}
    			}
    		}	
    		self.spr0List[i].addSpeed(0.25, 90);
  		} 
	

	

		if (self.reset0==1 && mouseIsPressed) {
			for (var i = 0; i < self.spr0List.length; i++) {
				self.spr0List[i].remove();
			}
		}else{
			if (self.backList[0].mouseIsOver && mouseIsPressed && self.count%20 == 0){
				self.count= 0;
				self.spr = createSprite(width/2, height/2,10,10);
	  			self.spr.shapeColor = color(0);
	  			self.spr.velocity.y = 0;
	  			self.spr.position.x = mouseX;
	  			self.spr.position.y = mouseY;
	  			self.spr0List.push(spr);	
			}
		}
	}
}
