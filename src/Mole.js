import React from "react";

export default function Mole({ holeNumber, img }) {
  return (
    <div className="hole-container">
      <div className="hole" id={`hole-${holeNumber}`}>
        <img data-index={holeNumber} src={img} alt="mole" className="mole" />
      </div>
    </div>
  );
}
