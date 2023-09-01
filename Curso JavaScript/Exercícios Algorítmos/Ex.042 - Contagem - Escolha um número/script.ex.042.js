function contar(){
    let res = document.querySelector('div#res')
    let n = Number.parseInt(document.querySelector('input#txtn').value)

    let c= 0
    res.innerHTML+=``
    while(c<n){
       ++c
       res.innerHTML += ` ${c} `
    }
    res.innerHTML += ` ACABOU! `
}