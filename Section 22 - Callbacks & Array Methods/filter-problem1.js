const students = [
  { name: "Fritz", average: 92 },
  { name: "Kyobs", average: 68 },
  { name: "Joost", average: 75 },
  { name: "Leonard", average: 59 },
  { name: "Ryandale", average: 81 },
];

const passedStudents = students.filter((student) => {
  return student.average >= 75;
});

console.table(passedStudents);

const passedRemarks = passedStudents.map((student) => {
  return `${student.name} - PASSED`;
});

console.log(passedRemarks);
