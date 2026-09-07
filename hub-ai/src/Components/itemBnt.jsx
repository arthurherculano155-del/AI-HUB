import './itemBnt.scss';

export default function ItemBnt({
    tema,
    icone,
    titulo,
    desc
}){
    return(
        <div className={`item-legal ${tema}`}>
                <div className="icone">
                    <i className={`fa-solid fa-${icone}`} />
                </div>


                <div className="item-info">
                    <h4>{titulo}</h4>
                    <h3>{desc}</h3>
                </div>
        
        </div>
    )
}