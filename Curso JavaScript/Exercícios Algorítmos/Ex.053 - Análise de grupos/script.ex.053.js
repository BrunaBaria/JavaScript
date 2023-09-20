function verificarFormularios(){
    var res = document.getElementById('res')
    var p1 = Number.parseInt(document.querySelector('input#txtp1').value)
    var p2 = Number.parseInt(document.querySelector('input#txtp2').value)
    var p3 = Number.parseInt(document.querySelector('input#txtp3').value)
    var p4 = Number.parseInt(document.querySelector('input#txtp4').value)
    var p5 = Number.parseInt(document.querySelector('input#txtp5').value)

    var fsex1 = document.getElementById('radsex1')
    var fsex2 = document.getElementById('radsex2')
    var fsex3 = document.getElementById('radsex3')
    var fsex4 = document.getElementById('radsex4')
    var fsex5 = document.getElementById('radsex5')

    var grupo = [p1,p2,p3,p4,p5]
    var soma = 0
    
    var sex =[fsex1 , fsex2 , fsex3 , fsex4 , fsex5]
    var genero =''
    
    var mulher20 = []
   
    if ( fsex1[0].checked){
        genero += 
    }
   
    for(let c = 0; c < grupo.length; c++){
        soma += grupo[c]
    }

   

    var media = soma / grupo.length

    

    res.innerHTML = `${soma} e ${media}`
}