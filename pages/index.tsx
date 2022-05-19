import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Portal from '../components/hoc/Portal';
import Modal from '../components/hoc/Modal';

const Home: NextPage = () => {
  const onClickLoginBtn = () => {
    console.log('🔫 로그인 버튼 클릭!');

    return (
      // <Portal selector='#portal'>
      {
        /* <Modal {...props} /> */
      }
      // </Portal>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Lab</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <ul className='my-5' data-aos='fade-up'>
          <li>
            🎃 Aos page {'=> '}
            <Link href='/aos'>
              <a>
                <code className={styles.code}>/aos</code>
              </a>
            </Link>
          </li>
          <div className='py-2' />

          <li>
            🎃 User page {'=> '}
            <Link href='/users'>
              <a>
                <code className={styles.code}>/users</code>
              </a>
            </Link>
          </li>
          <div className='py-2' />

          <li>
            🎃 API test page ( call from 3000port to 4000port ) {'=> '}
            <Link href='/apitest'>
              <a>
                <code className={styles.code}>/apitest</code>
              </a>
            </Link>
          </li>
          <div className='py-2' />

          <li className='text-red-400'>
            🎃 Chatting page (테스트 중...) {'=> '}
            <Link href='/chatting'>
              <a>
                <code className={styles.code}>/chatting</code>
              </a>
            </Link>
          </li>

          <li className='text-red-400'>
            🎃 Portal Btn test (테스트 중...) {'=> '}
            <button
              className='my-3 p-1 bg-blue-300 text-white rounded-lg'
              onClick={() => onClickLoginBtn()}
            >
              Login
            </button>
          </li>

          <li>
            🎃 React-Calendar {'=> '}
            <Link href='/calendar'>
              <a>
                <code className={styles.code}>/calendar</code>
              </a>
            </Link>
          </li>
          <div className='py-2' />

          <li>
            🎃 Web Font {'=> '}
            <Link href='/webfont'>
              <a>
                <code className={styles.code}>/webfont</code>
              </a>
            </Link>
          </li>
          <div className='py-2' />

          <li>
            🎃 PDF Viewer {'=> '}
            <Link href='/pdfviewer'>
              <a>
                <code className={styles.code}>/pdfviewer</code>
              </a>
            </Link>
          </li>
          <div className='py-2' />
        </ul>
      </main>
    </div>
  );
};

export default Home;
