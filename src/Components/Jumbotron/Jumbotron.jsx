import React from 'react'
import styled from 'styled-components'
import SearchBar from '../SearchBar/SearchBar'

const Jmb = styled.div`
    background-image: url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,017594)/8s4h9friP6Ci3adRGahHARVd76E.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 350px;
    width: 100%;
    position: relative;
`

const Text = styled.div`
    padding-top: 5rem;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 0.5rem;
    @media screen and (max-width: 633px) {
        padding-top: 2rem;
    }
`
const TitleJumb = styled.div`
    font-weight: 500;
    color: white;
    font-size: 1.875rem;
    line-height: 37px;
    @media screen and (max-width: 500px) {
        font-size: 1.35rem;
    }
`
const SubTitleJumb = styled.div`
    margin-top: 10px;
    font-weight: 200;
    color: white;
    font-size: 1.125rem;
    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`

const SearchWrap = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
    position: absolute;
    bottom:0px;
    width: 100%;
`

const FormWrap = styled.div`
    margin: 0 auto;
    max-width: 600px;
`

const Jumbotron = (props) => {
    return (
        <Jmb>
            <Text>
                <TitleJumb>{props.title}</TitleJumb>
                <SubTitleJumb>{props.subtitle}</SubTitleJumb>
            </Text>
            <SearchWrap>
                <FormWrap>
                    <SearchBar 
                        disabled={false}
                    />
                </FormWrap>
            </SearchWrap>
        </Jmb>
    )
}

export default Jumbotron
