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

// TASK 5 - 