function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML=`Agora são ${hora} horas`
    if(hora >=0 && hora < 6){
        img.src='fotomadrugada.png'
        document.body.style.background = '#0e2c2c'
        msg.innerHTML+=`<p>Boa madrugada</p>`
    }else if (hora <12 ){
        img.src = 'fotomanha.png'
        document.body.style.background = '#f4cfb4'
        msg.innerHTML+="<p>Bom dia!</p>"
    }else if ( hora <18){
        img.src = 'fototarde.png'
        document.body.style.background = '#ed9d60'
        msg.innerHTML+="<p>Boa tarde!</p>"
    }else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#001b39'
        msg.innerHTML+="<p>Boa noite!</p>"
    }
}