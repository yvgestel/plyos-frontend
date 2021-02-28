import React from 'react';
import './PreviewBar.css';

import { Preview } from '../preview/Preview';

export const PreviewBar = ({ title, pathTo, data}) => {
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
                        <span>No exercises found.</span>
                    </div>   
                }
            </div>
        </div>
        
    );
}
