// 🎯 Project: Student Grade Analyzer

const gradeBook = {
  studentList: [],
  addStudent(studentName, grade1, grade2, grade3) {
    totalGrade = (grade1 + grade2 + grade3) / 3;

    if (totalGrade < 75) {
      return "Failed!";
    } else if (totalGrade < 40 || totalGrade > 100) {
      return "Invalid Grade";
    }

    const listOfStudent = {
      studentName,
      grades: grade1,
      grade2,
      grade3,
      average: totalGrade,
      remark: "Passed",
    };

    this.studentList.push(listOfStudent);
    console.log("PASSED.. Student Added");
  },
  viewStudents() {
    console.table(gradeBook.studentList);
  },
  clearRecords() {
    this.studentList.splice(0, this.studentList.length);
  },
  removeStudent(name) {
    const mustRemove = this.studentList.findIndex(function (student) {
      return student.studentName === name;
    });

    if (mustRemove === -1) {
      console.log("NOT FOUND!");
      return;
    }

    this.studentList.splice(mustRemove, 1);
    console.log(`${name} has been removed`);
  },
};
