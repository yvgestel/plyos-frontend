import React from 'react';
import { useForm } from 'react-hook-form';
import "./Contact.css";

import { Background } from '../../components/atoms/background/Background';
import { Button } from '../../components/atoms/button/Button';
import { Input } from '../../components/atoms/input/Input';
import { Title } from '../../components/atoms/title/Title';

export const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const sendContactForm = () => {
        console.log("Verzenden")
    }

    return (
        <Background className="bg-orange-100">
        <Title className="page-hdr">Contact us</Title>
            <form className="contact-section">
                <Input 
                id="name" 
                name="name" 
                label="Name" 
                type="text" 
                className="input-list" 
                register={register({ required: true })}
                error={errors.email}    
                />
                <Input 
                id="email" 
                name="email" 
                label="Email" 
                type="text" 
                className="input-list" 
                register={register({ required: true })}
                error={errors.email}    
                />
               

                <fieldset>
                    <textarea 
                    id="message" 
                    name="message" 
                    label="Message" 
                    type="text" 
                    className="input-list" 
                    ref={register({ required: true })} 
                    required
                    />
                    <label htmlFor="message">Message</label>
                </fieldset>
                  
                <Button 
                    onClick={handleSubmit(sendContactForm)}
                    type="submit"
                    className="btn-primary"
                    color="green"
                    >Submit
                </Button>  
            </form>
        </Background>
    );
};