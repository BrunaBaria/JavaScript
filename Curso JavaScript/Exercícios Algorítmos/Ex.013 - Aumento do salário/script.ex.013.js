function calcular(){
    var sal =document.querySelector('input#txtsal')
    var salario = Number(sal.value)
    var aumento = salario+(salario*(15/100))
    
    res.innerHTML = `O salário do funcionário com 15% de aumento será de <strong>R$ ${aumento.toFixed(2).replace('.',',')}</strong>`
}