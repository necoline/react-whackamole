import React from "react";

export default function Mole({ holeNumber, img, waitTime }) {
  const [moleIsShowing, setMoleIsShowing] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMoleIsShowing(true), waitTime);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hole-container">
      <div className="hole">
        <img
          data-index={holeNumber}
          src={img}
          alt="mole"
          className={moleIsShowing ? "mole" : "hide"}
        />
      </div>
    </div>
  );
}
