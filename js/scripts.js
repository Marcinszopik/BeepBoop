//back-end logic
function beepBooper(userInput) {
  if (userInput === 0) {
    return ["Beep!"]
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
