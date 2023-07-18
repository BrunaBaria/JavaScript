function calcular (){
    var l = document.querySelector('input#txtnl')
    var a = document.querySelector('input#txtna')
    var largura = Number(l.value)
    var altura = Number(a.value)
    var area = altura*largura
    var tinta = area/2
    var img =document.getElementById('imagem')
         
        res.innerHTML=`A área à ser pintada é de <strong>${area} m²</strong> e você precisará de <strong>${tinta} litros</strong> de tinta para pintar essa parede.`
        img.src='parede.jpg'
        
}


/* var nome = window.prompt('Qual é o seu nome? ')
var largura = Number(window.prompt(`${nome}, Qual é a largura da parede? `))
var altura = Number(window.prompt(`Agora me diga qual é a altura da parede? `))
var area = largura*altura
var tinta = area/2
document.write(`${nome}, você precisará de ${tinta} litros de tinta para cobrir a área informada. </br>`)

document.write(`Olá, ${nome}!Seu nome em maíusculas fica ${nome.toUpperCase()}</br>`)
document.write(`Seu nome em minúsculas fica ${nome.toLowerCase()}</br>`)
document.write(`E seu nome possui ${nome.length} letras`)
//exercitei o .toUpperCase .toLowerCase .lenght e o document.white
//exercitei também o uso de </br> para pular linha 
*/