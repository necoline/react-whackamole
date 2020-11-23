import kingFed from "./assets/king-mole-fed.png";
import fed from "./assets/mole-fed.png";
import kingHungry from "./assets/king-mole-hungry.png";
import hungry from "./assets/mole-hungry.png";
import sad from "./assets/mole-sad.png";
import kingSad from "./assets/king-mole-sad.png";
import kingLeaving from "./assets/king-mole-leaving.png";
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

  const nextFrame = () => {
    const now = Date.now();
    // there are 9 moles
    for (let i = 0; i < 9; i++) {
      if (moles[i].next < now) {
        getNextStatus(moles[i]);
      }
    }
    requestAnimationFrame(nextFrame);
  };

  const getNextStatus = (mole) => {
    switch (mole.status) {
      case "sad":
      case "fed":
        mole.next = getSadInterval();
        if (mole.king) {
          mole.img = kingLeaving;
        } else {
          mole.img = leaving;
        }
        mole.status = "leaving";
        break;
      case "leaving":
        mole.next = getInterval();
        mole.king = false;
        mole.classList = "gone";
        mole.status = "gone";
        break;
      case "hungry":
        mole.classList = "";
        if (mole.king) {
          mole.img = kingSad;
        } else {
          mole.img = sad;
        }
        mole.status = "sad";
        mole.next = getSadInterval();
        break;
      case "gone":
        mole.status = "hungry";
        mole.king = getKingStatus();
        mole.next = getHungryInterval();
        mole.node.children[0].classList.toggle("hungry", true);
        mole.node.children[0].classList.toggle("gone", false);
        if (mole.king) {
          mole.node.children[0].src = "./king-mole-hungry.png";
        } else {
          mole.node.children[0].src = "./mole-hungry.png";
        }
        break;
    }
  };

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
