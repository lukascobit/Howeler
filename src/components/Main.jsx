import React, {useEffect, useState} from 'react'
import socialMediaAuth from "../config/auth"
import { facebookProvider } from '../config/authMethod'
import { githubProvider } from '../config/authMethod'
import { googleProvider } from '../config/authMethod'
import logo from "./imgs/logo.png"
import {GrSend} from "react-icons/gr"

function Main() {
    const [res, setRes] = useState(localStorage.getItem("signed") || false)
    const [body, setBody] = useState("");
    const [data, setData] = useState(null)
    const fullname = localStorage.getItem("username")


    const handleClick = async(provider) => {
        try {
            var user = socialMediaAuth(provider)
            console.log(user);
            setRes(!res)
            localStorage.setItem("signed", res)
            
        } catch (error) {
            console.log(error);
        }
    }

    async function onSubmit(e){
        e.preventDefault()
        try {
            const Rbody = {body}
            const Rname = {fullname}
            
            const arr = [Rbody, Rname]
            const response = await fetch("http://localhost:4001/posts", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(arr)
            });
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        async function getTodos(){
            try {
                const response = await fetch("http://localhost:4001/posts");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        }
        getTodos()
    },[])

    return (
        <div>
            <title>Howeler</title>
            <div className={!res ? "signInButtons" : "no"}>
                <button onClick={()=> handleClick(facebookProvider)}>sign in with facebook</button>
                <button onClick={()=> handleClick(githubProvider)}>sign in with github</button>
                <button onClick={()=> handleClick(googleProvider)}>sign in with google</button>
            </div>

            <abbr title="Show your profile">
                <div onClick={()=>window.location = "/profile"} className="profile">
                    <img className="img" src={localStorage.getItem("imgURL")} alt="pfp"/>
                    <h1 className="username">{localStorage.getItem("username")}</h1>
                </div>
            </abbr>

            <h1 onClick={()=>window.location = "/"} className="logoText"><img className="logo" src={logo} alt="logo"/>Howeler</h1>

        
            <form onSubmit={e => onSubmit(e)} className="post">
                <h3>Your post: </h3>
                <textarea id="postInput" onChange={(e)=>setBody(e.target.value)} value={body} placeholder="type here..." type="text" />
                <button className="sendButton"><GrSend/></button>
            </form>

            <div className="posts">
                {
                    data && data.map((d)=>{
                        return(
                            <div key={d.id} className="postText">
                                <h1>{d.fullname}</h1>
                                <p>{d.body}</p>
                            </div>
                        )
                    })
                }
               
                
            </div>
        

        </div>
    )
}

export default Main;