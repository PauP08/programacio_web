const hora = setInterval(function(){
    var now = new Date();
    var hora = now.getHours();
    var mins = now.getMinutes();
    var sec = now.getSeconds();
    console.clear()
    console.log(`${hora}:${mins}:${sec}`)
}, 1000);