function contar(){
    let res = document.querySelector('div#res')
    let c = 0

    res.innerHTML=''
    while(c<=18){
        res.innerHTML +=` ${c} `
        c=c+3
    }res.innerHTML +=` ACABOU! `
}