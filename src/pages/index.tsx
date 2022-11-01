import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Head>
        <title>TLMBZ</title>
        <meta
          name="description"
          content="TLMBZ Database for Discord Messages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      ></motion.div>

      <section>
        <div className="py-4 sm:py-8 md:py-12 lg:py-14 xl:py-12 2xl:py-28">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-5xl 2xl:max-w-6xl">
            <h1 className="text-center text-5xl font-bold tracking-tight text-white sm:text-6xl sm:tracking-tight lg:text-[4rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem]">
              TLMBZ is more than a{" "}
              <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                team
              </span>{" "}
              - its a group of{" "}
              <span className="to- bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">
                dumb
              </span>{" "}
              college students
            </h1>
            <div className="mt-10 flex items-center justify-center sm:mt-14 md:mt-16">
              <button className="discord-connect">
                <DiscordLogoIcon className="scale-125" /> Connect Discord
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-8 p-6">
          <div className="relative">
            <div className="flex items-center gap-4 rounded-md border-2 border-gray-border bg-gray-light-l py-3 px-4">
              <Image
                className="rounded-full"
                width="45px"
                height="45px"
                alt="PFP"
                src="/pfp.webp"
              />
              <div className="flex flex-col">
                <h3 className="text-sm text-emerald-300">
                  cameron
                  <span className="ml-2 text-xs text-gray-400">
                    Yesterday at 10:42 PM
                  </span>
                </h3>
                <h4 className="text-sm text-gray-200">
                  ayo put that in the db this instant
                </h4>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="flex items-center gap-4 rounded-md border-2 border-gray-border bg-gray-light-l py-3 px-4">
              <Image
                className="rounded-full"
                width="45px"
                height="45px"
                alt="PFP"
                src="/pfp.webp"
              />
              <div className="flex flex-col">
                <h3 className="text-sm text-emerald-300">
                  cameron
                  <span className="ml-2 text-xs text-gray-400">
                    Yesterday at 10:42 PM
                  </span>
                </h3>
                <h4 className="text-sm text-gray-200">
                  ayo put that in the db this instant
                </h4>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-4xl font-bold">
              Easily save someone&rsquo;s message to our database
            </h1>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="mt-6 w-full border-[#30303F] bg-[#1D1D27] p-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Just how dumb are we?</h1>
            <h2 className="text-xl">The numbers never lie...</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 items-center justify-center gap-8 text-center sm:grid-cols-4">
            <StatBlock amount={0} description="messages from Cameron" />
            <StatBlock amount={0} description="messages from Cameron" />
            <StatBlock amount={0} description="messages from Cameron" />
            <StatBlock amount={0} description="messages from Cameron" />
          </div>
        </div>
      </section> */}

      <section>
        <div className="fade-div-edge h-[20vh]"></div>
        <ScrollView>
          <div className="flex -translate-y-1/2 flex-col items-center justify-center">
            <Image
              src="/shiv.webp"
              width={128}
              height={128}
              className="rounded-full"
              alt="test"
            />
            <div className="mt-8">
              Interact with SusDB to save messages to our database
            </div>
          </div>
        </ScrollView>
        <ScrollView>
          <div>test</div>
        </ScrollView>
        <ScrollView>
          <div>testomg</div>
        </ScrollView>
      </section>

      <div>Footer</div>
    </>
  );
};

export default Home;

interface StatBlockProps {
  amount: number;
  description: string;
}

const StatBlock: React.FC<StatBlockProps> = ({ amount, description }) => {
  return (
    <div className="rounded-md bg-[#2E2F38] p-6">
      <h2 className="text-4xl font-bold">{amount}</h2>
      <h3 className="uppercase text-slate-300">{description}</h3>
    </div>
  );
};

interface ScrollViewProps {
  children: React.ReactElement;
}

const ScrollView: React.FC<ScrollViewProps> = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  // const scaledOpacity = useTransform(
  //   scrollYProgress,
  //   [0, 0.5, 1],
  //   [0.2, 1, 0.2]
  // );

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <div ref={ref} className="scroll-view h-screen">
      <div className="w-100 sticky top-1/2 text-center">
        <motion.div
          className="text-4xl font-bold"
          style={{
            opacity: scrollYProgress,
            scale,
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
