
//Conditional statement
let marks = 75;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else {
  console.log("C");
}

//Switch Statement
let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid Day");
}

//Early Return Pattern
// Student Grade Categorizer
function getGrade (score){
    if(score >=90 && score <=100) return "A" 
    if(score >=80 && score <=89) return "B"
    if(score >=70 && score <=79) return "C"
    if(score >=60 && score <=69) return "D"
    if(score >=33 && score <=59) return "E"
    if(score >=0 && score<=32) return "Fail"
    return "Invalid Marks"

}

console.log(getGrade(50));

//ROCK ,PAPER AND SCISSOR LOGIC
function rps(user,computer){
    if(user === computer) return "Draw"
    if (user === "rock" && computer === "scissor") return "user win"
    if (user === "scissor" && computer === "paper") return "user win"
    if (user === "paper" && computer === "rock") return "user win"
    return "computer win"

}

console.log(rps("paper" , "rock"));
