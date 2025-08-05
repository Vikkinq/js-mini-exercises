const gradeBook = {
  Sy: {
    math: 98,
    english: 92,
    science: 89,
  },
  George: {
    math: 92,
    english: 95,
    science: 88,
  },
};

const chosenInput = prompt(
  "Add Student | View Student | View Average Grade Per student"
);

if (chosenInput.toLowerCase() === "add" || chosenInput === "1") {
  const studentName = prompt("Enter Name of Student: ");
  const mathGrade = prompt("Enter Math Grade: ");
  const englishGrade = prompt("Enter English Grade: ");
  const scienceGrade = prompt("Enter Science Grade: ");

  gradeBook[studentName] = {
    math: mathGrade,
    english: englishGrade,
    science: scienceGrade,
  };
  console.log("Student Graded Successfully!");
  console.log(gradeBook);
} else if (chosenInput.toLowerCase() === "view" || chosenInput === "2") {
  console.log("Listed Graded Students: ");
  console.log(gradeBook);
} else if (chosenInput.toLowerCase() === "remove" || chosenInput === "3") {
  const removeWhat = prompt("Remove Student | Remove Grade");

  if (removeWhat.toLowerCase() === "student") {
    const removeName = prompt("Select a Student to Remove: ");
    delete gradeBook[removeName];
    console.log(gradeBook);
  }
} else if (chosenInput.toLowerCase() === "update" || chosenInput === "4") {
  console.log(gradeBook);
  const studentName = prompt("Select a Student to Update Grade: ");

  const studentSubject = prompt("Select a Subject to Update: ");
  const updatedGrade = prompt("Input the Updated Grade: ");
  gradeBook[studentName][studentSubject] = updatedGrade;
} else {
  console.warn("Not Found Please try Again");
}
