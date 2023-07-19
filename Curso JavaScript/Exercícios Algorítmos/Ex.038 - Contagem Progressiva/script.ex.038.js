function contar(){
    var res = document.getElementById('res')
    var c = 5
    while (c <11 ){
        c++
        res.innerHTML += ` ${c}`
    }res.innerHTML += ` ACABOU!`
}