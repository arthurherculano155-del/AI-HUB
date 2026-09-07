import HeroSection from '../../Components/hero';
import Menu from '../../Components/menu';
import BoasPraticas from '../../Components/praticas.jsx';
import Rodape from '../../Components/rodape.jsx'
import './boaspraticas.scss';

export default function Praticas() {
    return (
        <div className="praticas">
            <Menu />

            <HeroSection
                indice="Boas Práticas"
                icone="thumbs-up"
                text="Aproveite melhor o "
                span="potencial da IA"
                desc="Descubra dicas, estratégias e hábitos para aproveitar ao máximo o potencial da inteligência artificial no seu dia a dia."
                imagem='Good-Robot.png'
            />

            <div className="infor" id='sobre'>
                <i className="fa-solid fa-lightbulb" />
                <div className="info">
                    <h2>Boas Práticas</h2>
                    <p>Aprenda boas práticas para usar a IA com mais eficiência, responsabilidade e estratégia no dia a dia.
                    </p>
                </div>
            </div>

            <nav className="boaspraticas">
                <BoasPraticas
                    icone='crosshairs'
                    nome="Defina um Objetivo"
                    desc="Defina bem o que deseja alcançar com a IA para obter melhores resultados.
"
                />

                <BoasPraticas
                    icone='user'
                    nome="Dê Contexto"
                    desc="Quanto mais detalhes você fornecer, mais precisas e úteis serão as respostas da IA."
                />

                <BoasPraticas
                    icone='file'
                    nome="Valide as Respostas"
                    desc="A IA pode errar. Sempre verifique as informações importantes em fontes confiáveis."
                />

                <BoasPraticas
                    icone='gear'
                    nome="Itere e Melhore"
                    desc="Não tenha medo de ajustar suas perguntas e pedir melhorias. A IA aprende com o seu contexto."
                />

                <BoasPraticas
                    icone='clock'
                    nome="Seja Consciente"
                    desc="Use a IA como apoio, sem substituir seu próprio conhecimento."
                />

                <BoasPraticas
                    icone='chart-simple'
                    nome="Aplique no Seu Dia a Dia"
                    desc="Transforme o aprendizado em ação. Use a IA para estudar, trabalhar e resolver problemas."
                />
            </nav>

            <Rodape />
        </div>
    )
}