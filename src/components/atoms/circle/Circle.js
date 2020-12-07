import React from 'react';
import './Circle.css';

const STYLES = [
    "circ-green",
    "circ-orange",
];

export const Circle = ({ className }) => {

    const checkClassName = STYLES.includes(className) ? className : STYLES[0];
    const totalClassName = "circle "+checkClassName;

    return (
        <div className={totalClassName}></div>
    );
};