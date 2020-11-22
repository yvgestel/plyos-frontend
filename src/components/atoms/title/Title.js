import React from 'react';
import './Title.css';

const STYLES = [
    "page-hdr",
    "blog-hdr"
];

export const Title = ({ title, style }) => {

    const checkStyle = STYLES.includes(style) ? style : STYLES[0];

    return (
        <h1 className={checkStyle}>{title}</h1>
    );
};