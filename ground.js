class Ground{
    constructor(x,y,width,height){
        this.width=width;
        this.height=height;
        var groundoption={
        isStatic:true
        }
        this.body=Bodies.rectangle(x,y,this.width,this.height,groundoption);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}