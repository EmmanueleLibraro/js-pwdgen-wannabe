// RICHIESTA NOME 
var name = prompt('Come ti chiami?');

console.log(name);
console.log( typeof(name));

document.getElementById('main-title').innerHTML = 'Ciao ' + name;

//RICHIESTA COGNOME
var surname = prompt('Il tuo cognome?');

console.log(surname);
console.log( typeof(surname));

document.getElementById('second-title').innerHTML = 'Il mio cognome è ' + surname;

//RICHIESTA COLORE PREFERITO
var color = prompt('Colore preferito?');

console.log(color);
console.log( typeof(color));

document.getElementById('colore').innerHTML = 'Il mio colore preferito è ' + color;