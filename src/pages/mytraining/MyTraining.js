import React from 'react';
import './MyTraining.css';

import { Background } from '../../components/atoms/background/Background';
import { Title } from '../../components/atoms/title/Title';
import { Overview } from '../../components/organisms/overview/Overview';

export const MyTraining = () => {
    const onClick = () => {
        console.log("Clicked on myTraining!");
    }

    return (
        <Background className="bg-green-100">
            <Title className="page-hdr">MyTraining</Title>
            <Overview onclick={onClick}/>
        </Background>
    );
}