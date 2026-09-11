import { useState } from 'react';
import { createPortal } from 'react-dom';
import './extraExplorations.scss';

export default function ExtraExplorations({ fechar }) {
    const [aberto, setAberto] = useState(null);

    const exploracoes = [
        {
            titulo: 'Como a IA aprende?',
            descricao: 'Entenda de forma simples como modelos conseguem reconhecer padrões e gerar respostas.',
            icone: 'fa-solid fa-brain',
            categoria: 'Curiosidade',
            cor: 'roxo',

            conteudo: `Uma inteligência artificial não aprende exatamente como uma pessoa.

Durante o treinamento, o modelo analisa grandes quantidades de dados e procura padrões.

Por exemplo:

Se um modelo observar milhares de textos, ele pode aprender quais palavras costumam aparecer juntas e quais estruturas são mais comuns.

Depois do treinamento, ele utiliza esses padrões para gerar novas respostas.

Isso significa que a IA não precisa guardar cada texto individualmente. Ela aprende relações e padrões presentes nos dados.`,

            curiosidade: 'Modelos modernos podem possuir bilhões de parâmetros utilizados durante a geração de respostas.'
        },

        {
            titulo: 'IA que cria imagens',
            descricao: 'Descubra como uma descrição em texto pode se transformar em uma imagem completamente nova.',
            icone: 'fa-solid fa-image',
            categoria: 'Tecnologia',
            cor: 'azul',

            conteudo: `Algumas inteligências artificiais conseguem criar imagens a partir de descrições escritas.

Você pode escrever algo como:

"Uma cidade futurista durante a noite"

A IA interpreta elementos da descrição, como:

• Objetos
• Ambiente
• Iluminação
• Estilo
• Composição

Depois, o modelo gera uma imagem baseada nos padrões aprendidos durante seu treinamento.

Quanto mais clara e detalhada for a descrição, maior tende a ser o controle sobre o resultado.`,

            curiosidade: 'Esse tipo de descrição enviada para uma IA costuma ser chamado de prompt.'
        },

        {
            titulo: 'IA e programação',
            descricao: 'Veja como desenvolvedores utilizam inteligência artificial durante a criação de software.',
            icone: 'fa-solid fa-code',
            categoria: 'Programação',
            cor: 'ciano',

            conteudo: `A inteligência artificial pode funcionar como uma ferramenta de apoio para programadores.

Ela pode ajudar em tarefas como:

• Explicar códigos
• Encontrar possíveis erros
• Criar exemplos
• Sugerir estruturas
• Gerar documentação
• Explicar bibliotecas e funções

Porém, o desenvolvedor continua sendo responsável por entender, testar e validar o código.

A IA funciona melhor como uma ferramenta de apoio, e não como substituta do conhecimento de programação.`,

            curiosidade: 'Ferramentas de IA já estão integradas diretamente em diversos editores de código.'
        },

        {
            titulo: 'IA multimodal',
            descricao: 'Conheça sistemas capazes de trabalhar com texto, imagens, áudio e outros tipos de informação.',
            icone: 'fa-solid fa-layer-group',
            categoria: 'Tecnologia',
            cor: 'rosa',

            conteudo: `Uma IA multimodal consegue trabalhar com diferentes tipos de informação.

Em vez de compreender apenas texto, alguns sistemas conseguem analisar:

• Imagens
• Áudio
• Documentos
• Vídeos
• Gráficos

Isso permite interações muito mais completas.

Por exemplo, uma pessoa pode enviar uma imagem de um gráfico e pedir que a IA explique os dados apresentados.`,

            curiosidade: 'Multimodal significa justamente trabalhar com múltiplas modalidades de informação.'
        },

        {
            titulo: 'O futuro dos assistentes',
            descricao: 'Explore como assistentes de IA podem se tornar cada vez mais integrados às tarefas digitais.',
            icone: 'fa-solid fa-robot',
            categoria: 'Futuro',
            cor: 'verde',

            conteudo: `Assistentes de inteligência artificial estão evoluindo de simples sistemas de perguntas e respostas para ferramentas capazes de auxiliar em tarefas maiores.

Eles podem ajudar a:

• Organizar informações
• Analisar documentos
• Criar conteúdos
• Planejar tarefas
• Pesquisar informações
• Automatizar processos

A tendência é que esses sistemas fiquem cada vez mais integrados às ferramentas utilizadas no cotidiano.`,

            curiosidade: 'Alguns sistemas já conseguem utilizar diferentes ferramentas durante uma mesma tarefa.'
        },

        {
            titulo: 'IA no cotidiano',
            descricao: 'Descubra lugares em que você provavelmente já utiliza inteligência artificial sem perceber.',
            icone: 'fa-solid fa-mobile-screen-button',
            categoria: 'Cotidiano',
            cor: 'laranja',

            conteudo: `A inteligência artificial já aparece em diversas tecnologias utilizadas no dia a dia.

Alguns exemplos são:

• Sistemas de recomendação
• Filtros de spam
• Reconhecimento de voz
• Tradução automática
• Aplicativos de mapas
• Câmeras de celulares
• Recomendações de músicas e vídeos

Em muitos casos, a IA funciona nos bastidores e o usuário nem percebe que ela está sendo utilizada.`,

            curiosidade: 'Muitos aplicativos utilizam diferentes modelos de IA ao mesmo tempo.'
        }
    ];

    function abrirExploracao(index) {
        setAberto(index);
    }

    function voltar() {
        setAberto(null);
    }

    return createPortal(
        <div className="extra-explorations-overlay">

            <section className="extra-explorations-modal">

                <button
                    className="extra-explorations-fechar"
                    onClick={fechar}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {aberto === null ? (
                    <>
                        <header className="extra-explorations-header">

                            <div className="extra-explorations-main-icon">
                                <i className="fa-solid fa-compass"></i>
                            </div>

                            <div>
                                <span>EXPLORE MAIS</span>

                                <h1>
                                    Explorações <strong>extras</strong>
                                </h1>

                                <p>
                                    Descubra curiosidades, tecnologias e ideias
                                    que mostram como a inteligência artificial
                                    funciona e para onde ela pode evoluir.
                                </p>
                            </div>

                        </header>

                        <div className="extra-explorations-tip">

                            <i className="fa-solid fa-compass"></i>

                            <p>
                                Escolha um tema e explore algo novo sobre inteligência artificial.
                            </p>

                        </div>

                        <div className="extra-explorations-grid">

                            {exploracoes.map((exploracao, index) => (

                                <article
                                    className={`extra-exploration-card ${exploracao.cor}`}
                                    key={index}
                                    onClick={() => abrirExploracao(index)}
                                >

                                    <div className="extra-exploration-top">

                                        <div className="extra-exploration-icon">
                                            <i className={exploracao.icone}></i>
                                        </div>

                                        <span>
                                            {exploracao.categoria}
                                        </span>

                                    </div>

                                    <h2>
                                        {exploracao.titulo}
                                    </h2>

                                    <p>
                                        {exploracao.descricao}
                                    </p>

                                    <div className="extra-exploration-bottom">

                                        <span>
                                            Explorar
                                        </span>

                                        <i className="fa-solid fa-arrow-right"></i>

                                    </div>

                                </article>

                            ))}

                        </div>
                    </>
                ) : (
                    <div className="extra-exploration-opened">

                        <button
                            className="extra-exploration-voltar"
                            onClick={voltar}
                        >
                            <i className="fa-solid fa-arrow-left"></i>

                            Voltar
                        </button>

                        <div className="extra-exploration-opened-header">

                            <div className="extra-exploration-big-icon">
                                <i className={exploracoes[aberto].icone}></i>
                            </div>

                            <div>
                                <span>
                                    {exploracoes[aberto].categoria}
                                </span>

                                <h1>
                                    {exploracoes[aberto].titulo}
                                </h1>

                                <p>
                                    {exploracoes[aberto].descricao}
                                </p>
                            </div>

                        </div>

                        <div className="extra-exploration-content">

                            <div className="extra-exploration-content-title">
                                <i className="fa-solid fa-book-open"></i>

                                <h2>
                                    Descubra
                                </h2>
                            </div>

                            <pre>
                                {exploracoes[aberto].conteudo}
                            </pre>

                        </div>

                        <div className="extra-exploration-curiosity">

                            <div className="curiosity-icon">
                                <i className="fa-solid fa-lightbulb"></i>
                            </div>

                            <div>
                                <span>VOCÊ SABIA?</span>

                                <p>
                                    {exploracoes[aberto].curiosidade}
                                </p>
                            </div>

                        </div>

                    </div>
                )}

            </section>

        </div>,

        document.body
    );
}