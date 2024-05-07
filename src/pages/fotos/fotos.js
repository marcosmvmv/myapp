import React from "react";
import './fotos.css';
import Header from "../../components/header/header";
import Footer from '../../components/footer/footer'

function Fotos() {
    return (
        <>
            <Header />
            <div className="fotos-container">
                <div className="fotos-content"> 
                    <div className="banner foto1"></div>
                    <div className="banner foto2"></div>
                    <div className="banner foto3"></div>
                    <div className="banner foto4"></div>
                    <div className="banner foto5"></div>
                    <div className="banner foto6"></div>
                </div> 
            </div>
            <Footer />
        </>
    )
}

export default Fotos;