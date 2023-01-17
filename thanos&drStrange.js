const thanos_drStrange = () => {
  let answer = 1;
  for (let i = 2; i <= 50; i++) {
    if (i % 3 === 0) {
      answer = Math.floor(answer / 2);
    } else {
      answer = Math.floor(answer * 3);
    }
  }
  return answer;
};

console.log(thanos_drStrange());
