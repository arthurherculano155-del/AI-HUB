import './tutoriais.scss';
import Menu from '../../Components/menu';
import HeroSection from '../../Components/hero';
import CardInfo from '../../Components/cardInfo';
import Video from '../../Components/videos';
import Rodape from '../../Components/rodape';

export default function Tutoriais() {
    return (
        <div className="tutoriais">
            <Menu />

            <HeroSection
                indice="Tutoriais"
                icone="play"
                text="Aprenda IA "
                span="passo a passo"
                desc="Aqui você encontra tutoriais completos para dominar as principais ferramentas de IA e utilizar no seu dia a dia."
                imagem='RobotTuts.png'
            />

            <div className="infor" id='sobre'>
                <i className="fa-solid fa-play" />
                <div className="info">
                    <h2>Vídeos em Destaque</h2>
                    <p>Confira conteúdos selecionados para aprender, explorar ideias e ver a IA funcionando na prática.</p>
                </div>
            </div>

            <section className="videos" id='sobre'>
                <div className="tuts">

                    <div className="video-destaque">
                        <a href="https://www.youtube.com/watch?v=cswHBeqNGt0" target='_blank'>
                            <img src="./Assets/Imgs/Capa-Video-Guia.png" alt="" />
                        </a>

                        <div className="destaque">
                            <i class='fa-solid fa-fire' />
                            <p>MAIS RECOMENDADO</p>
                        </div>

                        <div className="info">
                            <h2>Introdução Prática ao ChatGPT para Iniciantes</h2>
                            <p>Aprenda a usar o ChatGPT de forma simples e prática, descobrindo recursos e dicas para facilitar suas tarefas, estudos e atividades do dia a dia.
                            </p>

                            <div className="cardss">
                                <CardInfo
                                    icon="clock"
                                    content="22 min"
                                />

                                <CardInfo
                                    icon="chart-simple"
                                    content="Iniciante"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-inf">
                <i class="fa-brands fa-youtube" />
                <h3>Tutoriais Interessantes</h3>
            </div>

            <section className="videos">
                <Video
                    link="https://www.youtube.com/watch?v=oFGXr2pgKLY&t=9s"
                    imagem="Capa-Video-Basico.png"
                    tempo="8:18"
                    titulo="Engenharia De Prompt: 7 Passos Para O Prompt Perfeito"
                    desc="Entenda como criar um bom prompt no ChatGPT através da Engenharia de Prompt."
                    nivel="Básico"
                />

                <Video
                    link="https://www.youtube.com/watch?v=aQqyi3E1AVc"
                    imagem="Capa-Video-MidJourney.png"
                    tempo="15:10"
                    titulo="Midjourney - Como Criar Imagens com IA [Inteligência Artificial]"
                    desc="Aprenda a criar imagens incríveis com Inteligência Artificial de forma simples usando o Midjourney."
                    nivel="Básico"
                />

                <Video
                    link="https://www.youtube.com/watch?v=3Ic0XCtvoY8"
                    imagem="Capa-Video-Cowork.png"
                    tempo="15:59"
                    titulo="Como automatizar QUALQUER tarefa com o Claude Cowork"
                    desc="Aprenda a automatizar tarefas de forma prática e eficiente usando o Claude Cowork."
                    nivel="Intermediário"
                />

                <Video
                    link="https://www.youtube.com/watch?v=LB4IJVrYBZ8"
                    imagem="Capa-Video-Dados.png"
                    tempo="13:15"
                    titulo="Masterizando a Análise de Dados com ChatGPT (em apenas 10 minutos)"
                    desc="Aprenda a analisar dados de forma rápida e eficiente usando os recursos do ChatGPT."
                    nivel="Intermediário"
                />
            </section>

            <Rodape />
        </div>
    );
}