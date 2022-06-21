// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}
console.log(getArrayParams([-99, 99, 10]));//{ min: -99, max: 99, avg: 3.33 }



// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let sumOfElements = func(arrOfArr[i]);

    if (sumOfElements > max) {
      max = sumOfElements;
    }
  }

  return max;
}

console.log(makeWork([[1, 2, 3, 4], [10, 20, -10, -20]], worker))//10



// Задание 3
function worker2(arr) {

  let minMeaning = Infinity;
  let maxMeaning = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxMeaning) {
      maxMeaning = arr[i];
    }
    if (arr[i] < minMeaning) {
      minMeaning = arr[i];
    }
  }

  resalt = parseFloat((maxMeaning - minMeaning).toFixed(2));

  return resalt;
}

console.log(worker2([-10, -20, -40])); // 30
