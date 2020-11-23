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
      <Mole holeNumber={0} img={hungry} />
      <Mole holeNumber={1} img={fed} />
      <Mole holeNumber={2} img={hungry} />
      <Mole holeNumber={3} img={sad} />
      <Mole holeNumber={4} img={leaving} />
      <Mole holeNumber={5} img={hungry} />
      <Mole holeNumber={6} img={fed} />
      <Mole holeNumber={7} img={sad} />
      <Mole holeNumber={8} img={leaving} />
      <Mole holeNumber={9} img={hungry} />
    </section>
  );
}

export default App;
