import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    background: #EDEDED;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15) !important;
    border-radius: 5px !important;
    border-color: unset !important;
    border: unset !important;
    color: #5F5F5F;
    font-weight: 500;
`

const ButtonGrey = (props) => {
    return (
        <StyledLink
            onClick={props.onClick !== undefined ? () => props.onClick() : (e) => e.stopPropagation()}
            to={props.link}
            className={props.loading ? 'btn disabled-link' : 'btn'}
        >{props.loading ? 'Loading..' : props.text }</StyledLink>
    )
}

export default ButtonGrey
