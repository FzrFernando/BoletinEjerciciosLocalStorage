// Ejercicio 2: Almacenando Datos Primitivos
// a) Utilizando localStorage, almacena tu nombre en el navegador bajo la clave "nombre". 
let nombre = "Tu Nombre";
localStorage.setItem('nombre', nombre);

// b) Recupera el nombre almacenado en localStorage y muestra su valor en la consola.
let nombreAlmacenado = localStorage.getItem('nombre');

console.log('Nombre almacenado: ', nombreAlmacenado);


// Ejercicio 3: Eliminando Datos Primitivos
// a) Utilizando localStorage, almacena tu edad bajo la clave "edad".
let edad = 24;
localStorage.setItem('edad', edad);

// b) Utiliza la función adecuada para eliminar la clave "edad" de localStorage. 
localStorage.removeItem('edad');

// c) Verifica si la clave "edad" aún existe en localStorage
let claveExiste = localStorage.getItem('edad') !== null;

// Muestra el resultado en la consola
console.log('¿La clave "edad" aún existe?', claveExiste);


// Ejercicio 4: Almacenando y Recuperando Objetos
// a) Crea un objeto JavaScript que represente una persona
let persona = {
    nombre: 'Juan',
    edad: 35,
    ciudad: 'Madrid'
};

// b) Convierte el objeto en una cadena JSON y almacénalo en localStorage
let personaJSON = JSON.stringify(persona);
localStorage.setItem('persona', personaJSON);

// c) Recupera la cadena JSON de localStorage y conviértela en un objeto JavaScript
let personaRecuperada = localStorage.getItem('persona');
let personaObjeto = JSON.parse(personaRecuperada);

// d) Muestra en la consola alguna propiedad del objeto recuperado
console.log('Nombre de la persona recuperada:', personaObjeto.nombre);
console.log('Edad de la persona recuperada:', personaObjeto.edad);
console.log('Ciudad de la persona recuperada:', personaObjeto.ciudad);


// Ejercicio 5: Eliminando Objetos
// a) Almacena un objeto bajo una clave de tu elección
 let objetoEjemplo = { 
    ejemplo: "Este es un objeto de ejemplo",
    propiedad: 123,
    otro: ["dato1", "dato2", "dato3"]
};
localStorage.setItem('miObjeto', JSON.stringify(objetoEjemplo));

 // b) Elimina la clave que contiene el objeto
localStorage.removeItem('miObjeto');

// c) Verifica si la clave que contiene el objeto aún existe en localStorage
let claveExiste2 = localStorage.getItem('miObjeto') !== null;

// Muestra el resultado en la consola
console.log('¿La clave que contiene el objeto aún existe?', claveExiste2);