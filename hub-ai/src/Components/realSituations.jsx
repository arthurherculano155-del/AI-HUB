import { useState } from 'react';
import { createPortal } from 'react-dom';
import './realSituations.scss';

export default function RealSituations({ fechar }) {
    const [situacaoAberta, setSituacaoAberta] = useState(null);

    const situacoes = [
        {
            titulo: 'Organizar uma rotina corrida',
            descricao: 'Você tem várias tarefas no dia e não sabe como organizar seu tempo.',
            categoria: 'Organização',
            icone: 'fa-solid fa-calendar-check',
            cor: 'verde',
            problema: 'Tenho escola, curso, tarefas e compromissos durante a semana e estou tendo dificuldade para organizar tudo.',
            comoAjudar: 'A IA pode analisar seus horários, prioridades e compromissos para sugerir uma rotina mais organizada e realista.',
            prompt: `Tenho uma rotina corrida e quero organizar melhor meu tempo.

Meus compromissos são:
[COLOQUE SEUS COMPROMISSOS]

Meus horários disponíveis são:
[COLOQUE SEUS HORÁRIOS]

Minhas prioridades são:
[COLOQUE SUAS PRIORIDADES]

Crie uma rotina organizada e realista para mim.

Inclua períodos de descanso e evite sobrecarregar meus horários.`
        },

        {
            titulo: 'Entender um conteúdo difícil',
            descricao: 'Você está estudando um assunto, mas a explicação parece complicada.',
            categoria: 'Estudos',
            icone: 'fa-solid fa-graduation-cap',
            cor: 'azul',
            problema: 'Estou estudando um conteúdo, mas não consigo entender a explicação do material.',
            comoAjudar: 'A IA pode explicar o mesmo assunto de outras maneiras, criar exemplos e adaptar a explicação ao seu nível.',
            prompt: `Estou estudando o seguinte assunto:

[COLOQUE O ASSUNTO]

Estou tendo dificuldade principalmente em:

[EXPLIQUE SUA DIFICULDADE]

Explique esse conteúdo de maneira simples, como se estivesse ensinando alguém que está aprendendo pela primeira vez.

Depois:
- Dê um exemplo
- Faça uma analogia
- Crie uma pergunta para eu testar se entendi`
        },

        {
            titulo: 'Escrever um e-mail importante',
            descricao: 'Você precisa enviar uma mensagem profissional e não sabe como escrever.',
            categoria: 'Trabalho',
            icone: 'fa-solid fa-envelope',
            cor: 'roxo',
            problema: 'Preciso enviar um e-mail profissional, mas estou com dificuldade para deixar a mensagem clara e educada.',
            comoAjudar: 'A IA pode ajudar a estruturar a mensagem, melhorar a clareza e adaptar o tom para diferentes situações.',
            prompt: `Preciso escrever um e-mail profissional.

Destinatário:
[QUEM VAI RECEBER]

Objetivo:
[O QUE VOCÊ PRECISA PEDIR OU INFORMAR]

Informações importantes:
[INFORMAÇÕES]

Escreva um e-mail claro, educado e profissional.

Evite linguagem exageradamente formal e mantenha a mensagem objetiva.`
        },

        {
            titulo: 'Planejar uma compra',
            descricao: 'Você está escolhendo entre diferentes produtos e quer tomar uma decisão melhor.',
            categoria: 'Decisão',
            icone: 'fa-solid fa-cart-shopping',
            cor: 'laranja',
            problema: 'Tenho algumas opções de produtos e estou com dificuldade para decidir qual realmente vale mais a pena.',
            comoAjudar: 'A IA pode organizar os critérios, comparar vantagens e desvantagens e ajudar você a analisar as opções.',
            prompt: `Quero comparar alguns produtos antes de decidir qual comprar.

Produtos:
[LISTE OS PRODUTOS]

Meu orçamento:
[VALOR]

O que considero mais importante:
[EXEMPLO: preço, qualidade, bateria, desempenho]

Compare as opções usando esses critérios.

Mostre:
- Pontos positivos
- Pontos negativos
- Melhor opção para cada tipo de uso

Não tome a decisão por mim. Apenas organize as informações para facilitar minha escolha.`
        },

        {
            titulo: 'Ter ideias para um projeto',
            descricao: 'Você precisa criar algo novo, mas está sem ideias para começar.',
            categoria: 'Criatividade',
            icone: 'fa-solid fa-lightbulb',
            cor: 'rosa',
            problema: 'Preciso criar um projeto, mas estou sem ideias interessantes e não sei por onde começar.',
            comoAjudar: 'A IA pode funcionar como uma ferramenta de brainstorming, sugerindo possibilidades que você pode adaptar e desenvolver.',
            prompt: `Preciso de ideias para o seguinte projeto:

[EXPLIQUE O PROJETO]

O público é:
[PÚBLICO]

O objetivo principal é:
[OBJETIVO]

Crie 5 ideias diferentes.

Para cada ideia, informe:
- Nome
- Como funcionaria
- O que teria de diferente
- Nível de dificuldade

Priorize ideias que sejam possíveis de colocar em prática.`
        },

        {
            titulo: 'Resolver um problema do dia a dia',
            descricao: 'Você encontrou um problema e quer analisar diferentes maneiras de resolvê-lo.',
            categoria: 'Cotidiano',
            icone: 'fa-solid fa-puzzle-piece',
            cor: 'ciano',
            problema: 'Tenho um problema do dia a dia e quero pensar em diferentes soluções antes de decidir o que fazer.',
            comoAjudar: 'A IA pode ajudar a dividir o problema em partes, levantar alternativas e mostrar vantagens e limitações de cada opção.',
            prompt: `Estou enfrentando esta situação:

[DESCREVA O PROBLEMA]

Meu objetivo é:

[OBJETIVO]

Minhas limitações são:

[EXEMPLO: tempo, dinheiro, recursos]

Analise a situação e apresente possíveis caminhos.

Para cada alternativa, mostre:
- Vantagens
- Desvantagens
- Dificuldade
- O que eu deveria considerar antes de escolher`
        }
    ];

    function abrirSituacao(index) {
        setSituacaoAberta(index);
    }

    function voltar() {
        setSituacaoAberta(null);
    }

    async function copiarPrompt() {
        await navigator.clipboard.writeText(
            situacoes[situacaoAberta].prompt
        );
    }

    return createPortal(
        <div className="real-situations-overlay">

            <section className="real-situations-modal">

                <button
                    className="real-situations-fechar"
                    onClick={fechar}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {situacaoAberta === null ? (
                    <>
                        <header className="real-situations-header">

                            <div className="real-situations-header-icon">
                                <i className="fa-solid fa-comments"></i>
                            </div>

                            <div>
                                <span>SITUAÇÕES REAIS</span>

                                <h1>
                                    IA no <strong>dia a dia</strong>
                                </h1>

                                <p>
                                    Explore situações comuns e descubra maneiras
                                    práticas de usar inteligência artificial para
                                    organizar, criar, aprender e tomar decisões.
                                </p>
                            </div>

                        </header>

                        <div className="real-situations-info">
                            <i className="fa-solid fa-lightbulb"></i>

                            <p>
                                Escolha uma situação abaixo para descobrir como
                                a IA poderia ajudar.
                            </p>
                        </div>

                        <div className="real-situations-grid">

                            {situacoes.map((situacao, index) => (
                                <article
                                    className={`real-situation-card ${situacao.cor}`}
                                    key={index}
                                    onClick={() => abrirSituacao(index)}
                                >

                                    <div className="real-situation-card-top">

                                        <div className="real-situation-icon">
                                            <i className={situacao.icone}></i>
                                        </div>

                                        <span>
                                            {situacao.categoria}
                                        </span>

                                    </div>

                                    <h2>
                                        {situacao.titulo}
                                    </h2>

                                    <p>
                                        {situacao.descricao}
                                    </p>

                                    <div className="real-situation-open">
                                        <span>
                                            Explorar situação
                                        </span>

                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>

                                </article>
                            ))}

                        </div>
                    </>
                ) : (
                    <div className="real-situation-opened">

                        <button
                            className="real-situation-back"
                            onClick={voltar}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            Voltar
                        </button>

                        <div className="real-situation-opened-header">

                            <div
                                className={`real-situation-big-icon ${situacoes[situacaoAberta].cor}`}
                            >
                                <i
                                    className={
                                        situacoes[situacaoAberta].icone
                                    }
                                ></i>
                            </div>

                            <div>
                                <span>
                                    {situacoes[situacaoAberta].categoria}
                                </span>

                                <h1>
                                    {situacoes[situacaoAberta].titulo}
                                </h1>

                                <p>
                                    {situacoes[situacaoAberta].descricao}
                                </p>
                            </div>

                        </div>

                        <div className="real-situation-details">

                            <div className="real-situation-box">

                                <div className="real-situation-box-title">
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                    <h3>A situação</h3>
                                </div>

                                <p>
                                    {situacoes[situacaoAberta].problema}
                                </p>

                            </div>

                            <div className="real-situation-box destaque">

                                <div className="real-situation-box-title">
                                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                                    <h3>Como a IA pode ajudar?</h3>
                                </div>

                                <p>
                                    {situacoes[situacaoAberta].comoAjudar}
                                </p>

                            </div>

                        </div>

                        <div className="real-situation-prompt">

                            <div className="real-situation-prompt-header">

                                <div>
                                    <i className="fa-solid fa-terminal"></i>

                                    <span>Exemplo de prompt</span>
                                </div>

                                <button onClick={copiarPrompt}>
                                    <i className="fa-regular fa-copy"></i>
                                    Copiar prompt
                                </button>

                            </div>

                            <pre>
                                {situacoes[situacaoAberta].prompt}
                            </pre>

                        </div>

                    </div>
                )}

            </section>

        </div>,

        document.body
    );
}