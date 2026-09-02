export default function Card({ icone, titulo, info }) {
    return (
        <div className="card">
            <i className={icone} />
            <h2>{titulo}</h2>
            <p>{info}</p>
            <a href="">Explorar Mais
                <i class="fa-solid fa-arrow-right-long" />
            </a>
        </div>
    )
}