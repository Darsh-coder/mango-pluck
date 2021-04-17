class Tree{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
        density:1.2,
        friction:0.5
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    this.image=loadImage("Plucking Mangoes/tree.png")
    World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
      //  imageMode(CENTER);
        rectMode(CENTER)
       // image(this.image,580,380,this.width,this.height)
        
        rect(pos.x, pos.y, 20, this.height);
      }
}