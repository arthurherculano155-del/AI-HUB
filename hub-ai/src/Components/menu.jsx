import './menu.scss';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <header className="Home-Header">

        <div className="Menu-Info">

          <img
            src="./Assets/Imgs/CerebroFavIcon.png"
            alt="Icone - SITE"
            className="icone"
          />

          <div className="text-menu">

            <h1 className="Info-Text">
              <span>IA</span> na Prática
            </h1>

            <p className="Info-Sub">
              Inteligência que Transforma
            </p>

          </div>

        </div>


        <nav className="Bnt-Links">

          <ul className="Links">

            <li className="link">
              <Link to='/'>Início</Link>
            </li>

            <li className="link">
              <a href="#sobre">Sobre</a>
            </li>

            <li className="link">
              <Link to='/tutoriais'>Tutoriais </Link>
            </li>

            <li className="link">
              <a href="">Ferramentas</a>
            </li>

            <li className="link">
              <a href="">Boas Práticas</a>
            </li>

            <li className="link">
              <a href="">Contato</a>
            </li>

          </ul>

        </nav>


        <button className="startNow">
          <i className="fa-solid fa-brain" />
          <p>Começar Agora</p>
        </button>

      </header>
    );
}