import React from 'react';
import Link from '@docusaurus/Link';
import {
  BookOpenRegular,
  TargetRegular,
  MicRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Live Video',
    link: '/guides/sim-stack/orngwood-sim-stack',
    icon: VideoRegular,
    lightImage: '/static/landing-page/hero/1bg.png',
    darkImage: '/static/landing-page/hero/1bg.png',
    text: 'Simulation Of Orangewood OWL Arm',
  },
  {
    title: 'Voice',
    link: '/guides/owl-robot-sdk/owl-bot-sdk',
    icon: MicRegular,
    lightImage: '/static/landing-page/hero/voice-graphic.png',
    darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Python Apps Using OWL Robort  SDK',
  },
  {
    title: 'Interactive Live Streaming',
    link: '/guides/owl-6.5-robot-hardware/owl-robot-client',
    icon: BookOpenRegular,
    lightImage: '/static/landing-page/hero/livestream-graphic.png',
    darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Python and Typescript SDKs',
  },
  {
    title: 'Voice',
    link: '/guides/owl-robot-sdk/owl-bot-sdk',
    icon:TargetRegular,
    lightImage: '/static/landing-page/hero/voice-graphic.png',
    darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Low level control with ROS',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  lightImage,
  darkImage,
}: // beta,
(typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'hover:no-gr group cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary dark:text-white',
        'hover: #fd5821 w-[90vw] border-secondary-700 bg-secondary-900 dark:border-secondary-800 sm:w-[440px]'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          {/* <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div> */}
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <div className="noise-bg pb-14">
      <section className="no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            Build with Orangewood Co 🦾
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
