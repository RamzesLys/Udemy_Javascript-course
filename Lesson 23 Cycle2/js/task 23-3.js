//First task
for (let i = 5; i <= 10; i ++) {
  console.log(i);
}

//Second task
for (let i = 20; i >= 10; i--) {
  if (i <= 12) {
    break;
  }
  console.log(i);
}

//Third task
// for (let i = 1; i <= 10; i++) {
//   if(i % 2 === 0) {
//     console.log(i);
//   }
// }
let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

//Fifth task
const arrayOfNumbers = [];

for (let i = 5; i <=10; i++) {
  arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);

