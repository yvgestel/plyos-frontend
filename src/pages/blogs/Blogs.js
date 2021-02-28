import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

import { Background } from '../../components/atoms/background/Background';
import { Title } from '../../components/atoms/title/Title';
import { Blogpost } from '../../components/molecules/blogpost/Blogpost';
import DatabaseHelper from '../../helpers/databaseHelper';

export const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    const db = new DatabaseHelper()
    useEffect (() => {
        async function fetchData() {
            const [response, error] = await db.fetch("/blog")
            setBlogs(response.data)
        } 
        fetchData()
    },[])

    return (
            <Background className="bg-orange-100" >
                <Title className="page-hdr">Blogs</Title>
                <div className="blog-container">
                    { blogs.map(blog => (
                        <Link key={blog._id} to={`/blogs/${blog._id}`}>  
                            <Blogpost key={blog._id} image={blog.blogImage} title={blog.title} date={blog.date} alt={blog.title} />
                        </Link>
                        ))
                    }
                </div>
            </Background>
    )
}