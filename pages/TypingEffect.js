
import React from "react";
import Typewriter from 'typewriter-effect';

export default function TypingEffect({ text }) {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text) // Pass the string directly
            .pauseFor(2500)
            // uncomment if want text to delete
            // .deleteAll()
            // .callFunction(() => {
            //   console.log('All strings were deleted');
            // })
            .start();
        }}
      />
    </div>
  );
}