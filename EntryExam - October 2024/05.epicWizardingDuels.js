function epicWizardingDuels(wizardingDuel) {
  let result = '';
  let strikes = [];

  for (let i = 0; i < wizardingDuel.length; i++) {
    let strike = wizardingDuel[i];
    let length = strikes.length;
    let lastStrike = strikes[length - 1];

    switch (strike) {
      case '<':
      case '/':
        strikes.push(strike);
        break;

      case '!':
        if (lastStrike == '!') {
          strikes.pop();
  
        } else if (lastStrike == '\\' || lastStrike == '>') {
          result = 'Not Epic';
          break;
  
        } else if (lastStrike == '/' || lastStrike == '<' || length == 0) {
          strikes.push(strike);
        }
        break;

      case '\\':
        if (lastStrike == '/') {
          strikes.pop();
        } else {
          strikes.push(strike);
          result = 'Not Epic';
          break;
        }
        break;
        
      case '>':
        if (lastStrike == '<') {
          strikes.pop();
        } else {
          strikes.push(strike);
          result = 'Not Epic';
          break;
        }
        break;
    }
  }

  if (strikes.length == 0) {
    result = 'Epic';
  } else {
    result = 'Not Epic';
  }

  console.log(result);
}


epicWizardingDuels("/\\/\\//\\/\\\\");
epicWizardingDuels("//!!\\//<!!>\\\\\\");
epicWizardingDuels("///\\\\");
epicWizardingDuels("<!>!");
epicWizardingDuels("/</!!>\\\\");
