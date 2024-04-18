import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import TypingEffect from './components/TypingEffect';
import styles from '../styles/Home.module.css';
import GlitchText from './components/GlitchText';

export default function Home() {
  const texts = [
    { text: "asdnhbfwejdfhewndbfewj m ", style: {} },
    { text: "The world as you knew it had ended--not with asadasdasd", style: {} },
    { text: "iunjedhfrefnjdsihfjewdfehasdasdasd ", style: {} },
    { text: "Text 2", style: { color: "green" } },
    { text: "Text 2", style: { color: "green" } },
    // Additional texts...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
            {index === currentIndex && <TypingEffect text={item.text} textStyle={item.style} />}
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
