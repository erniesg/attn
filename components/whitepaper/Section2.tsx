import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import('../FlourishEmbed'), { ssr: false });

export function Section2() {
  return (
    <div className="space-y-4" id="section-2-market-quadrant-analysis">
      <h2 className="text-2xl font-bold">
        2. Market Quadrant Analysis: Insights from 10 Media Outlets
      </h2>
      <p className="text-gray-700">
        To better understand Tech in Asia&apos;s position within the competitive
        landscape of tech-focused publications, a Market Quadrant Analysis based
        on two key engagement metrics was conducted:
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          <strong>Bounce Rate:</strong> The percentage of visitors who navigate
          away from the site after viewing only one page
        </li>
        <li>
          <strong>Visit Duration:</strong> The average time visitors spend on
          the site
        </li>
      </ul>
      <p className="text-gray-700">
        Based on data from April from Similarweb, four categories emerged.
        (Note: These outlets and metrics were chosen in consideration of
        strategic relevance for Tech in Asia&apos;s content focus and
        subscriptions-based business, a detailed discussion for the choice will
        be added to the Appendix later.)
      </p>
      <div className="w-full">
        <FlourishEmbed src="visualisation/18005063" />
      </div>
      <p className="text-gray-700">
        The two categories of particular interest are:
      </p>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 w-1/2 border-r">
              High Engagement, High Retention
            </th>
            <th className="py-2 w-1/2">Low Engagement, Low Retention</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 w-1/2 align-top">
              CSDN.net and Reddit.com are clear leaders, showcasing strong
              community engagement and interactive features that have
              contributed to their successes.
            </td>
            <td className="border px-4 py-2 w-1/2 align-top">
              The majority of the analysed outlets, including Tech in Asia, fall
              into this quadrant. This highlights a need to focus on improving
              content relevance and engagement strategies to better retain
              visitors.
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-700">
        From its current position, it is evident that there are opportunities
        for growth and improvement for Tech in Asia to move towards the "High
        Engagement, High Retention" quadrant.
      </p>
    </div>
  );
}
