import { useState } from 'react';

import { conteudosModais } from '../../Components/modal.jsx';
import Modal from '../../Components/modal.jsx';
import Card from '../../Components/card.jsx';
import Menu from '../../Components/menu.jsx';

import './Home.scss';
import Rodape from '../../Components/rodape.jsx';
import HeroSection from '../../Components/hero.jsx';


function App() {

  const [modal, setModal] = useState(null);

  const conteudoAtual = modal
    ? conteudosModais[modal]
    : null;

  return (
    <div className="App">

      <Menu />

      <HeroSection
        indice="Início"
        icone="rocket"
        text="Use a IA de forma "
        span="mais inteligente"
        desc="Aprenda a utilizar a inteligência artificial para trabalhar melhor, estudar com mais eficiência e resolver problemas do dia a dia."
        imagem='RobotStart.png'
      /> 



      


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


      <Rodape />

    </div>
  );
}


export default App;