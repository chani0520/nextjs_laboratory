import type { AppProps } from 'next/app';
import AOS from 'aos';

import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
