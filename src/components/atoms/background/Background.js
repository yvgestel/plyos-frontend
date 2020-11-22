import React from 'react';
import './Background.css';

const STYLES = [
    "bg-green-100",
    "bg-orange-100",
    "bg-green-50",
    "bg-orange-50"
];

export const Background = ({children, className}) => {
    const checkClassName = STYLES.includes(className) ? className : STYLES[0];

    return (
        <div id="bg-wrapper-div">
            <div id="bg-div" className={checkClassName}>
                {children}
            </div>
        </div>
        
    );
};