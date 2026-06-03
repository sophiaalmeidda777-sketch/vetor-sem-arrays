let numeros = [];
let soma = 0;
for (let i = 0; i < 8; i++) {
    numeros[i] = parseFloat(prompt("Digite um número:"));
    soma = soma + numeros[i];
}
let media = soma / 8;
alert("Média: " + media);
for (let i = 0; i < 8; i++) {
    if (numeros[i] > media) {
        alert("acima da média: " + numeros[i]);
    }
}