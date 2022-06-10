

function beepBoop(userInputNumberString) {
  const userInt = parseInt(userInputNumberString,10);
  let numberRangeArray = [];
  let boopedArray = [];

  for (let i=0; i <= userInt; i++) {
    numberRangeArray.push(i.toString());
  };
  
  numberRangeArray.forEach(function(element) {
    if (element.includes("3")) {
      boopedArray.push("Won't you be my neighbor?");
    }
    else {
      boopedArray.push(element);
    };
  });
  console.log(numberRangeArray);
  console.log(boopedArray);
  };


const userInputNumberString = "5";
beepBoop(userInputNumberString);


  
