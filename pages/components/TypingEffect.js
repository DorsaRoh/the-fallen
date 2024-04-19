import React, { useRef, useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect({ text, textStyle }) {
  const textRef = useRef(null); // Reference to the text container
  const [key, setKey] = useState(0); // Key to force re-render

  const handleNext = () => {
    // Increment key to re-trigger Typewriter effect
    setKey(key + 1);
  };

  return (
    <div>
      <div ref={textRef} style={textStyle}>
        <Typewriter
          key={key}
          onInit={(typewriter) => {
            typewriter.typeString(text)
              .start()
              .callFunction(() => {
                // Hide the cursor at the end of typing
                if (textRef.current) {
                  const cursorElement = textRef.current.querySelector('.Typewriter__cursor');
                  if (cursorElement) {
                    cursorElement.style.display = 'none';
                  }
                }
              });
          }}
          options={{
            delay: 50,
            deleteSpeed: 0,
            typeSpeed: 200,
            cursorClassName: 'Typewriter__cursor'
          }}
        />
      </div>
    </div>
  );
}
