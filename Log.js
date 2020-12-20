class Log extends BaseClass{
    constructor(x, y, height, angle) {
      super(x,y,height,20,angle);
      Matter.Body.setAngle(this.body, angle);
      this.image=loadImage("sprites/wood2.png");
    }
  };
  