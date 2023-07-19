function calcular(){
    var agora = new Date()
    var ano =agora.getFullYear()
    var txtano =document.querySelector('input#txtano')
    var ano_nasc= Number(txtano.value)
    var res = document.querySelector('div#resposta')
    var idade = ano-ano_nasc
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    res.innerHTML=`Você está com ${idade} anos`
    if (idade < 16){
        res.innerHTML +=`<p>E não pode votar</p>`
        img.setAttribute('src','nao-vota.png')
    }else if (idade <18 || idade>=65){
        res.innerHTML+= `<p>Seu voto é facultativo</p>`
        img.setAttribute('src','voto-facultativo.PNG')
    }else{ 
        res.innerHTML +=`<p>E é obrigado(a) a votar</p>`
        img.setAttribute('src','voto-obrigatorio.PNG')
    }res.appendChild(img)
}