import React from 'react'
import socialMediaAuth from '../config/auth'
import image from "./imgs/image.jpg"
import { facebookProvider } from '../config/authMethod'
import { githubProvider } from '../config/authMethod'
import { googleProvider } from '../config/authMethod'

function Main() {
    
    const handleClick = async(provider) => {
        try {
            console.log(provider);
            const res = await socialMediaAuth(provider)
            console.log(res)
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            
            <button onClick={()=> handleClick(facebookProvider)}>sign in with facebook</button>
            <button onClick={()=> handleClick(githubProvider)}>sign in with github</button>
            <button onClick={()=> handleClick(googleProvider)}>sign in with google</button>


            <h1 className="logoText">Howeler</h1>

            <div className="profile">
                <img className="img" src={image} alt="pfp"/>
                <h1 className="username">Lukas</h1>
            </div>

        </div>
    )
}

export default Main
