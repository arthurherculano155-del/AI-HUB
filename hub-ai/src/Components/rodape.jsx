import './rodape.scss';

export default function Rodape() {
    return (
        <footer className="main-footer">

            <div className="info-footer">

                <div className="footer-info">

                    <img
                        src="./Assets/Imgs/CerebroFavIcon.png"
                        alt="Ícone"
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

            <div className="planilha-download">

                <a
                    href="https://drive.google.com/uc?export=download&id=1fuzvXEbtdK5L0yclxwbGSKY-J84-nDVI"
                    aria-label="Baixar planilha financeira"
                >
                    <img
                        className="qr-code"
                        src="./Assets/Imgs/qr_code_download_planilha.png"
                        alt="QR Code para baixar a planilha financeira"
                    />
                </a>

                <p className="qr-text">
                    Escaneie ou clique para baixar a planilha financeira com IA.
                </p>

            </div>

            <div className="footer-insc">

                <div className="info">
                    <i className="fa-regular fa-lightbulb" />
                </div>

                <div className="infos">

                    <h2>
                        Dica Rápida de <span>IA</span>
                    </h2>

                    <p>
                        Use a IA para organizar suas tarefas,
                        economizar tempo e focar no que realmente importa.
                    </p>

                    <a href="#inicio">

                        <i className="fa-solid fa-arrow-up" />

                        <p>
                            Voltar ao Topo
                        </p>

                    </a>

                </div>

            </div>

        </footer>
    );
}