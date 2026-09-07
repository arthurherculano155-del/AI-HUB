import './praticas.scss';

export default function BoasPraticas({
    icone,
    nome,
    desc
}) {
    return (
        <div className="informacao">
            <div className="iconelegal">
                <i className={`fa-solid fa-${icone}`} />
            </div>

            <div className="infoIAs">
                <h2>{nome}</h2> <br />
                <p>{desc}</p>
            </div>
        </div>
    )
}