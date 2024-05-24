function potionBrewingDecision(ingredient1, ingredient2) {
  let potion = '';
  const haveHerbs = ingredient1 == 'herbs' || ingredient2 == 'herbs';
  const haveWater = ingredient1 == 'water' || ingredient2 == 'water';
  const haveOil = ingredient1 == 'oil' || ingredient2 == 'oil';
  const haveBerries = ingredient1 == 'berries' || ingredient2 == 'berries';
  const haveSugar = ingredient1 == 'sugar' || ingredient2 == 'sugar';

  if (haveHerbs) {
    potion = haveWater 
              ? 'Health potion' 
              : haveOil 
                  ? 'Stealth potion' 
                  : 'Minor stamina potion';

  } else if (haveBerries) {
    potion = haveSugar ? 'Speed potion' : 'Minor energy potion';

  } else {
    potion = 'No potion';
  }

  console.log(potion);
}

potionBrewingDecision('herbs', 'water');
potionBrewingDecision('herbs', 'oil');
potionBrewingDecision('herbs', 'banana');
potionBrewingDecision('berries', 'sugar');
potionBrewingDecision('berries', 'banana');
potionBrewingDecision('herbs', 'sugar');
potionBrewingDecision('sugar', 'salt');
