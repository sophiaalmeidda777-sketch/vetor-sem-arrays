let nomes = ["Sayuri", "Aika", "Jasmine", "Darian", "Kaito", "Kael", "Irene"];
for (let i = 0; i < 7; i++) {
    nomes[i] = prompt("Digite um nome:");
}
for (let i = 6; i >= 0; i--) {
    alert(nomes[i]);
}