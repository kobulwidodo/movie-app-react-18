import React from 'react'
import styled from 'styled-components'

const TitleWrapper = styled.div`
    display: flex;
`

const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 5px;
`

const Title = styled.div`
    font-weight: normal;
    font-size: 1.5rem;
`

const TitleSection = (props) => {

    return (
        <TitleWrapper style={ props.customStyle }>
            <Icon src={props.img} alt="Title Section" />
            <Title>{props.title}</Title>
        </TitleWrapper>
    )
}

export default TitleSection
