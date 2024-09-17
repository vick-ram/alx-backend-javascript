const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter((line) => line);
            if (lines.length <= 1) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const students = lines.slice(1);
            const csStudents = [];
            const sweStudents = [];

            students.forEach((student) => {
                const [firstname, , , field] = student.split(',');
                if (field === 'CS') {
                    csStudents.push(firstname);
                } else if (field === 'SWE') {
                    sweStudents.push(firstname);
                }
            });

            const totalStudents = students.length;
            const csCount = csStudents.length;
            const sweCount = sweStudents.length;

            let result = `Number of students: ${totalStudents}\n`;
            result += `Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}\n`;
            result += `Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`;

            resolve(result);
        });
    });
}

module.exports = countStudents;
