import { useState } from 'react'
import ItemBnt from './itemBnt'
import './hero.scss'
import FerramentaUtils from './ferramentasutils'

export default function HeroSection({
    indice,
    icone,
    text,
    span,
    desc,
    imagem
}) {

    const [Modelito, setModelito] = useState(false)
    const [Explore, setExplore] = useState(false)

    return (
        <>
            <div className="hero">

                <div className="heroText">
                    <i class={`fa-solid fa-${icone}`} />
                    <h3>{indice}</h3>
                </div>

                <section className="hero-section" id="inicio">

                    <nav className="hero-nav">

                        <div className="hero-text">

                            <h1 className="hero-info">
                                {text}<br />

                                <span className="hero-span">
                                    {span}
                                </span>

                            </h1>

                            <p>
                                {desc}
                            </p>

                        </div>


                        <div className="hero-bnts">

                            <button className="bnt"
                                onClick={() => setExplore(true)}>
                                <i className={`fa-solid fa-rocket`} />
                                <p>Explorar Conteúdos</p>
                            </button>

                            <button
                                className="bnt"
                                id="transparent-bnt"
                                onClick={() => setModelito(true)}
                            >
                                <i className="fa-solid fa-play" />
                                <p>Ver Como Funciona</p>
                            </button>

                        </div>

                    </nav>

                    <img
                        src={`./Assets/Imgs/${imagem}`}
                        alt=""
                        className="robot"
                    />

                </section>

                <hr className="hr" />
            </div>


            {Modelito && (
                <div className="fundo">
                    <div className="modelito">
                        <div className="info-bnts">
                            <div className="bntss">
                                <button onClick={() => setModelito(false)}>X</button>
                            </div>

                            <div className="text">
                                <h2>Como <span>Funciona?</span></h2>
                                <p>Veja como aprender, praticar e aplicar IA no seu dia a dia em poucos passos.</p>
                            </div>
                        </div>

                        <div className="items-legais">
                            <ItemBnt
                                icone="book"
                                titulo="Descubra"
                                desc="Explore o conteúdo e conheça as possibilidades da IA."
                            />

                            <ItemBnt
                                tema="verde"
                                icone="circle-play"
                                titulo="Pratique"
                                desc="Assista os tutoriais práticos e siga o passo a passo."
                            />

                            <ItemBnt
                                tema="rosa"
                                icone="gear"
                                titulo="Teste"
                                desc="Use as ferramentas e coloque tudo em prática."
                            />

                            <ItemBnt
                                tema="azul"
                                icone="chart-simple"
                                titulo="Aplique"
                                desc="Transforme o que aprendeu em resultados reais."
                            />
                        </div>

                        <img src="./Assets/Imgs/Robot-Down.png" alt="" />
                    </div>
                </div>
            )}

            {Explore && (
                <div className="fundo">
                    <div className="explorarMais">
                        <button onClick={() => setExplore(false)} className="fechar">
                            X
                        </button>
                        <div className="explore-text">
                            <div className="inf-text">
                                <h4>Explorar Conteúdos</h4>
                                <h2>O que você quer <span>explorar</span> hoje?</h2>
                                <p>Escolha uma opção e comece agora. Conteúdos prátios para aprender, aplicar e evoluir com IA.</p>
                            </div>

                            <img src="./Assets/Imgs/ModalRobot.png" alt="" />

                        </div>

                        <div className="ferramentas-ias">
                            <FerramentaUtils />
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}