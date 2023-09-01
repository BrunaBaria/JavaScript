function somar(){
    let n1 = Number.parseInt(document.querySelector('input#txtn1').value)
    let n2 = Number.parseInt(document.querySelector('input#txtn2').value)
    let res = document.querySelector('div#res')
    
    let c = 2
    let soma = 0

    res.innerHTML = ''
    while(n1<=n2){
        res.innerHTML += ` +${n1} `
        n1=n1+c
        soma += n1
    }
    res.innerHTML += ` </br>A soma do intervalo dos números é ${soma} `
}