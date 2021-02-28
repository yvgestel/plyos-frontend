import React from 'react';
import './Home.css';
import backgroundImage from '../../assets/split-vision.png'

import { Circle } from '../../components/atoms/circle/Circle';
import { Title } from '../../components/atoms/title/Title';
import { Text } from '../../components/atoms/text/Text';

export const Home = (props) => {
    return (
        <div className="home-page">
            <div className="home-bg">
                <Circle className="circ-green"/>
                <Circle className="circ-orange"/>
                <img className="bg-img" src={backgroundImage} alt="Player with split vision"/>
            </div>
            <div className="home-fg">
                <Title className="big-title">Welkom!</Title>
                <Text className="">
                Plyos is er om jou, als trainer/coach, zo goed mogelijk te helpen. Lees blogs, bekijken oefeningen en stel je eigen training samen.
                </Text>
            </div>
        </div>
        
    );
};