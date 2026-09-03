import './cardInfo.scss';

export default function CardInfo({icon, content}){
    return(
        <div className="cards">
        <i className={`fa-solid fa-${icon}`}/>
        <h3>{content}</h3>
        </div>
    )
}