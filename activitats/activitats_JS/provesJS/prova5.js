var anyActual = 2025
var anyNaixement = prompt("Quin es el teu any de naixment?")
var edat = anyActual - anyNaixement

if(edat >= 18){
    console.log(`pots pasat tens ${edat}, ets major de d'edat`)
    alert(`pots pasat tens ${edat}, ets major de d'edat`)
}else{
    console.log(`No pots pasat tens ${edat}, ets menor de d'edat`)
    alert(`No pots pasat tens ${edat}, ets menor de d'edat`)
}

var edatActual = prompt(`Perque tens ${edad}? no?`)

edad -= 1


if(edatActual = "Si"){
    alert(`Vale, tens la edad que jo dic, ${edad}`)
}else{
    alert(`Val, tens un any menys es a dir `)
}
