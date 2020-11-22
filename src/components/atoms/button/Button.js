import React from 'react';
import './Button.css';

const STYLES = [
    "btn-primary",
    "btn-secondary",
    "btn-tertiary"
];

export const Button =({children, type, onClick, className}) => {

    const checkClassName = STYLES.includes(className) ? className : STYLES[0];

    return (
        <button className={checkClassName} onClick={onClick} type={type}>
            {children}
        </button>
    );

};