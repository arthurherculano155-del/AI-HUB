import './modal.scss';


export const conteudosModais = {

  trabalho: {
    titulo: "No Trabalho",
    icone: "fa-solid fa-briefcase",
    tema: "azul",

    subtitulo: "Use a IA para trabalhar melhor",

    texto:
      "A inteligência artificial pode funcionar como uma assistente para tarefas do dia a dia. Ela pode ajudar a escrever, organizar informações, resumir conteúdos e encontrar novas maneiras de realizar uma tarefa.",

    itens: [
      "✍️ Escreva e revise textos profissionais, como e-mails, relatórios e comunicados.",
      "📋 Organize listas de tarefas, reuniões, informações e atividades por prioridade.",
      "⚡ Economize tempo automatizando tarefas repetitivas e criando modelos prontos.",
      "💡 Use a IA para encontrar diferentes soluções para problemas e gerar novas ideias.",
      "📊 Transforme informações extensas em resumos, tabelas e análises mais fáceis de entender."
    ],

    dica:
      "Em vez de apenas pedir uma resposta, explique o contexto, o objetivo e o formato que você deseja."
  },


  estudos: {
    titulo: "Nos Estudos",
    icone: "fa-solid fa-graduation-cap",
    tema: "verde",

    subtitulo: "Transforme a IA em uma ferramenta de aprendizado",

    texto:
      "A IA pode ser uma ótima ferramenta de apoio aos estudos. Ela pode explicar conceitos, criar exercícios e ajudar na organização, mas o objetivo deve ser compreender o conteúdo e desenvolver seu próprio conhecimento.",

    itens: [
      "📚 Peça resumos de conteúdos longos e use-os para revisar os principais pontos.",
      "🧠 Quando um assunto parecer difícil, peça uma explicação mais simples e exemplos práticos.",
      "✏️ Crie exercícios personalizados para praticar antes de uma prova ou atividade.",
      "🔄 Faça revisões pedindo perguntas sobre o conteúdo que você acabou de estudar.",
      "📅 Monte um plano de estudos dividindo matérias e conteúdos em pequenas etapas."
    ],

    dica:
      "Uma boa estratégia é pedir para a IA explicar o conteúdo e depois tentar responder perguntas sozinho."
  },


  negocios: {
    titulo: "Nos Negócios",
    icone: "fa-solid fa-store",
    tema: "laranja",

    subtitulo: "Use a IA para melhorar processos e ideias",

    texto:
      "Empresas podem utilizar inteligência artificial para analisar informações, criar conteúdos, melhorar o atendimento e encontrar oportunidades.",

    itens: [
      "📊 Analise dados e informações para identificar padrões, problemas e oportunidades.",
      "📢 Crie ideias para campanhas, publicações e conteúdos de divulgação.",
      "💬 Desenvolva respostas e modelos de atendimento para perguntas frequentes.",
      "🚀 Explore novas ideias de produtos, serviços e estratégias para um negócio.",
      "⚙️ Identifique tarefas repetitivas que podem ser organizadas ou automatizadas."
    ],

    dica:
      "Comece pelas tarefas que consomem muito tempo e exigem pouco trabalho criativo."
  },


  cotidiano: {
    titulo: "Na Vida Cotidiana",
    icone: "fa-solid fa-file",
    tema: "roxo",

    subtitulo: "Pequenas tarefas também podem ficar mais fáceis",

    texto:
      "A inteligência artificial também pode ajudar a organizar a rotina, planejar atividades, encontrar ideias e resolver problemas do dia a dia.",

    itens: [
      "📅 Organize compromissos e atividades criando uma rotina mais fácil de acompanhar.",
      "💡 Gere ideias para projetos pessoais, atividades, passeios ou momentos de lazer.",
      "📝 Planeje tarefas dividindo uma atividade grande em pequenas etapas.",
      "🔎 Apresente um problema para a IA e peça diferentes possibilidades para solucioná-lo.",
      "⏰ Organize seu tempo criando listas de prioridades e horários para cada atividade."
    ],

    dica:
      "Pense em algo que você faz frequentemente e tente descobrir como a IA poderia ajudar."
  },


  prompts: {
    titulo: "Bons Prompts",
    icone: "fa-solid fa-comment-dots",
    tema: "azul",

    subtitulo: "Aprenda a dar instruções melhores para a IA",

    texto:
      "Prompt é a instrução que você fornece para uma inteligência artificial. Quanto mais clara e completa for essa instrução, mais fácil será para a IA entender o que você precisa.",

    itens: [
      "🎯 Defina claramente o objetivo da tarefa que você quer realizar.",
      "📌 Forneça contexto suficiente para que a IA entenda a situação.",
      "🗣️ Explique exatamente o que você espera da resposta.",
      "📄 Informe o formato desejado, como lista, tabela, resumo ou código.",
      "🔄 Analise a primeira resposta e faça novos pedidos para melhorar o resultado."
    ],

    dica:
      "Uma estrutura simples para criar prompts é: objetivo + contexto + instruções + formato desejado."
  },


  ideias: {
    titulo: "Ideias de Uso",
    icone: "fa-solid fa-lightbulb",
    tema: "verde",

    subtitulo: "Descubra novas maneiras de usar a inteligência artificial",

    texto:
      "A IA pode ser utilizada de muitas formas diferentes. O segredo é pensar nas tarefas que você já realiza e imaginar como uma ferramenta inteligente poderia ajudar.",

    itens: [
      "📚 Transforme um conteúdo difícil em uma explicação mais simples.",
      "💼 Use a IA para organizar informações e auxiliar em tarefas profissionais.",
      "💻 Peça ajuda para entender conceitos de programação.",
      "🎨 Gere ideias para projetos, apresentações, textos e trabalhos criativos.",
      "📝 Utilize a IA como apoio para planejar, revisar e melhorar seus textos."
    ],

    dica:
      "Não existe apenas uma maneira correta de utilizar IA. Experimente diferentes abordagens."
  },


  seguranca: {
    titulo: "Segurança e Privacidade",
    icone: "fa-solid fa-shield",
    tema: "laranja",

    subtitulo: "Use inteligência artificial com responsabilidade",

    texto:
      "Ao utilizar ferramentas de inteligência artificial, é importante pensar antes de compartilhar dados pessoais, informações privadas ou documentos.",

    itens: [
      "🔒 Evite compartilhar senhas e documentos pessoais.",
      "🔎 Confira informações importantes antes de utilizá-las.",
      "📁 Tenha cuidado ao enviar arquivos que contenham informações privadas.",
      "🔐 Não compartilhe informações confidenciais de outras pessoas.",
      "⚙️ Conheça as regras e políticas de privacidade da ferramenta."
    ],

    dica:
      "Antes de enviar qualquer informação para uma IA, pense se ela realmente precisa desse dado."
  },


  biblioteca: {
    titulo: "Biblioteca de Prompts",
    icone: "fa-solid fa-puzzle-piece",
    tema: "roxo",

    subtitulo: "Prompts prontos para você adaptar",

    texto:
      "Aqui você encontra exemplos de prompts que podem servir como ponto de partida. Substitua as informações entre colchetes e adapte o pedido para sua situação.",

    itens: [
      "📚 Estudos — \"Explique [assunto] de forma simples, como se estivesse ensinando alguém que está começando. Depois, dê 3 exemplos práticos.\"",

      "✍️ Escrita — \"Revise o texto abaixo, corrigindo erros de português e melhorando a clareza sem alterar a ideia principal: [texto]\"",

      "💼 Trabalho — \"Organize estas tarefas por prioridade e sugira uma ordem eficiente para realizá-las: [lista de tarefas]\"",

      "💻 Programação — \"Analise este código em [linguagem], explique o que ele faz e indique possíveis problemas: [código]\"",

      "💡 Ideias — \"Gere 10 ideias para [projeto/atividade]. Para cada uma, explique brevemente como poderia ser colocada em prática.\""
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
  texto,
  itens = [],
  dica
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


          <div className="modal-titulo">

            <h2>
              {titulo}
            </h2>

            <span>
              IA na Prática
            </span>

          </div>

        </div>


        <div className="modal-conteudo">

          <div className="modal-introducao">

            <span className="modal-subtitulo">
              Conteúdo
            </span>

            <p className="modal-texto">
              {texto}
            </p>

          </div>


          <div className="modal-itens">

            {itens.map((item, index) => {

              const emoji = item.substring(0, 2);
              const textoItem = item.substring(2).trim();

              return (

                <div
                  className="modal-item"
                  key={index}
                >

                  <div className="item-icone">
                    {emoji}
                  </div>


                  <div className="item-conteudo">

                    <span className="item-numero">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p>
                      {textoItem}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>


          {dica && (

            <div className="modal-dica">
              <strong>Dica:</strong> {dica}
            </div>

          )}

        </div>

      </div>

    </div>

  );
}