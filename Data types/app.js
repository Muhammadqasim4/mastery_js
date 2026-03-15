
//Primitive Datatypes
let name ="Muhammad Qasim"
console.log(name);

let age = 23
console.log(age);

let isLogin ="True"
console.log(isLogin);

let userAge;
console.log(userAge);

let food = null
console.log(typeof food);
console.log(food);


let number =9007199254740991n
number = number + 3n
console.log(number);

//symbol is unique 

let a = 12
let b = a
a = a + 2 // Real Copy
console.log(a);
console.log(b);

let c = [1 ,2 ,3]
let d = c // only Reference pass
c.pop();
console.log(c);
console.log(d);

// typeof null
// 'object'

// typeof NaN
// 'number'

// typeof {}
// 'object'

// typeof []
// 'object'

// typeof function(){}
// 'function'


//Type Coercion 
let grade = "5" + 1
console.log(grade); // concatenation in + method


let numbers = 3 - "2"
console.log(numbers);

// 0 , False , "" , null , undefined , NaN , document.all is a falsy value and without this value all is truthy.

// !! check the truthy and falsy value






















