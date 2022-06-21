"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let x1, x2;

  if (a === 0) {
    return false;
  }

  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return arr;
  } else if (D === 0) {
    x1 = -b / (2 * a);
    arr[0] = x1;
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr[0] = x1;
    arr[1] = x2;
  }

  return arr;
}

