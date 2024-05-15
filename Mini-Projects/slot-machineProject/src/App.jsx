import React, { useState } from 'react';
import './App.css';
import SlotM from './SlotM';

const emojis = ['😃', '😓', '😂', '😱', '🍎', '🍌', '🤠'];

function App() {
  const [slot1, setSlot1] = useState(['😃', '😃', '😃']);
  const [slot2, setSlot2] = useState(['😓', '😂', '😱']);
  const [slot3, setSlot3] = useState(['🍎', '🍌', '🍌']);
  const [slot4, setSlot4] = useState(['🤠', '🤠', '🤠']);

  const getRandomEmojis = () => {
    const randomEmojis = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      randomEmojis.push(emojis[randomIndex]);
    }
    return randomEmojis;
  };

  const handleClick = (setSlot) => {
    const randomEmojis = getRandomEmojis();
    setSlot(randomEmojis);
  };

  return (
    <>
      <h1 className='heading'>
        🎰 Welcome to <span style={{ fontWeight: 'bold' }}>Slot machine game </span> 🎰
      </h1>
      <div className='slotmachine'>
        <h3>Click on any emoji in a slot to change</h3>
        <br />
        <br />
        <SlotM x={slot1[0]} y={slot1[1]} z={slot1[2]} onClick={() => handleClick(setSlot1)} />
        <hr />
        <SlotM x={slot2[0]} y={slot2[1]} z={slot2[2]} onClick={() => handleClick(setSlot2)} />
        <hr />
        <SlotM x={slot3[0]} y={slot3[1]} z={slot3[2]} onClick={() => handleClick(setSlot3)} />
        <hr />
        <SlotM x={slot4[0]} y={slot4[1]} z={slot4[2]} onClick={() => handleClick(setSlot4)} />
        <hr />
      </div>
    </>
  );
}

export default App;