import React, { useRef, useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect({ text, textStyle }) {
  const textRef = useRef(null);
  const [key, setKey] = useState(0);


  const handleNext = () => {
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
    </div>
  );
}
