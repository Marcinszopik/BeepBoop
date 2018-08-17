//back-end logic
var rangeNumbers = [];

function rangeMaker(inputNumber) {
  for (var index = 0; index < inputNumber+1; index++) {
    rangeNumbers.push(index);
    console.log("rangeNumbers is = " + rangeNumbers);
  }
}

function beepBooper(number) {
    var inputString = number.toString();
    console.log("inputString = " + inputString);
    if ((number === 1) || (inputString.includes("1"))) {
    return ["Boop!"]
  } else if ((number === 0) || (inputString.includes("0"))) {
    return ["Beep!"]
  } else if (number % 3 === 0){
    return ["I’m sorry, Dave. I'm afraid I can't do that."]
  } else {
    return number;
  }
}

//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    $("#outputList").empty();
    var inputNumber = parseInt($("#userInput").val());
    console.log("inputNumber = " + inputNumber);
    var result = "";
    rangeMaker(inputNumber);
    rangeNumbers.forEach(function(number){
       result = " " + beepBooper(number);
       $("#outputList").append('<li>'+result+'</li>');
    })
    $("#output").show();
  });
});
