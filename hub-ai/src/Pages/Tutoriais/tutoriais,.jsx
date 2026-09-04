import './tutoriais.scss';
import Menu from '../../Components/menu';
import CardInfo from '../../Components/cardInfo';

export default function Tutoriais() {
    return (
        <div className="tutoriais">
            <Menu />

            <section className="hero-section">

                <div className="hero-info">
                    <div className="heroText">
                        <i class="fa-solid fa-play" />
                        <h3>Tutoriais</h3>
                    </div>

                    <h1>Aprenda IA <br />

                        <span>passo a passo</span>

                    </h1>

                    <p>Aqui você encontra tutoriais completos, em vídeo e texto, para dominar as principais ferramentas de Inteligência Artificial e aplicar ao seu dia a dia</p>

                    <div className="informations">
                        <CardInfo
                            icon='circle-play'
                            content='Vídeos Explicativos'
                        />

                        <CardInfo
                            icon='file'
                            content='Passo a passo detalhado'
                        />

                        <CardInfo
                            icon='bolt'
                            content='Do básico ao avançado'
                        />
                    </div>
                </div>

                <img src="./Assets/Imgs/RobotTut.png" alt="" className='Info-Tut' />

            </section>

            <hr className='linha' />

            <section className="videos" id='sobre'>
                <div className="tuts">
                    <div className="vid">
                        <i class="fa-solid fa-play" />
                        <h2>Vídeos em Destaque</h2>
                    </div>

                    <div className="video-destaque">
                        <a href="https://www.youtube.com/watch?v=cswHBeqNGt0" target='_blank'>
                            <img src="./Assets/Imgs/Capa-Video-Guia.png" alt="" />
                        </a>

                        <div className="destaque">
                            <i class='fa-solid fa-fire' />
                            <p>MAIS ASSISTIDO</p>
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

                <div className="categorias">

                </div>
            </section>
        </div>
    );
}