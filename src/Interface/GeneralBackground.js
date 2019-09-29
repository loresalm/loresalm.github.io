
class GeneralBackground{

	
	constructor(){

	this.backList=[];
	this.scale = 1;
	var y=160
	for (var lin = 1; lin<=2; lin++) {
		var x=210	
		for (var col = 1; col<=3; col++) {
  			this.spr = createSprite(x,y,
    		400, 300);
    		this.spr.shapeColor = color(255/(col*lin));
  			this.backList.push(this.spr);
  			x=x+400+10;
  		}
  	y=y+300+10;
  	}

  	for (var i = 0; i < this.backList.length; i++) {
  		this.backList[i].onMouseOver = function() {
    		this.scale = 1.02;    		
  		}
  		this.backList[i].onMouseOut = function() {
    		this.scale = 1;
  		}
	}
	}

	getBackList(){
		return this.backList;
	}

	drawObject(){

	}

}