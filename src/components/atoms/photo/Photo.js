import React from 'react';
import './Photo.css';

const STYLES = [
    
];

export const Photo = ({image, style, alt}) => {

    const checkStyle = STYLES.includes(style) ? style : STYLES[0];

    return (
        <img src={image} className={checkStyle} alt={alt} />
    );
};