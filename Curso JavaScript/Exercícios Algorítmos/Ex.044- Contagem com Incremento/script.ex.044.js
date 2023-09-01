function contar(){
    let res = document.querySelector('div#res')
    let n1 = Number.parseInt(document.querySelector('input#txtn1').value)
    let n2 = Number.parseInt(document.querySelector('input#txtn2').value)
    let incremento = Number.parseInt(document.querySelector('input#txtin').value)

    res.innerHTML = ''
    while (n1<=n2){
        res.innerHTML += ` ${n1} `
        n1=n1+incremento
    }
}