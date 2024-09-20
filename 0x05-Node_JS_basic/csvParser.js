const {readFile} = require('node:fs/promises');
const parseCSV = async(path) => {
    try {
      const fileContent = await readFile(path, 'utf-8');
      const rows = fileContent.trim().split('\n');
      const headers = rows[0].trim().split(',');
      const data = rows.slice(1).map(row => {
        const values = row.split(',');
  
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = values[index].trim();
        });
  
        return obj;
      });
      return data;
    } catch (error) {
      console.log('Error reading or parsing CSV file:', error);
    }
  }

  module.exports = parseCSV;
