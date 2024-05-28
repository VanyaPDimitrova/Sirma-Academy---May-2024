function reverseAnArrayOfStrings(arr = []) {
  let reversedArr = arr.slice();
  
  for (let i = 0; i < arr.length/2; i++) {
    swapTwoElements(reversedArr, i);
  }

  console.log(reversedArr);
  function swapTwoElements(reversedArr, i) {
    const len = reversedArr.length-1;

    let element = reversedArr[i];
    reversedArr[i] = reversedArr[len - i];
    reversedArr[len - i] = element;
  }
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm','nop']);
reverseAnArrayOfStrings(['33', '123', '0', 'dd']);
