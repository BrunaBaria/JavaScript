function contar(){
    let txtn1 = document.querySelector('input#txtn1')
    let txtn2 = document.querySelector('input#txtn2')
    let res = document.querySelector('div#res')

    let soma = 0
    let c = 50
    let n1 = Number.parseInt(txtn1.value)
    let n2 = Number.parseInt(txtn2.value)

    res.innerHTML = ''
    while(n1>=n2){
        res.innerHTML += `+${n1} `
        n1=n1-c
        soma += n1
    }res.innerHTML += ` </br>A soma do intervalo é ${soma}`
}