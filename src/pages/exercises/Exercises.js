import React, { useState, useEffect, useContext } from 'react';
import './Exercises.css';

import { Background } from '../../components/atoms/background/Background';
import { Title } from '../../components/atoms/title/Title';
import { Overview } from '../../components/organisms/overview/Overview';

import DatabaseHelper from '../../helpers/databaseHelper';
import { UserContext } from '../../context/UserContextProvider';

export const Exercises = () => {
    const { currentUser, getUserToken, setActiveUser } = useContext(UserContext);
    const [exercises, setExercises] = useState({
        newest: [],
        mostWatched: [],
        favorite: [],
    })

    const db = new DatabaseHelper()
    useEffect (() => {
        async function getUser() {
            const token = await getUserToken()
            await setActiveUser(token);
        }
        async function fetchNewest() {
            const [response, error] = await db.fetch("/exercises/latest")
            return response.data
        } 
        async function fetchMostWatched() {
            const [response, error] = await db.fetch("/exercises/most-watched")
            return response.data
        } 
        async function fetchFavorites() {
            const token = await getUserToken()
            const [response, error] = await db.privateFetch(`/user/${currentUser.userId}/favorites`, token)
            return response.data[0].favorites
        }

        async function fetchData () {
            const newest = await fetchNewest();
            const mostWatched = await fetchMostWatched();
            const favorites = await fetchFavorites();
            setExercises({
                newest: newest,
                mostWatched: mostWatched,
                favorite: favorites,
            })
        }
        getUser()
        fetchData()
    },[])

    const previews = [
        {
            title: "Newest",
            data: exercises.newest
        },
        {
            title: "Most watched",
            data: exercises.mostWatched
        },
        {
            title: "Favorite",
            data: exercises.favorite
        }
    ]

    

    return (
        <Background className="bg-green-100">
            <Title className="page-hdr">Exercises</Title>
            <Overview pathTo="exercises" viewMore="search" previews={previews}/>
        </Background>
    );
}