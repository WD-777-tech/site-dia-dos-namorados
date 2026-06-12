/* =========================================
   GIOVANNA ❤️ WENDEL - SCRIPT.JS
========================================= */

/* ELEMENTOS */
const startBtn = document.getElementById("startBtn");
const introScreen = document.getElementById("intro-screen");
const giftScreen = document.getElementById("gift-screen");
const mainContent = document.getElementById("mainContent");
const giftBox = document.getElementById("giftBox");
const music = document.getElementById("music");

/* =========================================
   INÍCIO CINEMATOGRÁFICO
========================================= */

startBtn.addEventListener("click", () => {
    introScreen.classList.add("hidden");
    giftScreen.classList.remove("hidden");

    startHearts();
});

/* =========================================
   CAIXA DE PRESENTE
========================================= */

giftBox.addEventListener("click", () => {

    giftScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");

    music.play().catch(() => {
        console.log("Autoplay bloqueado, precisa toque do usuário.");
    });

    startCounter();
    startStars();
});

/* =========================================
   CONTADOR DE TEMPO
========================================= */

function startCounter() {

    const counter = document.getElementById("relationshipCounter");

    const startDate = new Date("2025-01-15T00:00:00");

    setInterval(() => {

        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60));

        counter.innerHTML = `
            ❤️ ${days} dias juntos<br>
            ⏳ ${hours} horas de história<br>
            💫 ${minutes} minutos de amor
        `;

    }, 1000);
}

/* =========================================
   CHUVA DE CORAÇÕES
========================================= */

function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";

        heart.style.fontSize = (10 + Math.random() * 20) + "px";

        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 300);

}

/* =========================================
   MOTIVOS (100 MOTIVOS)
========================================= */

const motivos = [
    "Porque você é única ❤️",
    "Porque me faz sorrir sem perceber 😊",
    "Porque teimar com você é engraçado 😂",
    "Porque seu sorriso ilumina tudo ✨",
    "Porque você é meu amor ❤️"
];

let motivoIndex = 0;

document.getElementById("mostrarMotivo").addEventListener("click", () => {

    const motivo = document.getElementById("motivoAtual");

    motivo.innerText = motivos[motivoIndex];

    motivoIndex++;

    if (motivoIndex >= motivos.length) {
        motivoIndex = 0;
    }

});

/* =========================================
   CARTA SECRETA
========================================= */

document.getElementById("abrirCarta").addEventListener("click", () => {

    const senha = document.getElementById("senhaCarta").value;
    const conteudo = document.getElementById("conteudoCarta");

    if (senha === "150125") {

        conteudo.classList.remove("hidden");

    } else {

        alert("Senha incorreta ❤️");

    }

});

/* =========================================
   QUIZ SIMPLES
========================================= */

let acertos = 0;

document.querySelectorAll(".quiz-option").forEach(btn => {

    btn.addEventListener("click", () => {

        if (btn.dataset.correct === "true") {
            acertos++;
            btn.style.background = "#2ecc71";
        } else {
            btn.style.background = "#e74c3c";
        }

    });

});

document.getElementById("finishQuiz").addEventListener("click", () => {

    const result = document.getElementById("quizResult");

    result.innerHTML = `
        ❤️ Você acertou ${acertos} perguntas!
    `;

    if (acertos >= 3) {
        unlockAchievement();
    }

});

/* =========================================
   CONQUISTA SECRETA
========================================= */

function unlockAchievement() {

    const ach = document.getElementById("achievement");

    ach.classList.remove("hidden");

}

/* =========================================
   CAÇA AO TESOURO
========================================= */

let starsFound = 0;

document.querySelectorAll(".hidden-star").forEach(star => {

    star.addEventListener("click", () => {

        star.style.opacity = "1";
        starsFound++;

        document.getElementById("treasureStatus").innerText =
            `Estrelas encontradas: ${starsFound}/5`;

    });

});

/* =========================================
   EFEITO DE ESCRITA FINAL
========================================= */

const finalMessage = `
Amor,

Se você chegou até aqui...
significa muito para mim.

Obrigado por fazer parte da minha vida ❤️

— Wendel
`;

let i = 0;

function typeWriter() {

    const el = document.getElementById("typedMessage");

    if (i < finalMessage.length) {

        el.innerHTML += finalMessage.charAt(i);
        i++;

        setTimeout(typeWriter, 50);

    }
}

/* inicia mensagem final quando abrir main */
setTimeout(typeWriter, 8000);