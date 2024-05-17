import React from 'react';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon, LinkIcon, XIcon } from './ui/Icons';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mt-8 space-x-4 text-gray-400 font-[Cabin]">
      <p>Made with ❤️ by erniesg</p>
      <Link href="https://github.com/erniesg" className="hover:text-gray-300">
        <GithubIcon className="h-5 w-5" />
      </Link>
      <Link
        href="https://linkedin.com/in/erniesg"
        className="hover:text-gray-300"
      >
        <LinkedinIcon className="h-5 w-5" />
      </Link>
      <Link href="https://yourlink.com" className="hover:text-gray-300">
        <LinkIcon className="h-5 w-5" />
      </Link>
      <Link href="#" className="hover:text-gray-300">
        <XIcon className="h-5 w-5" />
      </Link>
    </footer>
  );
};

export default Footer;
