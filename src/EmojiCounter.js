import React, { useState, useEffect } from 'react';
import Happy from './Happy.png';
import Like from './Like.png';
import Sad from './Sad.png';

function EmojiDisplay() {
  const [text, setText] = useState('');
  const [emoji, setEmoji] = useState(null);

  useEffect(() => {
    if (text.toLowerCase() === 'happy') {
      setEmoji(Happy);
    } else if (text.toLowerCase() === 'like') {
      setEmoji(Like);
    } else if (text.toLowerCase() === 'sad') {
      setEmoji(Sad);
    } else {
      setEmoji(null);
    }
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type an emotion"
      />
      <label>
        {emoji && <img src={emoji} alt={text} />}
      </label>
    </div>
  );
}

export default EmojiDisplay;