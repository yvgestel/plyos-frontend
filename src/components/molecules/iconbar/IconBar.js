import React from 'react';
import './IconBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconBar = ({ icons, background}) => {

    const bgClassName = `icon-bar-bg ${background}`

    return (
        <div className={bgClassName}>
            <div className="icon-bar">
                {icons.map(icon => (
                    <FontAwesomeIcon 
                        key={icon.id}
                        onClick={icon.onIconClick}
                        className="icon" 
                        icon={icon.icon}
                    />
                ))}
            </div>
        </div>
        
    );
};