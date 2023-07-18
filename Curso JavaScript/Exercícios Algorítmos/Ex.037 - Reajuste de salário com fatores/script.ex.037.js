function calcular(){
    var res = document.getElementById('res')
    var fgen = document.getElementsByName('radgen')
    var txtsal = document.getElementById('txtsal')
    var txtanos = document.getElementById('txtanos')
    
    var genero = ''
    var salario = Number(txtsal.value)
    var anos = Number(txtanos.value)
    var novo_salario = 0

    if(fgen[0].checked){
        genero='Homem'
        if(anos<=20){
            var novo_salario = salario+(salario*(3/100))
        }else if(anos<=30){
            var novo_salario = salario+(salario*(13/100))
        }else{
            var novo_salario = salario+(salario*(25/100))
        }

    }if(fgen[1].checked){
        genero='Mulher'
        if(anos<=15){
            var novo_salario = salario+(salario*(5/100))
        }else if(anos<=20){
            var novo_salario = salario+(salario*(12/100))
        }else{
            var novo_salario = salario+(salario*(23/100))
        }
    }
    res.innerHTML = `O novo salário deste(a) funcionário(a) será <strong>R$ ${novo_salario.toFixed(2).replace('.',',')}</strong>`
        
}