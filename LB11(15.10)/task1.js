function handleEven() {
  console.log("Число парне");
}

function handleOdd() {
  console.log("Число непарне");
}

function handleNum(num, evenCallback, oddCallback) {
  if (num % 2 === 0) {
    evenCallback();
  } else {
    oddCallback();
  }
}

handleNum(9, handleEven, handleOdd);