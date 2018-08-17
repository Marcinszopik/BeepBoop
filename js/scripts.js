//back-end logic
function beepBooper(userInput) {
  if (userInput === 0) {
    return ["Beep!"]
  } else if (userInput === 1) {
    return ["Boop!"]
  } else if (userInput % 3 === 0){
    return ["I’m sorry, Dave. I'm afraid I can't do that."]
  }
}

//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = "";
    result += beepBooper(userInput);
    $("#outputList").empty();
    $("#outputList").append('<li>'+result+'</li>');
    $("#output").show();
  });
});
