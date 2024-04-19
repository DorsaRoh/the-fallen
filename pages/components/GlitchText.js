/* Credit to Alexandre Rivaux ! */

import React, { useEffect } from 'react';

const chars = "Σ×Π#-_¯—→↓↑←0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";

function Glitch(selector, index, numberOfGlitchedLetter, timeGlitch, timePerLetter, timeBetweenGlitch) {
  this.selector = selector;
  this.index = index;
  this.numberOfGlitchedLetter = numberOfGlitchedLetter;
  this.innerText;
  this.charArray = [];
  this.charIndex = [];
  this.timeGlitch = timeGlitch;
  this.timeBetweenGlitch = timeBetweenGlitch;
  this.timePerLetter = timePerLetter;
  this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter);
  this.count = 0;
  this.interval = null; // Store interval reference
}

Glitch.prototype.init = function() {
  this.innerText = this.selector.innerText;
  this.charArray = this.innerText.split("");
  if (this.numberOfGlitchedLetter == undefined || this.numberOfGlitchedLetter > this.innerText.length) {
    this.numberOfGlitchedLetter = this.innerText.length;
  }
  this.defineCharIndexToRandomize();
}

Glitch.prototype.defineCharIndexToRandomize = function() {
  this.charIndex = [];
  for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
    let randCharIndex = Math.floor(Math.random() * this.charArray.length);
    this.charIndex.push(randCharIndex);
  }
}

Glitch.prototype.randomize = function() {
  let randomString = Array.from(this.charArray);
  for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
    let randIndex = Math.floor(Math.random() * chars.length);
    let randCharIndex = this.charIndex[i];
    if (randomString[randCharIndex] !== ' ') {
      randomString[randCharIndex] = chars[randIndex];
    }
  }
  this.selector.innerText = randomString.join("");
}

Glitch.prototype.update = function() {
  if (this.count >= this.maxCount - 1) {
    clearInterval(this.interval); // Clear interval
    this.selector.innerText = this.innerText;
    this.defineCharIndexToRandomize();
    let ctx = this;
    let wait = setTimeout(function() {
      ctx.count = 0;
      ctx.glitch(); // Restart glitch effect after pause
    }, this.timeBetweenGlitch);
  } else {
    this.randomize();
    this.count++;
  }
}

Glitch.prototype.glitch = function() {
  let ctx = this;
  this.interval = setInterval(function() {
    ctx.update();
  }, this.timePerLetter);
}

const GlitchText = ({ text }) => {
  useEffect(() => {
    let arrayElements = document.querySelectorAll(".content");
    let glitchArray = [];

    for (let i = 0; i < arrayElements.length; i++) {
      let selector = arrayElements[i];
      let randLetterNumber = 2 + Math.floor(Math.random() * 8);
      let randGlitchPauseTime = 5000 + Math.floor(Math.random() * 2500);
      let glitch = new Glitch(selector, i, randLetterNumber, 1000, 100, randGlitchPauseTime); // Adjusted timeGlitch and timePerLetter
      glitch.init();
      glitch.glitch();
      glitchArray.push(glitch);
    }

    // Clean up function to clear intervals on component unmount
    return () => {
      glitchArray.forEach(glitch => {
        clearInterval(glitch.interval);
      });
    };
  }, []);

  return <div className="content">{text}</div>;
};

export default GlitchText;
