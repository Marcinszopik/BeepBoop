//back-end logic

//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    $("#outputList").empty();
    $("#outputList").append('<li>'+userInput+'</li>');
    $("#output").show();
  });
});
