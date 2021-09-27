
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload(){
	backgroundImg = loadImage("bg1.png");
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(500, 700, 1000, 80);
	stone = new Stone(300, 425, 25);
    sling = new Sling(stone.body, {x:300, y:425});
    mango1 = new Mango(900, 40, 15);
    mango2 = new Mango(810, 80, 15);
    mango3 = new Mango(710, 110, 15);
    mango4 = new Mango(790, 200, 15);
    mango5 = new Mango(950, 170, 15);
    stub1 = new Stub(mango1.body, {x:900, y:40});
    stub2 = new Stub(mango2.body, {x:810, y:80});
    stub3 = new Stub(mango3.body, {x:710, y:110});
    stub4 = new Stub(mango4.body, {x:790, y:200});
    stub5 = new Stub(mango5.body, {x:950, y:150});
	Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background(backgroundImg);
    sling.display();
    stone.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    drawSprites();
}

function keyPressed(){
    if (keyCode === 32) {
        sling.attach(stone.body);
    }
}

function mouseDragged (){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}
function mouseReleased (){
    sling.eject();
}