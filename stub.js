class Stub {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 20
        }
        this.stub = Constraint.create(options);
        World.add(world, this.stub);
    }
    display() {
        if (this.stub.bodyA) {
            var pointA = this.stub.bodyA.position;
            var pointB = this.stub.pointB;
            strokeWeight(1);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    attach(body){
        this.stub.bodyA = body;
    }
    
    eject() {
        if(this.stub.bodyA.speed > 0){
            this.stub.bodyA = null;
        }
    }
}