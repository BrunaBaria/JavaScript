function calcular(){
    var res = document.getElementById('res')
    var fsex = document.getElementsByClassName('radsex')
    
    var nome = document.getElementById('txtnome')
    var compra = document.getElementById('txtcompra')

    var vCompra = Number(compra.value)
    var desconto = 0
    var genero = ''

    if(fsex[0].checked){
        genero ='Mulher'
        var desconto = vCompra-(vCompra*(13/100)) 
        res.innerHTML = ` A Sra. <strong>${nome.value}</strong> terá <strong> R$ ${desconto.toFixed(2).replace('.',',')}</strong> de desconto nesta compra`
    }else if(fsex[1].checked){
        genero ='Homem'
        var desconto = vCompra-(vCompra*(5/100)) 
        res.innerHTML = ` O Sr. <strong>${nome.value}</strong> terá <strong> R$ ${desconto.toFixed(2).replace('.',',')}</strong> de desconto nesta compra`
    }
}