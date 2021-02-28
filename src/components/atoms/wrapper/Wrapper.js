import React from 'react';
import './Wrapper.css';

export const Wrapper = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};