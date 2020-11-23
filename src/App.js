import React from "react";
import fed from "./assets/mole-fed.png";
import hungry from "./assets/mole-hungry.png";
import sad from "./assets/mole-sad.png";
import leaving from "./assets/mole-leaving.png";
import worm from "./assets/worm.png";
import Mole from "./Mole";
import "./App.css";
import "./App.css";

function App() {
  const [score, setScore] = React.useState(0);

  function updateScore() {
    setScore(score + 1);
  }

  return (
    <section className="bg">
      <div className="worm-box">
        <div style={{ width: `90%` }} className="worm-container">
          <img className="worm" src={worm} alt="worm meter" />
        </div>
      </div>
      <Mole holeNumber={0} img={hungry} waitTime={1000} action={updateScore} />
      <Mole holeNumber={1} img={hungry} waitTime={2000} action={updateScore} />
      <Mole holeNumber={2} img={hungry} waitTime={3000} action={updateScore} />
      <Mole holeNumber={3} img={hungry} waitTime={18000} action={updateScore} />
      <Mole holeNumber={4} img={hungry} waitTime={9000} action={updateScore} />
      <Mole holeNumber={5} img={hungry} waitTime={2500} action={updateScore} />
      <Mole holeNumber={6} img={hungry} waitTime={10000} action={updateScore} />
      <Mole holeNumber={7} img={hungry} waitTime={4000} action={updateScore} />
      <Mole holeNumber={8} img={hungry} waitTime={6000} action={updateScore} />
      <Mole holeNumber={9} img={hungry} waitTime={11000} action={updateScore} />
    </section>
  );
}

export default App;
