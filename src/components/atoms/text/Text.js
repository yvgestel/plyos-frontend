import React from 'react';
import './Text.css';

export const Text = ({ className, children }) => {
    return (
        <p className={className}>{children}</p>
    );
}; 