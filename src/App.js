import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import NumberList from "./Components/NumberList";

function App() {
  const [attempt, setAttempt] = useState(4);
  const [randomNum, setrandomNum] = useState(Math.floor(Math.random() * 101));
  const [msg, setMsg] = useState("");
  return (
    <div className="thedisplay">
      <Header />
      <NumberList
        attempt={attempt}
        setAttempt={setAttempt}
        randomNum={randomNum}
        msg={msg}
        setMsg={setMsg}
      />
      <div className="attem">
        <h5>you have {attempt} left </h5>
      </div>
      <h6>{msg}</h6>
    </div>
  );
}

export default App;
