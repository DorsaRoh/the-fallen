import React, { useRef, useEffect } from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect({ text, textStyle }) {
  const textRef = useRef(null);
  const typingCompleteRef = useRef(false); // Ref to track the completion of typing

  useEffect(() => {
    const scrollIntoViewIfNeeded = () => {
      if (typingCompleteRef.current && textRef.current) {
        textRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    const interval = setInterval(scrollIntoViewIfNeeded, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={textRef} style={textStyle}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text)
            .start()
            .callFunction(() => {
              typingCompleteRef.current = true; // mark typing as complete
            })
            .callFunction(() => {
              if (textRef.current) {
                const cursorElement = textRef.current.querySelector('.Typewriter__cursor');
                if (cursorElement) {
                  cursorElement.style.display = 'none'; // hide the cursor using CSS
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
  );
}
