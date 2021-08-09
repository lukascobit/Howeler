import React from 'react'
import logo from "./imgs/logo.png"

function Profile() {
    return (
        <div>
            <title>Your howeler profile</title>
            <h1 onClick={()=>window.location = "/"} className="logoText"><img className="logo" src={logo} alt="logo"/>Howeler</h1>

            <img className="imgBig" src={localStorage.getItem("imgURL")} alt="pfp"/>
            <h2 className="email">{localStorage.getItem("email")}</h2>
            <h1 className="usernameBig">{localStorage.getItem("username")}</h1>
            
        </div>
    )
}

export default Profile
