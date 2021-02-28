import React from 'react';
import './Button.css';

const STYLES = [
    "btn-primary",
    "btn-secondary",
    "btn-tertiary"
];

export const Button =({children, type, onClick, className, color, value}) => {

    const checkClassName = STYLES.includes(className) ? className : STYLES[0];

    return (
        <button 
            className={checkClassName+" btn-"+color} 
            onClick={onClick} 
            type={type}
        >
            {children}
        </button>
    );

};