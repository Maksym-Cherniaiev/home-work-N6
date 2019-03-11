// TASK 1 - A function which prints str after n seconds.

function printTimeout(str, n) {
  const timeDelay = n * 1000;
  const delayString = setTimeout(() => {
    console.log(str);
    clearTimeout(delayString);
  }, timeDelay);
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
      const delayString = setTimeout(() => {
        console.log(str);
        clearTimeout(delayString);
      }, 1000);
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
    const timer = setTimeout(() => {
      bombTimer(str, time - 1);
      clearTimeout(timer);
    }, timeInterval);
  } else if (time === 1) {
    const stringDelay = setTimeout(() => {
      console.log(str);
      clearTimeout(stringDelay);
    }, timeInterval);
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
	console.log(arr.reduce((acc, elem) => [...acc, ...elem]));
}

// function concatFirstNestedArrays(arr) {
//   let concatenatedArrElementsr = [];
//   let reducer = (accum, number) => accum + ", " + number;
//   arr.forEach(element => {
//     concatenatedArrElementsr.push(element.reduce(reducer));
//   });
//   let resultArray = [];
//   let values = concatenatedArrElementsr.reduce(reducer).split(", ");
//   values.forEach(value => {
//     resultArray.push(+value);
//   });
//   console.log(resultArray);
// }

concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]); // [0, 1, 2, 3, 4, 5]

// TASK 10 - A function accepts array of users and returns object of users where key is user id and value user data.

const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-0-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];
// The embodiment of destructuring an object
function usersToObject(users) {
  let objectOfUsers = {};
  ({...objectOfUsers} = [...users]);
  console.log(objectOfUsers);
}

usersToObject(users);
// {
//  0: { id: 1, name: 'John', birthday: '1999-2-12' }
//  1: { id: 2, name: 'Bill', birthday: '1999-1-19' }
//  2: { id: 3, name: 'Carol', birthday: '1999-0-11' }
//  3: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };

// TASK 11 - A function returns array of users that have birthdays in a specific month.

const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' }, // In this line was a mistake ('1999-0-11'), replaced 0 with 4
  { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) {
  users.forEach(user => {
    let birthday = new Date(user.birthday);
    if (birthday.getMonth() === month) {
      console.log(user);
    }
  });
}

filterUsersByMonth(users, 0) // [{ name: 'Bill', birthday: '1999-1-19' }]

// TASK 12 - A function returns name and age of users separated by comma that are older than 18.

const users = [
  { name: 'John', birthday: '1999-6-12' },
  { name: 'Bill', birthday: '2005-5-19' },
  { name: 'Carol', birthday: '2003-10-11' },
  { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) {
  let matureUsers = []; // mature users )))
  const currentYear = new Date().getFullYear();
  users.forEach(user => {
    const userBirthYear = new Date(user.birthday).getFullYear();
    const userAge = currentYear - userBirthYear;
    if (userAge >= 18) {
      matureUsers.push(`${user.name} ${userAge}`);
    }
  });
  console.log(matureUsers.reduce((acc, elem) => (acc + ", " + elem)));
}

getAdultNames(users); // 'John 20, Luce 19'