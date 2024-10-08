import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { Linkedin, Youtube, Github } from '@styled-icons/boxicons-logos';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ThemedImage from '@theme/ThemedImage';

const developers = [
  {
    name: 'Docs',
    href: '/guides',
  },
  {
    name: 'API Resource',
    href: '/guides/owl-6.5-robot-hardware/api-reference',
  },
  {
    name: 'OWL 6.5 Robot Hardware',
    isAccordion: true,
    content: [
      { name: 'OWL Robot Client', href: '' },
      { name: 'Robot Interfaces', href: '' },
      { name: 'Robot Modes', href: '' },
      { name: 'Robot Motion', href: '' },
      { name: 'Robot Python Client stack', href: '' },
    ],
  },
];

const usecases = [
  {
    name: 'Visual Inspection',
    href: 'https://www.orangewood.co/use-cases',
  },
  {
    name: 'Bin Picking',
    href: 'https://www.orangewood.co/use-cases',
  },
  {
    name: 'Powder Coating',
    href: 'https://www.orangewood.co/use-cases',
  },
  {
    name: 'Bartending Bot',
    href: 'https://www.orangewood.co/use-cases',
  },
  {
    name: 'Spray Painting',
    href: 'https://www.orangewood.co/use-cases',
  },
];

const company = [
  { name: 'About Us', href: 'https://www.orangewood.co/about' },
  { name: 'Blog', href: 'https://www.orangewood.co/blogs' },
  { name: 'Careers', href: 'https://www.orangewood.co/careers' },
  { name: 'Community', href: 'https://discord.com/invite/tuEAx6T4YE' },
  { name: 'Contact Us', href: 'mailto:all@orangewood.co' },
  { name: 'FAQ', href: '/faq' },
  {
    name: 'Demo on RoboGPT',
    href: 'https://www.youtube.com/watch?v=56Ip4CBfX-E',
  },
];

function Links({ name, links }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (href) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === href ? null : href
    );
  };

  return (
    <div>
      <h3 className="font-jakarta text-base font-semibold uppercase text-gray-400 dark:text-[#fff]">
        {name}
      </h3>
      <div className="flex flex-col gap-3">
        {links.map(({ name, href, isAccordion, content }) => (
          <div key={name}>
            <Link
              href={href}
              className="text-base text-gray-700 hover:text-primary hover:no-underline dark:text-[#f9f9f9]"
              onClick={() => (isAccordion ? toggleAccordion(href) : null)}
            >
              {name}
            </Link>
            {isAccordion && activeAccordion === href && (
              <ul style={{ paddingLeft: '1rem', listStyle: 'unset' }}>
                {content.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-700 hover:text-primary hover:no-underline dark:text-[#f9f9f9]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FF] dark:bg-[#191919]">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col px-6 py-12">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <ThemedImage
            alt="Orangewood Labs"
            className="h-12 w-36 object-contain lg:h-14 lg:w-40" // Adjust the sizes as needed
            sources={{
              light:
                'https://res.cloudinary.com/dreradzep/image/upload/v1728387740/ow-black_ztbhda.png',
              dark: 'https://res.cloudinary.com/dreradzep/image/upload/v1723783987/logo-white_kw3yma.png',
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-6 gap-y-12 md:justify-between lg:flex lg:flex-wrap">
          <Links name="Developers" links={developers} />
          <Links name="Usecases" links={usecases} />
          <Links name="Company" links={company} />
        </div>

        <hr className="my-12 !bg-gray-300 dark:!bg-[#999]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <Link className="text-inherit hover:text-black hover:underline dark:text-[#999] dark:hover:text-[#ff5b22]">
              Privacy Policy
            </Link>
            &bull;
            <Link className="text-inherit hover:text-black hover:underline dark:text-[#999] dark:hover:text-[#ff5b22]">
              Terms of Service
            </Link>
            &bull;
            <Link className="text-inherit hover:text-black hover:underline dark:text-[#999] dark:hover:text-[#ff5b22]">
              Website Terms of Use
            </Link>
            &bull;
            <span className="text-inherit dark:text-[#999]">
              &copy; {new Date().getFullYear()} Orangewood Labs.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/company/orangewood-labs/"
              aria-label="Orangewood Labs LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://github.com/orangewood-labs"
              aria-label="Orangewood Labs GitHub Organization"
            >
              <Github className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
            <Link
              href="https://www.youtube.com/@OrangewoodLabs"
              aria-label="Orangewood Labs YouTube Channel"
            >
              <Youtube className="h-7 w-7 text-zinc-400 hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
