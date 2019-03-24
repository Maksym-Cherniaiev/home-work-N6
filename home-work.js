// TASK 1 - A function which prints str after n seconds.

async function printTimeout(str, n) {
  const timeDelay = n * 1000;
  const promise = await new Promise(function(resolve, reject) {
    const printStr = setTimeout(() => {
      clearTimeout(printStr);
      resolve(str);
    }, timeDelay);
  });
  console.log(str);
  return promise;
}

printTimeout("hop", 2);

// TASK 2 - A function which returns sum of all numbers from 1 to n using recursion.

function sumAll(n, sum = 0) {
  sum += n;
  if (n > 0) {
    return sumAll(n-1, sum);
  } else {
    return sum;
  }
}

console.log(sumAll(2));
console.log(sumAll(4));

// TASK 3 - Timer.



function bombTimer(str, time) {
  const countDown = setInterval(() => {
    console.log(time);
    time--;
    if (time === 0) {
      clearInterval(countDown);
      const delayString = setTimeout(() => {
        console.log(str);
        clearTimeout(delayString);
      }, 1000);
      return str;
    }
  }, 1000);
}

bombTimer('Boooom', 3);

// TASK 4 - A function which returns factorial of number using recursion.

function factorial(num) {
  if (num !== 0) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

console.log(factorial(3));
console.log(factorial(5));

// TASK 5 - Implement function from task №3 (bombTimer) using recursion and setTimeout.

function bombTimer(str, time, timeInterval) {
  if (time !== 0) {
    const timer = setTimeout(() => {
      console.log(time);
      clearTimeout(timer);
      bombTimer(str, time - 1, timeInterval);
    }, timeInterval);
  } else if (time === 0) {
    const stringDelay = setTimeout(() => {
      clearTimeout(stringDelay);
      console.log(str);
    }, timeInterval);
  }
  return str;
}

bombTimer("Boooom", 3, 1000);
// TASK 6 - Function returns new array with numbers not higher than maxNumber.

function filterNumbers(arr, maxNumber) {
  const newArr = arr.filter(number => number < maxNumber);
  return newArr;
}

console.log(filterNumbers([1, 4, 8, 1, 20], 5));

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
  return object;
}

console.log(minMax([1, 4, 8, 2, 20])); // { max: 20, min: 1 }

// TASK 8 - A function that returns average of numbers in array.

function average(arr) {
  let sum = 0;
  arr.forEach(number => sum += number);
  const arithmeticMean = sum / (arr.length);
  return arithmeticMean;
}

console.log(average([1,4,2]));

// TASK 9 - A function which concats all first-nested arrays in one array (reduce was used)

function concatFirstNestedArrays(arr) {
  return arr.reduce((acc, elem) => [...acc, ...elem]);
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
//   return resultArray;
// }

console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]

// TASK 10 - A function accepts array of users and returns object of users where key is user id and value user data.

const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-0-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];
// --normal
function usersToObject(users) {
  let objectOfUsers = {};
  for (let i = 0; i < users.length; i++) {
    objectOfUsers[i + 1] = users[i];
  }
  return objectOfUsers;
}

console.log(usersToObject(users));

// -- recursion
function usersToObject(users, i = 0, obj = {}) {
  obj[i + 1] = users[i];
  if (i < users.length - 1) {
    usersToObject(users, i + 1, obj);
  }
  return obj;
}

console.log(usersToObject(users));
// {
//  1: { id: 1, name: 'John', birthday: '1999-2-12' }
//  2: { id: 2, name: 'Bill', birthday: '1999-1-19' }
//  3: { id: 3, name: 'Carol', birthday: '1999-0-11' }
//  4: { id: 4, name: 'Luce', birthday: '1999-2-22' }
// };

// TASK 11 - A function returns array of users that have birthdays in a specific month.

const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' }, // In this line was a mistake ('1999-0-11'), replaced 0 with 4
  { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) {
  let neededUser = "";
  users.forEach(user => {
    let birthday = new Date(user.birthday);
    if (birthday.getMonth() === month) {
      neededUser = user;
    }
  });
  return neededUser;
}

console.log(filterUsersByMonth(users, 0)); // [{ name: 'Bill', birthday: '1999-1-19' }]

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
  return matureUsers.reduce((acc, elem) => (acc + ", " + elem));
}

console.log(getAdultNames(users)); // 'John 20, Luce 19'