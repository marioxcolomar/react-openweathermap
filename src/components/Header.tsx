import React from 'react'

const Header = (props) => {
    return (
        <h1>{props.city}, {props.country}</h1>
    )
}

export default Header