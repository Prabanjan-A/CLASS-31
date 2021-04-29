const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1, thunder2, thunder3, thunder4

var engine, world;

var rand

varthunderCreatedFrame-0;

function preload(){
    thander1 = loadImage("thunderbolt/1.png");
    thander2 = loadImage("thunderbolt/2.png");    
    thander3 = loadImage("thunderbolt/3.png");
    thander4 = loadImage("thunderbolt/4.png");

}

function setup(){
   engine = Engine.create();
   world = engine.world;

   createCanvas(400,700);
   unbrella = new Unbrella(200,500);
    
}

function draw(){
    Engine.update(engine);
    background(0);
    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),Math.round(random(0,400)))
        switch(rand){
            case 1: thander.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thander.addImage(thunder3);
            break;
            case 4: thander.addImage(thunder4);
            break;
        }
        thunder.scale = random(0.3,0.6)
    }
 if(thunderCreatedFrame + 10 ===frameCount &&thunder){
     thunder.destroy();
 }

 umdrella.display();


drawSprites();
}   

