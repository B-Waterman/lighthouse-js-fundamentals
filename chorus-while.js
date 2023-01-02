const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  //sets repeat limit to 10
  if (repeat === 5) {
    console.log("*change key*");
    //adds key change after 5th repeat of chorus
  }
  console.log(chorus);
  repeat++;
  //adds 1 to repeat's value every loop
}
console.log("Until the sun comes up!");
/* prints the following to console:
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!
*change key*
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Let's dance!
Until the sun comes up!
*/