function isStudentAdmitted(score, activities) {
  let isAdmitted = 'Admitted';

  if (score < 80 || (80 <= score && score < 90 && activities < 2)) {
    isAdmitted = 'Not admitted';
  }

  console.log(isAdmitted);
} 

isStudentAdmitted(80, 2);
isStudentAdmitted(85, 3);
isStudentAdmitted(88, 1);
isStudentAdmitted(91, 0);
isStudentAdmitted(75, 12);
