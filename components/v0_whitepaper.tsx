/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/mQwv58ct3J1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Caudex } from 'next/font/google'

caudex({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { SWOTSection } from './whitepaper/Section3_SWOT';
import { MetaNarrativeSection } from './whitepaper/MetaNarrativeSection';
import { TableofContents } from './whitepaper/TableofContents';
import { Abstract } from './whitepaper/Abstract';
import { Section1 } from './whitepaper/Section1';
import { Section2 } from './whitepaper/Section2';
import { Section4 } from './whitepaper/Section4_Authenticity';
import { Section5_StrategicInitiatives } from './whitepaper/Section5_StrategicInitiatives';
import { Section6_ContentEngine } from './whitepaper/Section6_ContentEngine';
import { Section7_GeographyAndConclusion } from './whitepaper/Section7_GeographyAndConclusion'; // Import the new component

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FlourishEmbed = dynamic(() => import('./FlourishEmbed'), { ssr: false });

import Link from 'next/link';
import { Lato, Love_Ya_Like_A_Sister } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

const handwritten = Love_Ya_Like_A_Sister({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

export function V0_whitepaper() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const strengths = [
    {
      title: 'Established Brand in the Asian Tech Market',
      description:
        'Trusted source for tech news and insights and strong relationships with key stakeholders',
    },
    {
      title:
        'Early Adopter of Generative AI and Proximity to the Technology Ecosystem',
      description:
        'Alumni of Y Combinator (YC), with close ties to technology and innovation',
    },
    {
      title: 'In-house Digital and Engineering Team',
      description: 'Capable of rapidly building new features and tools',
    },
    {
      title: 'Diverse Content Offerings and Regional Coverage',
      description: 'Evident in breakout stories such as Vizzio and Honestbee',
    },
  ];

  const weaknesses = [
    {
      title: 'Ageing digital infrastructure',
      description: 'Poor page load times and performance, per Lighthouse',
    },
    {
      title: 'Relatively Low Engagement Metrics',
      description:
        'Bounce rates and visit durations are below industry benchmarks',
    },
    {
      title: 'Over-dependence on Subscriptions',
      description:
        'Risk of audience capture compromising reporting quality. Vulnerable to low conversion rates and high churn if content value is not consistently demonstrated',
    },
    {
      title: 'Limited Adoption of Data and AI Technologies',
      description:
        'Inefficiencies due to insufficient integration for content production, relevance and discoverability',
    },
  ];

  const opportunities = [
    {
      title: 'First-in-Asia Dedicated AI Desk',
      description: 'Attracting new readers and subscribers',
    },
    {
      title: 'First-in-the-World AI-Native Newsroom',
      description:
        'Driving operational excellence and enabling meaningful dialogue in society',
    },
    {
      title: 'A Self-Reinforcing Content and Data Flywheel',
      description:
        'Enhancing core content product, which improves engagement and retention, creating a cycle of improvement',
    },
  ];

  const threats = [
    {
      title: 'Intense Competition',
      description: 'Competing with established players and emerging startups',
    },
    {
      title: 'Rapid Advancements in AI Technologies',
      description:
        'Need for significant investments in talent and infrastructure',
    },
    {
      title: 'Potential Reader Skepticism',
      description: 'Possible backlash towards AI-generated content',
    },
    {
      title: 'Risks Associated with AI Bias and Ethical Breaches',
      description:
        'Potential for AI bias, inaccuracies, or ethical issues that could harm reputation',
    },
  ];

  return (
    <>
      <Head>
        <title>
          Algorithms for Authenticity: Building an AI-Native Newsroom at Tech in
          Asia
        </title>
        <meta
          name="description"
          content="Building an AI-Native Newsroom at Tech in Asia. Explore the opportunities and challenges of integrating AI into journalism."
        />
        <meta
          name="keywords"
          content="AI, journalism, Tech in Asia, AI-Native Newsroom, technology, media, artificial intelligence, large language models, LLM"
        />
      </Head>
      <div className="bg-[#F9F9F9] py-12 px-4 md:px-8 lg:px-16">
        <div className="container space-y-12">
          {/* <div className="mx-auto max-w-[800px] space-y-12"> */}
          <div className="space-y-4">
            <h1
              className={`bg-gradient-to-r from-[#C0181F] to-[#FF6B6B] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl ${lato.className}`}
            >
              Algorithms for{' '}
              <span className={handwritten.className}>Authenticity</span>
            </h1>
            <p
              className={`text-2xl font-medium text-gray-700 ${lato.className}`}
            >
              Building an AI-Native Newsroom at Tech in Asia
            </p>
          </div>
          <div className="full-width-gradient">
            <FlourishEmbed src="visualisation/18014598" />
          </div>{' '}
          <Abstract />
          <TableofContents />
          <Section1 />
          <Section2 />
          <SWOTSection
            strengths={strengths}
            weaknesses={weaknesses}
            opportunities={opportunities}
            threats={threats}
          />
          <Section4 />
          <MetaNarrativeSection />
          <Section5_StrategicInitiatives />
          <Section6_ContentEngine />
          <Section7_GeographyAndConclusion />
        </div>
      </div>
      <div className="full-width-gradient">
        <FlourishEmbed src="visualisation/18017809" />
      </div>{' '}
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>
          Made with ❤️ by{' '}
          <Link
            className="hover:text-gray-200"
            href="https://linktr.ee/erniesg"
          >
            erniesg
          </Link>
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link
            className="hover:text-gray-200"
            href="https://github.com/erniesg/"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link
            className="hover:text-gray-200"
            href="https://www.linkedin.com/in/erniesg/"
          >
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link className="hover:text-gray-200" href="https://x.com/erniesg">
            <FaTwitter className="h-6 w-6" />
          </Link>
        </div>
      </footer>
    </>
  );
}
