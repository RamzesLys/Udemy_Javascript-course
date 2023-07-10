function calculateVolumeAndArea(length) {
  if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
    return 'Неможливо провести обрахунок';
  }
  let volume = 0;
  let area = 0;

  volume = length * length * length;
  area = 6 * (length * length);
  
  return `Об'єм куба: ${volume}, площа всієї поверхні: ${area}`;
}

console.log(calculateVolumeAndArea(3));


function getCoupeNumber(place) {
  if(typeof(place) !== 'number' || place < 0 || !Number.isInteger(place)) {
    return 'Помилка, перевірте правильність введених даних'
  }
  if (place === 0 || place > 36) {
    return 'Таких місць у вагоні не існує';
  }
  return 'Ваше купе під номером ' + Math.ceil(place / 4);
}

console.log(getCoupeNumber(36));