function calcular(){
    var r = window.document.querySelector('input#reais')
    var res = document.getElementById('res')
    var reais = Number(r.value)
    var dolar = 3.45
    var dolar_compra = reais/dolar
        res.innerHTML = `Você pode comprar <strong> US$ ${dolar_compra.toFixed(2).replace('.',',')}</strong> com <strong>R$ ${reais.toFixed(2).replace('.',',')}</strong>`
    var img =document.createElement('img')
        img.setAttribute('src','foto')

        if(dolar_compra >=200){
            res.innerHTML += `<p>Podemos viajar!</p>`
            img.setAttribute('src','viagem.jpg')
        }else{
            res.innerHTML +=`<p>Precisamos juntar mais dólares para nossa viagem...</p>`
            img.setAttribute('src','aluno-reprovado.jpg')
        }
        res.appendChild(img)
}