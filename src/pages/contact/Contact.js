import React from 'react';
import "./Contact.css";

import { Background } from '../../components/atoms/background/Background';
import { Button } from '../../components/atoms/button/Button';
import { Input } from '../../components/atoms/input/Input';

export const Contact = () => {
    return (
        <Background className="bg-orange-100">
            <form className="contact-section">
                <Input id="name" text="Name" className="input-list" type="text"></Input>
                <Input id="email" text="E-mail" className="input-list" type="text"></Input>
                <Input id="message" text="Message" className="input-list" type="text"></Input>
                <Button onClick={() => {console.log("You clicked Send")}}
                type="text"
                className="btn-primary"
                >Send
                </Button>     
            </form>
        </Background>
    );
};