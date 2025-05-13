const pantalla = document.getElementById('pantalla');
const btnNumero = document.querySelectorAll('.numero');
const btnNetejar = document.getElementById('clear')
const btnOperadors = document.querySelectorAll('.operador')
const btnIgual = document.getElementById('igual')


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
    if(operadorSeleccionat === '+'){
        resultat = parseFloat(valorAnterior) + parseFloat(valorActual)
    }
    pantalla.textContent = resultat
})




