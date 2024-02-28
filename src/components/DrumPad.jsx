import { useState, useEffect } from "react";
import Display from "./Display";

import ClapSound from "../assets/Clap.mp3";
import CHighHat from "../assets/Closed-HH.mp3";
import Heater1 from "../assets/Heater-1.mp3";
import Heater2 from "../assets/Heater-2.mp3";
import Heater3 from "../assets/Heater-3.mp3";
import Heater4 from "../assets/Heater-4.mp3";
import kick_n_hat from "../assets/Kick_n_Hat.mp3";
import Kick from "../assets/Kick.mp3";
import OpenHat from "../assets/Open-HH.mp3";

function DrumPad() {
  const [displayText, setDisplayText] = useState("");

  const sounds = [
    { name: "Clap", sound: ClapSound, key: "a" },
    { name: "Closed High Hat", sound: CHighHat, key: "s" },
    { name: "Heater 1", sound: Heater1, key: "d" },
    { name: "Heater 2", sound: Heater2, key: "f" },
    { name: "Heater 3", sound: Heater3, key: "j" },
    { name: "Heater 4", sound: Heater4, key: "k" },
    { name: "Kick n Hat", sound: kick_n_hat, key: "l" },
    { name: "Kick", sound: Kick, key: ";" },
    { name: "Open High Hat", sound: OpenHat, key: " ", displayName: "Space" },
  ];

  function playSound(sound, name) {
    setDisplayText(name);
    const audio = new Audio(sound);
    audio.play();
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const sound = sounds.find((s) => s.key === event.key.toLowerCase());
      if (sound) {
        playSound(sound.sound, sound.name);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <Display text={displayText} />
      {sounds.map((sound) => (
        <div
          key={sound.name}
          className="drum-pad"
          id={sound.name.replace(/\s+/g, "-")} // Convert space to dash for id
          onClick={() => playSound(sound.sound, sound.name)}
        >
          {typeof sound.key === "string"
            ? sound.key.toUpperCase()
            : String.fromCharCode(sound.key)}{" "}
          <audio
            src={sound.sound}
            className="clip"
            id={
              typeof sound.key === "string"
                ? sound.key.toUpperCase()
                : String.fromCharCode(sound.key)
            } // Use fromCharCode for space
          ></audio>
        </div>
      ))}
    </div>
  );
}

export default DrumPad;
