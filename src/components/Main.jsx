import React from 'react'
import      image from "./imgs/image.jpg"

function Main() {
    return (
        <div>
            
            <h1 className="logoText">Howeler</h1>

            <div className="profile">
                <img className="img" src={image} alt="pfp"/>
                <h1 className="username">Lukas</h1>
            </div>

        </div>
    )
}

export default Main
