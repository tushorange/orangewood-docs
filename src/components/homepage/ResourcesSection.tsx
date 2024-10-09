import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';

interface Reference {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

const ALL_REFERENCES: Reference[] = [
  {
    url: 'https://www.orangewood.co/blogs/introducing-our-new-website-built-with-next-js-610652388c21',
    type: 'blog',
    title: 'Introducing Our New Website: Built with Next.js',
    description:
      'Introducing our new website, built with Next.js for faster performance, seamless navigation, and enhanced user experience.',
    image:
      'https://res.cloudinary.com/dreradzep/image/upload/v1724994389/blog1_obxeho.jpg',
    duration: '3 min',
  },
  {
    url: 'https://www.orangewood.co/blogs/enhancing-robogpt-with-hand-teaching-and-diffseek-integration-ba196f0c8fb8',
    type: 'blog',
    title: 'Enhancing RoboGPT with Hand Teaching and DiffSeek Integration',
    description:
      "We are enhancing RoboGPT with Hand Teaching, allowing users to physically guide the robot's movements, and DiffSeek integration for precise, adaptable task execution.",
    image:
      'https://res.cloudinary.com/dreradzep/image/upload/v1724994507/blog2_pwxftl.jpg',
    duration: '10 min',
  },
  {
    url: 'https://youtu.be/RsERNEZ5yx8?si=iqIpU0My5Og1H3Cq',
    type: 'video',
    title: 'Food Bot - Cooking with Robot by Orangewood Labs',
    description:
      'Watch our Orangewood Labs robotic arm expertly fry food, blending technology with culinary art',
    image: 'https://res.cloudinary.com/dreradzep/image/upload/v1728387055/ss2_yql2xg.png',
    duration: '5 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=hIdrz4ihuoA',
    type: 'video',
    title: 'Drink Pouring with RoboGPT | Roboskill | Robo GPT Autoskill',
    description:
      'Watch RoboGPT, our six-axis robotic arm, expertly mix drinks with precision and AI-driven control!',
    image: 'https://res.cloudinary.com/dreradzep/image/upload/v1728386876/ss1_ai2kgm.png',
    duration: '5 min',
  },
];

function Reference({
  type,
  url,
  image,
  title,
  description,
  duration,
}: Reference) {
  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={title}
      href={url}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>
        <p className="leading-snug text-text-400">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-text-400">
          {`${duration} ${type === 'video' ? 'watch' : 'read'}`}
        </div>
      </div>
    </Link>
  );
}

export default function ReferenceSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all' | 'blog' | 'video'>('all');

  const references =
    activeType === 'all'
      ? ALL_REFERENCES
      : ALL_REFERENCES.filter((r) => r.type === activeType);

  const currentReferences = references.slice((page - 1) * 3, page * 3);
  const pages = Math.ceil(references.length / 3);

  const nextPage = () => {
    if (page < pages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section className="no-underline-links my-20 px-6 ">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="dyte-badge">REFERENCES</span>
            <h2 className="mb-6 text-4xl">Want to know more?</h2>
          </div>
          <Link
            to="https://www.orangewood.co/blogs"
            className="font-jakarta text-sm font-semibold text-primary"
          >
            All Blogs <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="mb-6 inline-flex gap-1 rounded-lg bg-zinc-100 p-2 font-jakarta text-sm font-semibold dark:bg-secondary-700">
          <button
            className={clsx(
              'cursor-pointer rounded-md border-none px-3.5 py-1.5 font-jakarta text-sm font-medium',
              activeType === 'all'
                ? 'bg-primary text-white'
                : 'bg-secondary-800 text-black dark:text-white'
            )}
            onClick={() => {
              setActiveType('all');
              setPage(1); // Reset to page 1 when type changes
            }}
          >
            {'All'}
          </button>
          <button
            className={clsx(
              'cursor-pointer rounded-md border-none px-3.5 py-1.5 font-jakarta text-sm font-medium',
              activeType === 'blog'
                ? 'bg-primary text-white'
                : 'bg-secondary-800 text-black dark:text-white'
            )}
            onClick={() => {
              setActiveType('blog');
              setPage(1); // Reset to page 1 when type changes
            }}
          >
            {'Blogs'}
          </button>
          <button
            className={clsx(
              'cursor-pointer rounded-md border-none px-3.5 py-1.5 font-jakarta text-sm font-medium',
              activeType === 'video'
                ? 'bg-primary text-white'
                : 'bg-secondary-800 text-black dark:text-white'
            )}
            onClick={() => {
              setActiveType('video');
              setPage(1); // Reset to page 1 when type changes
            }}
          >
            {'Videos'}
          </button>
        </div>

        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {currentReferences.map((reference, idx) => {
              return <Reference {...reference} key={idx} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              disabled={page === 1}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              disabled={page === pages}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
