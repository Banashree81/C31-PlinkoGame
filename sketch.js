//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground, dividerHeight = 200;
var dividers = [];
var plinkos = [];
var particles = [];


function setup() {
	createCanvas(480, 600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(240,height-1,width, 10);

	//create the vertical barriers
	for (let index = 0; index <= width; index=index+80) {
		dividers.push(new Divider(index, height - dividerHeight/2-5, 10, dividerHeight));
	}

	//create the rows of plinko
	for (let i = 40; i < width; i=i+50) {
		plinkos.push(new Plinko(i, 55));
	}
	for (let j = 15; j < width; j=j+50) {
		plinkos.push(new Plinko(j, 120));
	}
	for (let i = 40; i < width; i=i+50) {
		plinkos.push(new Plinko(i, 185));
	}
	for (let j = 15; j < width; j=j+50) {
		plinkos.push(new Plinko(j, 250));
	}

	
  
}


function draw() {
 
	background(0);
	Engine.update(engine);
	ground.display();
  
	for (let index = 0; index < dividers.length; index++) {
		dividers[index].display();
	}
	for (let i = 0; i < plinkos.length; i++) {
		plinkos[i].display();
	}
	for (let j = 0; j < plinkos.length; j++) {
		plinkos[j].display();
	}	
	for (let i = 0; i < plinkos.length; i++) {
		plinkos[i].display();
	}
	for (let j = 0; j < plinkos.length; j++) {
		plinkos[j].display();
	}	

	createParticles();

	for(var k =0; k < particles.length; k++){
		particles[k].display();
	}

 
}

function createParticles(){
	if (frameCount % 50 ===0) {
		particles.push(new Particle(random(width/2-10, width/2 +10),0));
	}
}



