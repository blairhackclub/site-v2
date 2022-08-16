import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return <>
    <Head>
      <title>Blair Hack Club</title>
      {/* <meta name="description" content="by @linkai101 on github" /> */}
    </Head>

    <Navbar/>

    <header className="bg-[url('https://shshacks.io/img/one.0f68e0ab.jpg')] bg-cover bg-center bg-theme-background/50 bg-blend-darken">
      <div className="px-8 pt-28 pb-14 flex flex-col items-center gap-8 backdrop-blur-[2px]">
        <h1 className="text-2xl sm:text-5xl font-extrabold leading-tight text-center">
          Don&apos;t learn to code alone.<br/>
          Join <span className="px-2 bg-theme-surface/75 text-theme-primary whitespace-nowrap rounded-xl">Blair Hack Club</span>.
        </h1>
        <p className="max-w-2xl text-md sm:text-lg text-center">
          A non-competitive community of creative coders and makers at Montgomery Blair HS. <span className="font-bold">Join us — beginners welcome!</span>
        </p>

        <div>
          <p className="text-center">
            We meet <u>Wednesdays during lunch</u> in <b>room 314</b>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-2">
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-1 sm:py-2 bg-amber-500/60 rounded-full text-lg font-bold uppercase transition duration-150 hover:scale-105">
                Sign up
              </button>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-1 sm:py-2 bg-blue-500/60 rounded-full text-lg font-bold uppercase transition duration-150 hover:scale-105">
                Join the Discord
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>

    <main className="container max-w-5xl px-8 py-12 flex flex-col gap-24">
      <section className="flex flex-col md:flex-row gap-12 md:gap-20">
        <div>
          <iframe
            className="w-full md:w-96 aspect-video rounded-xl"
            src="https://www.youtube-nocookie.com/embed/2lBfk9bmwyY" 
            title="Blair Hack Club Promo Video 2022-23" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
        <div className="flex-1">
          <h2 className="text-neutral-400 text-xl font-extrabold uppercase">
            What&apos;s new
          </h2>
          <h3 className="text-3xl font-bold leading-8 mt-2">
            Workshops, scrapbook, more!
          </h3>
          <p className="mt-2">
            We&apos;re completely reimagining our club this year. We&apos;ll be hosting talks and workshops exploring various coding and tech concepts. Also, we&apos;re introducing our own scrapbook, where hack clubbers can share what their learning and making every day.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-2 md:gap-20">
        <div>
          <h2 className="text-neutral-400 text-xl font-extrabold uppercase">
            The rundown
          </h2>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-bold leading-8">
            We&apos;re at our best when we&apos;re making.
          </h3>
          <p className="mt-2">
            Most coding classes teach you programming concepts instead of how to write real code—it&apos;s like trying to learn carpentry without any wood. So at Hack Club, you learn to code entirely through building things. You start with no experience and build and ship a project every meeting.
          </p>
          <p className="mt-4">
            Just as the best carpenters didn&apos;t learn in the classroom, neither did the best programmers. Through our talks and workshops, you&apos;ll be walked through building projects. Starting out, you won&apos;t understand how the code works, but you&apos;ll build understanding as you go.
          </p>

          <p className="text-sm mt-12">
            Check out our Notion page, where we&apos;ll post our upcoming workshops and activities.
          </p>
          <a href="https://blairhackclub.notion.site" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-1 bg-cyan-400/60 rounded-full text-lg font-bold uppercase mt-2 transition duration-150 hover:scale-105">
              Our Notion
            </button>
          </a>
        </div>
      </section>

      <section className="p-8 flex gap-8 bg-theme-surface rounded-xl">
        <div>
          <picture>
            <source srcSet="https://blairhacks.com/assets/logo.png" type="image/png" />
            <img src="https://blairhacks.com/assets/logo.png" className="w-24" alt="BlairHacks logo"/>
          </picture>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold leading-8">
            BlairHacks_6
          </h2>
          <p className="mt-2">
            We run an annual hackathon at Montgomery Blair HS for high school students in the DMV area. Our next event is happening in February 2023. Stay tuned!
          </p>
          <a href="https://blairhacks.com" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-1 bg-red-500/60 rounded-full text-lg font-bold uppercase mt-4 transition duration-150 hover:scale-105">
              Learn more
            </button>
          </a>
        </div>
      </section>
    </main>

    <Footer/>
  </>;
}
