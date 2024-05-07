import React from "react";
import './header-style.css';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo-batman.png'

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <img id='logo' src={Logo}/>
            <nav>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('contato')}>Contato</li>
                    <li onClick={() => navigate('fotos')}>Fotos</li>
                    <li onClick={() => navigate('comentarios')}>Comentários</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;