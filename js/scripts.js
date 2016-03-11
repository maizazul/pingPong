var countDown = function(n) {
  var text = " ";
  for (i = 1 ; i <= n ; i++)
  {
    if (i % 15 === 0) {
      text += "pingpong!<br>";
     }  else if (i % 5 === 0) {
      text += "pong <br>";
     }  else if (i % 3 === 0) {
      text += "ping <br>";
     }  else {
      text += i + "<br>";
     }
  }

  return text;
}



$(document).ready(function() {
  $("form#count").submit(function(event) {
    var n = $("input#number").val();
    var result = countDown(n);

  $(".npp").html(result);


  $("#result").fadeIn(3000);
    event.preventDefault();
  });
});
