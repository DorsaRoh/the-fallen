import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import TypingEffect from './components/TypingEffect';
import styles from '../styles/Home.module.css';
import GlitchText from './components/GlitchText';
import { texts } from '../utils/text';

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const textContainerRef = useRef(null);

  useEffect(() => {
    if (textContainerRef.current) {
      const container = textContainerRef.current;
      setShowScrollHint(container.scrollHeight > container.clientHeight);
    }
  }, [currentIndex]);

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
        <title>the fallen.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topTitle}>
        <GlitchText text="the fallen."/>
      </div>
      <div className={styles.textContainer} ref={textContainerRef}>
        {texts.map((item, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }} className={styles.textEntry}>
            {index === currentIndex && <TypingEffect text={item.text} textStyle={item.style} />}
          </div>
        ))}
        {showScrollHint && <div className={styles.scrollHint}>Scroll down to see more</div>}
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.btn} onClick={handleBackButtonClick} disabled={currentIndex === 0}>
        <GlitchText text="⟵ back"></GlitchText>
        </button>
        <button className={styles.btn} onClick={handleNextButtonClick} disabled={currentIndex === texts.length - 1}>
        <GlitchText text="next ⟶"></GlitchText>
        </button>
      </div>
    </div>
  );
}
