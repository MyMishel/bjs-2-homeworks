"use strict"

function Student(name, gender, age) {
  //1
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Антон", "мужчина", 27);
let student2 = new Student("Артём", "мужчина", 30);
let student3 = new Student("Галина", "женщина", 28);

//2
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

//3
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

//4
Student.prototype.addMarks = function (...rest) {
  if (this.marks === undefined) {
    this.marks = [...rest];
  } else {
    this.marks.push(...rest);
  }
}

//5
Student.prototype.getAverage = function () {
  let sum = 0;
  let length = this.marks.length;

  for (let i = 0; i < length; i++) {
    sum += this.marks[i];
  }
  return sum / length;
}

//6
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}