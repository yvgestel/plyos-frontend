import React from 'react';
import './SearchBar.css';

import { Input } from '../../atoms/input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

import { useForm } from 'react-hook-form';

export const SearchBar = () => {

    const { handleSubmit, watch, register } = useForm();
    const watchSearch = watch("search")

    const onSubmit = () => {
        console.log(watchSearch)
    };

    return (
        <form className="search-bar">
            <FontAwesomeIcon className="search-icon" icon={faFilter} />
            <Input id="search" name="search" text="Search..." className="" type="text" inputRef={register()}></Input>
            <FontAwesomeIcon className="search-icon" icon={faSearch} onClick={handleSubmit(onSubmit)} />
        </form>
    );
};