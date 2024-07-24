export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Response from API');
      } else {
        reject(new Error('Error from API'));
      }
    }, 1000);
  });
}
