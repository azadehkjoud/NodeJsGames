


const game = ["rock", "paper", "scissors"];

 const random = Math.floor(Math.random() * game.length);
 

const user = process.argv.slice(2);




const pcInput = game[random];
const userInput=user[0];

console.log("PC input is :", pcInput,"  ","User input is :","  ", userInput);





if (pcInput=="rock" && userInput == "rock") {
    console.log("equal");
  } 
  else if (pcInput=="rock" && userInput == "paper") {
    console.log("User wins");
  }
   else if (pcInput=="rock" && userInput == "scissors") {
    console.log("Computer wins");
  } 
  else if (pcInput=="paper" && userInput == "rock") {
    console.log("Computer wins");
  } 
  else if (pcInput=="paper" && userInput == "paper") {
    console.log("equal");
  } 
  else if (pcInput=="paper" && userInput == "scissors") {
    console.log("User wins");
  } 
  else if (pcInput=="scissors" && userInput == "scissors") {
    console.log("equal");
  } 
  else if (pcInput=="scissors" && userInput == "paper") {
    console.log("Computer wins");
  } 
  else if (pcInput=="scissors" && userInput == "rock") {
    console.log("User wins");
  } 

 


