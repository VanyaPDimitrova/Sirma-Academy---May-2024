function progressBar(n) {
  const percentages = n / 10;
  const dots = 10 - percentages;

  const loading = `${n}% [${'%'.repeat(percentages)}${'.'.repeat(dots)}]\nLoading...`;
  const complete = `[${'%'.repeat(percentages)}]\nComplete!`;

  return n == 100 ? complete : loading;
}

console.log(progressBar(0));
console.log(progressBar(30));
console.log(progressBar(50));
console.log(progressBar(70));
console.log(progressBar(100));