class Rope
{
    constructor (bodyA,bodyB,offsetX,offsetY)
    {
        this.offestX=offsetX;
        this.offsetY=offsetY;

       var options=
       {
        bodyA:body1,
        bodyB:pointB,
       pointB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}

        }
this.Rope=Constraint.create(options);

World.add(world,this.Rope);

    }
    display ()
    {
        var pointA=this.Rope.body1.position;
        var pointB=this.Rope.body2.position;
        var anchor1x=pointA.x;
        var anchor1y=pointA.y;
        var anchor2x=pointB.x+this.offsetX;
        var anchor2y=pointB.y+this.offsetY;
        strokeWeight(2);
line (anchor1x,anchor1y,anchor2x,anchor2y);
    }
}