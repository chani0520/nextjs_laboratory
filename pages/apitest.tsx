import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Apitest = ({ data }: AxiosResponse) => {
  const [value, setValue] = useState('');

  const onClick = async () => {
    const res = await axios.get('http://localhost:4000/');

    console.log(res);
    setValue(await res.data);
  };

  return (
    <div className={styles.main}>
      <h1 className='text-3xl font-bold text-center my-2'>Api Test page</h1>
      <p>( Next.js(3000port) {'<->'} Nest.js(4000port) )</p>
      <Link href={'/'}>
        <a>
          <button className='p-1 m-2 bg-blue-400 rounded text-white'>
            Go Home
          </button>
        </a>
      </Link>
      <p className={styles.code}>src directory : /pages/apitest.tsx</p>

      <div className='py-2'>
        <p>
          from &ldquo;getStaticProps&rdquo; {' => '}{' '}
          <span className='font-bold'>{data}</span>
        </p>

        <div className='py-2'>
          <hr />
        </div>

        <p>
          from &ldquo;onClick event&rdquo; {' => '}{' '}
          <button
            className='bg-gray-400 text-white rounded p-1'
            onClick={() => {
              onClick();
            }}
          >
            click
          </button>{' '}
          {' => '}
          <span className='font-bold'>{value}</span>
        </p>
      </div>
    </div>
  );
};

/**
 * πΈ getStaticProps() πΈ
 * If you export a function called getStaticProps (Static Site Generation) from a page,
 * Next.js will pre-render this page at build time using the props returned by getStaticProps.
 *
 * - μ¬μ©ν΄μΌ ν λ?
 *  1) ν΄λΉ νμ΄μ§λ₯Ό λλλ§νλλ° νμν νΉμ  λ°μ΄ν°κ° μ μ μ μμ²­λ³΄λ€ λ¨Όμ (μμ) λΉλ μμ μ νμλ‘ ν λ
 *  2) headless CMSλ‘λΆν° λ°μ΄ν°λ₯Ό λ°μλ
 *  3) publicνκ² μΊμλ μ μλ λ°μ΄ν° μΌλ
 *  4) νμ΄μ§κ° λ°λμ λ¨Όμ  λλλ§(pre-render)(SEOλ₯Ό μν΄)λμ΄μΌ νκ³ , λ§€μ° λΉ¨λΌμΌ ν λ.
 *     ( getStaticPropsλ HTMLκ³Ό JSONνμΌμ μμ± ) μ±λ₯μ μν΄ CDNμ μΊμλ μ μλκ² μ²λΌ...
 *     - JSONνμΌμ ν΄λΌμ΄μΈνΈ μ¬μ΄λμ λΌμ°νμ μν΄ μ΄μ©λμ΄μ§ ( next/link or next/routerμ ν΅ν΄ )
 *     - λΉλ μμ μ getStaticProps()λ₯Ό ν΅ν΄ λ§λ€μ΄μ§ HTML & JSON, κ·Έ μμλ μ΄ ν¨μλ₯Ό μνν λ€ λ°μ κ²°κ³Όλ€μ κ°μ§κ³  μλλ°,
 *       μ¬μ©μκ° νμ΄μ§κ° μ΄λμ ν λ μμ λΉλμμ μ λ―Έλ¦¬ κ³μ°λ λ°μ΄ν°λ€μ΄ μ¬μ©λμ΄μ§λ€.
 *       μ¦, νμ΄μ§ μ νμ΄ μΌμ΄λ λ μ΄ ν¨μκ° νΈμΆλλ€λ κ²μ΄ μλλΌ, pre-computed & exported JSONμ΄ μ¬μ©λλ€λ λ».
 *
 * - μΈμ  μ€νλλ?
 *  1) getStaticProps()λ only μλ²μμ μ€νλκ³ , μ λ ν΄λΌμ΄μΈνΈμΈ‘μμ μ€νλμ§ μλλ€.
 *  2) μ΄λ λΈλΌμ°μ μ JS bundleμ ν¬ν¨λμ§ μκΈ° λλ¬Έμ DB queryλ₯Ό λΈλΌμ°μ μ λ³΄λ΄λκ² μμ΄ λ°λ‘ μμ±ν  μ μλ€.
 *     -> μλ²μ¬μ΄λ μ½λλ₯Ό λ³Έ ν¨μ μμ λ°λ‘ μμ±ν  μ μλ€λ κ²μ μλ―Έ
 *
 * μ°Έκ³  : https://nextjs.org/docs/basic-features/data-fetching/get-static-props
 */
export async function getStaticProps() {
  const res = await axios.get('http://localhost:4000/');
  const data = await res.data;
  console.log(res);

  return {
    props: { data },
  };
}

export default Apitest;
