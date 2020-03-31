const dataset = [4, 1, 5, 8, 2, 3];

// ============= MAIN ================== //

const bubbleSort = dataList => {
  console.log("\n ========== bubbleSort ========= \n");
  console.log("input ========== ", dataList);
  const startTime = Date.now();

  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i <= dataList.length; i++) {
      let temp;
      if (dataList[i] > dataList[i + 1]) {
        temp = dataList[i];
        dataList[i] = dataList[i + 1];
        dataList[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  const duration = Date.now() - startTime;
  console.log("result =========== ", dataList);
  console.log("duration (in seconds) =========== ", duration);
  return dataList;
};

// =========== EXPORTS ============ //

module.exports = {
  bubbleSort
};
