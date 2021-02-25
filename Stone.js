class Stone{
constructor(x,y,width,height){
var options = {
isStatic:false,
restituton:0,
friction:1,
density:1.2
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
};