import React from "react";
import './footer.css';
import Logo from '../../assets/logo-batman 2.jpg'
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    return(
        <footer>
            <img src={Logo} />
            <nav id="footer-navigation">
                <ul className="list-navigation">
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('contato')}>Contato</li>
                    <li onClick={() => navigate('fotos')}>Fotos</li>
                    <li onClick={() => navigate('comentarios')}>Comentários</li>
                </ul>
            </nav>
            <span id="copyright">Todos os direitos reservados<br/>Desenvolvido por: José Leitão do Raio</span>
        </footer>
    )
}

export default Footer;