function calculateFigureFace(figure, measure1, measure2) {
  let a, b, r, ha, face;

  switch (figure) {
    case 'square':
      a = measure1;
      face = a * a;
      break;
    case 'rectangle':
      a = measure1;
      b = measure2;
      face = a * b;
      break;   
    case 'circle':
      r = measure1;
      face = Math.PI * r*r;
      break;
    case 'triangle':
      a = measure1;
      ha = measure2;
      face = (a*ha)/2;
      break;
  }

  console.log(face.toFixed(2));
}

calculateFigureFace('square', 5);
calculateFigureFace('rectangle', 10, 3.5);
calculateFigureFace('triangle', 4.5, 20);
calculateFigureFace('circle', 10);
