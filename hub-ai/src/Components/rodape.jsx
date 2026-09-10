import './rodape.scss';
import { Link } from 'react-router-dom';

export default function Rodape() {
    return (
        <footer className="main-footer">

            <div className="info-footer">

                <div className="footer-info">

                    <img
                        src="./Assets/Imgs/CerebroFavIcon.png"
                        alt=""
                    />

                    <div className="text">

                        <h1>
                            <span>IA</span> na Prática
                        </h1>

                        <p>
                            Inteligência que transforma
                        </p>

                    </div>

                </div>

                <p className="bottom-info">
                    Mais conhecimento, mais ideias,<br />
                    mais possibilidades.
                </p>

            </div>


            <div className="redes">

            </div>

            <div className="links-rapidos">
                <h3>Links Rápidos</h3>
                <ul>
                    <li>
                        <Link to='/'>Início</Link>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <Link to='/tutoriais'>Tutoriais</Link>
                    </li>
                    <li>
                        <Link to='/ferramentas'>Ferramentas</Link>
                    </li>
                    <li>
                        <Link to="/praticas">Boas Práticas</Link>
                    </li>
                    <li>
                        <Link to='/contato'>Contato</Link>
                    </li>
                </ul>
            </div>

            <div className="footer-insc">
                <div className="info">
                    <i className='fa-regular fa-lightbulb' />
                </div>

                <div className="infos">
                    <h2>
                        Dica Rápida de {' '}
                        <span>IA</span>
                    </h2>
                    <p>Use a IA para organizar suas tarefas, economizar tempo e focar no que realmente importa.</p>

                    <a href='#inicio'>
                        <i className="fa-solid fa-arrow-up" />
                        <p>Voltar ao Topo</p>
                    </a>
                </div>


            </div>

        </footer>
    )
}