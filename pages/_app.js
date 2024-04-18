// global css
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{`
          
          html, body {
            height: 100%;
            overflow-x: hidden;
            overflow-y: hidden;
            background: black;
            font-family:"Jersey 10";
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
