function deepCount(a) {
  let count = a.length;
  for (let i = 0; i < a.length; i ++) {
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
}

console.log(deepCount([17, 14, 4]));

