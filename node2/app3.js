import React from "react";
import './styles.css';

function Container({children}){
    return <div className ="container">{children}</div>;
}

function Hobbies({children}){
  return <div className ="Hobbies">{children}</div>;
}
function Button({children}){
  return <button className ="btn">{children}</button>;
}

function App() {
    return (
      <>
        <Container>
            <h1>Title</h1>
            <p>This is a paragraph inside the coontainer</p>
        </Container>

        <Hobbies>
            <h1>Hobbies</h1>
            <p>This are my hobbies</p>
        </Hobbies>
      
        <Button>
           click me
        </Button>
        </>
    );
}

export default App;