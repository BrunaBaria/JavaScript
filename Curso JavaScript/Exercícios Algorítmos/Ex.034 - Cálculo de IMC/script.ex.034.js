function Calcular(){
    var res = document.getElementById('res')
    var txtm = document.getElementById('txtm')
    var txtkg = document.getElementById('txtkg')

    var altura = Number(txtm.value)
    var peso = Number(txtkg.value)

    var imc = peso/altura**2
    res.innerHTML = `Seu IMC é de <strong>${imc.toFixed(2)}</strong>`

    if( imc <= 18.5){
        res.innerHTML += `<p>Você está <strong>Abaixo do peso</strong></p>`
    }else if(imc <=25){
        res.innerHTML += `<p>Você está no <strong>Peso ideal</strong></p>`
    }else if(imc<=30){
        res.innerHTML += `<p>Você está com <strong>Sobrepeso</strong></p>`
    }else if(imc<=40){
        res.innerHTML += `<p>Você está <strong>Obeso</strong></p>`
    }else{
        res.innerHTML += `<p>Você está com <strong>Obesidade Mórbida</strong></p>`
    }
}