import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import './MyProfile.css'

import { Title } from '../../components/atoms/title/Title';
import { Button } from '../../components/atoms/button/Button'; 
import { Input } from '../../components/atoms/input/Input';
import { Background } from '../../components/atoms/background/Background';
import { UserContext } from '../../context/UserContextProvider';

import DatabaseHelper from '../../helpers/databaseHelper';

export const MyProfile = (props) => {
    const { currentUser, getUserToken, setActiveUser } = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const [profileError, setProfileError] = useState(null);
    const { logOutUser } = useContext(UserContext);
    const [input, setInput] = useState(false);

    const history = useHistory();
    const db = new DatabaseHelper()

    useEffect(() => {
        async function getUser() {
            const token = await getUserToken()
            await setActiveUser(token);
        }
        getUser()
    },[])

    const logOut = () => {
        logOutUser();
    };

    const deleteAccount = async () => {
        const token = getUserToken()
        const [response] = await db.privateDelete(`/user/${currentUser.userId}`, token)
        if(response) {
            history.push("/login")
        } else {
            setProfileError("Something went wrong on the server. Please try again later.")
        }
    }

    const setChangePassword = () => {
        setInput(true);
    }

    const changePassword = async ({password}) => {
        setProfileError(null)
        const newPassword = {
            "password": password,
        }
        const token = getUserToken()
        const [response] = await db.privatePatch(`/user/password/${currentUser.userId}`, token, newPassword)
        if (response){
            setInput(false)
        } else {
            setProfileError("Something went wrong on the server. Please try again later.")
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
                {profileError && <span>{profileError}</span>}
                <Button 
                    onClick={!input ? handleSubmit(setChangePassword) : handleSubmit(changePassword)}
                    type="submit"
                    className="btn-secondary"
                    color="orange"
                >
                {!input ? "Change password" : "Save password" }
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