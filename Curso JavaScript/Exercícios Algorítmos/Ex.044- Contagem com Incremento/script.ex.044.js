function contar(){
    let res = document.querySelector('div#res')
    let txtn1 = document.querySelector('input#txtn1')
    let txtn2 = document.querySelector('input#txtn2')
    let txtin = document.querySelector('input#txtin')

    let n1 = Number.parseInt(txtn1.value)
    let n2 = Number.parseInt(txtn2.value)
    let incremento = Number.parseInt(txtin.value)

    res.innerHTML = ''
    while (n1<=n2){
        res.innerHTML += ` ${n1} `
        n1=n1+incremento
    }
}