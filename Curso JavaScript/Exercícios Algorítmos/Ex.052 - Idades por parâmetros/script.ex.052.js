
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

    var idades = []
    var media = (i1+i2+i3+i4+i5+i6+i7+i8+i9+i10)/10
    var maior18 = ''
    var menor5= ''
    var maiorIdade = ''

    for(let c = 0; c<10; c++){
        idades[c]=
        if(idades <= 18){
            maior18 += 0 
        }else if( idades <=5){
            menor5 += 0
        }
    }
    

    res.innerHTML +=`As idades informadas são ${idades}</br>`
    res.innerHTML +=`A média delas é ${media}`

}