class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        density:0.8,
        friction:0.1,
        restitution:0.3
    }
    this.visibility=255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image=loadImage("Img/box1.png");
  }
  display(){
if(this.body.speed<3){
  var angle=this.body.angle;
  var pos =this.body.position;
  push()
  translate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
 image(this.image,0,0,this.width,this.height);
//rectMode(CENTER);
//rect(0,0,this.width,this.height);
  pop()
}else{
  World.remove(world,this.body);
  push()
  this.visibility = this.visibility -5;
  pop();
} 
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    }
  }

};