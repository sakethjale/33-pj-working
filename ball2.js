class Ball2{
    constructor(x,y,r)
    {
        var options={
            isStatic:false
        }
        this.r=r
        this.body = Bodies.circle(x, y, this.r,options);  
        this.image=loadImage("drop.png")
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        push ()
        translate (pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop ()
    }
}