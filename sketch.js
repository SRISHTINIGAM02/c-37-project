var canvas,backgroundImage;
var gameState = 0;
var contestantCount; 
var database; 
var allContestants;
var answer;
var quiz;
var question;
var contestant; 

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    gameState=1;
  }
 
   quiz.play();
 }

