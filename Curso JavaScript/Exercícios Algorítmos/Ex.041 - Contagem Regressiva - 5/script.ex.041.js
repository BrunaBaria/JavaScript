function contar(){
    let res = document.querySelector('div#res')
    let c = 100

    res.innerHTML = ''
    while(c>=0){
        res.innerHTML +=` ${c} `
        c=c-5
        
    }res.innerHTML += ` Acabou! `
}