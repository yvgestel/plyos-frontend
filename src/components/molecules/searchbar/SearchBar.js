import React from 'react';
import './SearchBar.css';

import { Input } from '../../atoms/input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBar = ({ inputs }) => {

    const createInputs = (input) => {
        switch(input.type) {
            case "icon":
                return (
                    <FontAwesomeIcon 
                    key={input.key}
                    className="search-icon" 
                    icon={input.icon} 
                    onClick={input.onClick}
                />  
                )         
            case "search":
                return (
                <Input 
                    key={input.key}
                    id={input.id}
                    name={input.id}
                    label={input.label} 
                    className="" 
                    type="text" 
                    register={input.register}
                />
                )
            default:
                break;
        }
    }

    return (
        <form className="search-bar">
            {
                inputs.map(input => (
                 createInputs(input)
                ))
            }
        </form>
    );
};