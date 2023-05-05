let salarioBruto = 4000
let salarioDescontadoInss = 0
let salarioLiquido = 0

if (salarioBruto <= 1556.94) {
   salarioDescontadoInss = salarioBruto - (salarioBruto * 0.08)
}else if(salarioBruto >=1556.95  &&  salarioBruto <= 2594.92){
    salarioDescontadoInss = salarioBruto - (salarioBruto * 0.09)
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioDescontadoInss = salarioBruto - (salarioBruto * 0.11)
}else{
    salarioDescontadoInss = salarioBruto - (salarioBruto * 570.88)
}

console.log('Salario com desconto do INSS ' + salarioDescontadoInss);

if (salarioDescontadoInss >= 1903.99 && salarioDescontadoInss <= 2826.65){
    salarioLiquido = salarioDescontadoInss - ((salarioDescontadoInss * 0.075) - 142.80)
}else if(salarioDescontadoInss >= 2826.66 && salarioDescontadoInss <=3751.05 ) {
    salarioLiquido = salarioDescontadoInss - ((salarioDescontadoInss * 0.15) - 354.80)
}else if (salarioDescontadoInss >= 3751.06 &&  salarioDescontadoInss <= 4664.68 ) {
    salarioLiquido = salarioDescontadoInss - ((salarioDescontadoInss * 0.225) - 636.13)
}else if (salarioDescontadoInss >= 4664.68 ) {
    salarioLiquido = salarioDescontadoInss - ((salarioDescontadoInss * 0.275) - 869.36)
}else{
    salarioDescontadoInss = salarioLiquido;
}

console.log('Salário liquido ' + salarioLiquido);