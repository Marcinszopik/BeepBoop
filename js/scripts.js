//back-end logic
function beepBooper(inputNumber,inputString) {
    if ((inputNumber === 1) || (inputString.includes("1"))) {
    return ["Boop!"]
  } else if ((inputNumber === 0) || (inputString.includes("0"))) {
    return ["Beep!"]
  } else if (inputNumber % 3 === 0){
    return ["I’m sorry, Dave. I'm afraid I can't do that."]
  }
}

//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("#userInput").val());
    var inputString = inputNumber.toString();
    console.log("inputNumber = "+inputNumber);
    console.log("inputString = "+inputString);
    var result = "";
    result += beepBooper(inputNumber,inputString);
    $("#outputList").empty();
    $("#outputList").append('<li>'+result+'</li>');
    $("#output").show();
  });
});
