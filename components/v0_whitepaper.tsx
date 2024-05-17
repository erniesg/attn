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
import dynamic from 'next/dynamic';
import { SWOTSection } from './whitepaper/SWOTSection';
import { MetaNarrativeSection } from './whitepaper/MetaNarrativeSection';
import { TableofContents } from './whitepaper/TableofContents';
import { Section1 } from './whitepaper/Section1';
import { Section2 } from './whitepaper/Section2';
import { Section4 } from './whitepaper/Section4';
import { Section5_StrategicInitiatives } from './whitepaper/Section5_StrategicInitiatives';
import { Section6_ContentEngine } from './whitepaper/Section6_ContentEngine';
import { Section7_GeographyAndConclusion } from './whitepaper/Section7_GeographyAndConclusion'; // Import the new component

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then((m) => m.ResponsiveLine),
  { ssr: false }
);

const FlourishEmbed = dynamic(() => import('./FlourishEmbed'), { ssr: false });

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/Card';
import Link from 'next/link';
import { SWOTAnalysis } from './SWOTAnalysis';
import { OutletCard } from './OutletCard';

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
    <div className="bg-[#F9F9F9] py-12 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-[800px] space-y-12">
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-[#C0181F] to-[#FF6B6B] bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Algorithms for Authenticity
          </h1>
          <p className="text-2xl font-medium text-gray-700">
            Building an AI-Native Newsroom at Tech in Asia
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Abstract</h2>
          <p className="text-gray-700">
            This white paper outlines a strategic roadmap for Tech in Asia to
            build an AI-native newsroom, leveraging AI technologies to enhance
            subscriber growth, engagement, and operational efficiency.
            Aligning with the company&apos;s mission and post-acquisition
            growth strategy, the initiatives draw from an analysis of 10 media
            outlets and Tech in Asia&apos;s capabilities. These prioritised
            initiatives and establishment of a dedicated AI desk aims to
            support the goal of over $100 million in annual recurring revenue
            by 2027.
          </p>
        </div>
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
        {/* <div className="space-y-4" id="conclusion">
          <h2 className="text-2xl font-bold">
            5. Conclusion and Future Outlook
          </h2>
          <h3 className="text-xl font-medium text-gray-700">
            Embracing the AI-Powered Future of Journalism
          </h3>
          <p className="text-gray-700">
            As the media landscape continues to evolve, news organizations
            must adapt and embrace the transformative potential of artificial
            intelligence and machine learning. By building an AI-native
            newsroom that prioritizes authenticity and trust, news
            organizations can regain the confidence of their audiences, stay
            relevant in the digital age, and shape the future of journalism.
          </p>
        </div>
        <div>
          <LineChart className="aspect-[16/9]" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Card 1</CardTitle>
              <CardDescription>This is the first card.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl,
                eget aliquam nisl nisl sit amet nisl.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Card 2</CardTitle>
              <CardDescription>This is the second card.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card 3</CardTitle>
                <CardDescription>This is the third card.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl,
                  eget aliquam nisl nisl sit amet nisl.
                </p>
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>Made with ❤️ by erniesg</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link className="hover:text-gray-200" href="#">
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link className="hover:text-gray-200" href="#">
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link className="hover:text-gray-200" href="#">
            <FaTwitter className="h-6 w-6" />
          </Link>
        </div>
      </footer>
    </>
  );
}




function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: 'Desktop',
            data: [
              { x: 'Jan', y: 43 },
              { x: 'Feb', y: 137 },
              { x: 'Mar', y: 61 },
              { x: 'Apr', y: 145 },
              { x: 'May', y: 26 },
              { x: 'Jun', y: 154 },
            ],
          },
          {
            id: 'Mobile',
            data: [
              { x: 'Jan', y: 60 },
              { x: 'Feb', y: 48 },
              { x: 'Mar', y: 177 },
              { x: 'Apr', y: 78 },
              { x: 'May', y: 96 },
              { x: 'Jun', y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: 'point',
        }}
        yScale={{
          type: 'linear',
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={['#2563eb', '#e11d48']}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: '9999px',
            },
            container: {
              fontSize: '12px',
              textTransform: 'capitalize',
              borderRadius: '6px',
            },
          },
          grid: {
            line: {
              stroke: '#f3f4f6',
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
