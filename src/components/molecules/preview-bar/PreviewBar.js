import React from 'react';
import './PreviewBar.css';

import { Preview } from '../preview/Preview';
import ViewAll from '../../../assets/view-all.jpg';

export const PreviewBar = ({ title, pathTo, data, viewMore}) => {
    return (
        <div id="preview-bar" className="preview-bar-wrapper" data-content={title}>
            <div className="preview-container">
                {   data.length > 0 ?
                    data.map(preview => (
                        <Preview 
                            key={preview._id}
                            img={preview.exerciseImage} 
                            title={preview.name} 
                            path={pathTo} 
                            id={preview._id}
                        />
                    ))
                    :
                    <div className="empty-preview">
                        <p>Woepsie!</p>
                        <p>No exercises found.</p>
                    </div>   
                }
            </div>
        </div>
        
    );
}
