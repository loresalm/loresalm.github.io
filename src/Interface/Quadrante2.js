
class Quadrante2{

	constructor(){

   		self.cubeList= [];
   		self.firstTList= [1,1,1,1,1,1,1,1,1,1]
   		
  

   		self.rotatedCube1 = createSprite(1030, 160, 40, 40);
    	self.rotatedCube1.shapeColor = color(255,0,0);
    	this.rotatedCube2 = createSprite(1030, 160, 250, 10);
    	this.rotatedCube2.shapeColor = color(0,255,10); 

    	this.slider = createSlider(-15, +15 , -2, 0.2);
    	this.slider.position(1030, 15);
    	for(var i= 0; i< 10; i++){
     	 	if(i<5){
	        	self.c1 = createSprite(840, 50*i + 60, 20, 20);
	        	self.c1.shapeColor= color(0,0,255);

	        	self.cubeList.push(c1);

	        	self.c1.onMousePressed= function() {
			        if(self.firstTList[self.cubeList.indexOf(this)] ==  1){
			          this.width = 150;
			          this.position.x += 60;
			          self.firstTList[self.cubeList.indexOf(this)] = 0;
			        } else{
			          this.width = 20;
			          this.position.x -= 60;
			          self.firstTList[self.cubeList.indexOf(this)] = 1;
			        }
        		}

	      	}else{
		        self.c2 = createSprite(1220, 50*(i-5) + 60, 20, 20);
		        self.c2.shapeColor= color(0,0,255);

		        self.cubeList.push(c2);

		        self.c2.onMousePressed= function() {
			        if(self.firstTList[self.cubeList.indexOf(this)] ==  1){
			          this.width = 150;
			          this.position.x -= 60;
			          self.firstTList[self.cubeList.indexOf(this)] = 0;
			        } else {
			          this.width = 20;
			          this.position.x += 60;
			          self.firstTList[self.cubeList.indexOf(this)] = 1;
			        }
		    	}
		    }
		}   
    }

    drawObject(){
    	for(var i= 0; i< 10; i++){
	    	if(self.cubeList[i].overlap(this.rotatedCube2)){
	     		self.cubeList[i].shapeColor = color(255,0,0); 
	    	}
	    	else{
	      		self.cubeList[i].shapeColor = color(0,0,255);
	    	}
	  	}

		var val = this.slider.value();

	  	this.rotatedCube2.rotation -= val;
	}

	
}