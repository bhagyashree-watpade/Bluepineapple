/* assignment 4 ->useRef()
useRef for Focusing an Input Field */

import React, { useRef } from "react";

export default function UseRef() {
    const myRef = useRef(null);
    const handle = () => {
        myRef.current.focus();
    }

    return(
        <>
        <h3>Assignment 4 : </h3>
        <label>Name:</label>
        <input type="text" ref={myRef} placeholder="Enter your name...."></input>
        <br/><br/>
        <button onClick={handle}>Click me to focus </button>
        <p>---------------------------</p><br />
        </>
    )
}
