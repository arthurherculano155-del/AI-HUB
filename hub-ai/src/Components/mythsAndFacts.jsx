import { useState } from 'react';
import { createPortal } from 'react-dom';
import './mythsAndFacts.scss';

export default function MythsAndFacts({ fechar }) {
    const [indice, setIndice] = useState(0);
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);
    const [acertos, setAcertos] = useState(0);
    const [finalizado, setFinalizado] = useState(false);

    const perguntas = [
        {
            afirmacao: 'A inteligência artificial pensa exatamente como um ser humano.',
            resposta: false,
            explicacao:
                'A IA processa dados e identifica padrões, mas isso não significa que pense da mesma maneira que uma pessoa.',
            categoria: 'Funcionamento',
            icone: 'fa-solid fa-brain'
        },
        {
            afirmacao: 'Uma IA pode gerar informações incorretas mesmo apresentando a resposta com confiança.',
            resposta: true,
            explicacao:
                'Modelos de IA podem produzir respostas incorretas. Por isso, informações importantes devem ser verificadas.',
            categoria: 'Confiabilidade',
            icone: 'fa-solid fa-triangle-exclamation'
        },
        {
            afirmacao: 'Quanto mais claro for um prompt, maior tende a ser o controle sobre a resposta da IA.',
            resposta: true,
            explicacao:
                'Instruções claras, contexto e detalhes ajudam a IA a entender melhor o resultado esperado.',
            categoria: 'Prompts',
            icone: 'fa-solid fa-terminal'
        },
        {
            afirmacao: 'A inteligência artificial só existe em aplicativos de conversa como chatbots.',
            resposta: false,
            explicacao:
                'A IA também aparece em sistemas de recomendação, câmeras, mapas, filtros de spam, reconhecimento de voz e muitas outras tecnologias.',
            categoria: 'Cotidiano',
            icone: 'fa-solid fa-mobile-screen-button'
        },
        {
            afirmacao: 'Tudo o que uma inteligência artificial responde deve ser considerado verdadeiro.',
            resposta: false,
            explicacao:
                'A IA pode cometer erros, interpretar algo incorretamente ou trabalhar com informações incompletas.',
            categoria: 'Segurança',
            icone: 'fa-solid fa-shield-halved'
        },
        {
            afirmacao: 'A IA pode ajudar programadores a entender e revisar códigos.',
            resposta: true,
            explicacao:
                'Ela pode explicar trechos de código, sugerir soluções e ajudar na identificação de possíveis problemas.',
            categoria: 'Programação',
            icone: 'fa-solid fa-code'
        },
        {
            afirmacao: 'Uma IA generativa pode trabalhar com mais de um tipo de conteúdo, como texto e imagem.',
            resposta: true,
            explicacao:
                'Sistemas multimodais podem trabalhar com diferentes tipos de informação, dependendo das capacidades do modelo.',
            categoria: 'Tecnologia',
            icone: 'fa-solid fa-layer-group'
        },
        {
            afirmacao: 'Usar IA elimina completamente a necessidade de revisar um trabalho.',
            resposta: false,
            explicacao:
                'A revisão humana continua importante para conferir qualidade, contexto, precisão e possíveis erros.',
            categoria: 'Boas práticas',
            icone: 'fa-solid fa-magnifying-glass'
        }
    ];

    const perguntaAtual = perguntas[indice];

    function responder(valor) {
        if (respostaSelecionada !== null) {
            return;
        }

        setRespostaSelecionada(valor);

        if (valor === perguntaAtual.resposta) {
            setAcertos(acertos + 1);
        }
    }

    function proximaPergunta() {
        if (indice < perguntas.length - 1) {
            setIndice(indice + 1);
            setRespostaSelecionada(null);
        } else {
            setFinalizado(true);
        }
    }

    function reiniciarQuiz() {
        setIndice(0);
        setRespostaSelecionada(null);
        setAcertos(0);
        setFinalizado(false);
    }

    function calcularMensagem() {
        const porcentagem = (acertos / perguntas.length) * 100;

        if (porcentagem === 100) {
            return 'Excelente! Você acertou todas.';
        }

        if (porcentagem >= 75) {
            return 'Muito bem! Você conhece bastante sobre IA.';
        }

        if (porcentagem >= 50) {
            return 'Bom resultado! Continue explorando.';
        }

        return 'Continue aprendendo e tente novamente.';
    }

    return createPortal(
        <div className="myths-facts-overlay">

            <section className="myths-facts-modal">

                <button
                    className="myths-facts-fechar"
                    onClick={fechar}
                    aria-label="Fechar"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                {!finalizado ? (
                    <>
                        <header className="myths-facts-header">

                            <div className="myths-facts-main-icon">
                                <i className="fa-solid fa-circle-question"></i>
                            </div>

                            <div>
                                <span>TESTE SEU CONHECIMENTO</span>

                                <h1>
                                    Mitos ou <strong>verdades?</strong>
                                </h1>

                                <p>
                                    Descubra o que realmente faz sentido sobre
                                    inteligência artificial e aprenda com cada resposta.
                                </p>
                            </div>

                        </header>

                        <div className="myths-facts-progress-area">

                            <div className="myths-facts-progress-info">
                                <span>
                                    Pergunta {indice + 1} de {perguntas.length}
                                </span>

                                <span>
                                    {acertos} acertos
                                </span>
                            </div>

                            <div className="myths-facts-progress">
                                <div
                                    className="myths-facts-progress-bar"
                                    style={{
                                        width: `${((indice + 1) / perguntas.length) * 100}%`
                                    }}
                                ></div>
                            </div>

                        </div>

                        <div className="myths-facts-question">

                            <div className="myths-facts-question-top">

                                <div className="myths-facts-question-icon">
                                    <i className={perguntaAtual.icone}></i>
                                </div>

                                <span>
                                    {perguntaAtual.categoria}
                                </span>

                            </div>

                            <h2>
                                {perguntaAtual.afirmacao}
                            </h2>

                            <p>
                                Essa afirmação é mito ou verdade?
                            </p>

                        </div>

                        <div className="myths-facts-options">

                            <button
                                className={`myths-facts-option verdade ${
                                    respostaSelecionada === true
                                        ? perguntaAtual.resposta === true
                                            ? 'correta'
                                            : 'errada'
                                        : ''
                                }`}
                                onClick={() => responder(true)}
                                disabled={respostaSelecionada !== null}
                            >
                                <div>
                                    <i className="fa-solid fa-check"></i>
                                </div>

                                <span>Verdade</span>
                            </button>

                            <button
                                className={`myths-facts-option mito ${
                                    respostaSelecionada === false
                                        ? perguntaAtual.resposta === false
                                            ? 'correta'
                                            : 'errada'
                                        : ''
                                }`}
                                onClick={() => responder(false)}
                                disabled={respostaSelecionada !== null}
                            >
                                <div>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>

                                <span>Mito</span>
                            </button>

                        </div>

                        {respostaSelecionada !== null && (
                            <div
                                className={`myths-facts-feedback ${
                                    respostaSelecionada === perguntaAtual.resposta
                                        ? 'acertou'
                                        : 'errou'
                                }`}
                            >

                                <div className="myths-facts-feedback-icon">

                                    <i
                                        className={
                                            respostaSelecionada === perguntaAtual.resposta
                                                ? 'fa-solid fa-circle-check'
                                                : 'fa-solid fa-circle-xmark'
                                        }
                                    ></i>

                                </div>

                                <div className="myths-facts-feedback-content">

                                    <span>
                                        {respostaSelecionada === perguntaAtual.resposta
                                            ? 'Você acertou!'
                                            : 'Não foi dessa vez'}
                                    </span>

                                    <h3>
                                        {perguntaAtual.resposta
                                            ? 'Essa afirmação é verdadeira.'
                                            : 'Essa afirmação é um mito.'}
                                    </h3>

                                    <p>
                                        {perguntaAtual.explicacao}
                                    </p>

                                </div>

                            </div>
                        )}

                        {respostaSelecionada !== null && (
                            <div className="myths-facts-next-area">

                                <button
                                    className="myths-facts-next"
                                    onClick={proximaPergunta}
                                >
                                    {indice === perguntas.length - 1
                                        ? 'Ver resultado'
                                        : 'Próxima pergunta'}

                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>
                        )}
                    </>
                ) : (
                    <div className="myths-facts-result">

                        <div className="myths-facts-result-icon">
                            <i className="fa-solid fa-trophy"></i>
                        </div>

                        <span>QUIZ FINALIZADO</span>

                        <h1>
                            Resultado
                        </h1>

                        <p className="myths-facts-result-message">
                            {calcularMensagem()}
                        </p>

                        <div className="myths-facts-score">

                            <strong>
                                {acertos}
                            </strong>

                            <span>
                                / {perguntas.length}
                            </span>

                        </div>

                        <p className="myths-facts-score-label">
                            respostas corretas
                        </p>

                        <div className="myths-facts-result-actions">

                            <button
                                className="myths-facts-restart"
                                onClick={reiniciarQuiz}
                            >
                                <i className="fa-solid fa-rotate-right"></i>
                                Jogar novamente
                            </button>

                            <button
                                className="myths-facts-close-result"
                                onClick={fechar}
                            >
                                Finalizar
                            </button>

                        </div>

                    </div>
                )}

            </section>

        </div>,

        document.body
    );
}