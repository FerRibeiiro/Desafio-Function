// Cálculo de partida Rankeadas
function calculoRankeada(vitorias, derrotas) {
    // Variável de saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    // Variável de nível de Rankeada
    let nivel = "";

    // Decisão de Rankeada
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Resultado Rankeada
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Calculo de Rankeada e exibição de resultado
console.log(calculoRankeada(250, 120));
