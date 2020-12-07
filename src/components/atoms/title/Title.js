import React from 'react';
import './Title.css';

const STYLES = [
    "page-hdr",
    "blog-hdr",
    "big-title"
];

export const Title = ({ children, className }) => {

    const checkClass = STYLES.includes(className) ? className : STYLES[0];

    return (
        <h1 className={checkClass}>{children}</h1>
    );
};