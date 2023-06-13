// You can mutate the contents of a const variable, but cannot reassign the variable 
const nums = [7,8];
nums.push(0);
console.log(nums)

// declare variables with let to reassign value 
let score = 100;
score = "five stars";


let i = 0;

while (i < 5) {
    console.log(i)
    i += 1;
}

// print kitties at their indices 

let kitties = ["Odds", "Ends", "Henri", "Pyxis"];

for (i = 0; i < kitties.length; i += 1) {
    console.log(`${kitties[i]} is at index ${i}`);
}



// for... of... gets you each element of the array 

for (const kitty of kitties) {
    console.log(kitty);
}

// for... in... gets you the index of each element of the array 
for (const kitty in kitties) {
    console.log(i);
    console.log(kitties[i]);
}

console.log(kitties.slice(2))
console.log(kitties.slice(2,3))

//Arrow functions not subjected to variable hoisting
const functionName = (listOfParams) => {

};

function subtract(x,y) {
    return x -y;
}

const subtract = (x,y) => {
    return x - y; 
};

function add(x,y=0) {
    return x+y;
}

const add = (x, y=0) => {
    return x+y;
};


//one line return statement, you can leave out the curly braces and return statement 

const subtract = (x,y) => x-y;

const add = (x,y) => x+y;

//omit the paratheses if you only have one parameter 

const printMsg = msg => {
    console.log(msg);
};

// JavaScript Objects are a lot like Python dictionaries 
// sometimes called plain objects 


const melonCodes = { 
    cren: "Crenshaw",
    musk: "Muskmelon"
};

// attributes are called keys or properties 
// for our purposes, all keys in a JS obj has to be a string


// to get keys in JS object, I can get nums[1] or nums["1"] => "one"

const cat = {
    name: "Marvin",
    "age": 2,
    "favorite smell": "cotton",
};

// end of lecture practice 

const capitals = {
    CA: "Sacramento",
    "MD": "Anapolis"
};

// capitals["CA"]; => "Sacramento"

// captials[MD]; => Reference error
// this is looking for a variable calle MD and doesn't find one
// hidden strings can only be hidden inside of objects

// capitals.MD; => "Anapolis"

// const calif = "CA";
// captials[calif] => "Sacramento"

// capitals.calif; => Undefined 
// capitals.calif is looking for capitals["calif"]

// capitals["MN"] = "St. Paul";
// capitals.OR = "Salem";
// capitals; 

// const capitals = {
//     CA: "Sacramento",
//     "MD": "Anapolis",
//     "MN": "St. Paul",
//     "OR": "Salem"
// };