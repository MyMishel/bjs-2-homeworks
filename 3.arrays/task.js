//Задание 1
function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every((item, i) => item === arr2[i] && arr1.length === arr2.length);

  return result; // boolean
}

//Задание 2
function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((item) => item > 0)
    .filter((item) => item % 3 === 0)
    .map((item) => item * 10);

  return resultArr; // array
}
