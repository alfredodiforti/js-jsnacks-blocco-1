//creazione array vuoto
var dispari = [];
//inserire 6 valori
for (i=0; i < 6; i++) {
  var inserimento = parseInt(prompt('inserisci un numero'));
  if (inserimento % 2 != 0 ) {
    dispari.push(inserimento);
  }
}
  console.log(dispari);
