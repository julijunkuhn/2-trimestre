const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "qual sua cor favorita?",
    alternativas: [
  {
    texto: "rosa",
    afirmação: "afirmação",
  }
      {
    texto: "azul"
    arirmação: "afirmação",
      }, 
      ]
  },
  {
    enunciado: "qual seu passatempo favorito?",
    alternativas: [
      {
    texto: "ficar em casa",
    afirmação: "afirmação",
      }
      {
    texto: "sair de casa",
    afirmação: "afirmação",
      }
      ]
  },
  {
    enunciado: "qual sua comida favorita?",
    alternativas: [
      {
    texto: "churrasco",
    afirmação: "afirmação",
      }
      {
    texto: "sushi",
    afirmação: "afirmação",
      }
      ]
  },
  {
    enunciado: "você prefere frio ou calor?",
    alternativas: [
      {
    texto:"frio",
    afirmação: "afirmação",
      }
      {
    texto: "calor"
    afirmação: "afirmação",
      }
      ]
  },
   {
    enunciado: "você mora em cwb?",
    alternativas: [
      {
    texto: "sim",
    afirmação: "afirmação",
      }
      {
    texto: "não",
    afirmação: "afirmação",
    }
      ]
  },
  ];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
