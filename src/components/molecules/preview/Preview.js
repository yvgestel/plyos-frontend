import React from 'react';
import { Link } from 'react-router-dom';
import './Preview.css';

export const Preview = ({img, title, path, id }) => {
    return (
        <Link to={`/${path}/${id}`}>
            <div className="preview-wrapper">
                <img className="preview-img" src={img} alt={title}/>
                {title &&
                    <div className="text-bg">
                        <p className="preview-p">{title}</p>
                    </div>
                }  
            </div>      
        </Link>     
    );
};