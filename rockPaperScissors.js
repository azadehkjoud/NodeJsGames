


const game = ["rock", "paper", "scissors"];

 const random = Math.floor(Math.random() * game.length);
 

const azadeh = process.argv.slice(2);




const pcInput = game[random];
const azadehInput=azadeh[0];

console.log("PC input is :", pcInput,"  ","azadeh input is :","  ", azadehInput);





if (pcInput=="rock" && azadehInput == "rock") {
    console.log("equal");
  } 
  else if (pcInput=="rock" && azadehInput == "paper") {
    console.log("Azadeh wins");
  }
   else if (pcInput=="rock" && azadehInput == "scissors") {
    console.log("Computer wins");
  } 
  else if (pcInput=="paper" && azadehInput == "rock") {
    console.log("Computer wins");
  } 
  else if (pcInput=="paper" && azadehInput == "paper") {
    console.log("equal");
  } 
  else if (pcInput=="paper" && azadehInput == "scissors") {
    console.log("Azadeh wins");
  } 
  else if (pcInput=="scissors" && azadehInput == "scissors") {
    console.log("equal");
  } 
  else if (pcInput=="scissors" && azadehInput == "paper") {
    console.log("Computer wins");
  } 
  else if (pcInput=="scissors" && azadehInput == "rock") {
    console.log("Azadeh wins");
  } 

 


