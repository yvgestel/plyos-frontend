import React from 'react';
import './Input.css';

export const Input = ({id, text, type, className}) => {
    <fieldset>
        <input id={id} type={type} className={className} required autocomplete="off"></input>
        <label htmlFor={id}>{text}</label>
    </fieldset>
};