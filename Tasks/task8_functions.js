function getTimeFromMinutes(minutesEntered) {
  if(typeof(minutesEntered) !== 'number' || minutesEntered < 0 || !Number.isInteger(minutesEntered)) {
    return 'Помилка, перевірте дані'
  }

  const hours = Math.floor(minutesEntered / 60);
  const minutes = minutesEntered % 60;

  let hoursString = '';

  switch(hours) {
    case 0:
      hoursString = 'годин';
      break;
    case 1:
      hoursString = 'година';
      break;
    case 2:
    case 3:
    case 4:
      hoursString = 'години';
      break;
    default:
      hoursString = 'годин'
  }

  return `Це ${hours} ${hoursString} та ${minutes} хвилин`
}

console.log(getTimeFromMinutes(650));


function findMaxNumber(a, b, c, d) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
    return 0
  } else {
    return Math.max(a, b, c, d);
  }
}

console.log(findMaxNumber(7, 15, 3, 4));