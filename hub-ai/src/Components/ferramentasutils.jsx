import './ferramentasutils.scss';

export default function FerramentaUtils() {

    const cards = [
        {
            titulo: 'Aprenda na prática',
            descricao: 'Acesse tutoriais organizados passo a passo e desenvolva suas habilidades.',
            detalhe: 'Do básico ao avançado',
            icone: 'fa-solid fa-graduation-cap',
            iconeDetalhe: 'fa-solid fa-chart-simple',
            cor: 'azul'
        },
        {
            titulo: 'Templates prontos',
            descricao: 'Modelos de textos, checklists e roteiros para você usar e adaptar.',
            detalhe: 'Copie, adapte e use',
            icone: 'fa-solid fa-file-lines',
            iconeDetalhe: 'fa-regular fa-copy',
            cor: 'rosa'
        },
        {
            titulo: 'Desafios com IA',
            descricao: 'Coloque seus conhecimentos em prática com desafios rápidos e divertidos.',
            detalhe: 'Aprenda se divertindo',
            icone: 'fa-solid fa-gamepad',
            iconeDetalhe: 'fa-solid fa-trophy',
            cor: 'verde'
        },
        {
            titulo: 'Casos de uso',
            descricao: 'Veja exemplos reais de como a IA pode ser aplicada em estudos, trabalho e no dia a dia.',
            detalhe: 'Ideias para aplicar',
            icone: 'fa-solid fa-lightbulb',
            iconeDetalhe: 'fa-solid fa-briefcase',
            cor: 'laranja'
        },
        {
            titulo: 'Explorações extras',
            descricao: 'Conteúdos complementares, curiosidades e tendências sobre o mundo da IA.',
            detalhe: 'Vá além',
            icone: 'fa-solid fa-compass',
            iconeDetalhe: 'fa-solid fa-book-open',
            cor: 'roxo'
        },
        {
            titulo: 'Seus próximos passos',
            descricao: 'Dicas para continuar aprendendo e aplicar o que você viu.',
            detalhe: 'Continue evoluindo',
            icone: 'fa-solid fa-rocket',
            iconeDetalhe: 'fa-solid fa-road',
            cor: 'vermelho'
        }
    ];

    return (
        <div className="ferramentas-utils">

            {cards.map((card, index) => (
                <div
                    className={`ferramenta-card ${card.cor}`}
                    key={index}
                >

                    <div className="ferramenta-card-conteudo">

                        <div className="ferramenta-icone">
                            <i className={card.icone}></i>
                        </div>

                        <div className="ferramenta-info">

                            <h3>{card.titulo}</h3>

                            <p>
                                {card.descricao}
                            </p>

                        </div>

                        <button
                            className="ferramenta-seta"
                            aria-label={`Abrir ${card.titulo}`}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>

                    </div>

                    <div className="ferramenta-detalhe">
                        <i className={card.iconeDetalhe}></i>
                        <span>{card.detalhe}</span>
                    </div>

                </div>
            ))}

        </div>
    );
}