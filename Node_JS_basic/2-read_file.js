const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    // Process data to count students by field
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
