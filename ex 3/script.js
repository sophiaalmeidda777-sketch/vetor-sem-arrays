let nomes = [];
let idades = [];
for (let i = 0; i < 9; i++) {
    nomes[i] = prompt("Digite nome:");
    idades[i] = parseInt(prompt("Digite idade:"));
}
alert("Pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        alert(nomes[i] + " - " + idades[i] + " anos");
    }
}