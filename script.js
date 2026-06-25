/* =====================================
PROJETO: AGRONEGÓCIO SUSTENTÁVEL
ARQUIVO: script.js
===================================== */

// ===============================
// INICIALIZAÇÃO
// ===============================

document.addEventListener("DOMContentLoaded", () => {
iniciarMenu();
iniciarAnimacoes();
iniciarFormulario();
iniciarQuiz();
iniciarCalculadora();
iniciarGaleria();
});

// ===============================
// MENU RESPONSIVO
// ===============================

function iniciarMenu() {
const botaoMenu = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

```
if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}
```

}

// ===============================
// ANIMAÇÕES AO ROLAR A PÁGINA
// ===============================

function iniciarAnimacoes() {

```
const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }

    });

}, {
    threshold: 0.2
});

elementos.forEach(elemento => {
    observer.observe(elemento);
});
```

}

// ===============================
// FORMULÁRIO DE CONTATO
// ===============================

function iniciarFormulario() {

```
const formulario = document.querySelector("#formContato");

if (!formulario) return;

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    if(nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if(!validarEmail(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});
```

}

function validarEmail(email) {

```
const regex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return regex.test(email);
```

}

// ===============================
// QUIZ SUSTENTÁVEL
// ===============================

function iniciarQuiz() {

```
const botaoQuiz = document.querySelector("#finalizarQuiz");

if (!botaoQuiz) return;

botaoQuiz.addEventListener("click", calcularQuiz);
```

}

function calcularQuiz() {

```
let pontos = 0;

const respostas =
document.querySelectorAll("input[type='radio']:checked");

respostas.forEach(resposta => {
    pontos += Number(resposta.value);
});

let resultado = "";

if (pontos >= 8) {
    resultado = "🌱 Produtor Sustentável";
} else if (pontos >= 5) {
    resultado = "🍃 Amigo do Meio Ambiente";
} else {
    resultado = "⚠️ Pode melhorar suas práticas sustentáveis";
}

document.querySelector("#resultadoQuiz").innerHTML =
    resultado;
```

}

// ===============================
// CALCULADORA AMBIENTAL
// ===============================

function iniciarCalculadora() {

```
const calcular =
document.querySelector("#calcularImpacto");

if (!calcular) return;

calcular.addEventListener("click", calcularImpacto);
```

}

function calcularImpacto() {

```
const agua =
Number(document.querySelector("#agua").value);

const energia =
Number(document.querySelector("#energia").value);

const carbono =
Number(document.querySelector("#carbono").value);

const impacto =
agua + energia + carbono;

let nivel = "";

if (impacto <= 100) {

    nivel = "🟢 Baixo Impacto Ambiental";

} else if (impacto <= 250) {

    nivel = "🟡 Impacto Moderado";

} else {

    nivel = "🔴 Alto Impacto Ambiental";

}

document.querySelector("#resultadoImpacto")
.innerHTML = nivel;
```

}

// ===============================
// GALERIA INTERATIVA
// ===============================

function iniciarGaleria() {

```
const imagens =
document.querySelectorAll(".galeria img");

imagens.forEach(imagem => {

    imagem.addEventListener("click", () => {

        const modal =
        document.querySelector("#modal");

        const imagemModal =
        document.querySelector("#imagemModal");

        imagemModal.src = imagem.src;

        modal.style.display = "flex";

    });

});

const fechar =
document.querySelector("#fecharModal");

if(fechar){

    fechar.addEventListener("click", () => {

        document.querySelector("#modal")
        .style.display = "none";

    });

}
```

}

// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

window.addEventListener("scroll", () => {

```
const topo =
document.querySelector("#voltarTopo");

if(!topo) return;

if(window.scrollY > 500){

    topo.style.display = "block";

} else {

    topo.style.display = "none";

}
```

});

function voltarAoTopo(){

```
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```

}

// ===============================
// COMPARTILHAMENTO
// ===============================

function compartilharProjeto() {

```
if (navigator.share) {

    navigator.share({
        title: "Agronegócio Sustentável",
        text: "Conheça tecnologias que unem produção agrícola e preservação ambiental.",
        url: window.location.href
    });

} else {

    alert("Seu navegador não suporta compartilhamento.");

}
```

}

