import { useState } from 'react';

import { conteudosModais } from './Components/modal.jsx';
import Modal from './Components/modal.jsx';
import Card from './Components/card.jsx';

import './Home.scss';


function App() {

  const [modal, setModal] = useState(null);

  return (
    <div className="App">

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
              <a href="#inicio">Início</a>
            </li>

            <li className="link">
              <a href="#sobre">Sobre</a>
            </li>

            <li className="link">
              <a href="">Tutoriais</a>
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


      <section className="hero-section" id="inicio">

        <nav className="hero-nav">

          <div className="hero-text">

            <h1 className="hero-info">
              Use IA de forma<br />
              <span className="hero-span">
                mais inteligente.
              </span>
            </h1>

            <p>
              Aprenda a usar a inteligência artificial para trabalhar
              melhor, estudar com mais eficiência e resolver problemas
              do dia a dia.
            </p>

          </div>


          <div className="hero-bnts">

            <button className="bnt">
              <i className="fa-solid fa-rocket" />
              <p>Explorar Conteúdos</p>
            </button>

            <button className="bnt" id="transparent-bnt">
              <i className="fa-solid fa-play" />
              <p>Explorar Conteúdos</p>
            </button>

          </div>

        </nav>


        <img
          src="./Assets/Imgs/Robot-AI.png"
          alt=""
          className="robot"
        />

      </section>


      <hr className="hr" />


      <section className="info-section" id="sobre">

        <h2>Por onde você quer começar?</h2>


        <nav className="cards">

          <Card
            tema="azul"
            icone="fa-solid fa-briefcase"
            titulo="No trabalho"
            info="Aumente sua produtividade e encontre novas oportunidades."
            onClick={() => setModal("trabalho")}
          />


          <Card
            tema="verde"
            icone="fa-solid fa-graduation-cap"
            titulo="Nos Estudos"
            info="Aprenda mais rápido, resuma conteúdos e organize suas ideias."
            onClick={() => setModal("estudos")}
          />


          <Card
            tema="laranja"
            icone="fa-solid fa-store"
            titulo="Nos Negócios"
            info="Melhore vendas, organize processos e faça sua empresa crescer."
            onClick={() => setModal("negocios")}
          />


          <Card
            tema="roxo"
            icone="fa-solid fa-file"
            titulo="Na Vida Cotidiana"
            info="Resolva problemas do dia a dia, organize tarefas e seu tempo."
            onClick={() => setModal("cotidiano")}
          />


          <Card
            tema="azul"
            icone="fa-solid fa-comment-dots"
            titulo="Bons Prompts"
            info="Crie prompts claros e detalhados para obter respostas melhores da IA."
            onClick={() => setModal("prompts")}
          />


          <Card
            tema="verde"
            icone="fa-solid fa-lightbulb"
            titulo="Ideias de Uso"
            info="Descubra maneiras práticas e criativas de usar a inteligência artificial."
            onClick={() => setModal("ideias")}
          />


          <Card
            tema="laranja"
            icone="fa-solid fa-shield"
            titulo="Segurança e Privacidade"
            info="Aprenda a usar IA com segurança, protegendo seus dados."
            onClick={() => setModal("seguranca")}
          />


          <Card
            tema="roxo"
            icone="fa-solid fa-puzzle-piece"
            titulo="Biblioteca de Prompts"
            info="Encontre prompts prontos para diferentes situações."
            onClick={() => setModal("biblioteca")}
          />

        </nav>

      </section>


      {/* MODAL */}

      {modal && (
        <Modal
          titulo={conteudosModais[modal].titulo}
          icone={conteudosModais[modal].icone}
          tema={conteudosModais[modal].tema}
          fechar={() => setModal(null)}
        >

          <h3>
            {conteudosModais[modal].subtitulo}
          </h3>


          <p>
            {conteudosModais[modal].texto}
          </p>


          <ul>

            {conteudosModais[modal].itens.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>


          <div className="dica">
            💡 <strong>Dica:</strong>{' '}
            {conteudosModais[modal].dica}
          </div>

        </Modal>
      )}


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


        <div className="links-rapidos">

          <h3>Links Rápidos</h3>

          <ul>

            <li>
              <a href="#inicio">Início</a>
            </li>

            <li>
              <a href="#sobre">Sobre</a>
            </li>

            <li>
              <a href="">Tutoriais</a>
            </li>

            <li>
              <a href="">Ferramentas</a>
            </li>

            <li>
              <a href="">Boas Práticas</a>
            </li>

            <li>
              <a href="">Contato</a>
            </li>

          </ul>

        </div>


        <div className="redes">
        </div>


        <div className="footer-insc">

          <h2>
            A inteligência artificial{' '}
            <span>está ao seu alcance</span>
          </h2>

          <button>
            <i className="fa-solid fa-brain" />
            <p>Comece Agora</p>
          </button>

        </div>

      </footer>

    </div>
  );
}


export default App;