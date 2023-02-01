var nome = "Felipe Seidi Harakawa";
var valorEmDolar = 64.00;
var cotacaoDoDolar = 5.32;

var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);

alert ("Olá " + nome + ", o valor em dólar de $" + valorEmDolar + " em real é de R$" + valorEmReal);