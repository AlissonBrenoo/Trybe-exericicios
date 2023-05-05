let salarioBruto = 3000
let salarioDescontadoInss = 0
let salarioLiquido = 0

if (salarioBruto >= 1556.94 < 1556.95) {
   salarioDescontadoInss = salarioBruto - (salarioBruto * 0.08)
}else if(salarioBruto >=1556.95 < 2594.92){
    salarioDescontadoInss = salarioBruto - (salarioBruto * 0.09)
}else if(salarioBruto >= 2594.93 < 5189.82){
    salarioDescontadoInss = salarioBruto - (salarioBruto * 0.11)
}else{
    salarioDescontadoInss = salarioBruto - (salarioBruto * 570.88)
}

console.log(salarioDescontadoInss);

if (salarioDescontadoInss >= 1903.99 < 2594.92 ) {
    salarioLiquido = salarioDescontadoInss - (salarioDescontadoInss * 0.075) - 142.80
}

console.log(salarioLiquido);