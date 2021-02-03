class particle{
    constructor(x,y){
        var options={
        
        restitution:0.4
        
        
    }
   
    this.radius=8;
    this.body=Bodies.circle(x,y,this.radius/2,options);
    this.color=color(random(0,255),random(0,255), random(0,255))
    World.add(world,this.body);
    
}
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate (angle);
        fill (this.color);

  
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
         pop();
    }
}