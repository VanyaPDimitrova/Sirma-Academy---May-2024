function padawanEquipment(money, students, lightsaberPrice, robePrice, beltPrice) {
  let result = '';
  
  let lightsaberCount = Math.ceil(students * 1.10);
  let beltCountToPayFor = students - Math.floor(students / 6);
  let robeCount = students;

  let calculatedPrice = lightsaberCount*lightsaberPrice 
                      + robeCount*robePrice 
                      + beltCountToPayFor*beltPrice;
  let neededMoney = calculatedPrice - money;


  if (neededMoney < 0) {
    result = `The money is enough - it would cost ${calculatedPrice.toFixed(2)}lv.`;
  } else {
    result = `George Lucas will need ${neededMoney.toFixed(2)}lv more.`
  }

  console.log(result);
}

padawanEquipment(100, 2, 1.0, 2.0, 3.0)
padawanEquipment(100, 42, 12.0, 4.0, 3.0);
