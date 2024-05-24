function adventureGamePathDecision(leftHand, rightHand) {
  let pathChosen = '';
  const haveSword = leftHand == 'sword' || rightHand == 'sword';
  const haveShield = leftHand == 'shield' || rightHand == 'shield';
  const haveMap = leftHand == 'map' || rightHand == 'map';
  const haveCoins = leftHand == 'coins' || rightHand == 'coins';

  if (haveSword) {
    pathChosen = haveShield ? 'Path to the castle' : 'Path to the forest';

  } else if (haveMap) {
    pathChosen = haveCoins ? 'Go to the town' : 'Camp';

  } else {
    pathChosen = 'Wander aimlessly';
  }

  console.log(pathChosen);
}

adventureGamePathDecision('sword', 'shield');
adventureGamePathDecision('map', 'coins');
adventureGamePathDecision('torch', 'flowers');
adventureGamePathDecision('sword', 'pouch');
adventureGamePathDecision('map', 'compass');
adventureGamePathDecision('map', 'sword');
