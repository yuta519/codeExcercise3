// Question 1
// Write a function that takes a value n as a parameter, and prints the following pattern
/*

*****
****
***
**
*

*/

const printStarsLikeDesc = (num) => {
  for (num; num > 0; num--) {
    console.log("*".repeat(num));
  }
}
printStarsLikeDesc(5);


// Question 2
// Write a function that takes a value n as a parameter, and prints the following pattern
/*

*
**
***
****
*****
****
***
**
*

*/
const printStarsLikeMountain = (num) => {
  for (let i = 0; num > i; i++) {
    console.log("*".repeat(i));
  }
  for (num; num > 0; num--) {
    console.log("*".repeat(num));
  }
}
printStarsLikeMountain(5);


// Question 3
// Write a function that takes a value n as a parameter, and prints the following pattern
/*
        *
      *   *
    *       *
  *  * * * *  *
*/

const printStarsLikeTriangle = (height) => {
  const width = (height-1) * 4 + 1;
  // Find the center position using devaluation
  const center = width / 2 | 0

  for (let i = 0; height > i; i++) {
    let row = '';
    for (let j = 0; width > j; j++) {
      if (i == 0 && j == center) {
        row += "*";
      } else if (j == center-i*2 || j == center+i*2) {
        row += "*";
      } else if (i == height-1 && j%2 == 1 && j != 1 && j != width-2) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
printStarsLikeTriangle(height=4);
