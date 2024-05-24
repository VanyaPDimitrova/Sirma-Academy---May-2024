function surviveInWilderness(dayTime, environment, item) {
  let courseOfAction = '';
  
  const haveKnife = item == 'knife';
  const haveContainer = item == 'container';
  const haveHat = item == 'hat';
  const haveFirestarter = item == 'firestarter';
  const haveBlanket = item == 'blanket';

  if (dayTime == 'day' && environment == 'forest') {
      courseOfAction = haveKnife 
                        ? 'Hunt for food' 
                        : haveContainer 
                            ? 'Collect berries'
                            : 'Explore';

  } else if (dayTime == 'day' && environment == 'desert') {
    courseOfAction = haveHat ? 'Search for water' : 'Find shade';

  } else if (dayTime == 'night' && environment == 'forest') {
    courseOfAction = haveFirestarter ? 'Make a campfire' : 'Climb on a tree';

  } else if (dayTime == 'night' && environment == 'desert') {
    courseOfAction = haveBlanket ? 'Sleep' : 'Keep moving to stay warm';
  }

  console.log(courseOfAction);
}

surviveInWilderness('day', 'forest', 'knife');
surviveInWilderness('day', 'forest', 'container');
surviveInWilderness('night', 'forest', 'firestarter');
surviveInWilderness('day', 'forest', 'bag');
surviveInWilderness('night', 'desert', 'blanket');
surviveInWilderness('day', 'desert', 'hat');
surviveInWilderness('night', 'desert', 'sword');
surviveInWilderness('night', 'forest', 'hat');
surviveInWilderness('day', 'desert', 'blanket');
