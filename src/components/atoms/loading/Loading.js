import React from 'react';
import './Loading.css'
import loadingSvg from '../../../assets/plyos-logo-animated.svg';

export const Loading = () => {
    return (
        <div className="loading-box">
            <img src={loadingSvg} alt="Loading content animation" />
            <h1>Loading...</h1>        
        </div>
    )
}