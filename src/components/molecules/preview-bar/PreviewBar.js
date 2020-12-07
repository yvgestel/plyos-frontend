import React from 'react';
import { Link } from 'react-router-dom';
import './PreviewBar.css';

import { Preview } from '../preview/Preview';
import IMG from '../../../assets/oefening1.jpg';
import ViewAll from '../../../assets/view-all.jpg';

export const PreviewBar = ({ title, onClick, pathTo }) => {
    return (
        <div id="preview-bar" className="preview-bar-wrapper" data-content={title}>
            <div className="preview-container">
                <Preview img={IMG} title="Oefening 1" onClick={onClick}></Preview>
                <Preview img={IMG} title="Oefening 2" onClick={onClick}></Preview>
                <Preview img={IMG} title="Oefening 3" onClick={onClick}></Preview>
                <Link to={`/${pathTo}`}>
                    <Preview img={ViewAll}></Preview>
                </Link>
            </div>
        </div>
        
    );
}
