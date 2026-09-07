import Contato from '../../Components/contato.jsx';
import HeroSection from '../../Components/hero.jsx';
import Menu from '../../Components/menu.jsx';
import Rodape from '../../Components/rodape.jsx';
import './contatos.scss';

export default function Contatos() {
    return (
        <>
            <Menu />

            <HeroSection
                indice="Contato"
                icone="comment"
                text="Vamos "
                span="Conversar?"
                desc="Tem dúvidas, sugestões ou ideias? Estou sempre aberto para novas conversas!"
                imagem='Contact-Robot.png'
            />

            <div className="infor" id='sobre'>
                <i className="fa-solid fa-phone" />
                <div className="info">
                    <h2>Formas de Contato</h2>
                    <p>Conheça as minhas principais formas de contato.</p>
                </div>
            </div>

            <div className="contatosss">
                <Contato
                    tema="normal"
                    grupo="solid"
                    iconelegalzinho="envelope"
                    nomeContato="E-mail"
                    descContato="arthurherculano155@gmail.com"
                />

                <Contato
                    tema="azul"
                    grupo="brands"
                    iconelegalzinho="github"
                    nomeContato="GitHub"
                    descContato="Explore meus projetos e acompanhe meu desenvolvimento."
                    link="https://github.com/arthurherculano155-del"
                />

                <Contato
                    tema="normal"
                    grupo="brands"
                    iconelegalzinho="whatsapp"
                    nomeContato="Whatsapp"
                    descContato="Envie sua mensagem diretamente pelo whatsapp. Responderei assim que possível!"
                    link="https://wa.me/5511942115868"
                />
            </div>

            <Rodape />
        </>
    )
}