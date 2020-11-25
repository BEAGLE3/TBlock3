class Box1 {
  constructor(x,y,width,height) {
    var options = {
      isStatic: false,
      density:0.8,
      friction:0.1,
      restitution:0.3
    }
    this.Visibility=255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("Img/box2.png")
    this.width = width;
    this.height = height;
    World.add(world, this.body);
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
      pop()
    }else{
      World.remove(world,this.body);
      push()
      this.Visibility = this.Visibility -5;
      pop();
    }
    
  }
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -105){
      score++;
    }
  }
};
