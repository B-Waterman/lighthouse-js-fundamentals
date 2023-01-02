/*
const raining = true;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!"); 


const cold = true;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
*/
//All code above blocked out for subsequent practice code, to avoid multi-'cold' variable conflicts.

const temperature = 50;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
//prints Short sleeves won't cut it! Now you're ready to go outside! to the console.


const isCitizen = false;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}



let raining = false
if (!raining) {
  console.log("Leave your umbrella at home!");
}