//Arithmetic operator 
// + ,- ,* , / , % , **

//Comparsion Operator 

console.log(5 == "5");  // true
console.log(5 ==="5"); //false
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(10 > 5);  // true
console.log(3 < 5);   // true
console.log(5 >= 5);  // true
console.log(4 <= 5);  // true

let userage = 18;

if (userage >= 18) {
  console.log("You can vote");
}
else{
    console.log("you can note vote");
    
}

//Assignment operator
let a = 12
a = a +  3;
a =a -  11;
a =a *  2;
a =a /  2
a =a %  3
a =a **  1
console.log(a);

//Logical Operator

let age = 20;
let hasCNIC = true;

if (age >= 18 && hasCNIC === true) {
  console.log("You can vote");
}


let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
  console.log("Access granted");
}

let islogin = false
console.log(! islogin);

//Real Example
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Wrong credentials");
}

//Unary operator (only single value apply)
//  Unary Plus +
let x = "10";
let y = +x;
console.log(y);        // 10
console.log(typeof y); // number

//  Unary Minus -
let x1 = 5;
console.log(-x1); // -5

//  Pre vs Post Increment
let x2 = 5
console.log(++x2);
console.log(x2++);
console.log(x2);

let zz = "jj"


// Decrement --
let e = 5;
e--;
console.log(e); // 4


// ! reverse the answer 

//ternary operator 

let age1 = 18
let result = age1 >= 18 ? "Adult" : "Minor"
console.log(result);


let isLoggedIn = true;
let message = isLoggedIn ? "Welcome Back!" : "Please Login";
console.log(message);

let score = 75
let grade = score >= 90 ? "A" :  
            score >= 80 ? "B" :
            score >= 60 ? "C" :
            "Fail"
            console.log(grade);



let n = 5
let result1 = n++ + ++n
console.log(result1);