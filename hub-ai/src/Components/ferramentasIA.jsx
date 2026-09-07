import './ferramentasIA.scss';

export default function Ferramenta({
    imagemIA,
    nomeIA,
    descIA,
    tipoIA,
    link
}) {
    return (
        <div className="ferramenta">
            <div className="img">
                <img src={`./Assets/Imgs/${imagemIA}`} alt="imagem da IA" />
            </div>

            <div className="infoIA">
                <h2>{nomeIA}</h2>
                <p>{descIA}</p>

                <div className="tipo">
                    <h3>{tipoIA}</h3>
                    <a href={`${link}`} target='_blank'>
                        <i className='fa-solid fa-arrow-right' />
                    </a>
                </div>
            </div>
        </div>
    )
}