import React, { useState } from "react";

export default function NumberList({ attempt, setAttempt, randomNum, setMsg }) {
  const [num, setNum] = useState("");
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  function get_pos(num) {
    if (num < 0) {
      return num * -1;
    }
    return num;
  }
  let positiveNum = get_pos(randomNum - num);
  console.log(randomNum);
  async function surrender() {
    setMsg(`the number is ${randomNum}`);
    await sleep(3000);

    window.location.reload();
  }

  async function banish() {
    if (positiveNum >= 30) {
      setMsg("You are too far");
    } else if (positiveNum <= 30 && positiveNum >= 20) {
      setMsg("you are alittle close");
    } else if (positiveNum <= 20) {
      setMsg("you are too close");
    }
    if (randomNum == num) {
      setMsg("congratulations you've managed to save the world");
    } else if (randomNum !== num) {
      setNum("");
      setAttempt(attempt - 1);
      //alert(`wrrooong the number is: ${randomNum}`);
    }

    if (attempt === 0) {
      setMsg("you have failed humanity");
      await sleep(3000);

      window.location.reload();
    }
  }
  function userInput(x) {
    if (x.target.value <= 100) {
      setNum(x.target.value);
    }
  }

  return (
    <div>
      <input
        className="userInput"
        placeholder="1-100"
        onChange={userInput}
        value={num}
      />
      <div>
        <button className="buttons" onClick={banish}>
          BANISH
        </button>
        <button className="buttons" onClick={surrender}>
          SURRENDER
        </button>
      </div>
    </div>
  );
}
