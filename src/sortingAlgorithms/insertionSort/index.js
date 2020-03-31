// ============= MAIN ================== //

const insertionSort = dataList => {
  console.log("\n========== insertionSort =========\n");
  console.log("input ========== ", dataList);
  const startTime = Date.now();

  for (i = 1; i < dataList.length; i++) {
    for (j = 0; j < i; j++) {
      if (dataList[i] < dataList[j]) {
        const [removedItem] = dataList.splice(i, 1);
        dataList.splice(j, 0, removedItem);
      }
    }
  }

  const duration = Date.now() - startTime;
  console.log("result =========== ", dataList);
  console.log("duration (in seconds) =========== ", duration);

  return dataList;
};

// =========== EXPORTS ============ //

module.exports = {
  insertionSort
};
