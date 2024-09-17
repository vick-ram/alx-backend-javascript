const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        
        const lines = data.trim().split('\n');
        
        const header = lines.shift();
        
        if (!header) {
            throw new Error('Cannot load the database');
        }
        
        const fields = {};

        lines.forEach((line) => {
            const student = line.split(',');
            if (student.length === 4) {
                const firstName = student[0];
                const field = student[3];

                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstName);
            }
        });

        const totalStudents = lines.length;
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, students] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
