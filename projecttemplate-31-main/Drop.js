class Drop{
    constructor(x,y){
       var options = {
         friction: 0.001,
          resttitution:0.1  
       }  
   this.rain = Bodies.cricle(x,y,5);
   this.radius = 5;
   World.add(world, this.rain);    
    }
    
    update(){
     if(this.rain.position.y > heught){

       Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})   
     }
    }

    showDrop(){
       fill("blue");
       ellipseMode(CENTER);
       ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}