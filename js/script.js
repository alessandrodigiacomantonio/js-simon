$(document).ready(function() {
  var randomNumbers = [];
  for (var i = 0; i < 5; i++) {
    do {
      random = Math.ceil(Math.random()*100);
    } while (jQuery.inArray(random,randomNumbers)!= -1);
    randomNumbers[i] = random;
  }
  console.log(randomNumbers);

});
