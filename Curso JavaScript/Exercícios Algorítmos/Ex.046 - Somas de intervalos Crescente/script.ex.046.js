function somar(){
    let txtn1=document.getElementById('txtn1')
    let txtn2=document.getElementById('txtn2')

    
    let inicio = Number(txtn1.value)
    let fim = Number(txtn2.value)
    let soma = 0;
    let res = document.getElementById('res')

    res.innerHTML=``
    for(let c= inicio; c<=fim; c +=2){
        res.innerHTML += ` +${c} `
        soma +=c;
       
    }
    res.innerHTML+=`</br> O resultado da soma é ${soma}`
}