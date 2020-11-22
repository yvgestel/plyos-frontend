import React from 'react';
import './Overview.css';

import Preview from './preview/Preview';
import IMG from '../../assets/oefening2.jpg';

function Overview ({ title }) {
    return (
        <div id="overview" className="overview-wrapper" data-content={title}>
        <Preview img={IMG} title="Oefening 1"></Preview>
        </div>
        
    );
}

export default Overview;