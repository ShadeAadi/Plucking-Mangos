class Stone {
    constructor(x, y, radius) {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.2,
            frictionAir: 0.02,
            angularVelocity: -8,
            density:3
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}