function contar(){
    var res = document.querySelector('div#res')
    var c=30
    res.innerHTML=''
    while(c>=1){
        res.innerHTML += ` ${c} `
        c--
        if(c % 4 == 0){
            res.innerHTML +=` [${c}] ` 
    }
}res.innerHTML +=` ACABOU!` 
}