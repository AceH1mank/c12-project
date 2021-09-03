var garden,rabbit;
var gardenImg,rabbitImg;
var apples,appleImg;
var orLeaf;
var leaf;
var apple,leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("leaf.png");
  orLeafImg=loadImage("orangeLeaf.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX;
  spawnApples();
  spawnLeafs();
  spawnorLeafs()
  drawSprites();
}

function spawnApples(){
  if(frameCount%60===0){
  var apple = createSprite(Math.round(random(50,350)),10,10,10)
    apple.velocityY=4;
    apple.addImage(appleImg);
    apple.scale=0.05;
    apple.lifetime=100;
  }
}
function spawnLeafs(){
  if(frameCount%80===0){
  var leaf = createSprite(Math.round(random(50,350)),10,10,10)
    leaf.velocityY=4;
    leaf.addImage(leafImg);
    leaf.scale=0.05;
    leaf.lifetime=100;
    //leaf.collide(apple)
  }
}
function spawnorLeafs(){
  if(frameCount%50===0){
  var orLeaf = createSprite(Math.round(random(50,350)),10,10,10)
    orLeaf.velocityY=4;
    orLeaf.addImage(orLeafImg);
    orLeaf.scale=0.05;
    orLeaf.lifetime=100;
    //leaf.collide(apple)
  }
}