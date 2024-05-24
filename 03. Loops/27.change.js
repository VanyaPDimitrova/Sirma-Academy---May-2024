function change(amount = 0) {
  let [leva, stotinki] = amount.toString().split('.').map(n => Number(n));
  let coinsStCount = 0;
  let coinsNumber = 0;
  let count1Lv = 0;
  let count2Lv = 0;

  if (leva % 2 == 0) {
    count2Lv = leva / 2;
  } else {
    count1Lv = 1;
    count2Lv = (leva - 1) / 2;
  }

  if (stotinki) {
    const count50st = Math.floor(stotinki / 50);
    stotinki = count50st > 0 ? stotinki - 50 * count50st : stotinki;
    const count20st = Math.floor(stotinki / 20);
    stotinki = count20st > 0 ? stotinki - 20 * count20st : stotinki;
    const count10st = Math.floor(stotinki / 10);
    stotinki = count10st > 0 ? stotinki - 10 * count10st : stotinki;
    const count5st = Math.floor(stotinki / 5);
    stotinki = count5st > 0 ? stotinki - 5 * count5st : stotinki;
    const count2st =  Math.floor(stotinki / 2);
    stotinki = count2st > 0 ? stotinki - 2 * count2st : stotinki;
    const count1st = Math.floor(stotinki / 1);

    coinsStCount = count1st + count2st + count5st + count10st + count20st + count50st;
  }

  coinsNumber = count1Lv + count2Lv + coinsStCount;
  console.log(coinsNumber);
}

change(1.23);
change(2.00);
change(0.56);
change(2.73);

change(3);
change(9.88);
change(4.84);
change(0);

// 1lv 2lv 1st 2st 5st 10st 20st 50st - count 8
/*
  const coinsLv = [
    `1lv - ${count1Lv}`, 
    `2lv - ${count2Lv}`
  ]

  const coinsSt = [
    `50st - ${count50st}`, 
    `20st - ${count20st}`, 
    `10st - ${count10st}`, 
    `5st - ${count5st}`, 
    `2st - ${count2st}`, 
    `1st - ${count1st}`
  ];
*/
