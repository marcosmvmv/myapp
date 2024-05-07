import React from 'react';
import './button-style.css';

function Button({name, active, onClick}) {
    
    return (
        <div className='container-button'>
            <button onClick={() => onClick(1)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Macuco no borna</span>
        </div>
    )
} 

export default Button