function contar(){
    var res = document.querySelector('div#res')
    var c = 11
    while (c >3){
        c--
        res.innerHTML += ` ${c} `
    }res.innerHTML +=`ACABOU!` 
} 