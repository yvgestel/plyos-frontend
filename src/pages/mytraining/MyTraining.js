import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import './MyTraining.css';

import { Background } from '../../components/atoms/background/Background';
import { Title } from '../../components/atoms/title/Title';
import { Overview } from '../../components/organisms/overview/Overview';
import { Button } from '../../components/atoms/button/Button';
import { Input } from '../../components/atoms/input/Input';
import { Popup } from '../../components/atoms/popup/Popup';
import { IconBar } from '../../components/molecules/iconbar/IconBar';

import { faArrowLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import DatabaseHelper from '../../helpers/databaseHelper';

import { UserContext } from '../../context/UserContextProvider';

export const MyTraining = (props) => {
    const { currentUser, getUserToken} = useContext(UserContext);
    const [ allTrainings, setAllTrainings ] = useState([]);
    const [hidePopup, setHidePopup] = useState(true)
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory()
    const db = new DatabaseHelper()

    useEffect (() => {
        async function fetchData() {
            const token = getUserToken() 
            const [response, error] = await db.privateFetch(`/training/${currentUser.userId}`, token)
            if (response.data.length>0) {
                setAllTrainings(response.data)
            }
        } 
        fetchData()
    },[])

    const deleteTraining = async (training) => {
        const token = getUserToken();
        const [result, error] = await db.privateDelete(`/training/${training._id}`, token);
        for (let i=0; i<allTrainings.length; i++){
            if (allTrainings[i]._id === training._id){
                allTrainings.splice(i,1)
            }
        }
        setAllTrainings(allTrainings)
        togglePopUp();     
    }

    const addTraining = async ({trainingname}) => {
        const training = {
            name: trainingname,
            user: currentUser.userId
        }
        const token = getUserToken() 
        const [result, error] = await db.privatePost("/training", training, token)
        allTrainings.push(result.data.createdTraining)
        setAllTrainings(allTrainings)
    }

    const goPreviousPage = () => {
        history.goBack()
    }

    const togglePopUp = () => {
        setHidePopup(!hidePopup);
    }

    const icons = [
        {
            id: 1,
            icon: faArrowLeft,
            onIconClick: goPreviousPage
        },
        {
            id: 2,
            icon: faTrashAlt,
            onIconClick: togglePopUp
        }
    ]

    return (
        <Fragment>
            <Popup hide={hidePopup}>
                <Title className="sm-title">
                    Delete a training
                </Title>
                {
                    allTrainings.map(training => (
                        <Button 
                            onClick={() => deleteTraining(training)}
                            key={training._id}
                        >
                            {training.name}
                        </Button>
                    ))
                }
            </Popup>
            <Background className="bg-green-100">
                <Title className="page-hdr">MyTraining</Title>
                {allTrainings.length===0  ? 
                    <form className="login-section">
                        <Input
                            id="trainingname" 
                            name="trainingname" 
                            label="Trainingname" 
                            type="text" 
                            className="input-list" 
                            register={register(
                                {
                                required: {
                                    value: true,
                                    message: 'Give your training a name first',
                                }
                                }
                            )}
                            error={errors.trainingname}    
                        >
                        </Input>
                        <Button
                            type="submit"
                            onClick={handleSubmit(addTraining)}
                            className="btn-primary"
                            color="orange"    
                        >
                        Add training
                        </Button> 
                    </form>
                    :
                    <Fragment>
                        <Overview 
                            pathTo="/training" 
                            viewMore=""
                            previews={allTrainings}
                        />
                        <IconBar 
                            icons={icons}
                            background= "bg-green"
                        />
                    </Fragment>
                }
            </Background>
        </Fragment>
    );
}

