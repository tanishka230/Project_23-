const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

//declaring variables
var compBase;
var compPlayer;
var playerBase;
var player;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  compBase=new ComputerBase(200,random(450,height-200),180,150);
  compPlayer=new computerplayer(200,compBase.body.position.y-100,50,100)
  playerBase=new PlayerBase(800,random(450,height-200),180,150);
  player=new Player(800,playerBase.body.position.y-100,50,100)

 }

function draw() {

  background(180);

  Engine.update(engine);
  compBase.display();
  compPlayer.display();
  playerBase.display();
  player.display();
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
