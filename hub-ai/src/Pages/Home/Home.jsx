import './Home.scss';
import Card from './Components/card.jsx'

function App() {
  return (
    <div className="App">
      <header className="Home-Header">
        <div className="Menu-Info">
          <img src="./Assets/Imgs/CerebroFavIcon.png" alt="Icone - SITE" className='icone' />

          <div className="text-menu">

            <h1 className="Info-Text"><span>IA</span> na Prática</h1>
            <p className="Info-Sub">Inteligência que Transforma</p>

          </div>

        </div>

        <nav className="Bnt-Links">

          <ul className='Links'>

            <li className="link">
              <a href="">Início</a>
            </li>
            <li className="link">
              <a href="">Sobre</a>
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

      <section className="hero-section">
        <nav className="hero-nav">
          <div className="hero-text">

            <h1 className="hero-info">Use IA de forma<br /> <span className="hero-span">mais inteligente.</span></h1>
            <p>Aprenda a usar a inteligência artificial para trabalhar melhor, estudar com mais eficiência e resolver problemas do dia a dia.</p>
          </div>

          <div className="hero-bnts">
              <button className="bnt">
                <i className="fa-solid fa-rocket" />
                <p>Explorar Conteúdos</p>
              </button>

              <button className="bnt" id='transparent-bnt'>
                <i className="fa-solid fa-play" />
                <p>Explorar Conteúdos</p>
              </button>
          </div>
        </nav>

        <img src="./Assets/Imgs/Robot-AI.png" alt="" className="robot" />
      </section>

      <hr className="hr" />

      <section className="info-section">
        <h2>Por onde você quer começar?</h2>

        <nav className="card">
            <Card id="Card1">
              icone="fa-solid fa-brief-case"
              titulo="No trabalho"
              info="Aumente sua produtividade, automatize suas tarefas e tome decisões melhores"
            </Card>
        </nav>
      </section>
      
    </div>
  );
}

export default App;
