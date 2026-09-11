import { useState } from 'react';
import { createPortal } from 'react-dom';
import './templates.scss';

export default function TemplatesProntos({ fechar }) {
    const [aberto, setAberto] = useState(null);
    const [copiado, setCopiado] = useState(false);

    const templates = [
        {
            titulo: 'Solicitação Profissional',
            descricao: 'Modelo profissional para fazer solicitações por e-mail.',
            tags: ['Trabalho', 'E-mail'],
            icone: 'fa-solid fa-envelope',
            conteudo: `Assunto: Solicitação de [assunto]

Olá, [nome da pessoa].

Gostaria de solicitar [explique de forma clara o que você precisa].

O objetivo desta solicitação é [explique brevemente o motivo].

Se possível, gostaria de receber um retorno até [data ou prazo].

Agradeço desde já pela atenção e disponibilidade.

Atenciosamente,
[Seu nome]`
        },

        {
            titulo: 'Cronograma Adaptado à Rotina',
            descricao: 'Prompt pronto para criar uma rotina de estudos personalizada.',
            tags: ['Estudos', 'Cronograma'],
            icone: 'fa-solid fa-book-open',
            conteudo: `Crie um cronograma de estudos personalizado para mim.

Minha rotina:
- Horário disponível: [horários]
- Dias disponíveis: [dias da semana]
- Matérias que preciso estudar: [matérias]
- Matérias que tenho mais dificuldade: [matérias]
- Objetivo: [prova, vestibular, curso etc.]

Organize o cronograma de forma equilibrada.

Inclua:
- Horários de estudo
- Intervalos
- Revisões
- Exercícios
- Tempo de descanso

Priorize as matérias em que tenho mais dificuldade e evite uma rotina excessivamente pesada.`
        },

        {
            titulo: 'Checklist de Trabalho',
            descricao: 'Organize tarefas e acompanhe o que ainda precisa ser feito.',
            tags: ['Trabalho', 'Checklist'],
            icone: 'fa-solid fa-list-check',
            conteudo: `Crie um checklist organizado para a seguinte tarefa:

Tarefa principal:
[descreva a tarefa]

Objetivo:
[explique o resultado esperado]

Prazo:
[data ou horário]

Divida a tarefa em etapas pequenas e objetivas.

Para cada etapa, informe:
- O que precisa ser feito
- Prioridade
- Tempo estimado
- Dependências, se houver

No final, crie uma seção de revisão para verificar se tudo foi concluído corretamente.`
        },

        {
            titulo: 'Resumo para Estudos',
            descricao: 'Transforme um conteúdo extenso em um resumo claro e organizado.',
            tags: ['Estudos', 'Resumo'],
            icone: 'fa-solid fa-file-pen',
            conteudo: `Resuma o conteúdo abaixo de maneira clara e objetiva:

[COLE O CONTEÚDO AQUI]

Organize o resumo da seguinte forma:

1. Tema principal
2. Conceitos mais importantes
3. Informações essenciais
4. Palavras-chave
5. Conclusão

Evite informações repetidas.

Use uma linguagem simples e mantenha apenas o que realmente é importante para estudar e revisar o conteúdo.`
        }
    ];

    function abrirTemplate(index) {
        setAberto(index);
        setCopiado(false);
    }

    function voltar() {
        setAberto(null);
        setCopiado(false);
    }

    async function copiarTemplate() {
        const templateSelecionado = templates[aberto];

        await navigator.clipboard.writeText(
            templateSelecionado.conteudo
        );

        setCopiado(true);

        setTimeout(() => {
            setCopiado(false);
        }, 2000);
    }

    return createPortal(
        <div className="templates-overlay">

            <div className="templates-container">

                <button
                    className="fechar-templates"
                    onClick={fechar}
                >
                    ×
                </button>

                {aberto === null ? (
                    <>
                        <div className="templates-header">
                            <span>RECURSOS</span>

                            <h1>Templates prontos</h1>

                            <p>
                                Escolha um modelo, copie e adapte para sua necessidade.
                            </p>
                        </div>

                        <div className="templates-grid">

                            {templates.map((template, index) => (

                                <article
                                    className="template-card"
                                    key={index}
                                    onClick={() => abrirTemplate(index)}
                                >

                                    <div className="template-icon">
                                        <i className={template.icone}></i>
                                    </div>

                                    <div className="template-tags">

                                        {template.tags.map((tag, indexTag) => (
                                            <span key={indexTag}>
                                                {tag}
                                            </span>
                                        ))}

                                    </div>

                                    <h2>
                                        {template.titulo}
                                    </h2>

                                    <p>
                                        {template.descricao}
                                    </p>

                                    <div className="template-abrir">

                                        <span>
                                            Abrir template
                                        </span>

                                        <i className="fa-solid fa-arrow-right"></i>

                                    </div>

                                </article>

                            ))}

                        </div>
                    </>
                ) : (
                    <div className="template-aberto">

                        <div className="barra-voltar">

                            <button
                                className="voltar-template"
                                onClick={voltar}
                            >
                                <i className="fa-solid fa-arrow-left"></i>

                                Voltar
                            </button>

                        </div>

                        <div className="template-aberto-top">

                            <div className="template-icon grande">
                                <i className={templates[aberto].icone}></i>
                            </div>

                            <div className="template-aberto-info">

                                <div className="template-tags">

                                    {templates[aberto].tags.map(
                                        (tag, indexTag) => (
                                            <span key={indexTag}>
                                                {tag}
                                            </span>
                                        )
                                    )}

                                </div>

                                <h2>
                                    {templates[aberto].titulo}
                                </h2>

                                <p>
                                    {templates[aberto].descricao}
                                </p>

                            </div>

                        </div>

                        <div className="template-conteudo">

                            <div className="template-conteudo-header">

                                <span>
                                    Template
                                </span>

                                <button
                                    className="copiar-template"
                                    onClick={copiarTemplate}
                                >
                                    <i
                                        className={
                                            copiado
                                                ? 'fa-solid fa-check'
                                                : 'fa-regular fa-copy'
                                        }
                                    ></i>

                                    {copiado
                                        ? 'Copiado!'
                                        : 'Copiar template'
                                    }
                                </button>

                            </div>

                            <pre>
                                {templates[aberto].conteudo}
                            </pre>

                        </div>

                    </div>
                )}

            </div>

        </div>,

        document.body
    );
}