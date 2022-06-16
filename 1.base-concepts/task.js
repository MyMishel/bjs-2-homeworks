"use strict";
function solveEquation(a, b, c) {
  let arr = {};
  let x1, x2;

  if (a === 0) {
    return false;
  }

  let D = b ** 2 - 4 * a * c;
  console.log("D = " + D);

  if (D < 0) {
    return "Корней нет";
  } else if (D === 0) {
    x1 = -b / (2 * a);
    return x1;
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return "X1 = " + x1 + "; X2 = " + x2;
  }
  return arr;
}

