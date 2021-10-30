class mango{

    constructor(x,y,r){
        var options ={
        isStatic:true,
        restitution:0,
        friction:1
        };
        this.r=r;
        this.mangoImage = loadImage('mango.png');
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);

      }


display() {
      image(mangoImage,this.body.position.x,this.body.position.y,this.r,this.r)

    }
}
