export default function appendToEachArrayValue(array, appendString) {
  const newAray = [];
  for (const value of array) {
    newAray.push(appendString + value);
  }

  return newAray;
}
