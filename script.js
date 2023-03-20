function findSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum == 0) {
        return arr.slice(i, j + 1);
      }
    }
  }
  return "No element found";
}