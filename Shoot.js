class Shoot {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.1,
          density:0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("Img/Hexagon.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
    }
  };
  