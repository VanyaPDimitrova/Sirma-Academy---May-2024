function condenseArrayToNumber(arr) {
  let arrToCondense = arr.slice();
  
  while (arrToCondense.length > 1) {
    let condensedArr = [];
    for (let i = 0; i < arrToCondense.length - 1; i++) {
      condensedArr.push(arrToCondense[i] + arrToCondense[i+1]);
    }
    
    arrToCondense = condensedArr;
  }

  return arrToCondense[0];
}

console.log(condenseArrayToNumber([2,10,3]));
console.log(condenseArrayToNumber([5,0,4,1,2]));
console.log(condenseArrayToNumber([1]));
