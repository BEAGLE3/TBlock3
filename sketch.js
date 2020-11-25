
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine,world;

var backgroundImg;
var score=0;
var bg="Img/bg1.png";

function preload(){
 getBackgroundImg()
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;


	
	//Create the Bodies Here.
	base1=new Ground(680,580,350,40);
	base2=new Ground(1170,300,350,40); 
	base3=new Ground(700,650,1600,30)
	
	block1=new Box(700,570,50,50)
	block2=new Box(630,570,50,50)
	block3=new Box(650,570,50,50)
	block4=new Box(670,570,50,50)
	block5=new Box(720,570,50,50)
	block6=new Box(650,550,50,50)
	block7=new Box(670,550,50,50)
	block8=new Box(690,550,50,50)
	block9=new Box(710,550,50,50)
	block10=new Box(660,530,50,50)
	block11=new Box(680,530,50,50)
	block12=new Box(700,530,50,50)
	block13=new Box(670,510,50,50)
	block14=new Box(690,510,50,50)
	block15=new Box1(1065,255,50,50)
	block16=new Box1(1115,255,50,50)
	block17=new Box1(1165,255,50,50)
	block18=new Box1(1215,255,50,50)
	block19=new Box1(1265,255,50,50)
	block20=new Box1(1245,207,50,50)
	block21=new Box1(1195,207,50,50)
	block22=new Box1(1145,207,50,50)
	block23=new Box1(1095,207,50,50)
	block24=new Box1(1225,159,50,50)
	block25=new Box1(1175,159,50,50)
	block26=new Box1(1125,159,50,50)
	block27=new Box1(1205,111,50,50)
	block28=new Box1(1155,111,50,50)

   shoot=new Shoot(90,200,40,40);
   
   slingshot=new SlingShot(shoot.body,{x:90,y:200});

	Engine.run(engine);
  
}


function draw() {
  if(backgroundImg)
        background(backgroundImg);
  
  Engine.update(engine);

  textSize(30);
  textFont("Algerian");
  fill(0);
  text("DRAG THE HEXAGON AND RELEASE IT TOWARDS THE BLOCKS",50,50)

  textSize(30);
  textFont("Algerian");
  fill(0);
  text("SCORE:"+score,1010,50)




  base1.display()
  base2.display()
  base3.display()
  block1.display()
  block1.score();
  block2.display()
  block2.score();
  block3.display()
  block3.score();
  block4.display()
  block4.score();
  block5.display()
  block5.score();
  block6.display()
  block6.score();
  block7.display()
  block7.score();
  block8.display()
  block8.score();
  block9.display()
  block9.score();
  block10.display()
  block10.score();
  block11.display()
  block11.score();
  block12.display()
  block12.score();
  block13.display()
  block13.score();
  block14.display()
  block14.score();
  block15.display()
  block15.score();
  block16.display()
  block16.score();
  block17.display()
  block17.score();
  block18.display()
  block18.score();
  block19.display()
  block19.score();
  block20.display()
  block20.score();
  block21.display()
  block21.score();
  block22.display()
  block22.score();
  block23.display()
  block23.score();
  block24.display()
  block24.score();
  block25.display()
  block25.score();
  block26.display()
  block26.score();
  block27.display()
  block27.score();
  block28.display()
  block28.score();
  

  shoot.display()
  slingshot.display()

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(shoot.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
	slingshot.fly()
	}

  function keyPressed(){
    if(keyCode===32){
      slingshot.attach(shoot.body)
    }
  }

  
  async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON=await response.json(); 
  //  console.log(responseJSON.datetime);
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  if(hour>=0600 && hour<=1900){
      bg="Img/bg2.png"
  }
  else{
      bg="Img/bg1.png"
  }
  backgroundImg=loadImage(bg);
}