const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "qual sua cor favorita?",
    alternativas: [
      "rosa",
      "azul",
      ]
  },
  {
    enunciado: "qual seu passatempo favorito?",
    alternativas: [
      "ficar em casa",
      "sair",
      ]
  },
  {
    enunciado: "qual sua comida favorita?",
    alternativas: [
      "churrasco",
      "sushi",
      ]
  },
  {
    enunciado: "você prefere frio ou calor?",
    alternativas: [
      "frio",
      "calor",
      ]
  },
   {
    enunciado: "você mora em cwb?",
    alternativas: [
      "sim",
      "não",
      ]
  },
  ];
  
