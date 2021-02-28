import React from 'react';
import './Input.css';

export const Input = ({id, label, register, error,  ...inputProps}) => {

    return (
        <fieldset>
            <input 
                id={id}
                required
                ref={register}
                {...inputProps}
            >
            </input>
            <label htmlFor={id}>{label}</label>
            {error && <p>{error.message}</p>}
        </fieldset>
    );
};