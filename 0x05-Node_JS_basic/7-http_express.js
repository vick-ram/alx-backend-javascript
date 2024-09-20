const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  countStudents(databasePath)
  .then((data) => {
    const response = [
      `This is the list of our students`,
      `Number of students: ${data.totalStudents}`,
      `Number of students in CS: ${data.cs.count}. List: ${data.cs.names}`,
      `Number of students in SWE: ${data.swe.count}. List: ${data.swe.names}`,
    ].join('\n');
    res.send(response);
  })
  .catch((err) => {
    res.send(err)
  });
  
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
