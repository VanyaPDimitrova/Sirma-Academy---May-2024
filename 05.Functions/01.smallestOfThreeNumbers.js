function printSmallestOfThreeNumbers(n, m, k) {
  const smallest = returnSmallerOfTwoNumbers(returnSmallerOfTwoNumbers(n, m), k);

  console.log(smallest);
}

function returnSmallerOfTwoNumbers(m, n) {
  return m < n ? m : n;
}

printSmallestOfThreeNumbers(2, 5, 3);
printSmallestOfThreeNumbers(600, 342, 123);
printSmallestOfThreeNumbers(25, 21, 4);
