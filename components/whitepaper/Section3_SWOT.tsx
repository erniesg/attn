import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

interface SWOTProps {
  strengths: any[];
  weaknesses: any[];
  opportunities: any[];
  threats: any[];
}

const AccordionItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Disclosure as="div" className="mb-4">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
          <span>{title}</span>
          <ChevronUpIcon
            className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`}
          />
        </Disclosure.Button>
        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
          {description}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export function SWOTSection({
  strengths = [],
  weaknesses = [],
  opportunities = [],
  threats = [],
}: SWOTProps) {
  return (
    <div className="space-y-4" id="section-3-swot-analysis">
      <h2 className="text-2xl font-bold gradient-text">
        3. A SWOT Analysis of Tech in Asia
      </h2>
      <p>
        Building on the market quadrant insights, this SWOT analysis examines
        both internal and external forces to inform the possible path forward
        for Tech in Asia amidst changing industry trends.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Strengths</h3>
          {strengths.map((item: any, index: number) => (
            <AccordionItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Weaknesses</h3>
          {weaknesses.map((item: any, index: number) => (
            <AccordionItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Opportunities</h3>
          {opportunities.map((item: any, index: number) => (
            <AccordionItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Threats</h3>
          {threats.map((item: any, index: number) => (
            <AccordionItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <p>
        The SWOT analysis reveals that while Tech in Asia has a strong
        foundation and brand presence in the Asian tech media landscape, it
        faces significant challenges in terms of engagement, competition, and
        adapting to the rapidly evolving AI landscape. However, by leveraging
        its strengths and seizing the opportunities presented by AI
        technologies, Tech in Asia can position itself as a leader in AI-Native
        journalism, driving innovation and growth in the industry.
      </p>
    </div>
  );
}
