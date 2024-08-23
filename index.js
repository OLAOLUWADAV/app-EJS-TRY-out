const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const students = [];

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display the form
app.get('/', (req, res) => {
  res.render('index');
});

// Route to handle form submission
app.post('/add-student', (req, res) => {
  const student = {
    name: req.body.name,
    age: req.body.age,
    course: req.body.course,
  };
  students.push(student);
  res.redirect('/students');
});

// Route to display the student details
app.get('/students', (req, res) => {
  res.render('students', { students: students });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
