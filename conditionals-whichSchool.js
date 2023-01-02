/* Challenge: Return the following strings:
The function returns one of the following strings, based on the value of age:

Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases.
*/

const whichSchool  = function (age) {
  //determines which school to attend based on age
  if (age < 13) {
    return('Elementary School'); 
    //Students under the age of 13 retuns "Elementary School"
  } else if (age <= 18) {
    return('Secondary School'); 
    //Students between the ages of 13 and 18 returns "Secondary School"
    // Line 11 already accounts for number 13. Removed age >= 13 && so 13 isn't evaluated twice
  } else {
    return('Lighthouse Labs');
    //All ages 19 and up returns "Lighthouse Labs"
  }
};

console.log('I am 35. Which school should I go to?');
console.log(whichSchool(35));
//prints 'I am 35. Which school should I go to?' 'Lighthouse Labs' to console
console.log('I am 8. Which school should I go to?');
console.log(whichSchool(8));
//prints 'I am 8. Which school should I go to?' 'Elementary School' to console
console.log('I am 14. Which school should I go to?');
console.log(whichSchool(14));
//prints 'I am 14. Which school should I go to?' 'Secondary School' to console