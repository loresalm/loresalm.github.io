



//play a middle 'C' for the duration of an 8th note

let synth;

//----------------------------------------

var spr0List=[];
var spr0padList=[];
var spr4List=[];
var spr4activList;
var backList=[];
var r0;
var reset0=0;
var img0bullet;
let padsound;
// test
// -quandrante numero 3-
var line1;
var button1; 
var notify1;

var line2;
var button2; 
var notify2;

var line3;
var button3; 
var notify3;
//___________________________________________________________

let numSegments = 10,
  x = [],
  y = [],
  angle = [],
  segLength = 26,
  targetX,
  targetY;
  var mposx=600;
  var mposy=400;
  var fixed=0;

for (let i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}


function preload() {
  img0bullet = loadImage('img/bullet.png');
  
  
}


function setup() {
  synth = new Tone.Synth().toMaster();

	createCanvas(1240, 630);
	var yback=160
	for (var lin = 1; lin<=2; lin++) {
		var xback=210	
		for (var col = 1; col<=3; col++) {
  			spr = createSprite(xback,yback,
    		400, 300);
    		spr.shapeColor = color(255/(col*lin));
  			backList.push(spr);
  			xback=xback+400+10;
  		}
  	yback=yback+300+10;
  	}

  	for (var i = 0; i < backList.length; i++) {
  		backList[i].onMouseOver = function() {
    		this.scale = 1.02;
  		}
  		backList[i].onMouseOut = function() {
    		this.scale = 1;
  		}
	}
	//setting pand in 0
	xpad=59;
	ypad=300;
	for (var i = 0; i < 4; i++) {
		  	spr = createSprite(xpad,ypad,
    		98, 20);
    		spr.shapeColor = color(110,120,124);
  			spr0padList.push(spr);
  			xpad+=100.7;
	}

	//setting reset button in 0
	r0=createSprite(50,50,30, 30);
	r0.shapeColor = color(255,0,0);
	r0.onMouseOver = function() {
		reset0=1;
  	}
  	r0.onMouseOut = function() {
		reset0=0;
  	}

  	//estting up 4
  	strokeWeight(20);
  	stroke(31, 190);

  	x[x.length - 1] = width / 2; // Set base x-coordinate
  	y[x.length - 1] = height; // Set base y-coordinate

  	var sprx=470;
  	var spry=420;
  	var count=0;
  	for(var i=0;i<2;i++){

  		for(var j=0;j<3;j++){

  			spr=createSprite(sprx,spry,50, 50);
			spr.shapeColor = color(125/i+j,15*i,130/(i*j));
			spr4List.push(spr);
			spr4List[count].onMouseOver = function() {
				spr4activList=1;
  			}
  			spr4List[count].onMouseOut = function() {
				spr4activList=0;
  			}
  			count+=1;
			sprx+=150;
  		}
  		sprx=470;
  		spry+=90;
  	} 


    // -quandrante numero 3-

  var x_pos= 205;
  var y_pos  = 370;

  line1 = createSprite(x_pos,y_pos,
        300, 40);
    line1.shapeColor = color(50, 0, 20);
    button1 = createSprite(x_pos,y_pos,
        20, 40);
    button1.shapeColor = color(0, 0, 255);
    line1.onMouseOver = function(){
      notify1= 1;
    }
    line1.onMouseOut = function(){
      notify1= 0;
    }

    line2 = createSprite(x_pos,y_pos+100,
        300, 40);
    line2.shapeColor = color(50, 0, 20);
    button2 = createSprite(x_pos,y_pos+100,
        20, 40);
    button2.shapeColor = color(0, 0, 255);
    line2.onMouseOver = function(){
      notify2= 1;
    }
    line2.onMouseOut = function(){
      notify2= 0;
    }

    line3 = createSprite(x_pos,y_pos+200,
        300, 40);
    line3.shapeColor = color(50, 0, 20);
    button3 = createSprite(x_pos,y_pos+200,
        20, 40);
    button3.shapeColor = color(0, 0, 255);
    line3.onMouseOver = function(){
      notify3= 1;
    }
    line3.onMouseOut = function(){
      notify3= 0;
    }
  

  //___________________________________________________________


 }


function mousePressed() {

	if (reset0==1) {
		for (var i = 0; i < spr0List.length; i++) {
			spr0List[i].remove();
     }
    synth.triggerAttackRelease("C4", "8n");

	}else if (backList[0].mouseIsOver) {
    
		console.log("bloc zero");
		spr = createSprite(width/2, height/2,10,10);
		spr.addImage(img0bullet);
  		spr.shapeColor = color(0);
  		spr.velocity.y = 0;
  		spr.position.x = mouseX;
  		spr.position.y = mouseY;
  		spr0List.push(spr);
	}else{
		for(var i=0;i<6;i++){
			if(spr4activList==1){
				console.log("active")
		  		mposx=mouseX;
	 	  		mposy=mouseY;
	 	  		fixed=1;
	 		}else{
	 			fixed=0;
	 		}
		}
	}
	
}






function draw() {
  background(50); 

  drawSprites();

  for (var i = 0; i < spr0List.length; i++) {
    if (spr0List[i].position.y > 300) {
    	spr0List[i].velocity.y *= -1;
    	spr0List[i].position.y = 300;
    	for (var j = 0; j < spr0padList.length; j++){
    		if(spr0List[i].overlap(spr0padList[j])){

    			console.log(j);
    			spr0padList[j].scale = 0.95;
          
    		}else{
    			spr0padList[j].scale = 1;
          
    		}
    	}
    }	
    spr0List[i].addSpeed(0.25, 90);
  } 

  if(backList[4].mouseIsOver && fixed==0){
  		mposx=mouseX;
  		mposy=mouseY;
  }

    reachSegment(0, mposx, mposy);
  for (let i = 1; i < numSegments; i++) {
    reachSegment(i, targetX, targetY);
  }
  for (let j = x.length - 1; j >= 1; j--) {
    positionSegment(j, j - 1);
  }
  for (let k = 0; k < x.length; k++) {
    segment(x[k], y[k], angle[k], (k + 1) * 2);
  }

    // -quandrante numero 3-

  if (notify1 == 1){
    button1.velocity.x= (mouseX-button1.position.x)*0.2;
  } else {
    button1.velocity.x= 0;
  }

  if (notify2 == 1){
    button2.velocity.x= (mouseX-button2.position.x)*0.2;
  } else {
    button2.velocity.x= 0;
  }

  if (notify3 == 1){
    button3.velocity.x= (mouseX-button3.position.x)*0.2;
  } else {
    button3.velocity.x= 0;
  }


  //___________________________________________________________

 

}


function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
}

function reachSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  angle[i] = atan2(dy, dx);
  targetX = xin - cos(angle[i]) * segLength;
  targetY = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}













