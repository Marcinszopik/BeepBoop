//back-end logic
var rangeNumbers = [];

function rangeMaker(inputNumber) {
  for (var index = 0; index < inputNumber+1; index++) {
    rangeNumbers.push(index);
  }
}

function beepBooper(number) {
  var inputString = number.toString();
  if ((number > 1) && (number % 3 === 0)){
  return ["I’m sorry, Dave. I'm afraid I can't do that."]
  } else if ((number === 1) || (inputString.includes("1"))) {
  return ["Boop!"]
  } else if ((number === 0) || (inputString.includes("0"))) {
  return ["Beep!"]
  } else {
  return number;
  }
}

//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    $(".output").remove();
    var inputNumber = parseInt($("#userInput").val());
    rangeMaker(inputNumber);
    rangeNumbers.forEach(function(number){
      $("#output").append('<li class="output">'+beepBooper(number)+'</li>');
    })
    $("#output").show();
    rangeNumbers = [];
  });
});
