import React, { useRef } from "react";
import PropTypes from "prop-types";

function DrumPad({ clipId, clipSrc, keyTrigger, onTrigger }) {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.currentTime = 0; // Rewind to the start
    audioRef.current.play();
    onTrigger(clipId); // Notify the parent component
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  };

  // Attach the event listener for key presses
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="drum-pad" id={clipId} onClick={playSound}>
      {keyTrigger}
      <audio
        ref={audioRef}
        id={keyTrigger}
        className="clip"
        src={clipSrc}
      ></audio>
    </div>
  );
}

DrumPad.propTypes = {
  clipId: PropTypes.string.isRequired,
  clipSrc: PropTypes.string.isRequired,
  keyTrigger: PropTypes.string.isRequired,
  onTrigger: PropTypes.func.isRequired,
};

export default DrumPad;
