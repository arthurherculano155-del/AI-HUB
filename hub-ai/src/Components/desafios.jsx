import { useState } from 'react';
import { createPortal } from 'react-dom';
import './desafios.scss';

export default function Desafios({ fechar }) {
    const [desafioAberto, setDesafioAberto] = useState(null);
    const [resposta, setResposta] = useState('');
    const [resultado, setResultado] = useState(null);
    const [concluidos, setConcluidos] = useState([]);

    const desafios = [
        {
            id: 1,
            titulo: 'Crie um bom prompt',
            descricao: 'Monte um prompt detalhado para gerar uma imagem com IA.',
            nivel: 'Iniciante',
            icone: 'fa-solid fa-image',
            cor: 'azul',
            tipo: 'texto',

            enunciado:
                'Crie um prompt para gerar uma imagem de uma cidade futurista durante a noite.',

            dica:
                'Um bom prompt pode informar o que aparece, o ambiente, o estilo, a iluminação e outros detalhes.',

            placeholder:
                'Exemplo: Uma cidade futurista durante a noite...',

            criterios: [
                {
                    nome: 'Descreveu a cidade',
                    testar: (texto) =>
                        texto.toLowerCase().includes('cidade')
                },
                {
                    nome: 'Indicou que é futurista',
                    testar: (texto) =>
                        texto.toLowerCase().includes('futur')
                },
                {
                    nome: 'Indicou o período noturno',
                    testar: (texto) =>
                        texto.toLowerCase().includes('noite') ||
                        texto.toLowerCase().includes('noturn')
                },
                {
                    nome: 'Adicionou detalhes suficientes',
                    testar: (texto) =>
                        texto.trim().length >= 80
                }
            ]
        },

        {
            id: 2,
            titulo: 'Melhore o texto',
            descricao: 'Escolha qual versão usa a IA de maneira mais eficiente.',
            nivel: 'Iniciante',
            icone: 'fa-solid fa-align-left',
            cor: 'roxo',
            tipo: 'opcoes',

            enunciado:
                'Você precisa transformar a frase "Preciso faltar amanhã" em uma mensagem profissional. Qual opção é melhor?',

            opcoes: [
                {
                    texto: 'Não vou amanhã porque não posso.',
                    correta: false
                },
                {
                    texto: 'Olá. Gostaria de informar que amanhã não poderei comparecer devido a um compromisso. Agradeço pela compreensão.',
                    correta: true
                },
                {
                    texto: 'Amanhã vou faltar, beleza?',
                    correta: false
                }
            ],

            explicacao:
                'A segunda opção explica a situação com clareza, mantém um tom respeitoso e utiliza uma estrutura mais profissional.'
        },

        {
            id: 3,
            titulo: 'Resolva uma situação',
            descricao: 'Escolha a melhor maneira de utilizar IA em um problema real.',
            nivel: 'Intermediário',
            icone: 'fa-solid fa-gears',
            cor: 'rosa',
            tipo: 'opcoes',

            enunciado:
                'Você tem uma prova em 7 dias e precisa estudar 5 matérias. Qual seria a melhor forma de usar uma IA?',

            opcoes: [
                {
                    texto: 'Pedir para a IA fazer a prova no meu lugar.',
                    correta: false
                },
                {
                    texto: 'Pedir apenas um resumo de todas as matérias e não estudar mais nada.',
                    correta: false
                },
                {
                    texto: 'Informar as matérias, horários disponíveis e dificuldades para pedir um cronograma de estudos.',
                    correta: true
                }
            ],

            explicacao:
                'A IA funciona melhor como ferramenta de apoio. Informar sua rotina e dificuldades permite criar um planejamento adaptado sem substituir seus estudos.'
        },

        {
            id: 4,
            titulo: 'Escolha a ferramenta',
            descricao: 'Descubra qual tipo de IA faz mais sentido para uma tarefa.',
            nivel: 'Intermediário',
            icone: 'fa-solid fa-toolbox',
            cor: 'verde',
            tipo: 'opcoes',

            enunciado:
                'Você precisa criar uma ilustração original para a capa de uma apresentação. Qual ferramenta seria mais adequada?',

            opcoes: [
                {
                    texto: 'Uma IA especializada em geração de imagens',
                    correta: true
                },
                {
                    texto: 'Uma calculadora',
                    correta: false
                },
                {
                    texto: 'Um sistema de tradução automática',
                    correta: false
                }
            ],

            explicacao:
                'Para criar uma ilustração nova, uma ferramenta de geração de imagens é a escolha mais adequada para a tarefa.'
        },

        {
            id: 5,
            titulo: 'Encontre o melhor prompt',
            descricao: 'Compare instruções e escolha o prompt mais completo.',
            nivel: 'Intermediário',
            icone: 'fa-solid fa-terminal',
            cor: 'laranja',
            tipo: 'opcoes',

            enunciado:
                'Você quer aprender JavaScript do zero. Qual desses prompts provavelmente produzirá uma resposta melhor?',

            opcoes: [
                {
                    texto: 'Me ensina JavaScript.',
                    correta: false
                },
                {
                    texto: 'JavaScript?',
                    correta: false
                },
                {
                    texto: 'Ensine JavaScript para um iniciante. Explique primeiro variáveis, condições e funções, usando exemplos simples e um exercício ao final de cada assunto.',
                    correta: true
                }
            ],

            explicacao:
                'O terceiro prompt fornece contexto, nível de conhecimento, assuntos desejados e formato da resposta.'
        },

        {
            id: 6,
            titulo: 'Detecte o problema',
            descricao: 'Identifique uma situação em que a resposta da IA deve ser conferida.',
            nivel: 'Avançado',
            icone: 'fa-solid fa-magnifying-glass',
            cor: 'vermelho',
            tipo: 'opcoes',

            enunciado:
                'Uma IA informa uma estatística muito específica, mas não mostra de onde veio o dado. O que você deveria fazer?',

            opcoes: [
                {
                    texto: 'Considerar verdadeiro porque a resposta parece confiante.',
                    correta: false
                },
                {
                    texto: 'Verificar o dado em fontes confiáveis antes de utilizá-lo.',
                    correta: true
                },
                {
                    texto: 'Compartilhar a informação imediatamente.',
                    correta: false
                }
            ],

            explicacao:
                'Modelos de IA podem gerar informações incorretas. Dados importantes devem ser conferidos em fontes confiáveis.'
        }
    ];

    const atual =
        desafioAberto !== null
            ? desafios[desafioAberto]
            : null;

    function abrirDesafio(index) {
        setDesafioAberto(index);
        setResposta('');
        setResultado(null);
    }

    function voltar() {
        setDesafioAberto(null);
        setResposta('');
        setResultado(null);
    }

    function concluir(id) {
        if (!concluidos.includes(id)) {
            setConcluidos([...concluidos, id]);
        }
    }

    function verificarTexto() {
        if (!resposta.trim()) {
            return;
        }

        const criterios = atual.criterios.map((criterio) => ({
            nome: criterio.nome,
            passou: criterio.testar(resposta)
        }));

        const acertos = criterios.filter(
            (criterio) => criterio.passou
        ).length;

        const porcentagem =
            Math.round(
                (acertos / criterios.length) * 100
            );

        setResultado({
            tipo: 'texto',
            criterios,
            acertos,
            total: criterios.length,
            porcentagem
        });

        concluir(atual.id);
    }

    function responderOpcao(index) {
        if (resultado !== null) {
            return;
        }

        const opcao = atual.opcoes[index];

        setResposta(index);

        setResultado({
            tipo: 'opcao',
            correta: opcao.correta
        });

        concluir(atual.id);
    }

    function tentarNovamente() {
        setResposta('');
        setResultado(null);
    }

    return createPortal(
        <div className="desafios-overlay">

            <section className="desafios-modal">

                <button
                    className="desafios-fechar"
                    onClick={fechar}
                    aria-label="Fechar"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {desafioAberto === null ? (
                    <>
                        <header className="desafios-header">

                            <div className="desafios-header-icon">
                                <i className="fa-solid fa-gamepad"></i>
                            </div>

                            <div>
                                <span>DESAFIOS INTERATIVOS</span>

                                <h1>
                                    Teste suas habilidades com
                                    <strong> IA</strong>
                                </h1>

                                <p>
                                    Complete atividades rápidas,
                                    descubra boas práticas e veja
                                    imediatamente como você se saiu.
                                </p>
                            </div>

                        </header>

                        <div className="desafios-progresso">

                            <div>
                                <i className="fa-solid fa-trophy"></i>

                                <span>
                                    Seu progresso
                                </span>
                            </div>

                            <strong>
                                {concluidos.length} / {desafios.length}
                            </strong>

                        </div>

                        <div className="desafios-barra">
                            <div
                                style={{
                                    width:
                                        `${(concluidos.length / desafios.length) * 100}%`
                                }}
                            ></div>
                        </div>

                        <div className="desafios-grid">

                            {desafios.map((desafio, index) => (

                                <article
                                    className={`desafio-card ${desafio.cor}`}
                                    key={desafio.id}
                                    onClick={() => abrirDesafio(index)}
                                >

                                    <div className="desafio-card-top">

                                        <div className="desafio-icone">
                                            <i className={desafio.icone}></i>
                                        </div>

                                        <span className="desafio-nivel">
                                            {desafio.nivel}
                                        </span>

                                    </div>

                                    <h2>
                                        {desafio.titulo}
                                    </h2>

                                    <p>
                                        {desafio.descricao}
                                    </p>

                                    <div className="desafio-card-bottom">

                                        <span>
                                            {concluidos.includes(desafio.id)
                                                ? 'Concluído'
                                                : 'Começar desafio'}
                                        </span>

                                        <i
                                            className={
                                                concluidos.includes(desafio.id)
                                                    ? 'fa-solid fa-check'
                                                    : 'fa-solid fa-arrow-right'
                                            }
                                        ></i>

                                    </div>

                                </article>

                            ))}

                        </div>
                    </>
                ) : (
                    <div className="desafio-aberto">

                        <button
                            className="desafio-voltar"
                            onClick={voltar}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            Voltar aos desafios
                        </button>

                        <div className="desafio-aberto-header">

                            <div
                                className={`desafio-aberto-icone ${atual.cor}`}
                            >
                                <i className={atual.icone}></i>
                            </div>

                            <div>
                                <span>
                                    {atual.nivel}
                                </span>

                                <h1>
                                    {atual.titulo}
                                </h1>

                                <p>
                                    {atual.descricao}
                                </p>
                            </div>

                        </div>

                        <div className="desafio-enunciado">

                            <div className="desafio-enunciado-titulo">

                                <i className="fa-solid fa-flag"></i>

                                <span>
                                    SEU DESAFIO
                                </span>

                            </div>

                            <h2>
                                {atual.enunciado}
                            </h2>

                        </div>

                        {atual.tipo === 'texto' && (
                            <>
                                <div className="desafio-dica">

                                    <i className="fa-solid fa-lightbulb"></i>

                                    <p>
                                        <strong>Dica:</strong>{' '}
                                        {atual.dica}
                                    </p>

                                </div>

                                <div className="desafio-resposta-texto">

                                    <label htmlFor="resposta-desafio">
                                        Sua resposta
                                    </label>

                                    <textarea
                                        id="resposta-desafio"
                                        placeholder={atual.placeholder}
                                        value={resposta}
                                        onChange={(e) =>
                                            setResposta(e.target.value)
                                        }
                                        disabled={resultado !== null}
                                    />

                                    <div className="desafio-textarea-footer">

                                        <span>
                                            {resposta.length} caracteres
                                        </span>

                                        {resultado === null && (
                                            <button
                                                onClick={verificarTexto}
                                                disabled={!resposta.trim()}
                                            >
                                                Verificar resposta

                                                <i className="fa-solid fa-arrow-right"></i>
                                            </button>
                                        )}

                                    </div>

                                </div>
                            </>
                        )}

                        {atual.tipo === 'opcoes' && (
                            <div className="desafio-opcoes">

                                {atual.opcoes.map((opcao, index) => {

                                    let classe = '';

                                    if (resultado !== null) {
                                        if (opcao.correta) {
                                            classe = 'correta';
                                        } else if (resposta === index) {
                                            classe = 'errada';
                                        }
                                    }

                                    return (
                                        <button
                                            className={`desafio-opcao ${classe}`}
                                            key={index}
                                            onClick={() =>
                                                responderOpcao(index)
                                            }
                                            disabled={resultado !== null}
                                        >

                                            <span className="opcao-letra">
                                                {String.fromCharCode(65 + index)}
                                            </span>

                                            <span className="opcao-texto">
                                                {opcao.texto}
                                            </span>

                                            {resultado !== null &&
                                                opcao.correta && (
                                                    <i className="fa-solid fa-check"></i>
                                                )}

                                            {resultado !== null &&
                                                resposta === index &&
                                                !opcao.correta && (
                                                    <i className="fa-solid fa-xmark"></i>
                                                )}

                                        </button>
                                    );
                                })}

                            </div>
                        )}

                        {resultado?.tipo === 'texto' && (
                            <div className="desafio-resultado-texto">

                                <div className="resultado-score">

                                    <div>
                                        <strong>
                                            {resultado.porcentagem}%
                                        </strong>

                                        <span>
                                            de aproveitamento
                                        </span>
                                    </div>

                                    <i className="fa-solid fa-chart-simple"></i>

                                </div>

                                <div className="resultado-criterios">

                                    {resultado.criterios.map(
                                        (criterio, index) => (
                                            <div
                                                className={
                                                    criterio.passou
                                                        ? 'criterio passou'
                                                        : 'criterio faltou'
                                                }
                                                key={index}
                                            >

                                                <i
                                                    className={
                                                        criterio.passou
                                                            ? 'fa-solid fa-check'
                                                            : 'fa-solid fa-xmark'
                                                    }
                                                ></i>

                                                <span>
                                                    {criterio.nome}
                                                </span>

                                            </div>
                                        )
                                    )}

                                </div>

                                <button
                                    className="desafio-tentar-novamente"
                                    onClick={tentarNovamente}
                                >
                                    <i className="fa-solid fa-rotate-right"></i>

                                    Tentar novamente
                                </button>

                            </div>
                        )}

                        {resultado?.tipo === 'opcao' && (
                            <div
                                className={`desafio-feedback ${
                                    resultado.correta
                                        ? 'acertou'
                                        : 'errou'
                                }`}
                            >

                                <div className="feedback-icon">

                                    <i
                                        className={
                                            resultado.correta
                                                ? 'fa-solid fa-circle-check'
                                                : 'fa-solid fa-circle-xmark'
                                        }
                                    ></i>

                                </div>

                                <div>
                                    <span>
                                        {resultado.correta
                                            ? 'Resposta correta!'
                                            : 'Quase!'}
                                    </span>

                                    <h3>
                                        {resultado.correta
                                            ? 'Boa escolha.'
                                            : 'Essa não era a melhor alternativa.'}
                                    </h3>

                                    <p>
                                        {atual.explicacao}
                                    </p>
                                </div>

                            </div>
                        )}

                        {resultado !== null && (
                            <div className="desafio-acoes">

                                {resultado.tipo === 'opcao' && (
                                    <button
                                        className="acao-tentar"
                                        onClick={tentarNovamente}
                                    >
                                        <i className="fa-solid fa-rotate-right"></i>
                                        Tentar novamente
                                    </button>
                                )}

                                <button
                                    className="acao-outros"
                                    onClick={voltar}
                                >
                                    Outros desafios
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>
                        )}

                    </div>
                )}

            </section>

        </div>,

        document.body
    );
}