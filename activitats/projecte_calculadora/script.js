const pantalla = document.getElementById('pantalla');
const btnNumero = document.querySelectorAll('.numero');
const btnNetejar = document.getElementById('clear')
const btnOperadors = document.querySelectorAll('.operador')

let valorAnteriror = '';
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

btnNetejar.addEventListener('click', function(){
    if(pantalla.textContent === pantalla.textContent){
        pantalla.textContent = '0'
    }
})

btnOperadors.forEach(operador, function(){
    valorAnteriror = pantalla.textContent
    

    if(btnOperadors.textContent = '+'){
    }
})



