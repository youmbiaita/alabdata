// The initial numbers that must be verified.
const numb1 = 10;
const numb2 = 15;
const numb3 = 20;
const numb4 = 5;

//Part1 Math Problems

// Check if all numbers are divisible by 5. Cache the result in a variable
const allNum = (numb1 % 5) + (numb2 % 5) + (numb3 % 5) + (numb4 % 5) == 0;
console.log(allNum) // true

//Check if the first number is larger than the last. Cache the result in a variable.
const larLast = numb1 > numb4;
console.log(larLast) //true

// arithmetic chain
const arith = ((numb2 - numb1) * numb3) % numb4;
console.log(arith)// 0

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (numb1 + numb2 + numb3 + numb4) == 50;
console.log(isSum50); // true

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (numb1 % 2) + (numb2 % 2) + (numb3 % 2) + (numb4 % 2) >= 2;
console.log(isTwoOdd)// true
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = numb1 > 25 || numb2 > 25 || numb3 > 25 || numb4 > 25;
// console.log(isOver25)

const isUnderOrEqualTo25 = numb1 <= 25 && numb2 <= 25 && numb3 <= 25 && numb4 <= 25;
console.log(isUnderOrEqualTo25)//true

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = numb1 != numb2 && numb1 != numb3 && numb1 != numb4 && numb2 != numb3 && numb2 != numb4 && numb3 != numb4;
console.log(isUnique)//true

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnderOrEqualTo25 && isUnique;

// Finally, log the results.
console.log(isValid); //true

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((numb1 + numb2 + numb3 + numb4) == 50) && 
  ((numb1 % 2) + (numb2 % 2) + (numb3 % 2) + (numb4 % 2) >= 2) && 
  !(numb1 > 25 || numb2 > 25 || numb3 > 25 || numb4 > 25) && 
  (numb1 != numb2 && numb1 != numb3 && numb1 != numb4 && numb2 != numb3 && numb2 != numb4 && numb3 != numb4);


  //Part 2: Practical Math
  // set variables
  let totalTrip = 1500;
  let budget = 175;
  let averageCostPerGallon = 3;
  let speed1 = 55;
  let speed2 = 60;
  let speed3 = 75;
  let fuel1 = 30;
  let fuel2 = 28;
  let fuel3 = 23;

  // time trip will take for each
  let time1 = totalTrip / speed1;
  let time2 = totalTrip / speed2;
  let time3 = totalTrip / speed3;
  console.log("Time needed for 55 miles per hour: " + time1 + " hours.");  
  console.log("Time needed for 60 miles per hour: " + time2 + " hours."); 
  console.log("Time needed for 75 miles per hour: " + time3 + " hours.");

  // Gallons needed per hours
  let galPerHour1 = speed1 / fuel1;
  let galPerHour2 = speed1 / fuel2;
  let galPerHour3 = speed1 / fuel3;
  console.log("Gallons needed per hour for 55 miles: " + galPerHour1 + " gallon per hour.");
  console.log("Gallons needed per hour for 60 miles: " + galPerHour2 + " gallon per hour.");
  console.log("Gallons needed per hour for 75 miles: " + galPerHour3 + " gallon per hour.");

  //Gallons needed for the entire trip
  let gallon1 = time1 * galPerHour1;
  let gallon2 = time2 * galPerHour2;
  let gallon3 = time3 * galPerHour3;
  console.log("Gallons needed for the entire trip using 55 miles: " + gallon1 + " gallons.");
  console.log("Gallons needed for the entire trip using 60 miles: " + gallon2 + " gallons.");
  console.log("Gallons needed for the entire trip using 75 miles: " + gallon3 + " gallons.");

  // The budget will but enough
  let budget1 = gallon1 * averageCostPerGallon;
  console.log(budget1)
  let budget2 = gallon2 * averageCostPerGallon;
  console.log(budget2)
  let budget3 = gallon3 * averageCostPerGallon;
  console.log(budget3)
   if(budget1 <= budget) {
    console.log("The budget is enough to cover the trip for " + speed1 + " miles.");
   } else {
    console.log("The budget is not enough to cover the trip.");
   }
    if(budget2 <= budget) {
    console.log("The budget is enough to cover the trip for " + speed2 + " miles.");
   }else {
    console.log("The budget is not enough to cover the trip.");
   }
   if (budget3 <= budget) {
    console.log("The budget is enough to cover the trip for " + speed3 + " miles.");
   }else {
    console.log("The budget is not enough to cover the trip for all speeds");
   }

   // The reasonable car is the one with 60 miles per hour.
  




