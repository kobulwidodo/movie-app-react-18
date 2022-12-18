import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const TrailerWrap = styled.div`
    position: relative;
    padding-top: 56.25%;
`

const Title = styled.div`
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    color: #434343;
    margin-top: 12px;
`

const Date = styled.div`
    text-align: center;
    font-weight: 300;
    font-size: 13px;
    color: #6D6D6D;
    margin-top: 6px;
`

const TrailerCard = (props) => {
    return (
        <>
            <TrailerWrap>
                <ReactPlayer className='player' url={`https://www.youtube.com/watch?v=${props.url}`} controls={true} width="100%" height="100%" light={true} playIcon={false} />
            </TrailerWrap>
            <Title>{props.title}</Title>
            <Date>{props.date.substring(0, 10)}</Date>
        </>
    )
}

export default TrailerCard
