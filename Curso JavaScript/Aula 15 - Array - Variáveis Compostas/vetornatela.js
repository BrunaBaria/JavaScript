let valores = [8,1,7,4,2,9]
valores.sort()
//escrevendo os elementos na tela

//console.log(valores)  //escrevendo como um vetor

//escrevendo de uma forma errada e repetida
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


//escrevendo na tela com looping e resumidamente
for(let pos=0; pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//escrevendo com a forma mais simplificada após a atualização do ECMAScript
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}