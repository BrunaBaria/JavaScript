function verificar(){
    let res = document.querySelector('div#res')
    let txtn1 = document.querySelector('input#txtn1')

    let n1 = Number.parseInt(txtn1.value)
    let c = 0
    let par = 0
    let impar = 0

    res.innerHTML =''
    while(c<6){
        res.innerHTML +=` +${n1}`
        if (n1 % 2===0){
            ++par   
        }else{
            ++impar 
        }
        ++n1
        ++c
    } res.innerHTML += `<br>Você digitou ${par} números pares e ${impar} números ímpares`;
}
