import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import './ExerciseID.css';

import DatabaseHelper from '../../../helpers/databaseHelper';

import { Background } from '../../../components/atoms/background/Background';
import { Photo } from '../../../components/atoms/photo/Photo';
import { Title } from '../../../components/atoms/title/Title';
import { IconBar } from '../../../components/molecules/iconbar/IconBar';
import { Popup } from '../../../components/atoms/popup/Popup';
import { Button } from '../../../components/atoms/button/Button';
import { Input } from '../../../components/atoms/input/Input';
import { Markdownbox } from '../../../components/atoms/markdown/Markdown';

import { UserContext } from '../../../context/UserContextProvider';

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faHeart as faHeartSolid, faPlus } from '@fortawesome/free-solid-svg-icons';

export const ExerciseID = () => {
    const {id} = useParams();
    const [initialLoad, setInitialLoad] = useState(true)
    const [heartIcon, setHeartIcon ] = useState(faHeartRegular)
    const [exercise, setExercise] = useState([])
    const [favorites, setFavorites] = useState(null)
    const [allTrainings, setAllTrainings] = useState([])
    const [hidePopup, setHidePopup] = useState(true)
    const { currentUser, getUserToken, setActiveUser } = useContext(UserContext);
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory()
    const db = new DatabaseHelper();

    async function fetchTrainingData() {
        const token = getUserToken() 
        const [response, error] = await db.privateFetch(`/training/${currentUser.userId}`, token)
        if (response.data) {
            setAllTrainings(response.data)
        }
    }

    const getUserFavorite = async () => {
            const token = await getUserToken()
            const [response, error] = await db.privateFetch(`/user/${currentUser.userId}/favorites`, token)
            setFavorites(response.data[0].favorites)
    }

    useEffect(() => {
        async function getUser() {
            const token = await getUserToken()
            await setActiveUser(token);
        }

        async function fetchExercisesData() {
            const [response, error] = await db.fetch(`/exercises/${id}`)
            setExercise(response.data)
            return response.data
        } 
        
        async function patchViews(exercise) {
            const newViewCount = exercise.views+1
            const newViews = {
                "views": newViewCount
            }
            const [response, error] = await db.patch(`/exercises/${id}`,newViews)
        }

        async function initializePage (){
            getUser()
            const currentExercise = await fetchExercisesData()
            patchViews(currentExercise);
            fetchTrainingData();
        }
        initializePage()
    },[])

    const goPreviousPage = () => {
        history.goBack()
    }

    const changeFavorite = async() => {
        console.log(favorites)
        if (heartIcon.prefix === 'fas') {
            const foundFavorite = favorites.findIndex(favorite => favorite._id === exercise._id)
            if (foundFavorite) {
                favorites.splice(foundFavorite,1)
                const token = getUserToken()
                const newFavorites = {
                    "favorites": favorites
                }
                const [response, error] = await db.privatePatch(`/user/${currentUser.userId}`, token, newFavorites)
            }
            setHeartIcon(faHeartRegular)
        } else {
            favorites.push(exercise) 
            const token = getUserToken()
            const newFavorites = {
                "favorites": favorites
            }
            const [response, error] = await db.privatePatch(`/user/${currentUser.userId}`, token, newFavorites)
            setHeartIcon(faHeartSolid)
        }
    }

    const addExerciseToTraining = async (training) => {
        training.exercises.push(exercise)
        const token = getUserToken() 
        const [response, error] = await db.privatePatch(`/training/${training._id}`, token, training)
        setHidePopup(true)
    }

    const addTrainingToUser = async ({trainingname}) => {
        await addTraining(trainingname)
        await fetchTrainingData()
    }

    const addTraining = async (trainingname) => {
        const training = {
            name: trainingname,
            user: currentUser.userId
        }
        const token = getUserToken() 
        const [result, error] = await db.privatePost("/training", training, token)
    }

    const openCloseTrainingPopUp = () => {
        setHidePopup(!hidePopup)
    }

    const icons = [
        {
            id: 1,
            icon: faArrowLeft,
            onIconClick: goPreviousPage
        }
    ]

    if(currentUser.userId) {
        if(!favorites) {
            getUserFavorite();
        }
        if(favorites && initialLoad) {
            for(let favorite of favorites){
                if (favorite._id === exercise._id){
                    setHeartIcon(faHeartSolid)
                    setInitialLoad(false)
                }
            }
        }
        icons.push(
            {
                id: 2,
                icon: heartIcon,
                onIconClick: changeFavorite
            },
            {
                id: 3,
                icon: faPlus,
                onIconClick: openCloseTrainingPopUp
            }
        );
    }
    
    return (
        // {exercise.markdown || ""} IPV {exercise.markdown}
        // to prevent error .replace of undefined
        !exercise ?
            <h1>Loading</h1>
            :
            <Fragment>
                <Photo image={exercise.exerciseImage} className="exercises-img" alt="Exercises 1"/>
                <Popup hide={hidePopup}>
                    <Title className="sm-title">
                        Choose a training
                    </Title>
                    {
                        allTrainings.map(training => (
                            <Button 
                                onClick={() => addExerciseToTraining(training)}
                                key={training._id}
                            >
                                {training.name}
                            </Button>
                        ))
                    }
                    <form className="training-section">
                        <Input
                            id="trainingname"
                            name="trainingname"
                            label="Add trainingname"
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
                            onClick={handleSubmit(addTrainingToUser)}
                            className="btn-secondary"
                        >Add</Button>
                    </form>
                    <Button onClick={openCloseTrainingPopUp}>Close</Button>
                </Popup>
                <Background className="bg-green-50">
                    <Title>{exercise.name}</Title>
                        <Markdownbox>
                            <Markdown>
                                {exercise.markdown || ""} 
                            </Markdown> 
                        </Markdownbox>
                    <IconBar 
                        icons={icons}
                        background= "bg-green"
                    />
                </Background>

            </Fragment>      
    );
}

/*
                    


*/