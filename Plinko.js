class Plinko{
    constructor(x,y){
        var options = {
            isStatic : true,
            friction : 0.8
        }

        this.body= Bodies.circle(x,y,8,options);
        this.radius = 8;        
        World. add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
    }
}