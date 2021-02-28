import React from 'react';
import './Blogpost.css';

import { Photo } from '../../atoms/photo/Photo';
import { Title } from '../../atoms/title/Title';
import { Text } from '../../atoms/text/Text';


export const Blogpost = ({image, title, date, alt}) => {

    return (
    <div className="blog-post-container">
        <Photo image={image} alt={alt} styles="blog-img" />
        <div className="blog-post-info">
            <Title className="blog-hdr">{title}</Title>
            <Text>{date}</Text>
        </div>
    </div>
    )
}