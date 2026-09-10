import { useState } from 'react';
import './templates.scss';

export default function TemplatesProntos({ fechar }) {
    const [aberto, setAberto] = useState(null);

    const templates = [
        {
            categoria: "Trabalho",
            tipo: "E-mail",
            titulo: "Solicitação Profissional",
            descricao: "Modelo profissional para fazer solicitações por e-mail.",
            icone: "fa-solid fa-envelope",
            texto: `Olá, [Nome],

Espero que esteja bem.

Gostaria de solicitar [descreva brevemente o que precisa].
Se possível, poderia me informar [informação ou ação desejada]?

Fico à disposição caso seja necessário algum esclarecimento adicional.

Agradeço pela atenção.

Atenciosamente,
[Seu nome]
[Cargo / Setor]`
        },
        {
            categoria: "Estudos",
            tipo: "Cronograma",
            titulo: "Cronograma Adaptado à Rotina",
            descricao: "Prompt pronto para criar uma rotina de estudos personalizada.",
            icone: "fa-solid fa-book-open",
            texto: `Crie um cronograma de estudos personalizado com base nas informações abaixo.

Informações do estudante

Nome: [preencher]

Objetivo principal: [ex.: melhorar notas, estudar para vestibular, prova, concurso]

Período do cronograma: [ex.: 1 semana, 1 mês]

Dias disponíveis para estudar: [preencher]

Horário disponível em cada dia: [preencher]

Tempo máximo de estudo por dia: [preencher]

Matérias que preciso estudar:
- [Matéria 1]
- [Matéria 2]
- [Matéria 3]
- [Matéria 4]

Monte o cronograma em formato de tabela com as colunas:

Dia | Horário | Matéria | Conteúdo | Duração | Prioridade | Atividade | Status

Use as prioridades Alta, Média ou Baixa.

No campo Status, deixe inicialmente como "Pendente".`
        },
        {
            categoria: "Trabalho",
            tipo: "Checklist",
            titulo: "Checklist de Reunião",
            descricao: "Modelo para organizar reuniões, tópicos, decisões e próximos passos.",
            icone: "fa-solid fa-list-check",
            texto: `Crie um checklist profissional para uma reunião com base nas informações abaixo.

Tema da reunião: [preencher]

Objetivo principal: [preencher]

Participantes: [preencher]

Data: [preencher]

Horário: [preencher]

Tópicos principais:
- [Tópico 1]
- [Tópico 2]
- [Tópico 3]

Organize o checklist nas etapas:

Antes da reunião
- Preparar documentos
- Revisar informações
- Definir objetivos
- Organizar materiais necessários

Durante a reunião
- Registrar decisões
- Anotar dúvidas
- Definir responsáveis
- Estabelecer próximos passos

Depois da reunião
- Criar resumo
- Registrar tarefas
- Definir prazos
- Enviar informações aos participantes

No final, apresente uma lista clara com:
Tarefa | Responsável | Prazo | Status`
        },
        {
            categoria: "Estudos",
            tipo: "Resumo",
            titulo: "Resumo Inteligente",
            descricao: "Prompt para transformar conteúdos extensos em resumos claros e organizados.",
            icone: "fa-solid fa-file-pen",
            texto: `Faça um resumo claro e organizado do conteúdo abaixo:

[COLE O CONTEÚDO AQUI]

Siga estas regras:

- Destaque apenas as informações mais importantes
- Evite repetições
- Use linguagem simples
- Explique conceitos difíceis de forma curta
- Organize o conteúdo por tópicos
- Destaque palavras-chave
- Não invente informações

Organize a resposta em:

1. Tema principal

2. Resumo geral

3. Conceitos importantes

4. Palavras-chave

5. Informações que devo memorizar

6. Resumo final em até 5 linhas`
        },
        {
            categoria: "Produtividade",
            tipo: "Planejamento",
            titulo: "Planejamento de Tarefas",
            descricao: "Organize tarefas por prioridade, prazo e nível de dificuldade.",
            icone: "fa-solid fa-calendar-check",
            texto: `Organize minhas tarefas de forma eficiente usando as informações abaixo.

Tarefas:
- [Tarefa 1]
- [Tarefa 2]
- [Tarefa 3]
- [Tarefa 4]

Prazos:
- [Tarefa]&#58; [prazo]
- [Tarefa]&#58; [prazo]

Tempo disponível hoje: [preencher]

Tempo disponível durante a semana: [preencher]

Tarefas mais importantes: [preencher]

Tarefas mais difíceis: [preencher]

Organize tudo em uma tabela:

Tarefa | Prioridade | Dificuldade | Tempo estimado | Prazo | Ordem de execução | Status

Utilize:

Prioridade:
- Alta
- Média
- Baixa

Dificuldade:
- Fácil
- Média
- Difícil

Coloque inicialmente o Status como "Pendente".

No final, indique:

- Qual tarefa devo começar primeiro
- Quais tarefas são mais urgentes
- Como distribuir as tarefas durante o dia
- Uma sugestão para melhorar minha produtividade`
        },
        {
            categoria: "Criatividade",
            tipo: "Ideias",
            titulo: "Gerador de Ideias",
            descricao: "Modelo para criar ideias diferentes a partir de um objetivo ou problema.",
            icone: "fa-solid fa-lightbulb",
            texto: `Gere ideias criativas com base nas informações abaixo.

Tema: [preencher]

Objetivo: [preencher]

Público-alvo: [preencher]

Contexto: [preencher]

Limitações:
- [Limitação 1]
- [Limitação 2]

Quantidade de ideias desejadas: [preencher]

Para cada ideia, informe:

Nome da ideia

Descrição:
Explique a ideia de forma simples.

Como funciona:
Mostre como poderia ser aplicada.

Dificuldade:
Fácil, Média ou Difícil.

Recursos necessários:
Liste os principais recursos.

Diferencial:
Explique o que torna essa ideia interessante.

No final:

- Escolha as 3 melhores ideias
- Explique por que elas se destacam
- Indique qual seria a mais simples de colocar em prática`
        }
    ];

    function copiarTemplate(texto) {
        navigator.clipboard.writeText(texto);
        alert("Template copiado!");
    }

    return (
        <section className="templates-container">

            <button
                className="fechar-templates"
                onClick={fechar}
            >
                ×
            </button>

            <header className="templates-header">
                <span>RECURSOS</span>

                <h1>Templates prontos</h1>

                <p>
                    Escolha um modelo, copie e adapte para sua necessidade.
                </p>
            </header>

            {aberto === null ? (

                <div className="templates-grid">

                    {templates.map((template, index) => (
                        <article
                            className="template-card"
                            key={index}
                            onClick={() => setAberto(index)}
                        >
                            <div className="template-icon">
                                <i className={template.icone}></i>
                            </div>

                            <div className="template-tags">
                                <span>{template.categoria}</span>
                                <span>{template.tipo}</span>
                            </div>

                            <h2>{template.titulo}</h2>

                            <p>{template.descricao}</p>

                            <div className="template-abrir">
                                <span>Abrir template</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </article>
                    ))}

                </div>

            ) : (

                <div className="template-aberto">

                    <div className="barra-voltar">
                        <button
                            className="voltar-template"
                            onClick={() => setAberto(null)}
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
                                <span>{templates[aberto].categoria}</span>
                                <span>{templates[aberto].tipo}</span>
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

                            <span>Conteúdo do template</span>

                            <button
                                className="copiar-template"
                                onClick={() =>
                                    copiarTemplate(
                                        templates[aberto].texto
                                    )
                                }
                            >
                                <i className="fa-regular fa-copy"></i>
                                Copiar
                            </button>

                        </div>

                        <pre>
                            {templates[aberto].texto}
                        </pre>

                    </div>

                </div>

            )}

        </section>
    );
}