function calcular(){
    var res = document.querySelector('div#res')
    var txtdias = document.querySelector('input#txtdias')
    
    var diasTrab = Number(txtdias.value)
    var horasDia = 8
    var horaTrab = 25
    var salarioPorDia= horasDia*horaTrab

    var salario = salarioPorDia*diasTrab

    res.innerHTML = `O funcionário receberá <strong>R$ ${salario.toFixed(2).replace('.',',')}</strong> de salário este mês`
}