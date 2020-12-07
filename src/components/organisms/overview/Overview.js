import React from 'react';
import './Overview.css';

import { PreviewBar } from '../../molecules/preview-bar/PreviewBar';

export const Overview = ({onclick, pathTo}) => {
    return (
        <div className="overview-container">
            <PreviewBar title="Newest" onClick={onclick} pathTo={pathTo}/>
            <PreviewBar title="Most watched" onClick={onclick} pathTo={pathTo}/>
            <PreviewBar title="Favorite" onClick={onclick} pathTo={pathTo}/>
        </div>
    );
}