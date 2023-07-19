function calcular(){
    var nome =document.querySelector('input#nomeinput').value
    var txtn1=document.querySelector('input#txtn1')
    var txtn2=document.querySelector('input#txtn2')
    var n1=Number(txtn1.value)
    var n2=Number(txtn2.value)
    var res =document.querySelector('div#resultado')
    var média=(n1+n2)/2
    res.innerHTML = `<p>A média de ${nome} é ${média}</p>`
    if (média >=7){
        res.innerHTML += `${nome} teve um <strong>bom aproveitamento</strong></p>`
    }else{
    res.innerHTML +=`<p>${nome} teve um aproveitamento <strong>abaixo</strong> da média</p>`
    }
}