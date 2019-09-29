

class Quadrante4 {

	constructor(backList){

		self.spr4List=[];	
		self.spr4activList = 0;
		self.backList= backList;
		self.r0;
		
 		self.mposx=600;
  		self.mposy=400;
  		self.fixed=0;

  		self.segLength = 80,
		  x,
		  y,
		  x2,
		  y2;

		strokeWeight(20);
  		stroke(255, 100);

  		x = width / 2;
  		y = height / 2;
  		x2 = x;
  		y2 = y;
  	

  		var sprx=470;
  		var spry=420;
  		var count=0;
  		for(var i=0;i<2;i++){

  			for(var j=0;j<3;j++){

	  			self.spr=createSprite(sprx,spry,50, 50);
				self.spr.shapeColor = color(125/i+j,15*i,130/(i*j));
				self.spr4List.push(self.spr);
				self.spr4List[count].onMouseOver = function() {
					self.spr4activList=1;
	  			}
	  			self.spr4List[count].onMouseOut = function() {
					self.spr4activList=0;
	  			}
	  			count+=1;
				sprx+=150;
	  		}
	  		sprx=470;
	  		spry+=90;
	  	}
	}

	drawObject(){

		if(mouseIsPressed){
			for(var i=0;i<6;i++){
				if(self.spr4activList==1){
			  		self.mposx=mouseX;
		 	  		self.mposy=mouseY;
		 	  		self.fixed=1;
		 		}else{
		 			self.fixed=0;
		 		}
			}
		}
		if(self.backList[4].mouseIsOver && self.fixed==0){
  			self.mposx=mouseX;
  			self.mposy=mouseY;
  		}

    	this.dragSegment(0, mouseX, mouseY);
  			for (let i = 0; i < x.length - 1; i++) {
    	this.dragSegment(i + 1, x[i], y[i]);
  }

	}
	dragSegment(i, xin, yin) {
  		background(0);

	    var dx = mouseX - x;
	   
	    var dy = mouseY - y;
	    var angle1 = atan2(dy, dx);

	    var tx = mouseX - cos(angle1) * segLength;
	    var  ty = mouseY - sin(angle1) * segLength;
	   	var dx = tx - x2;
	    var dy = ty - y2;
	    var angle2 = atan2(dy, dx);
	    x = x2 + cos(angle2) * segLength;
	    y = y2 + sin(angle2) * segLength;

	    this.segment(x, y, angle1);
	    this.segment(x2, y2, angle2);
	}

	segment(x, y, a) {
  		push();
  		translate(x, y);
  		rotate(a);
  		line(0, 0, segLength, 0);
  		pop();
}

	
}