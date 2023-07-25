function contar(){
    let txtn1=document.getElementById('txtn1')
    let txtn2 =document.getElementById('txtn2')
    let res = document.getElementById('res')
    let soma = 0
    let n1 = Number(txtn1.value)
    let n2 = Number(txtn2.value)

    res.innerHTML=``
    for( let c=n1; c>=n2;c-=50){
        res.innerHTML+=` +${c} `
        soma+=c
    }res.innerHTML+=`</br> A soma do intervalo decrescente é ${soma}`
}