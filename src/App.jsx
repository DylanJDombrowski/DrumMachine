import React from "react";
import DrumPad from "./components/DrumPad";
import Display from "./components/Display";

import heater1 from "./assets/Heater-1.mp3";
import heater2 from "./assets/Heater-2.mp3";
import heater3 from "./assets/Heater-3.mp3";
import heater4 from "./assets/Heater-4.mp3";
import clap from "./assets/Clap.mp3";
import openHat from "./assets/Open-HH.mp3";
import closedHat from "./assets/Closed-HH.mp3";
import kick from "./assets/Kick.mp3";
// Import other audio files similarly

function App() {
  const drumPads = [
    { id: "Kick", keyTrigger: "Q", src: kick },
    { id: "Snare", keyTrigger: "W", src: heater1 },
    { id: "Closed Hat", keyTrigger: "E", src: heater2 },
    { id: "Open Hat", keyTrigger: "A", src: heater3 },
    { id: "Kick 2", keyTrigger: "S", src: heater4 },
    { id: "Clap", keyTrigger: "D", src: clap },
    { id: "Closed Hat 2", keyTrigger: "Z", src: openHat },
    { id: "Open Hat 2", keyTrigger: "X", src: closedHat },
    { id: "Kick 3", keyTrigger: "C", src: kick },
    // Add other drum pad objects here
  ];

  const [display, setDisplay] = React.useState("");

  const handlePadTrigger = (padId) => {
    setDisplay(padId);
  };

  return (
    <div id="drum-machine">
      <Display soundName={display} />
      <div className="drum-pads">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.clipId}
            clipId={pad.clipId}
            keyTrigger={pad.keyTrigger}
            clipSrc={pad.clipSrc}
            onTrigger={handlePadTrigger}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
