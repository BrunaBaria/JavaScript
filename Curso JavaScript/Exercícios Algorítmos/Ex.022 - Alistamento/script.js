function calcular(){
    var nome=document.querySelector('input#nome').value
    var txtnasc=document.querySelector('input#txtnasc')
    var nasc=Number(txtnasc.value)
    var res=document.querySelector('div#res')
    var agora = new Date()
    var ano = agora.getFullYear()
    var idade_hoje = ano-nasc
    var diferença= Math.abs(18-idade_hoje)
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    res.innerHTML=`O jovem ${nome} tem ${idade_hoje} anos atualmente`
        if(idade_hoje < 18){
            res.innerHTML +=`<p>E faltam <strong>${diferença} anos </strong> para seu alistamento</p>`
            img.setAttribute('src','fotoadulto.png')
        }else {
            res.innerHTML += `<p>Deve se alistar e passaram-se <strong>${diferença}</strong> anos do seu período de alistamento</p>`
            img.setAttribute('src','fotomilitar.png')
        }
        res.appendChild(img)
}    