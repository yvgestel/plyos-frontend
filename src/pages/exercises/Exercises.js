import React from 'react';
import './Exercises.css';

import { Background } from '../../components/atoms/background/Background';
import { Title } from '../../components/atoms/title/Title';
import { Overview } from '../../components/organisms/overview/Overview';

export const Exercises = () => {
    const onClick = () => {
        console.log("Clicked on exercises!");
    }

    return (
        <Background className="bg-green-100">
            <Title className="page-hdr">Exercises</Title>
            <Overview onclick={onClick} pathTo="exercises/search"/>
        </Background>
    );
}