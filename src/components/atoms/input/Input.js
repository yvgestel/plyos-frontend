import React from 'react';
//import { useForm } from 'react-hook-form';
import './Input.css';

export const Input = ({name, text, type, className, inputRef}) => {

    return (
        <fieldset>
            <input 
                name={name} 
                type={type} 
                className={className} 
                autoComplete="off" 
                required
                ref={inputRef}
            >
            </input>
            <label htmlFor={name}>{text}</label>
        </fieldset>
    );
};