export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = task;
    const task2 = task2;
  }

  return [task, task2];
}
