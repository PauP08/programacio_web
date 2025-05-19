const pantalla = document.getElementById('pantalla');
const btnNumero = document.querySelectorAll('.numero');
const btnNetejar = document.getElementById('clear')
const btnOperadors = document.querySelectorAll('.operador')
const btnIgual = document.getElementById('igual')
const btnDel = document.getElementById("delete")

let valorAnterior = '';
let operadorSeleccionat = '';
let valorActual = '';

btnNumero.forEach(boto => {
    boto.addEventListener('click', function(){
        if(pantalla.textContent === '0'){
            pantalla.textContent = boto.textContent
        }else{
            pantalla.textContent += boto.textContent
        }
    })
});
btnOperadors.forEach(boto => {
    boto.addEventListener('click', function(){
        valorAnterior = pantalla.textContent
        operadorSeleccionat = boto.textContent
        pantalla.textContent = "0"
    })
});
btnIgual.addEventListener('click',  () => {
    const valorActual = pantalla.textContent
    let resultat = 0;
    switch(operadorSeleccionat){
        case "+":
            resultat = parseFloat(valorAnterior) + parseFloat(valorActual)
            break 
        case "-":
            resultat = parseFloat(valorAnterior) - parseFloat(valorActual)
            break
        case "*":
            resultat = parseFloat(valorAnterior) * parseFloat(valorActual)
            break
        case "/":
            resultat = parseFloat(valorAnterior) / parseFloat(valorActual)    
            break
    }
    pantalla.textContent = resultat
})
btnNetejar.addEventListener('click', () =>{
    pantalla.textContent = 0
    valorAnterior = ""
    valorActual = ""
})

btnDel.addEventListener('click', () =>{
    if(pantalla.textContent.length > 1){
        pantalla.textContent = pantalla.textContent.slice(0, -1)
    }else{
        pantalla.textContent = '0'
    }
})