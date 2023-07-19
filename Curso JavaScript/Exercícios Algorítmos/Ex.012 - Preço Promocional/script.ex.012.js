function calcular(){
    var preço = document.querySelector('input#txtpreço')
    var v = Number(preço.value)
    var promocional= v-(v*0.05)
    res.innerHTML=`O preço promocional do produto com 5% de desconto é <strong>R$ ${promocional.toFixed(2).replace('.',',')}</strong>`
}
