import './contato.scss';

export default function Contato({
    tema,
    iconelegalzinho,
    grupo,
    nomeContato,
    descContato,
    link
}) {

    function abrirEmail() {
        const email = "arthurherculano155@gmail.com";

        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = `mailto:${email}`;
        } else {
            window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
                "_blank"
            );
        }
    }

    return (
        <div className={`contato ${tema}`}>
            <div className="img">
                <i className={`fa-${grupo} fa-${iconelegalzinho}`} />
            </div>

            <div className="infoContato">
                <div className="text">
                    <h2>{nomeContato}</h2>
                    <p>{descContato}</p>
                </div>

                {nomeContato === "E-mail" ? (
                    <button onClick={abrirEmail}>
                        <i className="fa-solid fa-arrow-right" />
                    </button>
                ) : (
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-solid fa-arrow-right" />
                    </a>
                )}

            </div>
        </div>
    );
}