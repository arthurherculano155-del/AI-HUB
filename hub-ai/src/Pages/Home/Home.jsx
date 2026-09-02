import './Home.css';

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
          Começar Agora
        </button>
      </header>
    </div>
  );
}

export default App;
