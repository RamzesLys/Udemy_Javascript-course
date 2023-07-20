
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  arr.sort();
  const firstGroup = [], 
        secondGroup = [],
        thirdGroup = [],
        remainder = [];

  for (let i = 0; i < arr.length; i ++) {
    if (i < 3) {
      firstGroup.push(arr[i])
    } else if (i < 6) {
      secondGroup.push(arr[i])
    } else if (i < 9) {
      thirdGroup.push(arr[i])
    } else {
      remainder.push(arr[i])
    }
  }
  return [firstGroup, secondGroup, thirdGroup, `Оставшиеся студенты: ${remainder.length === 0 ? '-' : remainder.join(', ')}`]
}

// sortStudentsByGroups(students)
console.log(sortStudentsByGroups(students));