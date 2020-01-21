$(document).ready(function() {
  var randomNumbers = [];
  for (var i = 0; i < 5; i++) {
    do {
      random = Math.ceil(Math.random()*100);
    } while (jQuery.inArray(random,randomNumbers)!= -1);
    randomNumbers[i] = random;
  }
  alert('Benvenuto, lo scopo di questo giochino è testare la tua memoria.\n\nQuando ti sentirai pronto, schiaccia il tasto "ØK" per far scomparire i numeri sottostanti.\n\nDopo 30 secondi, ti verrà chiesto di riscriverli e guadagnerai 100 punti per ogni numero indovinato.\n\nIn bocca al lupo :D \n\n'+ randomNumbers.join(' - '));
  setTimeout( function() {
    var userPromptNumbers = [];
    var number;
    var point = 0;
    for (var i = 0; i < 5; i++) {
      do {
        number = parseInt(prompt('inserisci il '+(i+1)+ '° numero'));
      } while (jQuery.inArray(number, userPromptNumbers)!= -1 || number < 1 || number > 100 || isNaN(number));
      userPromptNumbers[i] = number;
      if (jQuery.inArray(number, randomNumbers)!=-1)
      point+=100;
    }
    alert('Numeri da ricordare: '+randomNumbers.join(' - ')+'\n\nNumeri inseriti: '+userPromptNumbers.join(' - ')+'\n\nPunti accumulati: '+point);
  },3*1000);
});
