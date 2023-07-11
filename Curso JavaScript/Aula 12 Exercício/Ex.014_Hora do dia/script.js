function carregar(){
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora >=0 && hora < 6){
        //Boa Madrugada!
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#0e2c2c'
        
    }else if (hora >=6 && hora < 12){
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#f4cfb4'
    }else if (hora >=12 && hora <=18){
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#ed9d60'
    }else{
        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#001b39'
    }
}
