import './item.scss';

export default function Item({
    tema,
    icone,
    titulo,
    desc
}) {
    return (
        <div className={`item-possibilidade ${tema}`}>
            <li>
                <div className="icone">
                    <i className={`fa-solid fa-${icone}`} />
                </div>


                <div className="item-info">
                    <h2>{titulo}</h2>
                    <h3>{desc}</h3>
                </div>
            </li>
        </div>
    )
}