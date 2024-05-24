function printSpeedInformation(speed) {
  let speedInfo = '';

  if (speed <= 10) {
    speedInfo = 'slow';
  } else if (10 < speed && speed <= 60) {
    speedInfo = 'average';
  } else if (60 < speed && speed <= 120) {
    speedInfo = 'fast';
  } else if (120 < speed && speed <= 160) {
    speedInfo = 'super-fast';
  } else if (160 < speed) {
    speedInfo = 'turbo-fast';
  }

  console.log(speedInfo);
}

printSpeedInformation(10);
printSpeedInformation(59);
printSpeedInformation(120);
printSpeedInformation(121);
printSpeedInformation(183);
printSpeedInformation(59.99);
printSpeedInformation(60.001);
