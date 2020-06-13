//player
var thisplayer;
var thisx = 380,thisy = 380;
var playerCount = "undefinied";
var gameState = "play";
//oponent
var thatplayer
var thatx = 380,thaty = 380
// play
var playerID,play,play_pressed = "no";
// walls
var wall1, wall2;
//obs
var obs1,obs2,obs3;
var pizza = "true";
function preload(){ 
}

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  wall1 = createSprite(300,250,25,300);
  wall2 = createSprite(100,150,25,300);
  obs1 = createSprite(400,300,10,10);
  obs2 = createSprite(350,175,10,10);
  obs3 = createSprite(300,275,10,10);
  thisplayer = createSprite(200,200,10,10);
  thatplayer = createSprite(200,200,10,10);
  play = createButton('play');
  obs1.velocityX = 10
  obs2.velocityX = 10
  obs3.velocityX = 10
  obbs1 = createSprite(200,200,10,10);
  obbs2 = createSprite(200,250,10,10);
  obbs3 = createSprite(200,150,10,10);
  obbs4 = createSprite(200,290,10,10);
  obbs1.velocityX = -9
  obbs2.velocityX = -6
  obbs3.velocityX = 3
  obbs4.velocityX = 6

  oobbs1 = createSprite(25,80,50,10);
  oobbs2 = createSprite(75,130,70,10);
  oobbs3 = createSprite(25,180,50,10);
  oobbs4 = createSprite(75,230,70,10);
  oobbs5 = createSprite(25,280,50,10);

}


function draw(){
  background("white");
  play.position(200,200);
  
  if(playerCount === "undefinied"){
    get_playerCount();
    textSize(20);
    textStyle(BOLD);
    fill ("black");
    text("loading...",200,200);
    play.hide();
  }
  if (playerCount === 1||playerCount === 0&& play_pressed === "no"){
    play.show();
    
    play.mousePressed(()=>{
    update_playerCount();
    playerID = playerCount;
    create_player();
    play.hide();
    play_pressed = "yes"
  })
  }else if (playerCount === 1){
    text("hum",200,200);
    play.hide();
  }

  if (playerCount === 2 && gameState === "play"){
    play.hide();
    get_opo_x_y();
    update_x_y();
  if (keyIsDown(LEFT_ARROW) && thisx >0){
    //left arrow
    thisx -= 2.5 
  }else if (keyIsDown(RIGHT_ARROW)&& thisx <400 ){
    //right arrow
    thisx += 2.5 
  }else if (keyIsDown(UP_ARROW)&& thisy >0&&pizza === "true"){
    //up arrow
    thisy -= 2.5 
  }else if (keyIsDown(DOWN_ARROW)&& thisy < 400&&pizza === "true"){
    //down arrow
    thisy += 2.5
  }


  }
  thisplayer.shapeColor = "red";
  thisplayer.x = thisx;
  thisplayer.y = thisy;
  thatplayer.x = thatx;
  thatplayer.y = thaty;
  drawSprites();
  if(isTouching (wall1,thisplayer)){;
    gameState = "end"
    hum = -100
    ;
  };
  if(isTouching (wall2,thisplayer)){;
    gameState = "end"
    hum = -100
    ;
  };
  if(isTouching (wall1,obs1)){;
    obs1.velocityX = 2
  };


if(isTouching (wall1,obs2)){;
  obs2.velocityX = 5
};


if(isTouching (wall1,obs3)){;
  obs3.velocityX = 2
};


  
if(obs1.x >400){
    obs1.velocityX = -2
}
 //________________________________
if(isTouching (wall1,obbs1)){;
  obbs1.velocityX =- 2
};


  
if(isTouching(wall2,obbs1)){
    obbs1.velocityX = 2
}
if(isTouching (wall1,obbs2)){;
  obbs2.velocityX =- 4
};
if(isTouching(wall2,obbs2)){
    obbs2.velocityX = 5
}
if(isTouching (wall1,obbs3)){;
  obbs3.velocityX =- 3
};
if(isTouching(wall2,obbs3)){
    obbs3.velocityX = 1
}
if(isTouching (wall1,obbs4)){;
  obbs4.velocityX =- 4
};
if(isTouching(wall2,obbs4)){
    obbs4.velocityX = 7
}
 

if(obs2.x >400){
  obs2.velocityX = -5
}

if(obs3.x >400){
  obs3.velocityX = -2
}

if (isTouching (obs1,thisplayer)){
  gameState = "end"
  hum = -100

}
if (isTouching (obs2,thisplayer)){
  gameState = "end"
  hum = -100

}
if (isTouching (obs3,thisplayer)){
  gameState = "end"
  hum = -100

}
//_______________--
if (isTouching (obbs1,thisplayer)){
  gameState = "end"
  hum = -100

}
if (isTouching (obbs2,thisplayer)){
  gameState = "end"
  hum = -100

}
if (isTouching (obbs3,thisplayer)){
  gameState = "end"
  hum = -100

}
if (isTouching (obbs4,thisplayer)){
  gameState = "end"
  hum = -100

}
//__________________________
if (isTouching (oobbs1,thisplayer)){
  gameState = "end"
  hum = -100

}
if (isTouching (oobbs2,thisplayer)){
  gameState = "end"
  hum = -100

}
if (isTouching (oobbs3,thisplayer)){
  gameState = "end"
  hum = -100

}
if (isTouching (oobbs4,thisplayer)){
  gameState = "end"
  hum = -100

}
if (isTouching (oobbs5,thisplayer)){
  gameState = "end"
  hum = -100

}
if (thisx <100 && thisy <hum && gameState === "play"){
  thisy += -2.0;
  pizza = "false"
}
if (thisx <100 && thisy<50){
  gameState = "win"
  textSize(20)
  textStyle(BOLD)
  text("you win",200,200);
}
if (thatx <100 && thaty<50 || gameState === "end"){
  gameState = "end"
  textSize(20)
  textStyle(BOLD)
  text("you lose",200,200);
}
}
var hum = 300;




function isTouching(wall,player){
  var w;
  var h;
  w = 0;
  h = 0;
  w = wall.width/2
  h = wall.height/4
  var h1 = player.height/2;
  var w1 = player.width/2;
  if(player.x+w1>wall.x-w&&player.x-w1<wall.x+w&&player.y+h1>wall.y-2*h&&player.y-h1<wall.y+2*h){
    return true;
  } else{
    return false;
  }
}