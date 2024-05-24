function converter(eur) {
  const bgn = eur * 1.95583;

  return bgn.toFixed(2);
};

console.log(converter(1));
console.log(converter(15));
console.log(converter(123));
console.log(converter(0.5));
console.log(converter(0.51));
