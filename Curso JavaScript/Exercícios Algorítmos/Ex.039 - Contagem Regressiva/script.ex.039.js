function contar(){
    let res = document.getElementById('res')
    let c = 10
    
    res.innerHTML = ''
    while( c >=3 ){
        res.innerHTML += ` ${c} `
        c--
    }res.innerHTML += ` ACABOU! `
}