import React from "react";
import kingFed from "./assets/king-mole-fed.png";
import fed from "./assets/mole-fed.png";
import kingHungry from "./assets/king-mole-hungry.png";
import hungry from "./assets/mole-hungry.png";

export default function Mole({ holeNumber, isRoyal, waitTime, updateScore }) {
  const [moleIsShowing, setMoleIsShowing] = React.useState(false);
  const [moleImage, setMoleImage] = React.useState(hungry);

  // show mole after the waitTime specified in the parent
  React.useEffect(() => {
    const interval = setInterval(() => {
      // when starting a new interval, set moles to hungry
      isRoyal ? setMoleImage(kingHungry) : setMoleImage(hungry);
      setMoleIsShowing(true);
    }, waitTime);
    return () => clearInterval(interval);
  }, []);

  function moleTimer() {
    // if 'moleIsShowing' is true, return 'mole' className and set a timer to hide the mole after 2 seconds
    if (moleIsShowing) {
      setTimeout(() => {
        setMoleIsShowing(false);
      }, 2000);
      return "mole hungry";
    }
    // if 'moleIsShowing' is false, return 'hide' className
    return "hide";
  }

  function clickAction() {
    if (moleIsShowing && isRoyal) {
      setMoleImage(kingFed);
      updateScore(2);
    }
    if (moleIsShowing && !isRoyal) {
      setMoleImage(fed);
      updateScore(1);
    }
  }

  return (
    <div className="hole-container" onClick={() => clickAction()}>
      <div className="hole">
        <img
          data-index={holeNumber}
          src={moleImage}
          alt="mole"
          // set the className to be the output of the moleTimer() function
          className={moleTimer()}
        />
      </div>
    </div>
  );
}
