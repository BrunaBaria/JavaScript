function calcular(){
    var nome =document.getElementById('txtnome')
    var sal = document.getElementById('txtsal')
    var anostrab = document.getElementById('txtanostrab')
    var res = document.getElementById('res')
    var salario = Number(sal.value)
    var anos_trabalhados= Number(anostrab.value)
    var name = String(nome.value)
    

    if (anos_trabalhados <= 3){
        var reajuste= salario*(3/100)
        var salario_atual = reajuste+salario
        res.innerHTML =`<strong>${name}</strong> terá um reajuste de <strong>3%</strong>. Seu salário será reajustado para<strong>R$ ${salario_atual.toFixed(2).replace('.',',')}</strong>`
    }else if(anos_trabalhados <=10){
        var reajuste= salario*(12.5/100)
        var salario_atual = reajuste+salario
        res.innerHTML =`<strong>${name}</strong> terá um reajuste de <strong>12.5%</strong>. Seu salário será reajustado para <strong>R$ ${salario_atual.toFixed(2).replace('.',',')}</strong>`
    }else{
        var reajuste= salario*(20/100)
        var salario_atual = reajuste+salario
        res.innerHTML =`<strong>${name}</strong> terá um reajuste de <strong>20%</strong>. Seu salário será reajustado para <strong>R$ ${salario_atual.toFixed(2).replace('.',',')}</strong>` 
    }
    
}