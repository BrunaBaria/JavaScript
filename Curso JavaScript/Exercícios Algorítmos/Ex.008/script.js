window.alert(`Você está acessando uma página de exercícios de conversão de distâncias`)
function calcular(){
 var metro = document.querySelector("input#distancia")
 var m = Number(metro.value)
 var dam= m/10
 var hm= m/100
 var km= m/1000
 var dm=m*10
 var cm=m*100
 var mm=m*1000
 res.innerHTML=`A distância <strong>${m}</strong> metros equivale à: <br/><strong>${dam}</strong> decâmetros;<br/><strong>${hm}</strong> hectômetros;<br/><strong>${km}</strong> kilômetros;<br/><strong>${dm}</strong> decímetros;<br/><strong>${cm}</strong> centímetros;<br/><strong>${mm}</strong> milímetros.`
}