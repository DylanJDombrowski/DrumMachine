function DrumPad() {
  function playSound() {
    // Log to the console
    console.log("Clap.mp3 played");

    // Create a new audio object and set the source to the Clap.mp3 file in your assets folder
    const audio = new Audio("../assets/Clap.mp3");

    // Play the sound
    audio.play();
  }

  return (
    <div className="DrumPad" onClick={playSound}>
      <button>Click</button>
    </div>
  );
}

export default DrumPad;
