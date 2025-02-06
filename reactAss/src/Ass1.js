/**Assignment 1 */
// counter with useState

import React, { useState } from "react";

export default function Onclick() {
    let [count, setCount] = useState(0);
    return(
    <>
    <h3>Assignment 1 : </h3>
    <p id="c">Count = {count}</p> <br />
    <button onClick={() => setCount(count + 1)}>click me</button>
    <p>---------------------------</p><br />
    </> 
    );
}