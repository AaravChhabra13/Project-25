class Ball{

    constructor(x,y,radius){

        var ballopt={
            isStatic:false,
            friction:0.5,
            restitution:0.3,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius/2,ballopt);
        this.radius=radius;
        this.img=loadImage("paper.png");
        World.add(world,this.body);
     }

     display(){
         var pos=this.body.position;

         imageMode(CENTER);
         fill("blue");
         //ellipse(pos.x,pos.y,this.radius);
         image(this.img,pos.x,pos.y,this.radius);
     }
}