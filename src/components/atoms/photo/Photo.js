import React from 'react';
import './Photo.css';

const STYLES = [
    "exercises-img",
    "blog-img",
    "blog-post-img"
];

export const Photo = ({image, styles, alt}) => {

    const checkStyle = STYLES.includes(styles) ? styles : STYLES[0];

    return (
        <img src={image} className={checkStyle} alt={alt} />
    );
};