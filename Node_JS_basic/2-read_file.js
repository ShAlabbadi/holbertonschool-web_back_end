const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove header and get student data
    const students = lines.slice(1);

    // Log total number of students
    console.log(`Number of students: ${students.length}`);

    // Group students by field
    const fields = {};
    students.forEach(student => {
      const [firstname, lastname, age, field] = student.split(',');

      // Initialize field array if it doesn't exist
      if (!fields[field]) {
        fields[field] = [];
      }

      // Add student to the field
      fields[field].push(firstname);
    });

    // Log number of students and list for each field
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
