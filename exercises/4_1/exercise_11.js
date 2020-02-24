
let salarioBruto = 2975.00;
let salarioLiquido = ""; 
let salarioLiquidoIr = "";

console.log("Salario do funcionario: R$ " + salarioBruto);

if (salarioBruto <= 1556.94) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.08);
    console.log("O salario com desconto INSS é: R$ " + salarioLiquido);
}

else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.09);
    console.log("O salario descontando o INSS é de: R$" + salarioLiquido);
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.11);
    console.log("O salario descontando o INSS é de: R$" + salarioLiquido);
}

else {
    salarioLiquido = salarioBruto + 570.88;
    console.log("O salario descontando o INSS é de: R$" + salarioLiquido);
}

if (salarioLiquido <= 1903.98) {
    console.log("Isento do imposto de renda");
}

else if (salarioLiquido > 1903.98 && salarioLiquido < 2826.65) {
    salarioLiquidoIr = salarioLiquido - (salarioLiquido * 0.075);
    console.log("O salario descontando o INSS e o imposto de renda é de: R$" + salarioLiquidoIr);
}

else if (salarioLiquido > 2826.66 && salarioLiquido < 3751.05) {
    salarioLiquidoIr = salarioLiquido - (salarioLiquido * 0.15);
    console.log("O salario descontando o INSS e o imposto de renda é de: R$" + salarioLiquidoIr);
}

else if (salarioLiquido > 3751.06 && salarioLiquido < 4664.68) {
    salarioLiquidoIr = salarioLiquido - (salarioLiquido * 0.225);
    console.log("O salario descontando o INSS e o imposto de renda é de: R$" + salarioLiquidoIr);
}

else {
    salarioLiquidoIr = salarioLiquido - (salarioLiquido * 0,275);
    console.log("O salario descontando o INSS e o imposto de renda é de: R$" + salarioLiquidoIr);
}