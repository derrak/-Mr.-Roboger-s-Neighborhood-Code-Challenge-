

function beepBoop(userInputNumberString) {
  const userInt = parseInt(userInputNumberString,10);
  let numberRangeArray = [];

  for (let i=0; i <= userInt; i++) {
    numberRangeArray.push(i);
  }
  return numberRangeArray;
  console.log(numberRangeArray);
  };


const userInputNumberString = "5";
beepBoop(5);


