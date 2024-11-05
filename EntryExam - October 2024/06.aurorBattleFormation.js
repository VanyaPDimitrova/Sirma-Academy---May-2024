function aurorBattleFormation(riders, commands) {
  const newFormation = riders.slice();
  
  for (const commandLine of commands) {
    let details = commandLine.split(' ');
    let command = details[0];

    switch (command) {
      case 'destroy':
        let indexDestroy = details[1];

        if (newFormation[indexDestroy]) {
          newFormation.splice(indexDestroy, 1);

          console.log(newFormation.join(' '));
        }
        break;

      case 'swap':
        let index1 = details[1];
        let index2 = details[2];

        if (newFormation[index1] && newFormation[index2] && newFormation[index1] != newFormation[index2]) {
          let helper = newFormation[index1];
          newFormation[index1] = newFormation[index2];
          newFormation[index2] = helper;

          console.log(newFormation.join(' '));
        }
        break;

      case 'add':
        let idAdd = details[1];
        newFormation.push(idAdd);

        console.log(newFormation.join(' '));
        break;

      case 'insert':
        let idInsert = details[1];
        let indexInsert = details[2];
        
        if (newFormation[indexInsert] || indexInsert == newFormation.length) {
          newFormation.splice(indexInsert, 0, idInsert);

          console.log(newFormation.join(' '));
        }
        break;

      case 'center':
        let length = newFormation.length;

        if (length % 2 != 0) {
          console.log(newFormation[((length-1) / 2)]);

        } else {
          console.log(newFormation[length / 2 - 1] + ' ' + newFormation[(length / 2)]);
        }
        break;
    }
  }

  console.log('----');
  
}

aurorBattleFormation([1, 2, 3, 4, 5],
  ["destroy 3",
  "swap 0 1",
  "add 6",
  "center"]);
aurorBattleFormation([1, 2, 3, 4, 5],
  ["add 6",
  "swap 0 5",
  "swap 1 4",
  "swap 2 3",
  "swap 2 100",
  "swap 2 2",
  "center"]);
aurorBattleFormation([1, 2],
  ["insert 3 2",
  "center",
  "destroy 1",
  "destroy 2",
  "center"]);
