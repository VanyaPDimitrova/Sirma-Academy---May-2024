function gradeCalculator(score) {
  let grade = '';

  if (0 <= score && score < 60) {
    grade = 'F';
  } else if (60 <= score && score < 70) {
    grade = 'D';
  } else if (70 <= score && score < 80) {
    grade = 'C';
  } else if (80 <= score && score < 90) {
    grade = 'B';
  } else if (90 <= score && score < 100) {
    grade = 'A';
  }

  console.log(grade);
}

gradeCalculator(100);
gradeCalculator(95);
gradeCalculator(82);
gradeCalculator(76);
gradeCalculator(65);
gradeCalculator(45);
gradeCalculator(0);
