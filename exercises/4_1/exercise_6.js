

let nomePeca = 'pEÃO';

let res = nomePeca.toLowerCase(); 

if (res == 'rainha') {
    
    console.log("Rainha se move para todos os lados e pulando casas");
}
else if (res == 'rei') {

    console.log("Rei se move para todos os lados, de casa em casa");
}

else if (res == 'cavalo') {

    console.log("Cavalo se move L");
}

else if (res == 'bispo') {

    console.log("Bispo se move em diagonal");
}

else if (res == 'peão') {

    console.log("Peão se move apenas para frente, uma casa por vez");
}

else if (res == 'torre') {
    
    console.log("Torre se move em linha reta frente e trás e para os lados");
}

else {
    
    console.log("Esta peça não existe!");
}