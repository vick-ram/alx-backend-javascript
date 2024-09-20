const {readFile} = require('node:fs/promises');

const parseCSV = async (path) => {
  try {
    const fileContent = await readFile(path, 'utf-8');
    const rows = fileContent.trim().split('\n').filter(row => row.trim() !== '');
    const headers = rows[0].trim().split(',').map(header => header.trim());

    const data = rows.slice(1).map(row => {
      const values = row.split(',').map(value => value.trim());

      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });

      return obj;
    });

    return data;
  } catch (error) {
    console.log('Error reading or parsing CSV file:', error);
    throw error;
  }
};

module.exports = parseCSV;

