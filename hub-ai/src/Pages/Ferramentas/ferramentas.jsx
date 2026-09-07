import Menu from '../../Components/menu.jsx'
import HeroSection from '../../Components/hero.jsx'
import Ferramenta from '../../Components/ferramentasIA.jsx'
import Rodape from '../../Components/rodape.jsx'
import './ferramentas.scss'



export default function Ferramentas() {
  return (
    <div className="Ferramentas">
      <Menu />

      <HeroSection
        indice="Ferramentas"
        icone="gears"
        text="Explore as melhores "
        span="ferramentas de IA"
        desc="Descubra ferramentas poderosas que podem facilitar seu dia a dia, aumentar sua produtividade e resolver problemas."
        imagem='RobotTools.png'
      />

      <div className="infor" id='sobre'>
        <i className="fa-solid fa-screwdriver-wrench" />
        <div className="info">
          <h2>Principais Ferramentas</h2>
          <p>Conheça as principais ferramentas de IA para criar, aprender, programar e resolver os problemas do cotidiano.</p>
        </div>
      </div>

      <section className="ferramentas">
        <Ferramenta
          imagemIA="Chat-Logo.webp"
          nomeIA="ChatGPT"
          descIA="O ChatGPT ajuda a criar, aprender, programar, pesquisar e resolver problemas com IA."
          tipoIA="ChatBot"
          link="https://chatgpt.com/"
        />

        <Ferramenta
          imagemIA="Logo-Gemini.jpeg"
          nomeIA="Gemini"
          descIA="O Gemini é a IA do Google para pesquisar, criar conteúdos e integrar serviços Google."
          tipoIA="ChatBot"
          link="https://gemini.google.com/"
        />

        <Ferramenta
          imagemIA="MidJourney-Logo.png"
          nomeIA="Midjourney"
          descIA="O Midjourney é uma IA focada em criar imagens e artes a partir de descrições em texto."
          tipoIA="Criação de Imagens"
          link="https://www.midjourney.com"
        />

        <Ferramenta
          imagemIA="Perplexity-Logo.png"
          nomeIA="Perplexity"
          descIA="O Perplexity é uma IA focada em pesquisa rápida com fontes da web."
          tipoIA="Pesquisa"
          link="https://www.perplexity.ai/"
        />

        <Ferramenta
          imagemIA="Logo-Copilot.png"
          nomeIA="Github Copilot"
          descIA="O GitHub Copilot é uma IA que ajuda a programar mais rápido, sugerindo e explicando código."
          tipoIA="Código"
          link="https://github.com/features/copilot"
        />

        <Ferramenta
          imagemIA="NotionAI-Logo.png"
          nomeIA="Notion AI"
          descIA="O Notion AI ajuda a escrever, resumir e organizar informações com IA."
          tipoIA="Produtividade"
          link="https://github.com/features/copilot"
        />
      </section>

      <Rodape />
    </div>
  )
}