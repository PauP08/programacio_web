const pantalla = document.getElementById('pantalla');
const btnNumero = document.querySelectorAll('.numero');


btnNumero.forEach(boto => {
    boto.addEventListener('click', function(){
        if(pantalla.textContent === '0'){
            pantalla.textContent = boto.textContent
        }else{
            pantalla.textContent += boto.textContent
        }
    } )
});



// document.getElementById("btn7").addEventListener('click', function (){
//     if(pantalla.textContent === "0"){
//         document.getElementById('pantalla').innerHTML = btn7.textContent
//     }else{
//         pantalla.textContent += btn7.textContent
//     }
// } )