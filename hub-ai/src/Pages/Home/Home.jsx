import { useState } from 'react';

import { conteudosModais } from '../../Components/modal.jsx';
import Modal from '../../Components/modal.jsx';
import Card from '../../Components/card.jsx';
import Menu from '../../Components/menu.jsx';

import './Home.scss';


function App() {

  const [modal, setModal] = useState(null);

  const conteudoAtual = modal
    ? conteudosModais[modal]
    : null;

  return (
    <div className="App">

      <Menu />


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

            <button
              className="bnt"
              id="transparent-bnt"
            >
              <i className="fa-solid fa-play" />
              <p>Ver Como Funciona</p>
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


      <section
        className="info-section"
        id="sobre"
      >

        <h2>
          Por onde você quer começar?
        </h2>


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


      {conteudoAtual && (

        <Modal
          titulo={conteudoAtual.titulo}
          icone={conteudoAtual.icone}
          tema={conteudoAtual.tema}
          texto={conteudoAtual.texto}
          itens={conteudoAtual.itens}
          dica={conteudoAtual.dica}
          fechar={() => setModal(null)}
        />

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


        <div className="redes">

        </div>

        <div className="links-rapidos">
          <h3>Links Rápidos</h3>
          <ul>
            <li>
              <a href="">Início</a>
            </li>
            <li>
              <a href="">Sobre</a>
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