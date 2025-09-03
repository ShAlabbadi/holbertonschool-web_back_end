const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      try {
        // Split the data into lines
        const lines = data.split('\n');
        
        // Filter out empty lines and the header
        const students = [];
        for (let i = 1; i < lines.length; i += 1) {
          if (lines[i].trim() !== '') {
            students.push(lines[i]);
          }
        }
        
        // Log total number of students
        console.log(`Number of students: ${students.length}`);
        
        // Group students by field
        const fields = {};
        students.forEach((student) => {
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
        
        resolve();
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
