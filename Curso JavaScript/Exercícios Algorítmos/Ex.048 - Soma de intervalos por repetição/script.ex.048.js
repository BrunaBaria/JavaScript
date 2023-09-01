function somar(){
  let res = document.querySelector('div#res')
  let n1 = Number.parseInt(document.querySelector('input#txtn1').value)

  let soma = 0
  let c = 0
  
  res.innerHTML =''
  while(c<7){
    res.innerHTML += ` +${n1}`
    ++n1
    ++c
    soma+=n1
  } res.innerHTML +=`</br> A soma do intervalo é ${soma}`
}
 
