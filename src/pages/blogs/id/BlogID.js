import React, { useEffect, useState } from 'react';
import { useHistory, useParams} from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import './BlogID.css';

import DatabaseHelper from '../../../helpers/databaseHelper';

import { Background } from '../../../components/atoms/background/Background';
import { Photo } from '../../../components/atoms/photo/Photo';
import { IconBar } from '../../../components/molecules/iconbar/IconBar';

import { faArrowLeft, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Markdownbox } from '../../../components/atoms/markdown/Markdown';

export const BlogID = () => {
    const {id} = useParams();
    const history = useHistory()
    const [blog, setBlog] = useState([])

    const db = new DatabaseHelper()
    useEffect (() => {
        async function fetchData() {
            const [response, error] = await db.fetch(`/blog/${id}`)
            setBlog(response.data)
        } 
        fetchData()
    },[])

    const goPreviousPage = () => {
        history.goBack()
    }

    const shareOnSocials = () => {
        console.log("Share on socials")
    }

    const icons = [
        {
            id: 1,
            icon: faArrowLeft,
            onIconClick: goPreviousPage
        },
        {
            id: 2,
            icon: faShareAlt,
            onIconClick: shareOnSocials
        }

    ]

    return (
        // {exercise.markdown || ""} IPV {exercise.markdown}
        // to prevent error .replace of undefined
        !blog 
        ?
            <h1>Loading..</h1>
        :
            <Background className="bg-orange-100">
                <Photo image={blog.blogImage} styles="blog-post-img" alt={blog.title} />

                <Markdownbox>
                    <Markdown>
                        {blog.markdown || ""} 
                    </Markdown>
                </Markdownbox>
                <IconBar 
                    icons={icons}
                    background="bg-orange"    
                />
            </Background>
    )
}