import React from 'react';
import './Text.css';

export const Text = ({ align, children }) => {
    return (
        <p 
        className={align}
        >
            {children}
        </p>
    );
}; 