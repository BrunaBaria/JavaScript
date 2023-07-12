function verificar(){
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    var data =new Date()
    var ano = data.getFullYear()

    if(fano.value.length == 0 || fano.value > ano ){
       window.alert (`[ERRO!] Ano inválido, Verifique os dados e tente novamente`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

         if ( fsex[0].checked){
            genero ='mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src','foto-bebe-f.png')
             }else if (idade <18){
                img.setAttribute('src','foto-jovem-f.png')
            }else if(idade <50){
                img.setAttribute('src','foto-adulto-f.png')
             }else{
                img.setAttribute('src','foto-idoso-f.png')
            }
        }else if (fsex[1].checked){
            genero ='homem'
            if(idade>=0 && idade <10){
                img.setAttribute('src','foto-bebe-m.png')
            }else if(idade <18){
                    img.setAttribute('src','foto-jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src','foto-adulto-m.png')
            }else{
                img.setAttribute('src','foto-idoso-m.png')
            }
        } 
        res.innerHTML =`Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)  
    }
}