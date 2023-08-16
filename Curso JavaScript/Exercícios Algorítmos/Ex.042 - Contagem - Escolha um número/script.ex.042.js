function contar(){
    let res = document.querySelector('div#res')
    let num = document.querySelector('input#txtn')
    let n = Number.parseInt(txtn.value)
    let c = 0

    while(c<=n){
        res.innerHTML +=` ${c} `
        c++
    }res.innerHTML +=` Acabou! `
}