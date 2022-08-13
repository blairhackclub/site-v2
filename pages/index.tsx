import Head from 'next/head';

export default function Home() {
  return <>
    <Head>
      <title>Blair Hack Club</title>
      {/* <meta name="description" content="by @linkai101 on github" /> */}
    </Head>

    <main>
      <div className="container px-8 py-8">
        <h1 className="text-3xl">site-v2</h1>
        <p className="text-md">
          @blairhackclub
        </p>

        <p className="mt-4">
          The new Blair Hack Club website! (under construction)
        </p>
      </div>
    </main>

    <footer>
    </footer>
  </>;
}
