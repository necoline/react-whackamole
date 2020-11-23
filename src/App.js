import React from "react";
import hungryMole from "./assets/mole-hungry.png";
import sadMole from "./assets/mole-sad.png";
import "./App.css";

function App() {
  const [isHungry, setHungry] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setHungry(!isHungry), 1000);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => setHungry(!isHungry), 1000);
    return () => clearTimeout(timer);
  }, [isHungry]);

  return <img src={isHungry ? hungryMole : sadMole} alt="mole" />;
}

export default App;
