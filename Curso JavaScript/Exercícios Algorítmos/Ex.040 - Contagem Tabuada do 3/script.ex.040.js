function contar(){
    var res = document.querySelector('div#res')
    var c = -3
    while(c<18){
        c=c+3
        res.innerHTML +=` ${c} `
    }res.innerHTML +=` ACABOU! `
}