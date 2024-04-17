
import React from "react";
import Typewriter from 'typewriter-effect';


export default function TypingEffect({ text, textStyle }) {
  return (
    <div style={textStyle}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text)
            .pauseFor(2500)
            .start();
        }}
      />
    </div>
  );
}