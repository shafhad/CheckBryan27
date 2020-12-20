class chain{
    constructor(bodyA,bodyB){
        //creating a constraint
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            legnth: 10
        }

        this.chain = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var posA=this.chain.bodyA.position;
        var posB=this.chain.bodyB.position;
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}