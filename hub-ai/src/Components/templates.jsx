import './templates.scss';

export default function TemplatesProntos() {
    const templates = [
        {
            categoria: "Trabalho",
            tipo: "E-mail",
            titulo: "Solicitação Profisional",
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
            icone: "fa-solid fa-book",
            texto: `
                    Crie um cronograma de estudos personalizado com base nas informações abaixo.

    **Informações do estudante**

    Nome: [preencher]

    Objetivo principal: [ex.: melhorar notas, estudar para vestibular, prova, concurso]

    Período do cronograma: [ex.: 1 semana, 1 mês]

    Dias disponíveis para estudar: [preencher]

    Horário disponível em cada dia: [preencher]

    Tempo máximo de estudo por dia: [preencher]

    Matérias que preciso estudar:

    * [Matéria 1]
    * [Matéria 2]
    * [Matéria 3]
    * [Matéria 4]

    Conteúdos que preciso estudar em cada matéria:

    * [Matéria]: [conteúdos]
    * [Matéria]: [conteúdos]
    * [Matéria]: [conteúdos]

    Matérias em que tenho mais dificuldade: [preencher]

    Matérias que considero mais importantes: [preencher]

    Próximas provas, trabalhos ou prazos:

    * [Data] — [atividade]
    * [Data] — [atividade]

    Tempo que quero reservar para revisão: [preencher]

    Preferência de duração por sessão de estudo: [ex.: 30, 45 ou 60 minutos]

    Intervalo entre sessões: [ex.: 10 minutos]

    **Monte o cronograma em formato de tabela com as colunas:**

    Dia | Horário | Matéria | Conteúdo | Duração | Prioridade | Atividade | Status

    Distribua os conteúdos de forma equilibrada durante a semana, dê mais espaço para matérias difíceis ou com provas próximas e evite colocar muitas matérias pesadas no mesmo dia.

    Inclua momentos de revisão e resolução de exercícios.

    Na coluna "Atividade", indique exatamente o que fazer, como:

    * Ler o conteúdo
    * Fazer resumo
    * Resolver exercícios
    * Revisar
    * Fazer questões
    * Simulado

    Use as prioridades Alta, Média ou Baixa.

    No campo Status, deixe inicialmente como "Pendente".

    No final, mostre também:

    * Total de horas planejadas
    * Horas por matéria
    * Principais prioridades da semana
    * Uma recomendação para melhorar a organização dos estudos
            `
        }
    ]
    return (
        <div className="templates-container">
            {templates.map((template, index) => (
                <div className="template" key={index}>

                    <nav className="icon-text">
                        <i className={template.icone}></i>

                        <div className="text">
                            <div className="tipo">
                                <h4>{template.categoria}</h4>
                                <h4>{template.tipo}</h4>
                            </div>

                            <div className="title">
                                <h1>{template.titulo}</h1>
                            </div>
                        </div>
                    </nav>

                    <div className="conteudo-template">
                        <p className="principal">
                            {template.texto}
                        </p>
                    </div>

                </div>
            ))}
        </div>
    );
}