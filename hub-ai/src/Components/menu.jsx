import './menu.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Item from './item';

export default function Menu() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
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
              <Link to='/ferramentas'>Ferramentas</Link>
            </li>

            <li className="link">
              <Link to="/praticas">Boas Práticas</Link>
            </li>

            <li className="link">
              <Link to="/contato">Contato</Link>
            </li>

          </ul>

        </nav>


        <button onClick={() => setModalAberto(true)} className="startNow">
          <i className="fa-solid fa-brain" />
          <p>Ver Possibilidades</p>
        </button>

      </header>

      {modalAberto && (
        <nav className="fundo">
          <div className="possibilidades">
            <div className="text-info">
              <h4>BEM-VINDO (A)!</h4>
              <h1>O que você pode fazer com  <span>IA?</span></h1>
              <p>A IA pode ajudar em diferentes situações do seu dia.</p>

              <ul>
                <Item
                  tema="roxo"
                  icone="file"
                  titulo="Criar textos"
                  desc="Escreva ideias, e-mails, roteiros e conteúdos com mais rapidez."
                />

                <Item
                  tema="azul"
                  icone="lightbulb"
                  titulo="Gerar ideias"
                  desc="Receba sugestões para projetos, estudos e tarefas do dia a dia."
                />

                <Item
                  tema="roxo"
                  icone="graduation-cap"
                  titulo="Ajudar nos estudos"
                  desc="Tire dúvidas, revise matérias e pratique com explicações simples."
                />

                <Item
                  tema="azul"
                  icone="code"
                  titulo="Programar"
                  desc="Peça ajuda com códigos, lógica e correções de erros."
                />

                <Item
                  tema="roxo"
                  icone="file"
                  titulo="Resumir conteúdos"
                  desc="Transforme textos longos em resumos claros e objetivos."
                />

                <Item
                  tema="azul"
                  icone="calendar"
                  titulo="Organizar tarefas"
                  desc="Planeje rotinas, listas, metas e atividades com mais eficiência."
                />
              </ul>
            </div>

            <div className="img">
              <button className='fechar'
                onClick={() => setModalAberto(false)}>X</button>
              <img src="./Assets/Imgs/Robot-Information.png" alt="" />
            </div>

          </div>
        </nav>
      )}

    </>
  );
}