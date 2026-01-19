let segundos = 0;

function aceitou() {
    document.getElementById("mensagem").innerHTML =
        "Prometo ser melhor para você a cada dia que passar!! 🤍";

    document.getElementById("musica").play();
    chuvaDeCoracoes();
    iniciarContador();

    setTimeout(() => {
        window.location.href = "potinhos.html";
    }, 4000);
}

function fugir() {
    let botao = document.getElementById("nao");
    botao.style.left = Math.random() * 400 + "px";
    botao.style.top = Math.random() * 200 + "px";
}

function chuvaDeCoracoes() {
    for (let i = 0; i < 50; i++) {
        let coracao = document.createElement("div");
        coracao.innerHTML = "🤍";
        coracao.style.position = "fixed";
        coracao.style.left = Math.random() * window.innerWidth + "px";
        coracao.style.top = "-50px";
        coracao.style.fontSize = "30px";
        coracao.style.animation = "cair 4s linear";
        document.body.appendChild(coracao);

        setTimeout(() => coracao.remove(), 4000);
    }
}

function iniciarContador(){
    setInterval(() => {
        segundos++;
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);

        document.getElementById("tempo").innerHTML =
            `⏳ Estamos juntos há ${horas}h ${minutos % 60}min ${segundos % 60}s 🤍`;
    }, 1000);
}
