import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import './MyProfile.css'

import { Title } from '../../components/atoms/title/Title';
import { Button } from '../../components/atoms/button/Button'; 
import { Input } from '../../components/atoms/input/Input';
import { Background } from '../../components/atoms/background/Background';
import { UserContext } from '../../context/UserContextProvider';

export const MyProfile = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const { logOutUser } = useContext(UserContext);
    const [input, setInput] = useState(false);

    const logOut = () => {
        logOutUser();
    };

    const deleteAccount = () => {
        console.log("Deleting Account");
    }

    const changePassword = async () => {
        await setInput(!input);
        if (input) {
            console.log("Change password")
        }
    }

    return(
        <Background className="bg-green-100">
            <Title>MyProfile</Title>
            <form className='profile-section'>
                {input &&
                    <Input
                        id="password" 
                        name="password" 
                        label="Password" 
                        type="password" 
                        className="input-list" 
                        register={register(
                            {
                            required: {
                                value: true,
                                message: 'Dit veld mag niet leeg zijn',
                            },
                            minLength: {
                                value: 8,
                                message: 'Een wachtwoord moet minimaal 8 tekens zijn'
                            }
                            }
                        )}
                        error={errors.password}   
                    />
                }
                <Button 
                    onClick={handleSubmit(changePassword)}
                    type="submit"
                    className="btn-secondary"
                    color="orange"
                >
                Change password
                </Button>  
                <Button 
                    onClick={handleSubmit(deleteAccount)}
                    type="submit"
                    className="btn-secondary"
                    color="orange"
                >
                Delete account
                </Button>
                <Button 
                    onClick={handleSubmit(logOut)}
                    type="submit"
                    className="btn-primary"
                    color="orange"
                >
                Logout
                </Button> 
            </form> 
        </Background>
    )
    
}