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
let historiaFinal = "";

function mostraPergunta() {
  if(atual >= perguntas.lenght){
  mostraResultado();
  return;
}
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textConst = "";
      mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));     
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal += afirmacoes + "";
  atual++;
  mostraPergunta();
    }
function mostraResultado(){
  caixaPerguntas.textContent = "";

  
mostraPergunta();
