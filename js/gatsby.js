//ARRAY INVITATI
var listainvitati = ['paolo', 'fabio', 'lorenzo'];

//RICHIESTA NOME UTENTE
var nomeutente = prompt('puoi dirmi il tuo nome per verificare se è in lista ?');
var nomeutente = nomeutente.toLowerCase();
//VERIFICA
var presente = false;
for (var i = 0; i < listainvitati.length; i++) {
  var invitato = listainvitati[i];

  if (nomeutente == invitato) {
    presente = true;
  }
}

if (presente == true) {
  console.log('ciao ' + nomeutente + ' il tuo invito è stato trovato');
}

else {
  console.log('NO MATCH PEOPLE!!!!');
}
