//inserisci numeri
var primoins = parseInt(prompt('inserisci il primo numero'));
var secondoins = parseInt(prompt('inserisci il secondo numero'));
//stampa il più grande
if (primoins > secondoins) {
  console.log(primoins)
}
else if (secondoins > primoins) {
  console.log(secondoins)
}
else {
  console.log('i due numeri sono uguali')
}
