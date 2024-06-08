function legendaryDuels(swordFight) {
  let result = '';
  let strikes = [];

  for (let i = 0; i < swordFight.length; i++) {
    let strCstr = swordFight[i];
    let length = strikes.length;
    let lastStrike = strikes[length - 1];

    switch (strCstr) {
      case '{':
      case '(':
        strikes.push(strCstr);
        break;

      case '!':
        if (lastStrike == '!') {
          strikes.pop();
  
        } else if (lastStrike == ')' || lastStrike == '}') {
          result = 'Not Legendary';
          break;
  
        } else if (lastStrike == '(' || lastStrike == '{' || length == 0) {
          strikes.push(strCstr);
        }
        break;

      case ')':
        if (lastStrike == '(') {
          strikes.pop();
        } else {
          strikes.push(strCstr);
          result = 'Not Legendary';
          break;
        }
        break;
        
      case '}':
        if (lastStrike == '{') {
          strikes.pop();
        } else {
          strikes.push(strCstr);
          result = 'Not Legendary';
          break;
        }
        break;
    }
  }

  if (strikes.length == 0) {
    result = 'Legendary';
  } else {
    result = 'Not Legendary';
  }

  console.log(result);
}

legendaryDuels("()()(()())");
legendaryDuels("((!!)(({!!})))!");
legendaryDuels("((!!)(({!!})))");
legendaryDuels("((())");
legendaryDuels("{!}!");
legendaryDuels("({(!!}))");
legendaryDuels("}");
legendaryDuels("{");
legendaryDuels("(");
legendaryDuels(")");
legendaryDuels("!");
legendaryDuels("!!");
