import React from 'react';
import styles from './layout.module.css';
import utilsStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Marcelo Ramos';
export const siteTitle = 'Next.js Sample WebSite';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image-vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75&images=https%3A%2Fassets.vercel.com%2Fupload%2Ffront%2Fassets%2fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/Personalidade_ESFJ-T.PNG"
              className={utilsStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/imag es/Personalidade_ESFJ-T.PNG"
                  className={utilsStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilsStyles.headingLg}>
              <Link href="/">
                <a className={utilsStyles.clorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
