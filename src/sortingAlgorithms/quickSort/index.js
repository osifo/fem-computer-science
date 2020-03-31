const quickSort = dataList => {
  const listLength = dataList.length;
  if (listLength < 2) return dataList;

  const pivot = dataList[listLength - 1];
  const left = [];
  const right = [];

  for (i = 0; i < listLength - 1; i++) {
    if (dataList[i] <= pivot) {
      left.push(dataList[i]);
    } else {
      right.push(dataList[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

module.exports = {
  quickSort
};
