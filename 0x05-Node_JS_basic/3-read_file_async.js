const parseCSV = require('./csvParser');

const filteredByField = (data, field) => {
  return data.filter(student => student.field === field);
};

const studentNames = (data) => {
  return data.map(student => student.firstname).join(', ');
};

async function countStudents(path) {
  try {
    const data = await parseCSV(path);
    const studentsCS = filteredByField(data, 'CS');
    const studentSWE = filteredByField(data, 'SWE');

    console.log(`Number of students: ${data.length}`);
    console.log(`Number of students in CS: ${studentsCS.length}. List: ${studentNames(studentsCS)}`);
    console.log(`Number of students in SWE: ${studentSWE.length}. List: ${studentNames(studentSWE)}`);

    return {
      totalStudents: data.length,
      cs: {
        count: studentsCS.length,
        names: studentNames(studentsCS),
      },
      swe: {
        count: studentSWE.length,
        names: studentNames(studentSWE),
      },
    }

  } catch (error) {
    console.error('Cannot load the database');
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
