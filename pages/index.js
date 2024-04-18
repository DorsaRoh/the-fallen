import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import TypingEffect from './components/TypingEffect';
import styles from '../styles/Home.module.css';
import GlitchText from './components/GlitchText';

export default function Home() {
  const texts = [
    { text: "asdnhbfwejdfhewndbfewj m ", style: {} },
    { text: "The world as you knew it had ended--not with a triumphant bang, but with a damp whimper. Cities that had once scraped the skies are now sprawling in ruins, their skyscrapers standing like tombstones over a civilization that had consumed it all, and ultimately itself. ", style: {} },
    { text: "The world as you knew it had ended--not with a triumphant bang, but with a damp whimper. Cities that had once scraped the skies are now sprawling in ruins, their skyscrapers standing like tombstones over a civilization that had consumed it all, and ultimately itself. ", style: {} },
    { text: "Text 2", style: { color: "green" } },
    { text: "Text 2", style: { color: "green" } },
    // Additional texts...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const latestTextRef = useRef(null); // Ref to track the latest text div

  const handleNextButtonClick = () => {
    if (currentIndex < texts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBackButtonClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (latestTextRef.current) {
      latestTextRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlitchText text="Title (Glitched Effect)" className={styles.title} />
      <div className={styles.textContainer}>
        {texts.map((item, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }} className={styles.textEntry}>
            <TypingEffect text={item.text} textStyle={item.style} ref={index === currentIndex ? latestTextRef : null} />
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={handleBackButtonClick} disabled={currentIndex === 0}>
          Back
        </button>
        <button className={styles.btn} onClick={handleNextButtonClick} disabled={currentIndex === texts.length - 1}>
          Next ➫
        </button>
      </div>
    </div>
  );
}
