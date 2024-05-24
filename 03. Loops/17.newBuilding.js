function newBuilding(floors, rooms) {
  for (let i = floors; i >= 1; i--) {
    let floor = [];
    for (let j = 0; j < rooms; j++) {
      const isLastFloor = i == floors;
      const isEvenFloor = i % 2 == 0;
      const indicator = isLastFloor ? 'L' : isEvenFloor ? 'O' : 'A';
      
      floor.push(`${indicator}${i}${j}`);
    }
    console.log(floor.join(' '));
  }
};

newBuilding(6, 4);
newBuilding(3, 3);
newBuilding(1, 4);
