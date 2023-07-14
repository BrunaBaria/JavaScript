function calcular(){
    var res = document.getElementById('res')
    var larg = document.getElementById('txtlarg')
    var compri = document.getElementById('txtcompri')
    var img = document.getElementById('imagem')
    var largura= Number(larg.value)
    var Comprimento= Number(compri.value)

    var Area = (largura*Comprimento)


    if(Area <= 100){
        res.innerHTML=`O terreno tem <strong>${Area}m² </strong> e está classificado como <strong>POPULAR</strong>`
        img.src ='terreno-popular.jpg'
    }else if (Area <=500 ){
       res.innerHTML=`O terreno tem <strong>${Area} m² </strong> e está classificado como <strong>MASTER</strong>`
       img.src='terreno-master.jpg'
    }else{
        res.innerHTML=`O terreno tem <strong>${Area}m² </strong> e está classificado como <strong>VIP</strong>`
        img.src='terreno-vip.jpg'
    }
}