const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce un número: ", (input) => {
    let numero = parseInt(input);
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
        rl.close();
    } else {
        console.log("Dígitos extraídos:");
        let n = numero < 0 ? -numero : numero; // Convertir a positivo si es negativo
        let digitos = [];
        
        while (n > 0) {
            let digito = n % 10; // Obtener el último dígito
            for (let i = digitos.length; i > 0; i--) {
                digitos[i] = digitos[i - 1];
            }
            digitos[0] = digito; // Insertar al inicio del array
            n = (n - digito) / 10; // Quitar el último dígito
        }
        
        let resultado = ""
        let i = 0;
        while (i < digitos.length) {
            resultado += digitos[i] + " ";
            i++;
        }
        console.log(resultado.trim());
        rl.close();
    }
});