// Jogo do Chimba

let studentGame = [3,7,22,12,15,53];
console.log("Jogo do Chimba", studentGame);

// Jogo sorteado

let megaSenaNumbers = [];
for(let MegaSenaindex = 0; MegaSenaindex < 6; MegaSenaindex +=1){
    let randomNumbers = Math.floor(Math.random()*60 + 1)
    console.log(randomNumbers[MegaSenaindex]);
}

// Conferindo o jogo
let numberOfHits = 0;
for(let index = 0; index < megaSenaNumbers.length; index+=1){
    let drawNumbers = megaSenaNumbers[index];
    // console.log("Numero sorteado",drawNumbers);

    for(let gameIndex = 0; gameIndex < studentGame.length; gameIndex+=1){
        let studentNumber = studentGame[gameIndex]
        // console.log("Numero do CHimba", studentGame[gameIndex]);

    if (drawNumbers === studentNumber){
        console.log("Numero de acertos", drawNumbers)
    }

    }
}