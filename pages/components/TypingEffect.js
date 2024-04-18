
import React from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect({ text, textStyle }) {
  return (
    <div style={textStyle}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text)
            .start();
        }}
        options={{
          delay: 50, // delay between each character (in ms)
          deleteSpeed: 20, // speed of deleting characters (characters per second)
          typeSpeed: 50 // speed of typing characters (characters per second)
        }}
      />
    </div>
  );
}