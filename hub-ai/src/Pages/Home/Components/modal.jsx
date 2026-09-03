import './modal.scss';


export const conteudosModais = {

  trabalho: {
    titulo: "No Trabalho",
    icone: "fa-solid fa-briefcase",
    tema: "azul",

    subtitulo: "Como a IA pode ajudar?",

    texto:
      "A inteligência artificial pode ajudar você a economizar tempo, organizar tarefas e melhorar sua produtividade no trabalho.",

    itens: [
      "✍️ Criar e revisar textos",
      "📋 Organizar tarefas e informações",
      "⚡ Aumentar a produtividade",
      "💡 Gerar ideias e soluções",
      "📊 Analisar informações"
    ],

    dica:
      "Dê contexto e explique exatamente o que você precisa para obter respostas melhores."
  },


  estudos: {
    titulo: "Nos Estudos",
    icone: "fa-solid fa-graduation-cap",
    tema: "verde",

    subtitulo: "Estude com mais eficiência",

    texto:
      "Use a IA como uma ferramenta de apoio para compreender conteúdos, revisar matérias e organizar seus estudos.",

    itens: [
      "📚 Criar resumos",
      "🧠 Explicar assuntos difíceis",
      "✏️ Criar exercícios",
      "🔄 Fazer revisões",
      "📅 Montar planos de estudo"
    ],

    dica:
      "Tente pedir para a IA explicar um assunto de diferentes maneiras até encontrar uma explicação que faça sentido para você."
  },


  negocios: {
    titulo: "Nos Negócios",
    icone: "fa-solid fa-store",
    tema: "laranja",

    subtitulo: "Potencialize seus negócios",

    texto:
      "A IA pode ajudar empresas a analisar informações, melhorar processos e desenvolver novas estratégias.",

    itens: [
      "📊 Analisar dados",
      "📢 Criar conteúdos de marketing",
      "💬 Melhorar o atendimento",
      "🚀 Desenvolver novas ideias",
      "⚙️ Automatizar tarefas"
    ],

    dica:
      "Identifique tarefas repetitivas ou processos demorados que podem ser melhorados com IA."
  },


  cotidiano: {
    titulo: "Na Vida Cotidiana",
    icone: "fa-solid fa-file",
    tema: "roxo",

    subtitulo: "IA no seu dia a dia",

    texto:
      "A inteligência artificial também pode ajudar em tarefas comuns, organização e planejamento da rotina.",

    itens: [
      "📅 Organizar sua rotina",
      "💡 Encontrar ideias",
      "📝 Planejar atividades",
      "🔎 Encontrar soluções",
      "⏰ Organizar seu tempo"
    ],

    dica:
      "Pense nas tarefas que você realiza frequentemente e veja como a IA pode ajudar a simplificá-las."
  },


  prompts: {
    titulo: "Bons Prompts",
    icone: "fa-solid fa-comment-dots",
    tema: "azul",

    subtitulo: "Aprenda a conversar com a IA",

    texto:
      "Um bom prompt ajuda a IA a entender exatamente o que você deseja e aumenta a qualidade da resposta.",

    itens: [
      "🎯 Defina seu objetivo",
      "📌 Forneça contexto",
      "🗣️ Seja específico",
      "📄 Indique o formato desejado",
      "🔄 Refine o pedido quando necessário"
    ],

    dica:
      "Quanto mais claro for o seu pedido, maiores são as chances de receber uma resposta útil."
  },


  ideias: {
    titulo: "Ideias de Uso",
    icone: "fa-solid fa-lightbulb",
    tema: "verde",

    subtitulo: "Explore novas possibilidades",

    texto:
      "Existem diversas formas criativas e práticas de utilizar a inteligência artificial.",

    itens: [
      "📚 Apoiar seus estudos",
      "💼 Melhorar tarefas do trabalho",
      "💻 Ajudar na programação",
      "🎨 Estimular a criatividade",
      "📝 Auxiliar na escrita"
    ],

    dica:
      "Não pense na IA apenas como uma ferramenta para responder perguntas. Use-a também para gerar ideias e organizar informações."
  },


  seguranca: {
    titulo: "Segurança e Privacidade",
    icone: "fa-solid fa-shield",
    tema: "laranja",

    subtitulo: "Use IA com responsabilidade",

    texto:
      "Ao utilizar ferramentas de inteligência artificial, é importante cuidar dos dados e informações compartilhados.",

    itens: [
      "🔒 Proteja seus dados pessoais",
      "🔎 Verifique informações importantes",
      "📁 Tenha cuidado com arquivos enviados",
      "🔐 Evite compartilhar informações confidenciais",
      "⚙️ Conheça as políticas da ferramenta"
    ],

    dica:
      "Antes de enviar qualquer informação para uma ferramenta de IA, pense se ela realmente precisa daquele dado."
  },


  biblioteca: {
    titulo: "Biblioteca de Prompts",
    icone: "fa-solid fa-puzzle-piece",
    tema: "roxo",

    subtitulo: "Tenha prompts prontos",

    texto:
      "Encontre modelos de prompts para diferentes situações e adapte-os de acordo com suas necessidades.",

    itens: [
      "📚 Prompts para estudos",
      "💼 Prompts para trabalho",
      "💻 Prompts para programação",
      "🎨 Prompts para criatividade",
      "✍️ Prompts para escrita"
    ],

    dica:
      "Use os prompts como ponto de partida. Personalize o contexto e os objetivos para conseguir resultados melhores."
  }

};


export default function Modal({
  titulo,
  icone,
  tema = 'azul',
  fechar,
  children
}) {

  return (

    <div
      className="modal-fundo"
      onClick={fechar}
    >

      <div
        className={`modal ${tema}`}
        onClick={(e) => e.stopPropagation()}
      >

        <button
          type="button"
          className="modal-fechar"
          onClick={fechar}
        >
          ×
        </button>


        <div className="modal-topo">

          <div className="modal-icone">
            <i className={icone}></i>
          </div>


          <div>

            <h2>
              {titulo}
            </h2>

            <span>
              IA na Prática
            </span>

          </div>

        </div>


        <div className="modal-conteudo">

          {children}

        </div>

      </div>

    </div>

  );
}