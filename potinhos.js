const mensagens = Array.from({ length: 365 }, (_, i) =>
  `💜 Dia ${i + 1}\n\nMeu amor, este é mais um lembrete de como você é especial para mim 🤍`
);

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const texto = document.getElementById("mensagem");

const hoje = new Date().toDateString();

// quantos potinhos já foram abertos
let abertos = JSON.parse(localStorage.getItem("potinhosAbertos")) || [];

// cria os 365 potinhos
for (let i = 0; i < 365; i++) {
  const potinho = document.createElement("div");
  potinho.classList.add("potinho");
  potinho.innerHTML = `🤍<br>${i + 1}`;

  if (abertos.includes(i)) {
    potinho.classList.add("aberto");
  }

  potinho.onclick = () => abrirPotinho(i, potinho);
  grid.appendChild(potinho);
}

function abrirPotinho(index, potinho) {
  const ultimoDia = localStorage.getItem("ultimoDiaAberto");

  // se já abriu hoje
  if (ultimoDia === hoje) {
    alert("🤍 Você já abriu o potinho de hoje.\nVolte amanhã!");
    return;
  }

  // abre o potinho
  texto.innerText = mensagens[index];
  modal.style.display = "flex";

  abertos.push(index);
  localStorage.setItem("potinhosAbertos", JSON.stringify(abertos));
  localStorage.setItem("ultimoDiaAberto", hoje);

  potinho.classList.add("aberto");
}

function fechar() {
  modal.style.display = "none";
}

