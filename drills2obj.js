'use strict';

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

function makeStudentsReport(data) {
  // your code here
  let student = [];
  for( let i = 0; i < data.length; i++ ) {
    student.push(`${data[i].name}: ${data[i].grade}`);
  }
  return student;
}   

console.log(makeStudentsReport(testData));

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];
  
function enrollInSummerSchool(students) {
  // your code here
  return students.map( user => {
    return {
      name: user.name,
      status: 'In Summer School',
      course: user.course
    }});
}
console.log(enrollInSummerSchool(studentData));
  
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];
  
function findById(items, idNum) {
  return items.find(item => item.id === idNum);
  
  // could also be implemented without using `.find`
  // using plain old looping like this:
  //
  // for (let i=0; i<items.length; i++) {
  // if (items[i].id === idNum) {
  //    return items[i];
  //  }
  // }
}

console.log(findById(scratchData, 28));

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};
  
// running the function with `objectB` and `expectedKeys`
// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};
  
const expectedKeys = ['id', 'name', 'age', 'city'];
  
function validateKeys(object, expectedKeys) {
  // your code goes here
  if(Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  for( let i = 0; i < expectedKeys.length; i++ ) {
    if(!Object.keys(object).find(key => key === expectedKeys[i]) ) {
      return false;
    }
  }
  return true;
  
}
  
console.log(validateKeys(objectA, expectedKeys));
console.log(validateKeys(objectB, expectedKeys));