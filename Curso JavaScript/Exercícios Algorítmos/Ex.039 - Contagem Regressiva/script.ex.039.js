function contar(){
    var res = document.querySelector('div#res')
    var c = 10
    while (c >3){
        res.innerHTML += ` ${c} `
        c--
    }res.innerHTML +=`ACABOU!` 
} 