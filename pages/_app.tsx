import type { AppProps } from 'next/app';
import AOS from 'aos';

import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
/**
 * 🔸 _app.tsx : 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할
 *
 * - 용도 : 모든 컴포넌트에 공통으로 적용할 속성을 관리
 *
 * - Component : 요청한 페이지
 * - pageProps : getInitialProps, getStaticProps, getServerSideProps 중 하나를 통해 가져온 초기 속성값
 */
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
