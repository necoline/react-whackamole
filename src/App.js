import fed from "./assets/king-mole-fed.png";
import hungry from "./assets/king-mole-sad.png";
import sad from "./assets/king-mole-sad.png";
import leaving from "./assets/mole-leaving.png";
import worm from "./assets/worm.png";
import win from "./assets/win.png";
import Mole from "./Mole";
import "./App.css";

const MIN_INTERVAL = 2000;
const MAX_INTERVAL = 20000;
const SAD_INTERVAL = 500;
const HUNGRY_INTERVAL = 2000;

function App() {
  let score = 0;

  const getInterval = () =>
    Date.now() + MIN_INTERVAL + Math.floor(Math.random() * MAX_INTERVAL);
  const getSadInterval = () => Date.now() + SAD_INTERVAL;
  const getKingStatus = () => Math.random() > 0.9;
  const getHungryInterval = () => Date.now() + HUNGRY_INTERVAL;

  const moles = [
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "0",
    },
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "1",
    },
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "2",
    },
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "3",
    },
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "4",
    },
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "5",
    },
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "6",
    },
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "7",
    },
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "8",
    },
    {
      status: "sad",
      next: getSadInterval(),
      king: true,
      hole: "9",
    },
  ];

  return (
    <>
      <section className="bg">
        <div className="worm-box">
          <div style={{ width: `5%` }} className="worm-container">
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
      <img className="win" src={win} alt="mole" />
    </>
  );
}

export default App;
