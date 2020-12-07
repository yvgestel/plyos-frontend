import React from 'react';
import './Search.css';

import { Background } from '../../../components/atoms/background/Background';
import { Preview } from '../../../components/molecules/preview/Preview';
import { SearchBar } from '../../../components/molecules/searchbar/SearchBar';
import { Title } from '../../../components/atoms/title/Title';

import IMG from '../../../assets/oefening1.jpg';

export const SearchPage = () => {

    const onClick = () => {
        console.log("Clicked training in search")
    };

    return (
        <Background className="bg-green-100" >
            <Title className="page-hdr">Exercises</Title>
            <SearchBar />
            <div className="search-result-container">
                <Preview img={IMG} title="Oefening 1" onClick={onClick}></Preview>
                <Preview img={IMG} title="Oefening 2" onClick={onClick}></Preview>
                <Preview img={IMG} title="Oefening 3" onClick={onClick}></Preview>
                <Preview img={IMG} title="Oefening 4" onClick={onClick}></Preview>
                <Preview img={IMG} title="Oefening 5" onClick={onClick}></Preview>
                <Preview img={IMG} title="Oefening 6" onClick={onClick}></Preview>
            </div>
        </Background>
    );
};