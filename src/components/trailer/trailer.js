import React from "react";
import './trailer.css';
import Video from '../../assets/trailer.mp4';

function Trailer() {
    return(
        <div id="trailer-container">
            <div id="content">
                <video controls id="trailer">
                    <source src={Video} />
                    Seu navegador não possui suporte para vídeos.
                </video>
            </div>
            <div id="sinopse">
                <p id="description">
                    Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
                </p>
                <button id="button">COMPRE AGORA</button>
            </div>
        </div>
    )
}

export default Trailer