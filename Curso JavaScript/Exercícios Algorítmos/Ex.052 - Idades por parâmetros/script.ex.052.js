
function verificarIdades(){
    var res = document.querySelector('div#res');
    var i1 = Number.parseInt(document.querySelector('input#txtn1').value)
    var i2 = Number.parseInt(document.querySelector('input#txtn2').value)
    var i3 = Number.parseInt(document.querySelector('input#txtn3').value)
    var i4 = Number.parseInt(document.querySelector('input#txtn4').value)
    var i5 = Number.parseInt(document.querySelector('input#txtn5').value)
    var i6 = Number.parseInt(document.querySelector('input#txtn6').value)
    var i7 = Number.parseInt(document.querySelector('input#txtn7').value)
    var i8 = Number.parseInt(document.querySelector('input#txtn8').value)
    var i9 = Number.parseInt(document.querySelector('input#txtn9').value)
    var i10 = Number.parseInt(document.querySelector('input#txtn10').value)

    var idades = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10]
    var soma = 0
    
    var maior18 = []
    var menor5= []

    idades.sort((a,b) => a - b);//função de comparação para elementos numéricos
    var maiorIdade = idades[9]
    

    res.innerHTML +=``

    for ( let c = 0; c < idades.length; c++){
        soma += idades[c]    
        
        if ( idades [c] >= 18){
            maior18 ++;
        } else if ( idades[c] < 5){
            menor5 ++
        } 
        
    }

    var media = soma / idades.length

    res.innerHTML +=`</br>A média das idades informadas é ${media}`
    res.innerHTML +=`</br>${maior18} pessoas tem mais de 18 anos `
    res.innerHTML +=`</br>A maior idade informada foi ${maiorIdade} anos`
    res.innerHTML +=`</br>${menor5} pessoas tem menos de 5 anos`
    
    } 
   
   

