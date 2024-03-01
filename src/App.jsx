import { useState } from "react";
import DrumPad from "./components/DrumPad";

function App() {
  const [setLastPlayed] = useState("");

  const updateLastPlayed = (soundName) => {
    setLastPlayed(soundName);
  };

  return (
    <div id="drum-machine">
      <DrumPad updateLastPlayed={updateLastPlayed} />{" "}
    </div>
  );
}

export default App;
