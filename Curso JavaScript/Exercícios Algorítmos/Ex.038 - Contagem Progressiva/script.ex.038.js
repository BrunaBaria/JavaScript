function contar(){
    let res = document.getElementById('res')
    let c = 6

    res.innerHTML=''
    while (c<=11 ){
        res.innerHTML +=` ${c} `
        c++
    }res.innerHTML+=` ACABOU! ` 
}
