

function informar(){
    let res = document.querySelector('div#res')
    let n1 = Number(document.querySelector('input#txtnum1').value)
    let n2 = Number(document.querySelector('input#txtnum2').value)
    let n3 = Number(document.querySelector('input#txtnum3').value)
    let n4 = Number(document.querySelector('input#txtnum4').value)
    let n5 = Number(document.querySelector('input#txtnum5').value)
    let n6 = Number(document.querySelector('input#txtnum6').value)
    let n7 = Number(document.querySelector('input#txtnum7').value)
    let n8 = Number(document.querySelector('input#txtnum8').value)

    let numeros = [n1, n2, n3, n4, n5, n6, n7, n8]
    numeros.sort()
 
    res.innerHTML =''
    res.innerHTML+=(`Os valores informados foram:  ${numeros}`)
    res.innerHTML +=(`<p>O menor número informado foi: ${numeros[0]} e o maior número informado foi ${numeros[7]}</p>`)
}

/*
console.log("Digite um numero: ")	
let maiorNumero = Number(pergunte()); 
let menorNumero = 0;

while (maiorNumero > menorNumero) {
	menorNumero = maiorNumero;
	console.log("Digite um numero: ")	
	maiorNumero = Number(pergunte()); 
}

console.log("O maior numero é:" + menorNumero);
console.log("O menor numero é:" + maiorNumero);
*/