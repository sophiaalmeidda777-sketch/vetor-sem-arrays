let vetor1 = [];
let vetor2 = [];
let resultado = "";
for (let i = 0; i < 5; i++) {
    vetor1[i] = parseInt(prompt("Vetor 1:"));
}
for (let i = 0; i < 5; i++) {
    vetor2[i] = parseInt(prompt("Vetor 2:"));
}
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (vetor1[i] === vetor2[j]) {
            resultado = resultado + vetor1[i] + "";
}
}
}
alert("Elementos em comum: " + resultado);