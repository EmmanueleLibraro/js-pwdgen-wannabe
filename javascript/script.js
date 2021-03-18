var name = prompt('Come ti chiami?');

console.log(name);
console.log(typeof(name));

document.getElementById('main-title').innerHTML = 'Ciao ' + name;