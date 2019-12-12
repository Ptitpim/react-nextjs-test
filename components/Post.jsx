import React from 'react';
import moment from 'moment';
import styled from "styled-components";

const PostWrapper = styled.article`
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #999;
`;

const Title = styled.h2`
    margin-bottom: 10px;
`;

const Date = styled.p`
    font-style: italic;
`;

const Content = styled.p`
    margin-bottom: 0;
    color: #666;
`;

const Image = styled.img`
    display: block;
`;

const getText = (text) => text.replace('\n', '<br />')
const getImage = src => `https://upply-interview.herokuapp.com/images/${src}`
const getDate = date => {
    if (!date) return null
    return moment().format('MMMM Do YYYY, hh:mm')
}

const Post = ({title, text, date, src}) => (
    <PostWrapper>
        {title &&
            <Title>{title}</Title>
        }
        {date &&
            <Date>{getDate(date)}</Date>
        }
        {src &&
            <Image src={getImage(src)}/>
        }
        {text &&
            <Content dangerouslySetInnerHTML={{__html: getText(text)}}/>
        }
    </PostWrapper>
)

export default Post
