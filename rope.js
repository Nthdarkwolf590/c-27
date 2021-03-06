class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

      var options ={
          bodyA : bodyA,
          bodyB : bodyB,
          stiffness : 0.04,
          length : 200
      }

       this.offsetX = offsetX
       this.offsetY = offsetY
       this.rope = Constraint.create(options)
       World.add(world,this.rope)

    }
    display(){
        var pointA = this.rope.bodyA.postion;
        var pointB = this.rope.bodyB.postion;
        strokeWeight(2);

        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y 

        var Anchor2X=pointB.x+this.offsetX 
        var Anchor2Y=pointB.y+this.offsetY 

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}