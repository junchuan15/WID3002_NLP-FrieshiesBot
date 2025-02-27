import { useState, useEffect } from 'react';

const useTypingEffect = (text, speed = 20) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (index === text.length) {
          clearTimeout(timeoutId);
          return;
        }
  
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [text, speed, index]);
  
    return displayText;
  };

export default useTypingEffect;
