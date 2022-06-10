$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const userInputNumberString = $("input#number1").val();
    let outputArray = beepBoop(userInputNumberString);
    let outputText = beepBoop(userInputNumberString).join(" ");
    $("#output").text(outputText);
    $("#story").show();
    $("#form").get(0).reset()
  });
});

//const userInputNumberString = "24";
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
    else if (element.includes("2")) {
      boopedArray.push("Boop!");
    }
    else if (element.includes("1")) {
      boopedArray.push("Beep!");
    }
    else {
      boopedArray.push(element);
    };
  });
  return boopedArray;
};
 //console.log(outputText);






  
