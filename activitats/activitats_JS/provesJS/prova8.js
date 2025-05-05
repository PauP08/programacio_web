var r = 7;


for (var r = 1; r <= 9; r++) {
    console.log(`Taula del ${r}`)
    for (var i = 1; i <= 10; i++) {
        var muti = parseInt(r) * parseInt(i)
        console.log(`${r}*${i} = ${muti}  `)
    }
}