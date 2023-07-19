function calcular(){
    var txtnumero =document.querySelector('input#txtnumero')
    var n=Number.parseInt(txtnumero.value)
    var res = document.querySelector('div#res')
    if(n % 2 == 0){
        res.innerHTML =`O número <strong>${n}</strong> é <strong>par</strong>`
    }else{
        res.innerHTML= `O número <strong>${n}</strong> é <strong>ímpar</strong>`
    }
}