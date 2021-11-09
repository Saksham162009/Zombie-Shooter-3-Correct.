var zombie , zombie2 , monster;
var player , player2;
var player_img , player2_img , zombie_img , zombie2_img , monster_img;
var gun , gun2 , bullet;
var gun_img , gun2_img , bullet_img;

function preload(){
  monster_img = loadImage("monster.png");
  zombie_img = loadImage("zombie.png");
  zombie2_img = loadImage("zombie2.png");
  player_img = loadImage("player.png");
  gun_img = loadImage("gun.jpg");
  bullet_img = loadImage("bullet.jpg");
}

function setup(){
  canvas = createCanvas(1600,900);
  
  player = createSprite(650,200);
  player.addImage(player_img);
  player.scale = 0.5; 

  //gun = createSprite(650,400);
  //gun.addImage(gun_img);
  //gun.scale = 0.7; 
}

function draw(){
background("brown");

spawnObstacles();
serve();


player.y = World.mouseY;
player.x = World.mouseX;

drawSprites()
}

function spawnObstacles() {
  if(frameCount % 20 === 0) {
    var zombie = createSprite(600,165);
    zombie.x = Math.round(random(10,displayWidth));
    zombie.y = random([10,20,800,850]);
    //generate random obstacles
    var rand = Math.round(random(1,2,3));
    switch(rand) {
      case 1: zombie.addImage(zombie_img);
              break;
      case 2: zombie.addImage(zombie2_img);
              break;
      case 3: zombie.addImage(monster_img);
              break;    
      default: break;
    }
    zombie.scale = 0.5;
  }
}
function serve(){
  //zombie.x=player.x;
  //zombie.y=player.y;
}