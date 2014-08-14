//Initialize Phaser Engine. Create a 400x490px game!

var game= new Phaser.Game(400,490, Phaser.AUTO,"gameDiv");

//Create our 'main' state that will contain the game
//This is the body of the game itself
//It should contain all code related to the game itself

var mainState = {
  
 preload: function(){
   //This function will excute at the beginning
   //which is where we'll load ourour assets for the game
   
   //set the background color of the game
   game.stage.backgroundcolor =" #71c5cf";
   
   game.load.image("bird", "assets/bird.png");
   
   game.load.image("pipe", "assets/ppe.png");
   
   
 },
 
 
 Create: function (){
   //This function is called right after preload funtion
   //This is where we set up the game assets from earlier
   
   game.physics.startSystem(Phaser.Phyics.ARCADE);
   
  this.bird = this.game.add.sprite(100, 245, "bird");
   
  
  //Now that we have a bird and gravity...we need to tell the bird
  //to react to the gravity
  
  game.physics.arcade.enable(this.bird);
  
this.bird.body.gravity.y = 1000;  
  
  
  },
  
update: function () {
  //This funtion runs 60 times per second 
}, 
  
};


//Add and start the "mainState" to start the game
game.state.add("main, mainState");
game.state.start("main");
