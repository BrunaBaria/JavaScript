function calcular(){
    var txtvel = document.querySelector('input#txtvel')
    var velocidade = Number(txtvel.value)
    var res = document.querySelector('div#res')
    var multa = (velocidade-80)*5
    res.innerHTML = `Sua velocidade atual é de ${velocidade} km.`
    if(velocidade > 80){
        res.innerHTML += `<p>Você ultrapassou o limite de velocidade permitido e foi <strong>Multado em R$ ${multa.toFixed(2).replace('.',',')}</strong></p>`
    }
    res.innerHTML +=`<p>Dirija sempre utilizando o cinto de segurança</p>`
}