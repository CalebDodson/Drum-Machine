import './App.css';
import React, { useEffect } from 'react';

function App() {
const playAudio = (id) => {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}

const displayText = (id) => {
  document.getElementById("display").innerText = id.replace(/-/g, ' ');
}

useEffect(() => {
  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const button = document.querySelector(`.drum-pad .clip[id="${key}"]`);
    if (button) {
      const parent = button.parentElement;
      parent.classList.add("active");
      playAudio(key);
      displayText(parent.id);
      setTimeout(() => {
        parent.classList.remove("active");
      }, 200); 
    }
  };
  
  const handleKeyUp = (e) => {
    const key = e.key.toUpperCase();
    const button = document.querySelector(`.drum-pad .clip[id="${key}"]`);
    if (button) {
      const parent = button.parentElement;
      parent.classList.remove("active");
    }
  };

  document.addEventListener('keydown', handleKeyPress);
  document.addEventListener('keyup', handleKeyUp);

  return () => {
    document.removeEventListener('keydown', handleKeyPress);
    document.removeEventListener('keyup', handleKeyUp);
  };
}, []);

  return (
    <div id="drum-machine">
      <div id="button-grid">
        <button className="drum-pad" id="Heater-1" onClick={() => { playAudio("Q"); displayText("Heater-1"); }}>
            <audio className="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
            Q
          </button>
          <button className="drum-pad" id="Heater-2" onClick={() => { playAudio("W"); displayText("Heater-2"); }}>
            <audio className="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
            W
          </button>
          <button className="drum-pad" id="Heater-3" onClick={() => { playAudio("E"); displayText("Heater-3"); }}>
            <audio className="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
            E
          </button>
          <button className="drum-pad" id="Heater-4" onClick={() => { playAudio("A"); displayText("Heater-4"); }}>
            <audio className="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
            A
          </button>
          <button className="drum-pad" id="Clap" onClick={() => { playAudio("S"); displayText("Clap"); }}>
            <audio className="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
            S
          </button>
          <button className="drum-pad" id="Open-HH" onClick={() => { playAudio("D"); displayText("Open-HH"); }}>
            <audio className="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
            D
          </button>
          <button className="drum-pad" id="Kick-n'-Hat" onClick={() => { playAudio("Z"); displayText("Kick-n'-Hat"); }}>
            <audio className="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
            Z
          </button>
          <button className="drum-pad" id="Kick" onClick={() => { playAudio("X"); displayText("Kick"); }}>
            <audio className="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
            X
          </button>
          <button className="drum-pad" id="Closed-HH" onClick={() => { playAudio("C"); displayText("Closed-HH"); }}>
            <audio className="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
            C
          </button>
        </div>
      <div id="display">Drum Machine</div>
    </div>
  );
}

export default App;