import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv[2];
      const fields = await readDatabase(databasePath);
      
      let output = 'This is the list of our students\n';
      output += `Number of students: ${fields.CS.length + fields.SWE.length}\n`;
      
      // Output CS students first, then SWE
      output += `Number of students in CS: ${fields.CS.length}. List: ${fields.CS.join(', ')}\n`;
      output += `Number of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(', ')}`;
      
      response.status(200).send(output);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    try {
      const databasePath = process.argv[2];
      const fields = await readDatabase(databasePath);
      
      response.status(200).send(`List: ${fields[major].join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
