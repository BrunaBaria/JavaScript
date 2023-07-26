function contar(){
  let txtn1 = document.getElementById('txtn1')
  let txtn2 = document.getElementById('txtn2')
  let txtn3 = document.getElementById('txtn3')
  let txtn4 = document.getElementById('txtn4')
  let txtn5 = document.getElementById('txtn5')
  let txtn6 = document.getElementById('txtn6')
  let txtn7 = document.getElementById('txtn7')
  let res = document.getElementById('res')

  let n1 = Number.parseInt(txtn1.value)
  let n2 = Number.parseInt(txtn2.value)
  let n3 = Number.parseInt(txtn3.value)
  let n4 = Number.parseInt(txtn4.value)
  let n5 = Number.parseInt(txtn5.value)
  let n6 = Number.parseInt(txtn6.value)
  let n7 = Number.parseInt(txtn7.value)
  let soma=0

  for(let c=1;c<=7;c++){
    let i = Number.parseInt(getElementById('txt'+c).value)
    soma+=i;
  }  
  res.innerHTML=`A soma entre esses números é ${soma}`
}