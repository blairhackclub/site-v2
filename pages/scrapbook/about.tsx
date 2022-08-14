import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ChevronLeft } from 'react-feather';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ScrapbookAboutPage() {
  const router = useRouter();


  return <>
    <Head>
      <title>{`About – Scrapbook – Blair Hack Club`}</title>
      {/* <meta name="description" content="by @linkai101 on github" /> */}
    </Head>

    <Navbar type="scrapbook"/>

    <header className="px-8 pt-20 pb-4 container max-w-6xl flex flex-col gap-6">
      <div className="flex items-end gap-4">
        <Link href="/scrapbook" passHref>
          <a className="hover:underline underline-offset-2">
            <span className="flex items-center gap-0.5 text-neutral-300 font-bold">
              <ChevronLeft size={20}/> back
            </span>
          </a>
        </Link>
        <h1 className="text-2xl text-amber-400 font-fancy italic leading-tight">
          About Scrapbook
        </h1>
      </div>
    </header>

    <main className="container max-w-6xl px-8 pb-8 pt-4">
      <p>🚧 This page is under construction. 🚧</p>
    </main>

    <Footer/>
  </>;
}