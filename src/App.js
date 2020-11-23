import fed from "./assets/mole-fed.png";
import hungry from "./assets/mole-hungry.png";
import sad from "./assets/mole-sad.png";
import leaving from "./assets/mole-leaving.png";
import worm from "./assets/worm.png";
import Mole from "./Mole";
import "./App.css";
import "./App.css";

function App() {
  return (
    <section className="bg">
      <div className="worm-box">
        <div style={{ width: `90%` }} className="worm-container">
          <img className="worm" src={worm} alt="worm meter" />
        </div>
      </div>
      <Mole holeNumber={0} img={hungry} waitTime={1000} />
      <Mole holeNumber={1} img={hungry} waitTime={2000} />
      <Mole holeNumber={2} img={hungry} waitTime={3000} />
      <Mole holeNumber={3} img={hungry} waitTime={18000} />
      <Mole holeNumber={4} img={hungry} waitTime={9000} />
      <Mole holeNumber={5} img={hungry} waitTime={2500} />
      <Mole holeNumber={6} img={hungry} waitTime={10000} />
      <Mole holeNumber={7} img={hungry} waitTime={4000} />
      <Mole holeNumber={8} img={hungry} waitTime={6000} />
      <Mole holeNumber={9} img={hungry} waitTime={11000} />
    </section>
  );
}

export default App;
