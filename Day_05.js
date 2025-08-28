const express = require('express');
const app = express();
const PORT = 3000;


let students = [
  { id: 1, name: "Rahul", marks: 85 },
  { id: 2, name: "Anita", marks: 90 },
  { id: 3, name: "Vikram", marks: 78 }
];


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Student API! Use /students to see the list.');
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.json({
    message: "Student added successfully",
    students
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
