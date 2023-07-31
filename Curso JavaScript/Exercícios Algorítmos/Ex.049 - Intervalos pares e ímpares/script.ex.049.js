function verificar(){
    let numPares = 0
    let numImpar=0

    let res = document.getElementById('res')
    for (let i =1; i<=6;i++){
        let num =Number(document.getElementById ('num'+i).value)
        if(num % 2 === 0){
            numPares++
        }else{
            numImpar++
        }
    }
   res.innerHTML =`Você digitou ${numPares} números pares e ${numImpar} números ímpares`
}
