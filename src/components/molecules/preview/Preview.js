import React from 'react';
import './Preview.css';

export const Preview = ({img, title, onClick}) => {
    //check for img, if not use default image
    
    return (
        <div className="preview-wrapper" onClick={onClick}>
            <img className="preview-img" src={img} alt={title}/>
            {title &&
                <div className="text-bg">
                    <p className="preview-p">{title}</p>
                </div>
            }
            
        </div>        
    );
};