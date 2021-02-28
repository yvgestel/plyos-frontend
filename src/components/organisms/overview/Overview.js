import React from 'react';
import './Overview.css';

import { PreviewBar } from '../../molecules/preview-bar/PreviewBar';

export const Overview = ({ pathTo, viewMore, previews}) => {
    if(!previews) {
        return null
    }
    return (
        <div className="overview-container">

            { viewMore ?
                previews.map((preview) => { 
                    return preview.data && (
                        <PreviewBar 
                        key={preview.title} 
                        title={preview.title}  
                        pathTo={pathTo} 
                        data={preview.data} 
                        viewMore={viewMore}
                        />
                    )
                })
                :
                previews.map((preview) => {
                    return (
                        <PreviewBar 
                        key={preview._id} 
                        title={preview.name}  
                        pathTo={pathTo} 
                        data={preview.exercises} 
                        viewMore=""
                        />
                    )
                })
            }
        </div>
    );
}