import React from 'react'

const Header = (props) => {
    return (
        <h1>Weather in {props.city}, {props.country}</h1>
    )
}

export default Header