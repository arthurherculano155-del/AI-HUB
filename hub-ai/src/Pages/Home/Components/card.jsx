import './card.scss';

export default function Card({ icone, titulo, info }) {
    return (
        <div className="card">
            <i className={icone} id='icone1' />
            <h2>{titulo}</h2>
            <p>{info}</p>
            <a href="">Explorar Mais
                <i className="fa-solid fa-arrow-right-long" />
            </a>
        </div>
    )
}