import { useState } from 'react';
import Head from 'next/head';
import TypingEffect from './components/TypingEffect';
import styles from '../styles/Home.module.css';
import GlitchText from './components/GlitchText';

export default function Home() {
  const texts = [
    { text: "Text 1", 
      style: { } },
    { text: "Text 2", style: { color: "green"} },
    { text: "Etc...", style: { color: "blue"} },
    // add more texts with individual styles as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = () => {
    if (currentIndex < texts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={styles.container}>
        <GlitchText text="Your Glitch Text Here" />

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <main>
        {texts.slice(0, currentIndex + 1).map((item, index) => (
          <div key={index} className={styles.textContainer}>
            <TypingEffect text={item.text} textStyle={item.style} />
          </div>        ))}
        
        
          <button className={styles['btn']} onClick={handleButtonClick}>Continue</button>
          
      </main>
      
    </div>
  );
}