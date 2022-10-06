import type { NextPage } from "next";
import Head from "next/head";
import { FaDiscord } from "react-icons/fa";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>TLMBZ</title>
        <meta name="description" content="Official website for TLMBZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero-padding">
        <div className="hero-width">
          <h1 className="hero-title">
            TLMBZ is more than a{" "}
            <span className="underline-fancy-blue underline-fancy cursor-default text-sky-300">
              team
            </span>{" "}
            - its a group of{" "}
            <span className="underline-fancy-green underline-fancy cursor-default text-green-300">
              dumb
            </span>{" "}
            college students
          </h1>
          <div className="mt-10 flex items-center justify-center sm:mt-14 md:mt-16">
            <div className="flex items-center">
              <iframe
                src="https://discord.com/widget?id=656283206882164834&theme=dark"
                width="350"
                height="500"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </div>
            <div className="flex items-center">
              <button className="flex items-center gap-2 rounded-md border border-[#30303F] bg-[#1D1D27] p-2 font-medium transition-colors duration-200 hover:bg-[#262632]">
                <FaDiscord /> Connect Discord
              </button>
              <div className="mx-4 h-11 border-l border-[#30303F]"></div>
              <div className="w-48 text-xs sm:w-64">
                Login with Discord to view the most suspect messages and
                &quot;caught in 4K&quot; moments
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full border-b border-t border-[#30303F] bg-[#1D1D27] p-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center justify-center gap-8 text-center sm:grid-cols-4">
          <div className="p-4">
            <h1 className="text-4xl">0</h1>
            <h3 className="uppercase text-slate-300">sus messages</h3>
          </div>
          <div className="p-4">
            <h1 className="text-4xl">0</h1>
            <h3 className="uppercase text-slate-300"> messages uploaded</h3>
          </div>
          <div className="p-4">
            <h1 className="text-4xl">0</h1>
            <h3 className="uppercase text-slate-300"> posts from Cameron</h3>
          </div>
          <div className="p-4">
            <h1 className="text-4xl">0</h1>
            <h3 className="uppercase text-slate-300"> bans for jacob</h3>
          </div>
        </div>
      </div>
      {/* <div className="box"></div> */}
    </>
  );
};

export default Home;
