import React from 'react'
import styled from 'styled-components'
import Navigatebar from '../Components/Navbar/Navigatebar'

const Text = styled.div`
    text-align: center;
    font-weight: 600;
    color: #3C3C3C;
    font-size: 30px;
    padding-top: 50px;
`

const Subtext = styled.div`
    text-align: center;
    font-weight: normal;
    color: #000000;
    font-size: 30px;
`

const NotFoundPage = () => {
    return (
        <>
            <Navigatebar />
            <Text>
                Cooming Soon ^^
            </Text>
            <Subtext>
                Donate <a href="https://saweria.co/kobulwidodo" target="_blank" rel="noreferrer">here</a> for boosting me to code faster 👾
            </Subtext>
        </>
    )
}

export default NotFoundPage
