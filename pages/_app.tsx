import type { AppProps } from 'next/app';
import AOS from 'aos';

import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import { SessionProvider } from 'next-auth/react';

/**
 * πΈ _app.tsx : κ°μ₯ λ¨Όμ  μ€νλλ μ»΄ν¬λνΈλ‘, νμ΄μ§μ μ μ©ν  κ³΅ν΅ λ μ΄μμμ μ­ν 
 *
 * - μ©λ : λͺ¨λ  μ»΄ν¬λνΈμ κ³΅ν΅μΌλ‘ μ μ©ν  μμ±μ κ΄λ¦¬
 *
 * - Component : μμ²­ν νμ΄μ§
 * - pageProps : getInitialProps, getStaticProps, getServerSideProps μ€ νλλ₯Ό ν΅ν΄ κ°μ Έμ¨ μ΄κΈ° μμ±κ°
 */
function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
