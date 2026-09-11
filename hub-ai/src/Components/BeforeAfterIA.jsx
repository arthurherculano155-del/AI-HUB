import { useState } from 'react';
import { createPortal } from 'react-dom';
import './BeforeAfterIA.scss';

export default function BeforeAfterIA({ fechar }) {
    const [aberto, setAberto] = useState(null);

    const documentos = [
        {
            titulo: 'E-mail profissional',
            descricao: 'Veja como uma mensagem simples pode ficar mais clara e profissional.',
            icone: 'fa-solid fa-envelope',
            cor: 'azul',

            antes: `Oi professor, não consegui entregar o trabalho porque tive alguns problemas. Dá para entregar amanhã?`,

            depois: `Olá, professor.

Não consegui realizar a entrega do trabalho dentro do prazo devido a alguns imprevistos.

Gostaria de saber se seria possível realizar a entrega amanhã.

Agradeço pela compreensão.`,

            melhorias: [
                'Tom mais profissional',
                'Maior clareza',
                'Melhor organização',
                'Mensagem mais educada'
            ]
        },

        {
            titulo: 'Currículo',
            descricao: 'Transforme informações soltas em uma apresentação profissional.',
            icone: 'fa-solid fa-file-lines',
            cor: 'roxo',

            antes: `Sei HTML, CSS, JavaScript e React. Fiz alguns sites e gosto de programação.`,

            depois: `Conhecimentos em desenvolvimento front-end com HTML, CSS, JavaScript e React.

Experiência prática no desenvolvimento de projetos web responsivos, criação de interfaces e implementação de funcionalidades interativas.

Interesse contínuo em desenvolvimento de software e aprendizado de novas tecnologias.`,

            melhorias: [
                'Linguagem profissional',
                'Competências destacadas',
                'Melhor estrutura',
                'Informações mais valorizadas'
            ]
        },

        {
            titulo: 'Texto escolar',
            descricao: 'Compare um texto simples com uma versão mais organizada e clara.',
            icone: 'fa-solid fa-graduation-cap',
            cor: 'verde',

            antes: `A inteligência artificial está crescendo muito e está sendo usada em vários lugares. Ela ajuda as pessoas e pode fazer várias coisas.`,

            depois: `A inteligência artificial vem ganhando espaço em diferentes áreas da sociedade.

Essa tecnologia pode auxiliar pessoas em tarefas como organização, análise de informações, estudos e criação de conteúdos.

Quando utilizada de forma responsável, a IA pode contribuir para aumentar a produtividade e facilitar diversas atividades do cotidiano.`,

            melhorias: [
                'Menos repetição',
                'Ideias mais desenvolvidas',
                'Melhor conexão entre frases',
                'Maior clareza'
            ]
        },

        {
            titulo: 'Descrição de produto',
            descricao: 'Veja como uma descrição básica pode se tornar mais informativa.',
            icone: 'fa-solid fa-cart-shopping',
            cor: 'laranja',

            antes: `Camiseta preta tamanho M. Muito bonita e confortável.`,

            depois: `Camiseta preta tamanho M, desenvolvida para oferecer conforto e versatilidade no dia a dia.

Possui visual minimalista e fácil combinação com diferentes estilos, sendo indicada tanto para ocasiões casuais quanto para composições mais modernas.`,

            melhorias: [
                'Descrição mais completa',
                'Benefícios destacados',
                'Texto mais atrativo',
                'Maior detalhamento'
            ]
        },

        {
            titulo: 'Anotações de estudo',
            descricao: 'Transforme anotações desorganizadas em um resumo para revisão.',
            icone: 'fa-solid fa-book-open',
            cor: 'rosa',

            antes: `Fotossíntese acontece nas plantas, precisa de luz, tem gás carbônico e água e produz oxigênio.`,

            depois: `Fotossíntese

Conceito:
Processo utilizado pelas plantas para produzir seu próprio alimento.

Principais elementos:
• Luz solar
• Água
• Gás carbônico

Resultado:
A planta produz glicose e libera oxigênio para o ambiente.`,

            melhorias: [
                'Conteúdo separado por tópicos',
                'Leitura mais rápida',
                'Informações organizadas',
                'Facilita a revisão'
            ]
        },

        {
            titulo: 'Apresentação de projeto',
            descricao: 'Veja como uma ideia simples pode ganhar uma estrutura mais convincente.',
            icone: 'fa-solid fa-presentation-screen',
            cor: 'ciano',

            antes: `Nosso projeto é um site sobre inteligência artificial que mostra algumas ferramentas e informações.`,

            depois: `IA na Prática é uma plataforma criada para demonstrar como a inteligência artificial pode ser utilizada de maneira simples e útil no cotidiano.

O projeto reúne ferramentas, exemplos, conteúdos educativos e experiências interativas que ajudam o visitante a compreender diferentes aplicações da IA.

O objetivo é aproximar essa tecnologia das pessoas por meio de exemplos práticos e acessíveis.`,

            melhorias: [
                'Objetivo mais claro',
                'Proposta valorizada',
                'Estrutura profissional',
                'Maior impacto'
            ]
        }
    ];

    function abrirDocumento(index) {
        setAberto(index);
    }

    function voltar() {
        setAberto(null);
    }

    return createPortal(
        <div className="before-after-overlay">

            <section className="before-after-modal">

                <button
                    className="before-after-fechar"
                    onClick={fechar}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {aberto === null ? (
                    <>
                        <header className="before-after-header">

                            <div className="before-after-main-icon">
                                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                            </div>

                            <div>
                                <span>ANTES E DEPOIS</span>

                                <h1>
                                    Veja a <strong>transformação</strong>
                                </h1>

                                <p>
                                    Compare conteúdos antes e depois do uso da
                                    inteligência artificial e descubra como pequenas
                                    melhorias podem deixar textos mais claros,
                                    organizados e profissionais.
                                </p>
                            </div>

                        </header>

                        <div className="before-after-info">

                            <i className="fa-solid fa-wand-magic-sparkles"></i>

                            <p>
                                Escolha um exemplo e veja exatamente o que mudou.
                            </p>

                        </div>

                        <div className="before-after-grid">

                            {documentos.map((documento, index) => (

                                <article
                                    className={`before-after-card ${documento.cor}`}
                                    key={index}
                                    onClick={() => abrirDocumento(index)}
                                >

                                    <div className="before-after-card-icon">
                                        <i className={documento.icone}></i>
                                    </div>

                                    <h2>
                                        {documento.titulo}
                                    </h2>

                                    <p>
                                        {documento.descricao}
                                    </p>

                                    <div className="before-after-card-bottom">

                                        <span>
                                            Ver comparação
                                        </span>

                                        <i className="fa-solid fa-arrow-right"></i>

                                    </div>

                                </article>

                            ))}

                        </div>
                    </>
                ) : (
                    <div className="before-after-opened">

                        <button
                            className="before-after-voltar"
                            onClick={voltar}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            Voltar
                        </button>

                        <div className="before-after-opened-header">

                            <div
                                className={`before-after-opened-icon ${documentos[aberto].cor}`}
                            >
                                <i className={documentos[aberto].icone}></i>
                            </div>

                            <div>
                                <span>COMPARAÇÃO</span>

                                <h1>
                                    {documentos[aberto].titulo}
                                </h1>

                                <p>
                                    {documentos[aberto].descricao}
                                </p>
                            </div>

                        </div>

                        <div className="before-after-comparison">

                            <div className="comparison-box antes">

                                <div className="comparison-header">
                                    <span>ANTES</span>

                                    <i className="fa-solid fa-circle-xmark"></i>
                                </div>

                                <pre>
                                    {documentos[aberto].antes}
                                </pre>

                            </div>

                            <div className="comparison-arrow">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>

                            <div className="comparison-box depois">

                                <div className="comparison-header">
                                    <span>DEPOIS</span>

                                    <i className="fa-solid fa-circle-check"></i>
                                </div>

                                <pre>
                                    {documentos[aberto].depois}
                                </pre>

                            </div>

                        </div>

                        <div className="before-after-improvements">

                            <div className="improvements-title">

                                <i className="fa-solid fa-wand-magic-sparkles"></i>

                                <h2>
                                    O que a IA melhorou?
                                </h2>

                            </div>

                            <div className="improvements-grid">

                                {documentos[aberto].melhorias.map(
                                    (melhoria, index) => (
                                        <div
                                            className="improvement-item"
                                            key={index}
                                        >
                                            <i className="fa-solid fa-check"></i>

                                            <span>
                                                {melhoria}
                                            </span>
                                        </div>
                                    )
                                )}

                            </div>

                        </div>

                    </div>
                )}

            </section>

        </div>,

        document.body
    );
}