let numeros =[]
function informar(){
    let res = document.querySelector('div#res')
    let num = Number.parseInt(document.querySelector('input#txtnum').value)
    let precoMaior = 0
    let precoMenor = 0

    res.innerHTML+=''
    for(let cont= 0; cont<5;cont++){
      
        numeros[cont] 
        numeros.push(num) 
        
    }
    res.innerHTML+=(`Os valores informados foram:  ${numeros}`)
}
