import React from 'react';
import Link from 'next/link';

import { GitHub } from 'react-feather';

export default function Navbar(props) {
  const { type='default' }:{ type: 'default' | 'scrapbook' } = props;

  return <>
    {type === 'default' ? 
      <div className="fixed top-0 inset-x-0 z-30">
        <nav className="py-4 container max-w-6xl flex justify-center relative gap-12">
          <Link href="/" passHref>
            <a>
              <img src="/assets/flag-orpheus-top.svg" alt="Hack Club banner" className="h-20 absolute left-3 -top-3"/>
            </a>
          </Link>
          <div className="px-4 py-2 flex justify-center items-center gap-6 text-sm font-bold uppercase bg-theme-background/50 rounded-full">
            <a className="cursor-pointer hover:underline underline-offset-2" href="" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            <a className="cursor-pointer hover:underline underline-offset-2" href="https://blairhackclub.notion.site">
              Notion
            </a>
            <Link href="/scrapbook" passHref>
              <a className="cursor-pointer hover:underline underline-offset-2">
                Scrapbook
              </a>
            </Link>
          </div>
        </nav>
      </div>
    : type === 'scrapbook' ?
      <div className="fixed top-0 inset-x-0 z-30">
        <nav className="px-4 py-6 container max-w-6xl flex justify-end relative gap-12">
          <Link href="/" passHref>
            <a>
              <img
                src="/assets/flag-orpheus-top.svg"
                alt="Hack Club banner"
                className="h-20 absolute left-3 -top-3"
              />
            </a>
          </Link>
          <div className="flex justify-center items-center gap-5 text-sm font-bold uppercase">
            <Link href="/scrapbook/about" passHref>
              <a className="cursor-pointer hover:underline underline-offset-2">
                About
              </a>
            </Link>
            <a className="text-neutral-400/60 hover:text-inherit cursor-pointer transition duration-150 hover:scale-105" href="https://github.com/blairhackclub/site-v2" target="_blank" rel="noopener noreferrer">
              <GitHub size={20}/>
            </a>
            <a className="cursor-pointer" href="https://bhc.page.link/scrapbookchannel" target="_blank" rel="noopener noreferrer">
              <button className="px-3 py-1 bg-neutral-400/60 hover:bg-amber-400/80 text-theme-background rounded-full font-black uppercase transition duration-150 hover:scale-105">
                Post
              </button>
            </a>
          </div>
        </nav>
      </div>
    : null}
    
  </>;
}
