import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const PosterWrap = styled.div`
    text-align: center;
    padding: 30px;
    @media screen and (max-width: 633px) {
        padding-right: 50px;
        padding-left: 50px
    }
`

const ImagePoster = styled.img`
    width: 100%;
    border-radius: 15px;
    transition: transform .5s ease;
    &:hover {
        transform: scale(1.05);
    }
`

const TitlePoster = styled.div`
    font-weight: 500;
    font-size: 0.8125rem;
    color: #434343;
    margin-top: 15px;
`

const DatePoster = styled.div`
    font-weight: 300;
    font-size: 0.8125rem;
    color: #6D6D6D;
    margin-top: 6px;
`

const CardMovies = (props) => {
    return (
        <PosterWrap>
            <Link to={`/${props.isMovie ? 'movie' : 'tv'}/${props.id}`} style={{ textDecoration: 'none' }}>
                <ImagePoster src={"http://image.tmdb.org/t/p/w342/" + props.ImagePoster} />
                <TitlePoster>{props.TitlePoster}</TitlePoster>
                <DatePoster>{props.DatePoster ?? 'Coming Soon'}</DatePoster>
            </Link>
        </PosterWrap>
    )
}

export default CardMovies
