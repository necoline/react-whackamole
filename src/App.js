import React from "react";
import win from "./assets/win.png";
import worm from "./assets/worm.png";
import Mole from "./Mole";
import "./App.css";
import "./App.css";

function App() {
  const [score, setScore] = React.useState(0);

  function updateScore(points) {
    setScore(score + points);
  }

  return (
    <>
      {score === 11 ? (
        <img className="win" src={win} alt="mole" />
      ) : (
        <section className="bg">
          <div className="worm-box">
            <div style={{ width: score * 10 + `%` }} className="worm-container">
              <img className="worm" src={worm} alt="worm meter" />
            </div>
          </div>
          <Mole
            holeNumber={0}
            isRoyal={false}
            waitTime={1000}
            action={updateScore}
          />
          <Mole
            holeNumber={1}
            isRoyal={false}
            waitTime={8500}
            action={updateScore}
          />
          <Mole
            holeNumber={2}
            isRoyal={false}
            waitTime={3000}
            action={updateScore}
          />
          <Mole
            holeNumber={3}
            isRoyal={false}
            waitTime={12500}
            action={updateScore}
          />
          <Mole
            holeNumber={4}
            isRoyal={false}
            waitTime={5000}
            action={updateScore}
          />
          <Mole
            holeNumber={5}
            isRoyal={true}
            waitTime={16500}
            action={updateScore}
          />
          <Mole
            holeNumber={6}
            isRoyal={false}
            waitTime={7000}
            action={updateScore}
          />
          <Mole
            holeNumber={7}
            isRoyal={false}
            waitTime={18500}
            action={updateScore}
          />
          <Mole
            holeNumber={8}
            isRoyal={false}
            waitTime={9000}
            action={updateScore}
          />
          <Mole
            holeNumber={9}
            isRoyal={true}
            waitTime={20500}
            action={updateScore}
          />
        </section>
      )}
    </>
  );
}

export default App;
