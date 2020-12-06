
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(900, 600);

	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    
ground = new Ground(1000,580,2000,20);
ground1 = new Ground(390,300,250,10);
ground2 = new Ground(700,200,200,10);
    
stoneObj = new Stone(50,200,20);

box1 = new box(300,275,30,40);
  console.log(box1);
  box2 = new box(330,275,30,40);
  box3 = new box(360,275,30,40);
  box4 = new box(390,275,30,40);
  box5 = new box(420,275,30,40);
  box6 = new box(450,275,30,40);
  box7 = new box(480,275,30,40);
  //level two
  box8 = new box(330,235,30,40);
  box9 = new box(360,235,30,40);
  box10 = new box(390,235,30,40);
  box11 = new box(420,235,30,40);
  box12 = new box(450,235,30,40);
  //level three
  box13 = new box(360,195,30,40);
  box14 = new box(390,195,30,40);
  box15 = new box(420,195,30,40);
  //top
  box16 = new box(390,155,30,40);

  //set 2 for second stand
  //level one
  boxs1 = new box(640,175,30,40);
  boxs2 = new box(670,175,30,40);
  boxs3 = new box(700,175,30,40);
  boxs4 = new box(730,175,30,40);
  boxs5 = new box(760,175,30,40);
  //level two
  boxs6 = new box(670,135,30,40);
  boxs7 = new box(700,135,30,40);
  boxs8 = new box(730,135,30,40);
  //top
  boxs9 = new box(700,95,30,40);







connect = new Slingshot(stoneObj.body,{x:100,y:390})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(56,44,44);

  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  boxs1.display();
  boxs2.display();
  boxs3.display();
  boxs4.display();
  boxs5.display();
  boxs6.display();
  boxs7.display();
  boxs8.display();
  boxs9.display();




  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
  drawSprites(); 

  stoneObj.display()
  connect.display();


  ground.display();
  ground1.display();
  ground2.display();


 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    connect.fly();
}





