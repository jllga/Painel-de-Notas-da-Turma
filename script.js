// 1. Selecionando elementos do DOM
const campoNome = document.getElementById("campoNome");
const campoNota = document.getElementById("campoNota");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const mensagem = document.getElementById("mensagem");
const listaAlunos = document.querySelector("#listaAlunos");
const resumo = document.querySelector("#resumo");
// 2. Dados iniciais da turma (um array de objetos)
const alunos = [
{ nome: "Ana", nota: 8.5 },
{ nome: "Bruno", nota: 4.0 },
{ nome: "Carla", nota: 6.0 }
];
// 3. Função que desenha a lista de alunos na tela
function mostrarAlunos() {
listaAlunos.textContent = "";
let aprovados = 0;
for (let i = 0; i < alunos.length; i++) {
const aluno = alunos[i];
const item = document.createElement("li");
if (aluno.nota >= 6) {
item.textContent = aluno.nome + " - Nota " + aluno.nota.toFixed(1) + " - Aprovado";
item.classList.add("aprovado");
aprovados++;
} else {
item.textContent = aluno.nome + " - Nota " + aluno.nota.toFixed(1) + " - Reprovado";
item.classList.add("reprovado");
}
listaAlunos.appendChild(item);
}
resumo.textContent = "Aprovados: " + aprovados + " de " + alunos.length;
}
// 4. O que acontece quando o botão é clicado
botaoAdicionar.addEventListener("click", function () {
const nome = campoNome.value.trim();
const textoNota = campoNota.value;
mensagem.classList.remove("erro", "sucesso");
if (nome === "" || textoNota === "") {
mensagem.textContent = "Preencha o nome e a nota.";
mensagem.classList.add("erro");
} else if (Number(textoNota) < 0 || Number(textoNota) > 10) {
mensagem.textContent = "A nota deve estar entre 0 e 10.";
mensagem.classList.add("erro");
} else {
alunos.push({ nome: nome, nota: Number(textoNota) });
mostrarAlunos();
mensagem.textContent = nome + " foi adicionado(a)!";
mensagem.classList.add("sucesso");
campoNome.value = "";
campoNota.value = "";
campoNome.focus();
}
});
// 5. Desenha a lista assim que a página abre
mostrarAlunos();
console.log("Script carregado!");
