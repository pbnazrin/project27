class Bob{
    constructor(x,y,r){
        var option={
            isStatic : false,
            restitution  : 1,
            friction : 0,
            density : 0.8
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.body = Bodies.circle(this.x,this.y,this.radius,option);
      //  this.image = loadImage("paper.png");
        this.radius=r;
        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y);
      //  imageMode(CENTER);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
        //image (this.image,0,5,this.radius,this.radius)
        pop ();
    }


    
}
