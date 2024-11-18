import React from 'react';
import Link from '@docusaurus/Link';
import {
  BookOpenRegular,
  Chat24Regular,
  DeveloperBoard24Regular,
  Wand24Regular,
  DocumentCopyRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Sim Stack',
    link: '/guides/sim-stack/orngwood-sim-stack',
    icon: Wand24Regular,
    text: 'Simulate the OWL robotic arm in a virtual environment.',
  },
  {
    title: 'Robot SDK',
    link: '/guides/owl-robot-sdk/owl-bot-sdk',
    icon: DeveloperBoard24Regular,
    text: 'Develop Python applications using the OWL Robot SDK.',
  },
  {
    title: 'OWL 6.5 Hardware',
    link: '/guides/owl-6.5-robot-hardware/owl-robot-client',
    icon: BookOpenRegular,
    text: 'Learn to operate and maintain OWL 6.5 Robot Hardware.',
  },
  {
    title: 'RoboGPT',
    link: 'https://robogpt.orangewood.co/',
    icon: Chat24Regular,
    text: 'Get early access to RoboGPT, an AI-powered assistant for robots.',
  },
  {
    title: 'Pick and Place Robot Guide',
    link: '/guides/',
    icon: DocumentCopyRegular,
    text: 'Step-by-Step Guide for Pick and Place Robot Integration.',
  },
];

function HeroProduct({ link, title, icon: Icon, text }: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
        textDecoration: 'none', // Disable underline for product title
      }}
      className={clsx(
        'hover:no-gr group cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary dark:text-white',
        'hover: #fd5821 w-[90vw] border-secondary-700 bg-secondary-900 dark:border-secondary-800 sm:w-[440px]'
      )}
    >
      <div className="p-6">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          {title}
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
    </Link>
  );
}

export default function HeroSection() {
  return (
    <div className="noise-bg pb-14">
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            Build with Orangewood Labs <span className="ml-3">🦾</span>
          </h2>
          <p className="max-w-xl text-center text-text-400">
            Orangewood builds AI-powered robotic arms that are simple to
            operate. We make collaborative robots safe, affordable and capable
            of coping with modern day manufacturing challenges.
          </p>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-6 px-4">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </div>
  );
}
