import "./videos.scss";

export default function Video({
    link,
    imagem, 
    tempo, 
    titulo, 
    desc, 
    nivel}
){
    return(
        <nav className="video">
            <a href={`${link}`}></a>
            <img src={`./Assets/Imgs/${imagem}`} alt="" />
            <div className="card-text">
                <h3>{tempo}</h3>
            </div>

            <div className="texts">
                <h2>{titulo}</h2>
                <p>{desc}</p>
            </div>

            <div className="nivelamento">
                <i className="fa-solid fa-chart-simple" />
                <h4>{nivel}</h4> 
            </div>
        </nav>
    )
}