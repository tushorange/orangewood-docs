import React from 'react';
import Link from '@docusaurus/Link';

import { Linkedin, Twitter } from 'react-feather';
import { DiscordIcon } from '@site/src/icons';

const githubUsernames = [
  'pratikbhavarthe',
  'dipraman',
  'tushgaurav',
  'topguns837',
  'shubhankar2003',
  'mendacium-a11y',
  'yuvimehta',
  // 'alias-rahil',
  // 'AshishKumar4',
  // 'anunaym14',
  // 'tarushnagpal',
  // 'ishita1805',
  // 'madhugb',
  // 'mayur-tendulkar',
  // 'milapsingh',
];

export default function CommunitySection() {
  return (
    <section className="no-underline-links">
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#fe6d49] to-[#000000] px-4 py-16 pt-64 text-white">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Join the <span style={{ color: '#FF6F00' }}>community</span>
        </h2>
        <p className="mb-10 text-zinc-500">
          Join the Orangewood community for updates and support on our easy-to-use, AI-powered robotic arms.
        </p>
        <div className="mx-auto mb-16 flex flex-wrap -space-x-1.5">
          {githubUsernames.map((username) => (
            <img
              key={username}
              src={`https://github.com/${username}.png?size=60`}
              alt={`User ${username}`}
              loading="lazy"
              className="h-6 w-6 rounded-full border-2 border-solid border-white transition hover:-translate-y-2 hover:scale-150 lg:h-12 lg:w-12"
            />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 text-sm font-semibold lg:flex-row lg:gap-6">
          <Link
            className="flex items-center justify-center gap-2 rounded-full border border-primary-100 bg-gradient-to-r from-primary-100 to-primary-200 px-4 py-2 text-white shadow-md transition hover:bg-primary-300 hover:text-black"
            href="https://discord.com/invite/tuEAx6T4YE"
          >
            <DiscordIcon className="h-6 w-6" /> Discord &rarr;
          </Link>
          <Link
            className="flex items-center justify-center gap-2 rounded-full border border-primary-100 bg-gradient-to-r from-primary-100 to-primary-200 px-4 py-2 text-white shadow-md transition hover:bg-primary-300 hover:text-black"
            href="https://twitter.com/dyte_io"
          >
            <Twitter className="h-5 w-5" /> Twitter &rarr;
          </Link>
          <Link
            className="flex items-center justify-center gap-2 rounded-full border border-primary-100 bg-gradient-to-r from-primary-100 to-primary-200 px-4 py-2 text-white shadow-md transition hover:bg-primary-300 hover:text-black"
            href="https://www.linkedin.com/company/orangewood-labs/"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
