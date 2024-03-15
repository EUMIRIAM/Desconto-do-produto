const entrada = require("prompt-sync")({ sigint: true });
let valorDoProduto = parseFloat(entrada("Informe o valor do produto: "));
let pagamento = parseInt(
  entrada("Informe a forma de pagamento À VISTA: 1 OU À PRAZO: 2:")
);

switch (pagamento) {
  case 1:
    console.log("VOCÊ TEM UM DESCONTO 10%");
    let desconto = (10 / 100) * valorDoProduto;
    let valorFinal = valorDoProduto - desconto;
    console.log("Você fica com um desconto de: ", desconto, "R$");
    console.log("O valor à vista fica: ", valorFinal, "R$");
    break;
  case 2:
    console.log("VOCÊ NÃO TEM DESCONTO");
    console.log("O VALOR CONTINUA O MESMO: ", valorDoProduto);
    break;
  default:
    console.log("VOCÊ INFORMOU FORMA DE PAGAMENTO INVÁLIDA");
}
