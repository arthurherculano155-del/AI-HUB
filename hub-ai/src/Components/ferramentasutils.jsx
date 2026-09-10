import './ferramentasutils.scss';

export default function FerramentaUtils() {

    const cards = [
        {
            titulo: 'Templates prontos',
            descricao: 'Modelos prontos de textos, planejamentos, checklists e roteiros para adaptar e usar.',
            detalhe: 'Copie, adapte e use',
            icone: 'fa-solid fa-file-lines',
            iconeDetalhe: 'fa-regular fa-copy',
            cor: 'azul'
        },
        {
            titulo: 'Desafios com IA',
            descricao: 'Teste seus conhecimentos com pequenos desafios interativos sobre inteligência artificial.',
            detalhe: 'Aprenda se divertindo',
            icone: 'fa-solid fa-gamepad',
            iconeDetalhe: 'fa-solid fa-trophy',
            cor: 'rosa'
        },
        {
            titulo: 'IA em situações reais',
            descricao: 'Explore situações do cotidiano e descubra como a IA pode ajudar em diferentes decisões e tarefas.',
            detalhe: 'Escolha como usar',
            icone: 'fa-solid fa-comments',
            iconeDetalhe: 'fa-solid fa-lightbulb',
            cor: 'verde'
        },
        {
            titulo: 'Antes e depois com IA',
            descricao: 'Compare exemplos e descubra como a IA pode melhorar textos, ideias e outras tarefas.',
            detalhe: 'Veja a transformação',
            icone: 'fa-solid fa-arrow-right-arrow-left',
            iconeDetalhe: 'fa-solid fa-bolt',
            cor: 'laranja'
        },
        {
            titulo: 'Explorações extras',
            descricao: 'Descubra curiosidades, tecnologias, tendências e novos caminhos dentro do universo da IA.',
            detalhe: 'Vá além',
            icone: 'fa-solid fa-compass',
            iconeDetalhe: 'fa-solid fa-book-open',
            cor: 'roxo'
        },
        {
            titulo: 'Mitos ou verdade?',
            descricao: 'Descubra o que é fato e o que é mito sobre inteligência artificial em perguntas rápidas.',
            detalhe: 'Teste o que você sabe',
            icone: 'fa-solid fa-circle-question',
            iconeDetalhe: 'fa-solid fa-check-double',
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