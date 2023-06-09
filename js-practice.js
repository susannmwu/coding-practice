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