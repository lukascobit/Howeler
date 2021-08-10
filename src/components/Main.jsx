import React, {useEffect, useState} from 'react'
import socialMediaAuth from "../config/auth"
import { facebookProvider } from '../config/authMethod'
import { githubProvider } from '../config/authMethod'
import { googleProvider } from '../config/authMethod'
import logo from "./imgs/logo.png"
import {GrSend} from "react-icons/gr"
import {AiFillFacebook, AiFillGoogleSquare, AiFillGithub} from "react-icons/ai"


function Main() {
    const [res, setRes] = useState(localStorage.getItem("signed") || false)
    const [body, setBody] = useState("");
    const [data, setData] = useState(null)
    const [isLong, setIsLong] = useState(false)
    const fullname = localStorage.getItem("username")


    const handleClick = async(provider) => {
        try {
            var user = socialMediaAuth(provider)
            console.log(user);
            setRes(!res)
            localStorage.setItem("signed", res)
            //window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    async function onSubmit(e){
        if(!res){
            return;
        }
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

    function type(e){
        if(e.target.value.length >= 254){
            setIsLong(true)
            return
        }
        setIsLong(false)
        setBody(e.target.value)
    }

    return (
        <div>
            <title>Howeler</title>
            <div className={!res ? "signInButtons" : "no"}>
                <button className="signinB f" onClick={()=> handleClick(facebookProvider)}><AiFillFacebook/>sign in with facebook</button>
                <button className="signinB gi" onClick={()=> handleClick(githubProvider)}><AiFillGithub/>sign in with github</button>
                <button className="signinB go" onClick={()=> handleClick(googleProvider)}><AiFillGoogleSquare/>sign in with google</button>
            </div>

            <abbr title="Show your profile">
                <div onClick={()=>window.location = "/profile"} className={res ? "profile" : "no"}>
                    <img className="img" src={localStorage.getItem("imgURL") || logo} alt="pfp"/>
                    <h1 className="username">{localStorage.getItem("username")}</h1>
                </div>
            </abbr>

            <h1 onClick={()=>window.location = "/"} className="logoText"><img className="logo" src={logo} alt="logo"/>Howeler</h1>

        
            <form onSubmit={e => onSubmit(e)} className="post">
                <h3>Your post: </h3>
                <textarea className={res ? "postInput" : "no"} onChange={(e)=>type(e)} value={body} placeholder="type here..." type="text" />
                <h1 className={isLong ? "warning" : "no"}>This message is too long, keep it short.</h1>
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