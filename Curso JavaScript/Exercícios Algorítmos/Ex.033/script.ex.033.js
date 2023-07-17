function calcular(){
    var txtcasa = document.getElementById('txtcasa')
    var txtanos = document.getElementById('txtanos')
    var txtsal = document.getElementById('txtsal')
    var res = document.getElementById('res')
   
    var valor_casa = Number(txtcasa.value)
    var anos_fin = Number(txtanos.value)
    var salario= Number(txtsal.value)

    var meses_fin= anos_fin*12
    var parcela = valor_casa / meses_fin
    var percentual_comprometido = salario*(30/100)
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if(parcela<=percentual_comprometido){
        res.innerHTML = `<strong>FINANCIAMENTO APROVADO</strong>`
        img.setAttribute('src','aprovado.png')
    }else{
        res.innerHTML = `<strong>FINANCIAMENTO NEGADO</strong> - renda insuficiente`
        img.setAttribute('src','negado.png')
    }
    res.appendChild(img)
}