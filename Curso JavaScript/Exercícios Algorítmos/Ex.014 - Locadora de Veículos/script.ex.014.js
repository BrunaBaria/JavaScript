function calcular(){
    var txtkm = document.querySelector('input#txtkm')
    var txtdias = document.querySelector('input#txtdias')
    var km = Number(txtkm.value)
    var dia = Number(txtdias.value)
    var locação = (90*dia)+(0.20*km)
    res.innerHTML=`O preço total à pagar pela locação é <strong>R$ ${locação.toFixed(2).replace('.',',')}</strong>`
   }