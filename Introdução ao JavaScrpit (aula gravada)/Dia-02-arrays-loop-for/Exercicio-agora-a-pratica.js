let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorNum= 0 
for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index];
}
if (soma > 20) {
    console.log("O valor da média aritmética é maior que 20");
}else{
    console.log("O valor da média aritmética é menor ou igual a 20");
}

console.log('A média entre os números dos arrays é ' + soma / 10);



for (let index1 = 0; index1 < numbers.length; index1+=1) {
        if (numbers[index1] > maiorNum) {
            maiorNum = numbers[index1]
     }
}

console.log("O maior número é", maiorNum);




//  if(numbers[index1][index2] > maiorNum[index1]);{
//             maiorNum[index1] = numbers[index1][index2];
//         }
// if(divisao > 20){
// console.log("O valor da média aritmética é maior que 20");
// } 
// else{
//     console.log("O valor da média aritmética é menor ou igual a 20");
// }


// for(let index = 0; index < numberss.length; index+=1){
//     console.log(numberss[index]+ numberss);
// }
