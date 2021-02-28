import React from 'react';
import './Popup.css';

export const Popup = ({ hide, children }) => {
    const className = hide ? "hide-popup" : "popup"
    
    return (
        <div className={className}>
            {children}
        </div>
    );
};