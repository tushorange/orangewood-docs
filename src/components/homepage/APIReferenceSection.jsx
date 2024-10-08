import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight } from 'react-feather';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';

export default function RoboGpt() {
  return (
    <section className="no-underline-links relative px-6">
      <Head>
        <link rel="prefetch" href="/static/landing-page/2.webp" />
        <link rel="prefetch" href="/static/landing-page/2.webp" />
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-20 text-center text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:text-left">
        <Link
          href="https://robogpt.orangewood.co/"
          aria-label="RoboGPT"
          target="_blank"
          className="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
        >
          <ArrowUpRight className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">RoboGPT</h2>
          <p className="text-zinc-400">
            RoboGPT revolutionizes robotic programming by enabling voice or text
            commands in multiple languages. It adapts to changes, ensures
            safety, and is now live for pick-and-place applications.
          </p>
          <Link
            href="https://robogpt.orangewood.co/"
            className="font-medium text-primary-100 dark:text-primary"
          >
            Get started with Orangewood Labs RoboGPT &rarr;
          </Link>
          <ul className="mt-10 flex list-none flex-col gap-4 text-left lg:pl-0">
            <li className="flex flex-col gap-1">
              <Link
                href="https://robogpt.orangewood.co/"
                className="group font-jakarta font-semibold text-current"
              >
                Make a popcorn 🍿
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Create a popcorn with our bot
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <Link
                href=""
                className="group font-jakarta font-semibold text-current"
              >
                Ask to make a drink 🍸
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Tell or bot to make a drink for you
              </div>
            </li>
            <li className="flex flex-col gap-1">
              <Link
                href=""
                className="group font-jakarta font-semibold text-current"
              >
                Teach a new skill 🤖
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                You can train our bot through our robogpt platform
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
          <ThemedImage
            sources={{
              light: '/static/landing-page/2.webp',
              dark: '/static/landing-page/2.webp',
            }}
            alt="API Reference Preview"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
