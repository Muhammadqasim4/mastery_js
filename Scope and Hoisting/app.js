
// scope
//Block 
if (18){
    let userAge = 18
    console.log(userAge);
     
}
 
// Function scope
function grade(){
    var food = "fish"
    console.log(food);

}

grade ()


// global

let name = "Ali"

function showName(){
    console.log(name);

    
}
showName()

//Hoisting

console.log(b);

var b = 12


console.log(a);

let a = 15

// same as a const

