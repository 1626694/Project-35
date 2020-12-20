var database;
var game,player,form;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  player= new Player();
form=new Form()
form.display() ;

  
}

function draw(){
  

  
}


