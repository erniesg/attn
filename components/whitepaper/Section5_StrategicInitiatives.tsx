import dynamic from 'next/dynamic';
import { useState } from 'react';

import 'react-vertical-timeline-component/style.min.css';
import Slider from '@mui/material/Slider';
import { TimelineComponent } from './Timeline';
import { ClusterPopover } from '../ClusterPopover';

const FlourishEmbed = dynamic(() => import('../FlourishEmbed'), { ssr: false });

const explanations = {
  productImpact: {
    5: 'Initiatives that do the most to enhance content quality and integrity are rated favourably.',
    1: 'Initiatives that have minimal impact on content quality and integrity are rated poorly.',
  },
  revenueImpact: {
    5: 'High scores in this area mean most likely to drive subscriber growth and retention.',
    1: 'Low scores indicate minimal impact on subscriber growth and retention.',
  },
  costEfficiency: {
    5: 'Inclusive of data readiness, integration, and implementation complexity across systems, higher is better.',
    1: 'Low scores indicate high complexity and low efficiency in implementation.',
  },
};

const marks = [
  { value: 1, label: '1' },
  { value: 5, label: '5' },
];

const clusterContent = {
  cluster1: `
    <h3 class="text-xl font-bold">Cluster 1: Content Creation and Quality</h3>
    <p>Content creation and quality are at the core of Tech in Asia's AI-Native newsroom vision. By automating routine tasks and ensuring the integrity of its content, Tech in Asia can deliver more value to its readers while maintaining high editorial standards.</p>
    <ul class="list-disc pl-5 text-gray-700">
      <li>Automated Content Creation (Revenue Impact: 5, Cost Efficiency: 1, Product Impact: 5): Automated content creation enables Tech in Asia to scale its output without sacrificing quality. By generating draft articles and reports, AI can help journalists focus on more in-depth, investigative pieces. This initiative aligns with Tech in Asia's goals of driving subscriber growth and retention through consistent, high-quality content production.</li>
      <li>Integrity and Fact-Checking (Revenue Impact: 3, Cost Efficiency: 2, Product Impact: 5): Maintaining the credibility of its content is essential for Tech in Asia's success. AI-powered fact-checking and integrity tools can help verify claims, detect inconsistencies, and flag potential biases, ensuring that published content meets high standards of accuracy and impartiality. This initiative reinforces Tech in Asia's reputation as a trusted source of news and analysis.</li>
    </ul>
  `,
  cluster2: `
    <h3 class="text-xl font-bold">Cluster 2: Data-Driven Editorial Strategy</h3>
    <p>Data-driven editorial strategies are key to uncovering unique stories and delivering personalised experiences that resonate with Tech in Asia's audience. By leveraging AI to analyze diverse datasets and user preferences, Tech in Asia can differentiate its coverage and build stronger relationships with its readers.</p>
    <ul class="list-disc pl-5 text-gray-700">
      <li>Insight-Driven Story Discovery (Revenue Impact: 5, Cost Efficiency: 2, Product Impact: 5): AI-powered story discovery enables Tech in Asia to identify emerging trends and novel angles from unconventional data sources. By being among the first to report on these stories, Tech in Asia can attract new readers and establish itself as a thought leader in tech journalism.</li>
      <li>Personalised News Digests (Revenue Impact: 4, Cost Efficiency: 3, Product Impact: 4): Personalised news digests, curated by AI based on individual user interests, can significantly enhance reader engagement and loyalty. By delivering tailored content that consistently meets each user's needs, Tech in Asia can drive subscriber retention and reduce churn.</li>
    </ul>
  `,
  cluster3: `
    <h3 class="text-xl font-bold">Cluster 3: Workflow Optimisation</h3>
    <p>Optimizing workflows through AI-powered automation is critical for Tech in Asia's global expansion and content discoverability. By streamlining processes and improving the accessibility of its content, Tech in Asia can increase its reach and impact while driving cost efficiencies.</p>
    <ul class="list-disc pl-5 text-gray-700">
      <li>Automated Language Translation (Revenue Impact: 3, Cost Efficiency: 4, Product Impact: 3): Automated language translation allows Tech in Asia to make its content accessible to a wider international audience without incurring high manual translation costs. By providing localized content, Tech in Asia can better serve readers in different countries and regions, fostering a more global and inclusive community.</li>
      <li>Automated Metadata Generation (Revenue Impact: 2, Cost Efficiency: 4, Product Impact: 4): Automated metadata generation improves the searchability and navigability of Tech in Asia's content archive. By consistently categorizing articles with relevant tags and keywords, AI can help users easily find the information they need, enhancing the overall user experience and engagement.</li>
    </ul>
  `,
};

