import React from "react";
import './formulario.css';

function Formulario() {
    return(
        <>   
            <div className="contact-container">
            <p id="description3">Preencha os campos do formulário abaixo que retornamos o contato:</p>
            </div>
            <div className="formulario-container">
                <div id="form-content">
                    <label for="name">Nome: </label>
                    <input id="name" type="name" name="name" placeholder="Nome completo"/>
                    <label for="number">Telefone:</label>
                    <input id="number" type="number" name="number" placeholder="Telefone"/>
                    <label for="email">E-mail:</label>
                    <input id="email" type="email" name="email" placeholder="Insira um e-mail válido"/>
                    <label for="assunto">Assunto:</label>
                    <input id="assunto" type="assunto" name="assunto" placeholder="Assunto"/>
                    <textarea name="mensagem" id="mensagem" rows="10" placeholder="Escreva sua mensagem"></textarea>
                    <button class="button">Enviar</button>
                </div>
            </div>
        </> 
    )
}

export default Formulario;