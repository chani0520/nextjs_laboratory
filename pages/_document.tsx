import Document, {
  Html,
  Head,
  Main,
  DocumentContext,
  NextScript,
} from 'next/document';

/**
 * ๐ธ _document.tsx : _app.tsx ๋ค์์ผ๋ก ์คํ๋๋ฉฐ, ๊ณตํต์ ์ผ๋ก ์ฌ์ฉํ  <head> (ex. meta tag...)๋ <body>ํ๊ทธ ์์ ๋ค์ด๊ฐ ๋ด์ฉ๋ค์ customํ ๋ ์ฌ์ฉ
 *
 * - _document๋ฅผ ์์ฑํ ๋๋ ํญ์ Document class๋ฅผ ์์๋ฐ๋ ํด๋์ค๋ก ์์ฑํด์ผํ๊ณ , ๋ ๋ํจ์์๋ ๊ผญ <Html>, <Head>, <Main>, <NextScript>๋ฅผ ๋ฆฌํดํด์ผํ๋ค.
 */
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id='portal' />
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