export function Section5_StrategicInitiatives() {
  const [productImpact, setProductImpact] = useState(5);
  const [revenueImpact, setRevenueImpact] = useState(5);
  const [costEfficiency, setCostEfficiency] = useState(5);

  const renderExplanation = (
    dimension: keyof typeof explanations,
    value: number
  ): string | null => {
    if (value === 1 || value === 5) {
      return explanations[dimension][value];
    }
    return null;
  };

  return (
    <div className="space-y-4" id="section5-strategic-initiatives">
      <h2 className="text-2xl font-bold gradient-text">
        5. Strategic Initiatives: Roadmap to an AI-Native Newsroom
      </h2>
      <p>
        To transform Tech in Asia into a leading AI-Native newsroom, the roadmap
        below outlines key initiatives across three clusters for action. The
        initiatives within each cluster have been evaluated based on their
        potential impact on product quality, revenue growth, and operational
        efficiency, using a scoring system that assesses each factor on a scale
        of 1 to 5.
      </p>
      <h3 className="text-xl font-bold mt-8">
        Key Dimensions for Prioritisation
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold">Product Impact</h4>
          <Slider
            value={productImpact}
            min={1}
            max={5}
            step={5}
            marks={marks}
            sx={{ color: '#C0181F' }}
            onChange={(e, val) => setProductImpact(val as number)}
          />
          <p className="text-gray-700 mt-2">
            {renderExplanation('productImpact', productImpact)}
          </p>
        </div>
        <div>
          <h4 className="font-bold">Revenue Impact</h4>
          <Slider
            value={revenueImpact}
            min={1}
            max={5}
            step={5}
            marks={marks}
            sx={{ color: '#C0181F' }}
            onChange={(e, val) => setRevenueImpact(val as number)}
          />
          <p className="text-gray-700 mt-2">
            {renderExplanation('revenueImpact', revenueImpact)}
          </p>
        </div>
        <div>
          <h4 className="font-bold">Cost Efficiency</h4>
          <Slider
            value={costEfficiency}
            min={1}
            max={5}
            step={5}
            marks={marks}
            sx={{ color: '#C0181F' }}
            onChange={(e, val) => setCostEfficiency(val as number)}
          />
          <p className="text-gray-700 mt-2">
            {renderExplanation('costEfficiency', costEfficiency)}
          </p>
        </div>
      </div>
      <h3 className="text-xl font-bold mt-8">
        Thematic Clusters of Initiatives
      </h3>
      <p>
        The clusters - 1) content creation and quality, 2) data-driven editorial
        strategy, and 3) workflow optimisation - are highly synergistic in
        nature. The first two are focused on the core product offering of a
        newsroom as a data-driven strategy is key to uncover unique stories and
        deliver personalised content, while automated content creation and
        AI-powered fact-checking enhance editorial standards and efficiency.
        Workflow optimisation through automated translation and metadata
        generation expands global reach and improves content discoverability.
        These clusters work together to drive subscriber growth, engagement, and
        operational efficiency.
      </p>{' '}
      <div className="w-full">
        <FlourishEmbed src="visualisation/18013647" />
      </div>
      <h3 className="text-xl font-bold mt-8">
        Prioritised Initiatives and Time-to-Impact
      </h3>
      <p>
        Click on the cards below for a discussion of the thematic clusters,
        ideas and ratings.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-8">
        <ClusterPopover
          title="Cluster 1: Content Creation and Quality"
          totalScore={21}
          content={clusterContent.cluster1}
        />
        <ClusterPopover
          title="Cluster 2: Data-Driven Editorial Strategy"
          totalScore={23}
          content={clusterContent.cluster2}
        />
        <ClusterPopover
          title="Cluster 3: Workflow Optimisation"
          totalScore={20}
          content={clusterContent.cluster3}
        />
      </div>
      <h3 className="text-xl font-bold mt-8">Three-Year Plan</h3>
      <p>
        A three-year plan is proposed for implementation so ideas can be quickly
        iterated upon and successful ones can be adopted and scaled. While the
        thematic clusters themselves are expected to be constant forces for
        change, their actual implementation may evolve and adapt in tandem to
        conditions on-the-ground.
      </p>
      <TimelineComponent />
      <p>
        By addressing weaknesses and seizing opportunities in a phased manner,
        Tech in Asia can leverage its established brand and in-house teams to
        implement AI-native newsroom initiatives successfully.
      </p>
    </div>
  );
}
