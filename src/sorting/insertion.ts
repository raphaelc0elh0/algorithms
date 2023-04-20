export default function insertionSort(array: any[]) {
  let result = [...array]

  for (let i = 1; i < result.length; i++) {
    const selected = result[i];

    let inserted = false;
    for (let j = i - 1; j >= 0; j--) {
      const compare = result[j];

      if (selected > compare) {
        inserted = true;
        result.splice(i, 1);
        result = [...result.slice(0, j + 1), selected, ...result.slice(j + 1)];
        break;
      }
    }

    if (!inserted) {
      result.splice(i, 1);
      result.unshift(selected);
    }
  }

  return result;
}
