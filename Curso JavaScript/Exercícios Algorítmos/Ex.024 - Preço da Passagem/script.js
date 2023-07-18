function calcular(){
    var km = document.getElementById('txtkm')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    var distancia = Number(km.value)
    
    if(distancia <= 200){
        var passagem = distancia*0.50
        img.setAttribute('src','carro200km.jpg')
        res.innerHTML = `<p>O valor da passagem para ${distancia} km percorridos será R$ ${passagem.toFixed(2).replace('.',',')}</p>`
        document.body.style.backgroung = '#c09da7'
    }else{
        var passagem = distancia*0.45
        img.setAttribute('src','carromaiskm.jpg')
        res.innerHTML=`<p>O valor da passagem para ${distancia}km percorridos será R$ ${passagem.toFixed(2).replace('.',',')}</p>`
        document.body.style.backgroung = '#a897a7'
    }
    res.appendChild(img)
    res.style.textAlign = 'center'
}