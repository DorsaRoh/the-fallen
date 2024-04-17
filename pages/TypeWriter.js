import React from "react"; 
import Typewriter from 'typewriter-effect'; 
  
export default function TypingEffect( { text }) { 
  return ( 
    <div>
      <Typewriter 
        onInit={(typewriter) => { 
          typewriter.typeString(toString({text})) 
            .callFunction(() => { 
              // console.log('String typed out!'); 
            }) 
            .pauseFor(2500) 
            //.deleteAll() 
            //.callFunction(() => { 
            //  console.log('All strings were deleted'); 
            //}) 
            .start(); 
        }} 
      /> 
    </div> 
  ); 
}
