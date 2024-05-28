function equalArrays(arr1, arr2) {
  const longestArr = arr1.length >= arr2.length ? arr1 : arr2;
  let sumArr1 = 0;

  for (let i = 0; i < longestArr.length; i++) {
    if (arr1[i] == arr2[i]){
      sumArr1 += Number(arr1[i]);
    } else {
      return `Arrays are not identical. Found difference at ${i} index`
    }
  }

  return `Arrays are identical. Sum: ${sumArr1}`;
}

console.log(equalArrays(['10','20','30'], ['10','20','30']));
console.log(equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']));
console.log(equalArrays(['1','2','3','4','5'], ['1','2','3','4','5']));
console.log(equalArrays(['1'], ['10']));
console.log(equalArrays(['10','20','30'], ['10','20','30','13']));
console.log(equalArrays(['1','2','3','4','5','7'], ['1','2','4','4','5']));

