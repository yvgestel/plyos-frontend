import React from 'react';
import './Home.css';
import backgroundImage from '../../assets/split-vision.png'

import { Circle } from '../../components/atoms/circle/Circle';
import { Title } from '../../components/atoms/title/Title';
import { Text } from '../../components/atoms/text/Text';
import { Wrapper } from '../../components/atoms/wrapper/Wrapper';

export const Home = () => {
    return (
        <Wrapper className="wrap-2">
            <div className="home-bg">
                <Circle className="circ-green"/>
                <Circle className="circ-orange"/>
                <img src={backgroundImage} alt="Player with split vision"/>
            </div>
            <div className="home-fg">
                <Title className="big-title">Interactive exercises!</Title>
                <Text className="">
                Lorem ipsum dolor sit amet, consectetuer adipiscing 
                elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient 
                montes, nascetur ridiculus mus.
                </Text>
            </div>
        </Wrapper>
        
    );
};