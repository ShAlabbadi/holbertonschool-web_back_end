import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      try {
        const lines = data.split('\n');
        const students = [];
        
        for (let i = 1; i < lines.length; i += 1) {
          if (lines[i].trim() !== '') {
            students.push(lines[i]);
          }
        }
        
        const fields = {
          CS: [],
          SWE: [],
        };
        
        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (field === 'CS' || field === 'SWE') {
            fields[field].push(firstname);
          }
        });
        
        resolve(fields);
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

export default readDatabase;
