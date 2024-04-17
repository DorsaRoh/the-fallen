import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TypingEffect from './TypingEffect';

export default function Home() {
  const texts = [
    { text: "Hi, this is a long text...", style: { color: "blue" } },
    { text: "Bye, another long text...", style: { color: "green", fontSize: "20px" } },
    // Add more texts with individual styles as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = () => {
    if (currentIndex < texts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {texts.slice(0, currentIndex + 1).map((item, index) => (
          <TypingEffect key={index} text={item.text} textStyle={item.style} />
        ))}
        <button onClick={handleButtonClick}>Show Next Text</button>
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
      <style jsx>{`
        // Your existing styles
      `}</style>
      <style jsx global>{`
        // Your existing global styles
      `}</style>
    </div>
  );
}