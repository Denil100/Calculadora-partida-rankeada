function calcularRank() {
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);
    
    if (isNaN(vitorias) || isNaN(derrotas)) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    const saldo = vitorias - derrotas;
    let rank;

    if (vitorias < 10) {
        rank = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "Lendário";
    } else if (vitorias >= 101) {
        rank = "Imortal";
    }

    document.getElementById("resultado").innerText = `Saldo de rankeadas: ${saldo}. Rank do jogador: ${rank}.`;
}
