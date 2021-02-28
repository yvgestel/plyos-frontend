import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import './Search.css';

import DatabaseHelper from '../../../helpers/databaseHelper';

import { Background } from '../../../components/atoms/background/Background';
import { Preview } from '../../../components/molecules/preview/Preview';
import { SearchBar } from '../../../components/molecules/searchbar/SearchBar';
import { Title } from '../../../components/atoms/title/Title';
import { Button } from '../../../components/atoms/button/Button';
import { Popup } from '../../../components/atoms/popup/Popup';
import { Loading } from '../../../components/atoms/loading/Loading';

import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchPage = () => {
    const [allExercises, setAllExercises] = useState([])
    const [hidePopup, setHidePopup] = useState(true)
    const [tagsList, setTagsList] = useState([])
    const [filter, setFilter] = useState({
        tags: [],
        text: ""
    })

    const db = new DatabaseHelper()
    useEffect (() => {
        async function fetchData() {
            const [response] = await db.fetch("/exercises")
            setAllExercises(response.data)
        } 

        fetchData()
    },[])

    const checkTagsList = (tags) => {
        const tagsArray = tags.split(",")
        let tag
        for (tag of tagsArray) {
            if(!tagsList.includes(tag)){
                setTagsList(tagsList.push(tag))
            }
        }
    }

    const { handleSubmit, watch, register } = useForm();
    const watchSearch = watch("search")

    const onSubmit = () => {
        setFilter({
            ...filter,
            text: watchSearch,            
        })
    };

    const chooseFilters = () => {
        allExercises.map(exercise =>
            checkTagsList(exercise.tags) 
        )
        setTagsList(tagsList)
        setHidePopup(!hidePopup)
    }

    const setFilters = () => {
        let checkedTags = [] 
        const tags = document.getElementsByClassName("tag-item")
         for (let tag of tags) {
             if (tag.checked) {
                checkedTags.push(tag.value)
            }
        }
        setFilter({
            ...filter,
            tags: checkedTags})
        setHidePopup(!hidePopup)
    }

    const resetTags = () => {
        const tags = document.getElementsByClassName("tag-item")
        for (let tag of tags) {
            if (tag.checked) {
                tag.checked = !tag.checked
            }
        }
        setFilter({
            ...filter,
            tags: []
        })
    }

    const filterExercises = (exercise) => {
        if (filter.text || filter.tags.length) {
            if (filter.text) {
                console.log(exercise.name)
                const titleMatch = exercise.name.toLowerCase().search(filter.text.toLowerCase())
                const markdownMatch = exercise.markdown.search(filter.text)
                if (titleMatch<0 && markdownMatch<0) return null
            }

            if (filter.tags.length) {
                let match = false
                const exerciseTags = exercise.tags.split(",")
                for (let tag of exerciseTags) {
                    match = filter.tags.includes(tag)
                }
                if (!match) return null
            }
        }

        return (
            <Preview 
                key={exercise._id} 
                path="exercises" 
                img={exercise.exerciseImage} 
                title={exercise.name}
                id={exercise._id}
            >
            </Preview>

        )
    }

    const searchBar = [
        {   
            key: 1,
            type: "icon",
            icon: faFilter,
            onClick: chooseFilters,
        },
        {
            key: 2,
            type: "search",
            label: "Search..",
            register: register(),
            id: "search"
        },
        {
            key: 3,
            type: "icon",
            icon: faSearch,
            onClick: handleSubmit(onSubmit),
        }
    ]

    return (
        allExercises.length<1 
        ?
        <Loading />
        :
        <Background className="bg-green-100" >
            <Title className="page-hdr">Exercises</Title>
            <SearchBar inputs={searchBar}/>
            <div className="search-result-container">
                {allExercises.length 
                    ? 
                    allExercises.map(exercise => (
                        filterExercises(exercise)
                ))
                    : 
                    <h1>No exercises found!</h1>
                }
            </div>

            <Popup hide={hidePopup}>
                <form>
                    <span>Select tags to filter:</span>
                    {
                        tagsList.map(tag => (
                            <div key={tag}>
                                <input 
                                    type="checkbox" 
                                    id={tag} 
                                    value={tag} 
                                    className="tag-item"
                                />
                                <label htmlFor={tag}>
                                    {tag}
                                </label>
                            </div>
                        ))   
                    } 
                    <Button onClick={handleSubmit(resetTags)}>Reset</Button>               
                    <Button onClick={handleSubmit(setFilters)}>Filter</Button>
                </form>
            </Popup>  

        </Background>
    );
}