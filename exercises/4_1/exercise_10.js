const custo = 3;

const valorVenda = 30;

var custoImposto = (custo + custo / 5);

if (valorVenda > 0 && custo > 0) {

    console.log('O lucro para 1000 unidades deste produto é R$ ' + (valorVenda - custoImposto) * 1000);
}

else {

    console.log('ERRO - valor insuficiente!');
}