class drops{
    constructor(x, y, r) {
        var options = {
          density: 2,
          friction: 0.1,
          restitution: 0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
      var diameter = 2*this.radius   
        push();
        fill("blue")
        
        circle(this.body.position.x,this.body.position.y,diameter)
        pop();
      }
}