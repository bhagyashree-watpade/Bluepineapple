import { useState } from "react";

export default function Siblings() {
  const [message, setMessage] = useState("");

  return (
    <>
    <h3>Assignment -2</h3>
      <Sender setMessage={setMessage} />
      <Receiver message={message} />
      <p>---------------------------</p><br />
    </>
  );
}

function Sender({ setMessage }) {
  return(
  <>
  <h4>Sender</h4>
  <input onChange={(msg) => setMessage(msg.target.value)} />
  </>);
}

function Receiver({ message }) {
  return(
    <>
    <h4>Receiver : </h4>
     <p>{message}</p>
    </>
  );
}

