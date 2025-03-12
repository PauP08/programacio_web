console.log("Hola mon")
var miVariable;
//let miOtraVariable;

miVariable = 2;
miOtraVariable = 2;

var miVariable = 42;
let miOtraVariable = miVariable;

// var nos permite acceder a una variable antes de inicializarla
console.log(miVariable); //undefined
var miVariable = 2;
console.log(miVariable); //2

// let en cambio...
console.log(miOtraVariable); //Uncaught ReferenceError: miOtraVariable is not defined
//let miOtraVariable = 2;
console.log(miOtraVariable);

const estoNoDaraProblemas = 42;

// Una variable declarada con const, no puede cambiar su valor.
// Por tanto, siempre ha de ser inicializada en su declaración
//const estoVaAFallar; // Uncaught SyntaxError: Missing initializer in const declaration
const estoTambienFallara = 2;
estoTambienFallara = 3; // Uncaught TypeError: Assignment to constant variable.