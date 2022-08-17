import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import base from '../../lib/base'; // airtable

import { ChevronLeft, User, AtSign, GitHub, Link2 } from 'react-feather';

import Masonry from "react-masonry-css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ScrapbookUserPage() {
  const router = useRouter();
  const { username } = router.query;

  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState<any>(null);
  const [scraps, setScraps] = React.useState<readonly any[]>([]);

  React.useEffect(() => {
    if (!username) return;
    fetchUser();
  }, [username]);

  async function fetchUser() {
    await base('Users').select({
      maxRecords: 1,
      view: 'Grid view',
      filterByFormula: `{Username} = "${username}"`
    }).firstPage(async (err, records) => {
      if (err) { console.error(err); return; }
      if (records.length === 0) { console.error("User not found"); return; }
      setUser(records[0]);

      // fetch scraps
      fetchScraps(records[0].id);
    });
  }

  async function fetchScraps(userID) {
    await base('Scraps').select({
      pageSize: 16,
      //maxRecords: 80,
      view: 'Grid view',
      filterByFormula: `{User Record ID} = "${userID}"`,
      sort: [{ field: 'Created time', direction: 'desc' }]
    }).eachPage((records, fetchNextPage) => {
      setScraps(records);
      fetchNextPage();
    }, (err) => {
      setLoading(false);
      if (err) { console.error(err); return; }
    });
  }

  if (loading) return <>
    <Head>
      <title>{`@ – Scrapbook – Blair Hack Club`}</title>
      {/* <meta name="description" content="by @linkai101 on github" /> */}
    </Head>

    <Navbar type="scrapbook"/>

    <header className="px-8 pt-20 pb-14 container max-w-6xl flex flex-col">
      <div className="flex items-end gap-4">
        <Link href="/scrapbook" passHref>
          <a className="hover:underline underline-offset-2">
            <span className="flex items-center gap-0.5 text-neutral-300 font-bold">
              <ChevronLeft size={20}/> back
            </span>
          </a>
        </Link>
      </div>
    </header>

    <Footer/>
  </>;

  return <>
    <Head>
      <title>{`@${username || ""} – Scrapbook – Blair Hack Club`}</title>
      {/* <meta name="description" content="by @linkai101 on github" /> */}
    </Head>

    <Navbar type="scrapbook"/>

    <header className="px-8 pt-20 pb-10 container max-w-6xl flex flex-col gap-6">
      <div className="flex items-end gap-4">
        <Link href="/scrapbook" passHref>
          <a className="hover:underline underline-offset-2">
            <span className="flex items-center gap-0.5 text-neutral-300 font-bold">
              <ChevronLeft size={20}/> back
            </span>
          </a>
        </Link>
        <h1 className="text-2xl text-amber-400 font-fancy italic leading-tight">
          {`@${username || ""}'s Scrapbook`}
        </h1>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <img
            className="w-24 h-24 object-cover object-center rounded-full"
            src={user.fields["Avatar"]?.[0].thumbnails.large.url}
            alt={`Avatar of @${username}`}
          />
          <div className="flex items-end gap-3">
            <h2 className="text-4xl font-fancy">
              {user.fields["Username"]}
            </h2>
            {/* <p className="text-sm text-neutral-600 font-fancy">
              Joined Aug 2022 · {user.fields["Scraps"].length}
            </p> */}
          </div>
          
          <div className="flex items-center gap-1 text-cyan-500">
            {/* <button className="p-1.5 rounded-full hover:bg-theme-surface/60">
              <AtSign size={20}/>
            </button> */}

            {user.fields["Discord UID"] &&
              <a href={`https://discordapp.com/users/${user.fields["Discord UID"]}`} target="_blank" rel="noopener noreferrer">
                <button className="p-1.5 rounded-full hover:bg-theme-surface/60">
                  <img src="/assets/discord-logo.svg" alt="Discord logo" width={20}/>
                </button>
              </a>
            }
            
            {user.fields["GitHub User"] &&
              <a href={`https://github.com/${user.fields["GitHub User"]}`} target="_blank" rel="noopener noreferrer">
                <button className="p-1.5 rounded-full hover:bg-theme-surface/60">
                  <GitHub size={20}/>
                </button>
              </a>
            }

            {user.fields["Website"] &&
              <a href={user.fields["Website"]} target="_blank" rel="noopener noreferrer">
                <button className="p-1.5 rounded-full hover:bg-theme-surface/60">
                  <Link2 size={20}/>
                </button>
              </a>
            }
          </div>
        </div>
      </div>
    </header>

    <main className="container max-w-6xl p-8">
      <Masonry
        breakpointCols={{ default:4, 1024:3, 768:2, 640:1 }}
        className="masonry-grid w-full"
        columnClassName="masonry-column"
      >
      {scraps.map(scrap =>
        <div className="p-4 flex flex-col gap-3 bg-theme-surface rounded-xl" key={scrap.id}>
          <p className="font-bold">
            {formatDate(new Date(scrap.fields["Created time"]))}
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-sm">
              {scrap.fields["Description"]}
              {/* TODO: add support for text formatting, links, and mentions */}
            </p>

            <div className={`grid ${scrap.fields["Attachments"]?.length > 1 && "grid-cols-2"} gap-4 items-center`}>
              {scrap.fields["Attachments"]?.map((attachment: any) => {
                if (["image/png", "image/jpeg", "image/svg+xml", "image/gif"].includes(attachment.type))
                  return <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                    <img
                      className="rounded-xl"
                      src={attachment.url}
                      alt={attachment.filename}
                      key={attachment.id}
                    />
                  </a>;
                else if (attachment.type === "video/mp4")
                  return <video
                    className="rounded-xl"
                    src={attachment.url}
                    controls
                    onMouseOver={e => { const target = e.target as HTMLVideoElement; target.play() }}
                    onMouseOut={e => { const target = e.target as HTMLVideoElement; target.pause() }}
                    key={attachment.id}
                  />;
                else if (["audio/mpeg", "audio/ogg", "audio/wav"].includes(attachment.type))
                  return <audio
                    className="w-full sm:w-[133.34%] h-10 sm:scale-75 sm:origin-left"
                    src={attachment.url}
                    controls
                    key={attachment.id}
                  />;
                  // TODO: add support for more file types
                  // TODO: add youtube video embed support
                return <span // unsupported file type
                className="text-sm text-neutral-400 italic"
                key={attachment.id}
                >
                  💾 {attachment.filename}
                </span>;
              })}
            </div>
          </div>
        </div>
      )}
      </Masonry>
    </main>

    <Footer/>
  </>;
}

function formatDate(date: Date) {
  // if recent, show hh:mm
  return date.toLocaleDateString('en-us', { weekday: "short", month: "short", day: "numeric" }) 
}