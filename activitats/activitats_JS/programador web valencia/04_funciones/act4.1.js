var primerNumero = prompt("Enumera el primer numero: ")
var segonNumero = prompt("Enumera el segon numero: ")

function suma(){
    var suma = parseFloat(primerNumero) + parseFloat(segonNumero)
    console.log(`El resultat és ${suma}`)
    alert(`El resultat és ${suma}`)
}

suma();