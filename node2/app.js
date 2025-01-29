// import React from "react";

// function Parent() {
//     const msg = "hello from parent";
//     return <Child grettings={msg} />;
// }

// function Child({grettings}){
//     return <h1>{grettings}</h1>;
// }
// export default Parent;

import React from "react";

function Parent() {
    const msg = "Hello from parent";
    return <Child greetings={msg} />;
}

function Child({ greetings }) {
    return <h1>{greetings}</h1>;
}

export default Parent;
