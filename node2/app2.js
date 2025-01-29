import React from "react";

function Container({children}){
    return <div className ="container">{childern}</div>;
}

function App() {
    return (
        <Container>
            <h1>Title</h1>
            <p>This is a paragraph</p>
        </Container>
    );
}

export default App;