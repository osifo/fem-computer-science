const stitch = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
};

const mergeSort = dataList => {
  console.log("\n========== insertionSort =========\n");
  console.log("input ========== ", dataList);
  const startTime = Date.now();

  const dataLength = dataList.length;
  if (dataLength < 2) return dataList;

  const middle = Math.floor(dataLength / 2);
  const left = dataList.slice(0, middle);
  const right = dataList.slice(middle);

  const result = stitch(mergeSort(left), mergeSort(right));

  const duration = Date.now() - startTime;
  console.log("result =========== ", result);
  console.log("duration (in seconds) =========== ", duration);
  return result;
};

module.exports = {
  mergeSort
};
