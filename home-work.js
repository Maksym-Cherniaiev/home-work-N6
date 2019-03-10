// TASK 1 - A function which prints str after n seconds.

function printTimeout(str, n) {
  let timeDelay = n * 1000;
  return setTimeout(() => console.log(str), timeDelay);
}

printTimeout("hop", 2);

// TASK 2 - A function which returns sum of all numbers from 1 to n using recursion.

let sum = 0;
function sumAll(n) {
  sum += n;
	if (n > 0) {
    sumAll(n-1);
  } else {
  	console.log(sum);
    sum = 0;
  }
}

sumAll(2);
sumAll(4);

// TASK 3 - Timer.

function bombTimer(str, time) {
  let countDown = setInterval(() => {
    console.log(time);
    time--;
    if (time === 0) {
      clearInterval(countDown);
      setTimeout(() => console.log(str), 1000);
    }
  }, 1000);
}

bombTimer('Boooom', 3);

// TASK 4 - A function which returns factorial of number using recursion.

let result = 1;
function factorial(num) {
  debugger;
  while (num !== 0) {
    return num * factorial(num - 1);
  } if (num === 0) {
  	result = 0;
  	return 1;
  }
}

factorial(3);
factorial(5);

// TASK 5 - Implement function from task №3 (bombTimer) using recursion and setTimeout.

const timeInterval = 1000;
function bombTimer(str, time) {
  console.log(time);
  if (time !== 1) {
    setTimeout(() => bombTimer(str, time - 1), timeInterval);
  } else if (time === 1) {
    setTimeout(() => console.log(str), timeInterval);
  }
}

bombTimer("Boooom", 3);

// TASK 6 - Function returns new array with numbers not higher than maxNumber.

function filterNumbers(arr, maxNumber) {
  let newArr = [];
  arr.map(number => {
    if (number < maxNumber) {
      newArr.push(number);
    }
  });
  console.log(newArr);
}

filterNumbers([1, 4, 8, 1, 20], 5);

// TASK 7 - A function that returns object with min and max numbers from array of numbers.

function minMax(arr) {
  let object = {};
   object.max = arr[1];
   object.min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      object.min = arr[i];
    } else if (arr[1] < arr[i]) {
      object.max = arr[i];
    }
  }
  console.log(object);
}

minMax([1, 4, 8, 2, 20]); // { max: 20, min: 1 }

// TASK 8 - A function that returns average of numbers in array.

function average(arr) {
  let sum = 0;
  arr.forEach(number => {
    sum += number;
  });
  const arithmeticMean = sum / (arr.length);
  console.log(arithmeticMean);
}

average([1,4,2]); // 2.33

// TASK 9 - A function which concats all first-nested arrays in one array (reduce was used)

function concatFirstNestedArrays(arr) {
  let concatenatedArrElementsr = [];
  let reducer = (accum, number) => accum + ", " + number;
  arr.forEach(element => {
    concatenatedArrElementsr.push(element.reduce(reducer));
  });
  let resultArray = [];
  let values = concatenatedArrElementsr.reduce(reducer).split(", ");
  values.forEach(value => {
    resultArray.push(+value);
  });
  console.log(resultArray);
}
// "resultArray" is array of numbers (not strings)
concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]); // [0, 1, 2, 3, 4, 5]