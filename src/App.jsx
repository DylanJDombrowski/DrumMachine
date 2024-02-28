import { useState } from "react";
import DrumPad from "./components/DrumPad";
import Display from "./components/Display";

function App() {
  const [lastPlayed, setLastPlayed] = useState("");

  const updateLastPlayed = (soundName) => {
    setLastPlayed(soundName);
  };

  return (
    <div id="drum-machine">
      <Display text={lastPlayed} />{" "}
      <DrumPad updateLastPlayed={updateLastPlayed} />{" "}
    </div>
  );
}

export default App;
