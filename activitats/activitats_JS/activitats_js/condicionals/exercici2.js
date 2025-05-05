const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

var contrasenya = "PABLITO"

readline.question('Contrasenya: ', (contrasenya) => {
    if(contrasenya1 == contrasenya){
        console.log("CONTRASENYA CORRECTA")
    }else{
        console.log("CONTRASENYA INCORRECTA")
    }
    readline.close();
})