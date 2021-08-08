import { useState } from "react";
import firebase from "./firebase-config";


const socialMediaAuth = (provider)=>{
    firebase
    .auth()
    .signInWithPopup(provider)
    .then((res)=>{

        var user = res.user;
        // console.log(user.bc.bc.displayName);
        // console.log(res.user.bc.bc.photoURL);

        console.log(res.user);
        return res.user
    }).catch((err)=>{
        // var errorCode = err.code;
        // var errorMessage = err.message;
        // // The email of the user's account used.
        // var email = err.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = err.credential;
        return err
    });
}

export default socialMediaAuth;

