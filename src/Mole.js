import React from "react";

export default function Mole({ holeNumber, img, waitTime }) {
  const [moleIsShowing, setMoleIsShowing] = React.useState(false);
  const [readyToResetTimer, resetTimer] = React.useState(false);

  // show mole after the waitTime specified in the parent
  React.useEffect(() => {
    const interval = setInterval(() => setMoleIsShowing(true), waitTime);
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
    <div className="hole-container">
      <div className="hole">
        <img
          data-index={holeNumber}
          src={img}
          alt="mole"
          // set the className to be the output of the moleTimer() function
          className={moleTimer()}
        />
      </div>
    </div>
  );
}
