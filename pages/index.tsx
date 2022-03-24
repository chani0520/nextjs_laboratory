import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
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
        </ul>
      </main>
    </div>
  );
};

export default Home;
