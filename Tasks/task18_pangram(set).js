
function isPangram(string) {
  return new Set(string.toLocaleLowerCase()
    .replace(/[^a-z]/gi, '')
    .split(''))
    .size === 26;
}



console.log(isPangram('The quick brown fox jumps over the lazy dog'));

