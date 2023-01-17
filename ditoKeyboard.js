const keyboardLag = (n) => {
  let split = [];
  for (let i = 1; i <= n; i++) {
    let number = i;
    if (number >= 10) {
      [...(number + "")].map((Number) => split.push(parseInt(Number)));
      split.splice(n,2)
    } else {
      split.push(number);
    }
  }
  let stringNumber = String(split)
  return stringNumber.replaceAll(',','');
};
console.log(keyboardLag(1111));
