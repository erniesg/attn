import { SWOTAnalysis } from '@/components/SWOTAnalysis';

interface SWOTProps {
  strengths: any;
  weaknesses: any;
  opportunities: any;
  threats: any;
}

export function SWOTSection({
  strengths,
  weaknesses,
  opportunities,
  threats,
}: SWOTProps) {
  return (
    <div className="space-y-4" id="swot-analysis">
      <h2 className="text-2xl font-bold">3. A SWOT Analysis of Tech in Asia</h2>
      <p className="text-gray-700">
        Building on the market quadrant insights, this SWOT analysis examines
        both internal and external forces to inform the possible path forward
        for Tech in Asia amidst changing industry trends.
      </p>
      <SWOTAnalysis
        strengths={strengths}
        weaknesses={weaknesses}
        opportunities={opportunities}
        threats={threats}
      />
      <p className="text-gray-700">
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
