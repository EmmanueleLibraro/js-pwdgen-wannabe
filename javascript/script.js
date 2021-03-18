// RICHIESTA NOME 
var name = prompt('Come ti chiami?');

console.log(name);
console.log( typeof(name));

document.getElementById('main-title').innerHTML = 'Ciao ' + name;

//RICHIESTA COGNOME
var surname = prompt('Il tuo cognome?');

console.log(surname);
console.log( typeof(surname));

document.getElementById('main-title').innerHTML = 'Ciao ' + surname;