let usuario = prompt("Informe o usuário: ");
let senha = prompt("Digite a senha: ");

let tentativas = 0;

if (tentativas > 3) {
    console.log("Conta bloqueada")
}
else if (!usuario || usuario.trim() === "") {
    console.log("complete corretamente o campo usuario")
}
else if (senha.length < 8) {
    console.log("senha de no mínimo 8 caracteres")
}
else if (senha === "senac2026" && usuario === "admin") {
    console.log("bem-vindo, admin.")
} else {
    let restantes = 3 - (tentativas + 1);
    let textoTentativas = restantes === 1 ? "tentativa restante" : "tentativas restantes"

    console.log(`usuário ou senha errado. ${restantes} ${textoTentativas}`)
}