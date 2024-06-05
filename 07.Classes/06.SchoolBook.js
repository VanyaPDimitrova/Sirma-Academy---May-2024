let input1 = [
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
];

let input2 = [
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15"
];

class GraduatedStudent {
  constructor(studentInfo) {
    let [studentName, grade, graduatedAverageScore] = studentInfo.split(', ')
                                                                 .map(el => el.split(': ')[1]); 
    this.name = studentName;
    this.grade = Number(grade);
    this.score = Number(graduatedAverageScore);
  }
}

class GradeNextYear {
  constructor(student) {
    if (Math.floor(student.score) >= 3) {
      this.grade = student.grade + 1;
      this.students = [student.name];
      this.scores = [student.score];
    } 
  }

  addStudent(student) {
    if (Math.floor(student.score) >= 3) {
      this.students.push(student.name);
      this.scores.push(student.score);
    }
  }

  get averageScore() {
    let length = this.scores.length;
    let average = this.scores.reduce((acc, score) => acc + score, 0);

    return (average/length).toFixed(2);
  }
}

class SchoolRegister {
  schoolRegister = [];
  graduatedStudents = [];

  constructor(input) {
    this.#populateGraduatedStudents(input);
    this.#populateSchoolRegister();
    this.#sortSchoolRegister();
  }
    
  #populateGraduatedStudents(input) {
    for (const row of input) {
      let student = new GraduatedStudent(row);
      this.graduatedStudents.push(student);
    }
  }

  #populateSchoolRegister() {
    for (const student of this.graduatedStudents) {
      let index = this.schoolRegister.findIndex(el => el.grade == student.grade + 1);
      
      if (index >= 0) {
        this.schoolRegister[index].addStudent(student);
      } else {
        if (Math.floor(student.score) >= 3) {
          this.schoolRegister.push(new GradeNextYear(student));
        }
      }
    }
  }

  #sortSchoolRegister() {
    this.schoolRegister.sort((a, b) => a.grade - b.grade);
  }
  
  print(){
    for (const gradeNextYear of this.schoolRegister) {
      let grade = `${gradeNextYear.grade} Grade`;
      let studentsList = `List of students: ${gradeNextYear.students.join(', ')}`;
      let lastYearAverageScore = `Average annual score from last year: ${gradeNextYear.averageScore}`;

      console.log(`${grade}\n${studentsList}\n${lastYearAverageScore}\n===`);
    }
  }
} 

let schoolRegister1 = new SchoolRegister(input1);
schoolRegister1.print();
let schoolRegister2 = new SchoolRegister(input2);
schoolRegister2.print();
