import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.div`
    margin-top: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    background-color: #EBEBEB;
    position:absolute;
    bottom: 0;
    width: 100%;
`

const Text = styled.div`
    font-weight: 300;
    font-size: 0.875rem;
`

const FooterGap = styled.div`
    padding-top: 6rem;
`

const Footer = () => {
    return (
        <>
            <FooterGap />
            <FooterWrap>
                <Text>Create with Love by KobuL</Text>
            </FooterWrap>
        </>
    )
}

export default Footer
