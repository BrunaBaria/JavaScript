function contar(){
    var res = document.getElementById('res')
    var c = 6
    while (c <11 ){
        res.innerHTML += ` ${c}`
        c++
    }res.innerHTML += ` ACABOU!`
}