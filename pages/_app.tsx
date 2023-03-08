import '../styles/globals.css'
import { AppProps }  from 'next/app';
import { Rubik } from 'next/font/google';

const rubik = Rubik ({
  subsets: ['cyrillic'],
  weight: ['300']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />
    </main>
  );
}
