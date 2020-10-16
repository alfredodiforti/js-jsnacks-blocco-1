var primoins = prompt('inserisci la prima parola');
console.log(primoins);
var secondoins = prompt('inserisci la seconda parola');
console.log(secondoins);
//stampa il più grande
if (primoins.length > secondoins.length) {
  console.log(secondoins + ' ' + primoins);
}
else if (secondoins.length > primoins.length) {
  console.log(primoins + ' ' + secondoins);
}
else {
  console.log('le due parole hanno la stessa lunghezza');
}
