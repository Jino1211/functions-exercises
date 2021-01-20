//Question 1
function myReverse(str) {
  // your code here
  let reverse = '';
  for (let i = str.length-1; i >= 0; i-- ) {
    reverse += str[i];
  }
  console.log(reverse);
  return reverse;
}
myReverse('yehonatan');


//Question 2

function allCombinations(str) {
  let combinations = [];
  // your code here
  for (let i = 0; i < str.length; i++) {
    combinations.push(str[i]);
    for (let j = i+1; j < str.length; j++) {
      let cut = str.slice(i,j+1);
      combinations.push(cut);
    }
  }
  console.log(combinations);
  return combinations;
}
allCombinations('dogolo');

//Question 3
function allCaps(str) {
  // your code here

  let firstLetter = str[0];
  let capitalLetter = firstLetter.toUpperCase();
  let newStr = capitalLetter;
  for (let i = 0; i < str.length-1; i++) {
      if (str[i] === ' ') {
         firstLetter = str[i+1];
         capitalLetter = firstLetter.toUpperCase();
         newStr += '' + capitalLetter;
      } else {
        newStr += str[i+1];
      }
    }
    console.log(newStr);
    return newStr;
  }
  allCaps ('hii my name is mose');


//Question 4
function myPower(x, n) {
  // your code here
  let sum = 1;
  for (let i = 0; i < n; i++) {
    sum *= x;
  }
  console.log(sum);
  return sum;
}
myPower(2,5);

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  for (let i = 0; i < str.length ; i++) {
    let counter = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        counter++;
      }
    }
    if (counter === 1) {
      console.log(str[i]);
      return str[i];
      break;
    }
  }
}
getFirstNotRepeating('aardsr')


//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  let arr = [];
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}
isPrefectNumber(28);

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
