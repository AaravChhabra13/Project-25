class Dustbin{
    constructor(){

        var opt={
            isStatic:true,
            friction:0.5,
            density:1.2
        }

        //this.leftbody=Bodies.rectangle(1245,720,10,100,opt);
        //World.add(world,this.leftbody);

        //this.bottombody=Bodies.rectangle(1270,700,150,150,opt);
        this.img=loadImage("dustbingreen.png");
        this.bottombody=Bodies.rectangle(1270,670,200,200,opt);
        World.add(world,this.bottombody);

        //this.rightbody=Bodies.rectangle(1355,720,10,100,opt);
       // World.add(world,this.rightbody);
     }

     display(){
         //var pos=this.leftbody.position;
         var pos1=this.bottombody.position;
         //var pos2=this.rightbody.position;

        // rectMode(CENTER);
         //fill("brown");
        // rect(pos.x,pos.y,10,100);

         imageMode(CENTER);
         fill("brown");
         //rect(pos1.x,pos1.y,100,10);
         image(this.img,pos1.x,pos1.y,200,200);

         //rectMode(CENTER);
         //fill("brown");
         //rect(pos2.x,pos2.y,10,100);

     }
}