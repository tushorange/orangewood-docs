import React from 'react';
import Link from '@docusaurus/Link';
import {
  AppsAddInRegular,
  ArrowRightFilled,
  DocumentRegular,
  OpenRegular,
  RecordRegular,
} from '@fluentui/react-icons';
import clsx from 'clsx';
import { ChevronRight, GitHub } from 'react-feather';
import { VelocityScroll } from '../ScrollBasedVelocity';

interface Guide {
  title: string;
  icon: any;
  text: string;
  link: string;
}

const guides: Guide[] = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    icon: RecordRegular,
    text: '',
    link: '',
  },
  {
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    icon: AppsAddInRegular,
    text: '',
    link: '',
  },
];

interface Sample {
  title: string;
  skills?: string;
  source?: string;
  blog?: string;
  demo?: string;
}

const samples: Sample[] = [
  {
    title: 'Orangewood Sim Stack',
    skills: '',
    source: 'https://github.com/orangewood-co/orangewood_sim_stack',
    blog: '',
    demo: '',
  },
  {
    title: 'RoboGPT',
    skills: 'Hand Teaching Skills',
    blog: 'https://orangewoodwebsite.vercel.app/blogs/enhancing-robogpt-with-hand-teaching-and-diffseek-integration-ba196f0c8fb8',
    source: 'https://github.com/orangewood-labs/RoboGPT',
    demo: 'https://youtu.be/tfsC6treKn0?si=rCZvh0rDZnF6d3m8',
  },
];

function Guide({ title, text, icon: Icon, link }: (typeof guides)[0]) {
  return (
    <Link
      to={link}
      className="group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary"
    >
      <Icon className="h-6 w-6" />

      <div className="flex flex-col">
        <h4 className="mb-1 font-semibold">{title}</h4>
        <p className="mb-0 text-sm text-text-400">{text}</p>
      </div>

      <ChevronRight className="ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
}

function Sample({ title, skills, blog, source, demo }: Sample) {
  return (
    <div className="group flex cursor-pointer items-center justify-between rounded-lg border-2 border-transparent p-3 text-text-400/60 transition-colors hover:border-primary hover:text-primary">
      <div className="flex flex-col">
        <h4 className="mb-1 text-black group-hover:text-primary dark:text-white">
          {title}
        </h4>
        <div className="text-sm text-text-400">{skills}</div>
      </div>

      <div className="flex items-center gap-2.5">
        {blog && (
          <Link to={blog} className="text-inherit">
            <DocumentRegular className="h-5 w-5" />
          </Link>
        )}

        {demo && (
          <Link to={demo} className="text-inherit">
            <OpenRegular className="h-5 w-5" />
          </Link>
        )}

        {source && (
          <Link
            to={source}
            className="flex items-center gap-1 rounded-lg py-1 px-3 text-inherit transition-colors group-hover:bg-primary group-hover:text-white"
          >
            <GitHub className="h-4 w-4" />
            <span className="font-semibold">Clone</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function GuidesAndSamples() {
  // Define multiple texts for scrolling
  const scrollingTexts = [
    "RoboGPT",
    "Simulation Stack",
    "OWL Robot 6.5",
    "SDK's",
    "API's",
  ];

  // Join the texts with a dot in between and add an additional dot at the end
  const scrollingTextWithDot = scrollingTexts.map(text => `${text} · `).join('');
  
  return (
    <>
  {/* <section className="no-underline-links my-40 mx-auto flex w-full max-w-5xl flex-col gap-10 p-4 py-0 md:flex-row md:gap-0"> */}
    
    {/* Commenting out Popular how-to guides section */}
    {/* <div className="flex-1">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="m-0">Popular how to guides</h3>
        <Link to="" className="font-jakarta text-sm font-semibold">
          Guides<ArrowRightFilled className="ml-1" />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {guides.map((guide) => (
          <Guide {...guide} key={guide.title} />
        ))}
      </div>
    </div> */}

    {/* Commenting out Popular sample repositories section */}
    {/* <div
      className={clsx(
        'mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent',
        'hidden w-px md:block'
      )}
    /> */}


    {/* Popular sample repositories section */}
    {/* <div className="w-full md:max-w-sm">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="m-0">Popular sample repositories</h3>
        <Link to="https://github.com/orangewood-labs" className="font-jakarta text-sm font-semibold">
          All apps <ArrowRightFilled className="ml-1" />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {samples.map((sample) => (
          <Sample {...sample} key={sample.title} />
        ))}
      </div>
    </div> */}
  {/* </section> */}
  {/* Full-width VelocityScroll without background gradient */}
  <div className="w-screen py-2"> {/* Adjusted padding to shift up */}
        <VelocityScroll
          text={scrollingTextWithDot} // Use the updated text with dots
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-transparent bg-gradient-to-t from-yellow-400 to-red-500 dark:from-yellow-600 dark:to-red-700 bg-clip-text drop-shadow-sm md:text-7xl md:leading-[5rem] opacity-95"
        />
      </div>

</>

  );
}
