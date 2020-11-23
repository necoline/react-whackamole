import React from "react";
import fed from "./assets/mole-fed.png";
import hungry from "./assets/mole-hungry.png";
import kingHungry from "./assets/king-mole-hungry.png";
import sad from "./assets/mole-sad.png";
import leaving from "./assets/mole-leaving.png";

export default function Mole({ holeNumber, isRoyal, waitTime, action }) {
  const [moleIsShowing, setMoleIsShowing] = React.useState(false);
  const [moleImage, setMoleImage] = React.useState(hungry);

  // show mole after the waitTime specified in the parent
  React.useEffect(() => {
    const interval = setInterval(() => setMoleIsShowing(true), waitTime);
    if (isRoyal) {
      setMoleImage(kingHungry);
    }
    return () => clearInterval(interval);
  }, []);

  function moleTimer() {
    // if 'moleIsShowing' is true, return 'mole' className and set a timer to hide the mole after 2 seconds
    if (moleIsShowing) {
      setTimeout(() => setMoleIsShowing(false), 2000);
      return "mole";
    }
    // if 'moleIsShowing' is false, return 'hide' className
    return "hide";
  }

  return (
    <div className="hole-container" onClick={() => action(isRoyal ? 2 : 1)}>
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
