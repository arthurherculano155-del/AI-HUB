import './card.scss';

export default function Card({
    icone,
    titulo,
    info,
    tema = "azul",
    onClick
}) {

    return (

        <div
            className={`card ${tema}`}
            onClick={onClick}
        >

            <i
                className={icone}
                id="icone1"
            />

            <h3>
                {titulo}
            </h3>

            <p>
                {info}
            </p>

            <a
                href="#"
                onClick={(e) => e.preventDefault()}
            >
                Explorar Mais

                <i className="fa-solid fa-arrow-right-long" />
            </a>

        </div>

    );
}