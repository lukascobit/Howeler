import { useState } from "react";
import firebase from "./firebase-config";


const socialMediaAuth = (provider)=>{
    firebase.auth().signInWithPopup(provider)
    .then((res)=>{
        
        var user = res.user;
        console.log(res.user.bc.bc);
        // console.log(res.user.bc.bc.photoURL);
        localStorage.setItem("username", user.bc.bc.displayName)
        localStorage.setItem("email", user.bc.bc.email)
        localStorage.setItem("imgURL", user.bc.bc.photoURL)

    }).catch((err)=>{

        return err
    });
}


export default socialMediaAuth;