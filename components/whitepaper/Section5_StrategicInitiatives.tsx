import dynamic from 'next/dynamic';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/Card';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Slider from '@mui/material/Slider';
import { TimelineComponent } from './Timeline';

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
      <h2 className="text-2xl font-bold">
        Strategic Initiatives: Roadmap to an AI-Native Newsroom
      </h2>
      <p className="text-gray-700">
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
            step={1}
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
            step={1}
            marks={marks}
            sx={{ color: '#C0181F' }}
            onChange={(e, val) => setRevenueImpact(val as number)}
          />
          <p className="text-gray-700 mt-2">
            {renderExplanation('revenueImpact', revenueImpact)}
          </p>
        </div>
        <div>
          <h4 className="font-bold">Cost and Operational Efficiency</h4>
          <Slider
            value={costEfficiency}
            min={1}
            max={5}
            step={1}
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
      <p className="text-gray-700">
        The clusters - 1) content creation and quality, 2) data-driven editorial
        strategy, and 3) workflow optimisation - are highly synergistic in
        nature. The first two are focused on the core product offering of a
        newsroom as a data-driven strategy is key to uncover unique stories and
        deliver personalised content, while automated content creation and
        AI-powered fact-checking enhance editorial standards and efficiency.
        Workflow optimisation through automated translation and metadata
        generation expands global reach and improves content discoverability.
        The clusters work together to drive subscriber growth, engagement, and
        operational efficiency.
      </p>

      {/* <div className="h-96 mt-8">
        [Flourish placeholder]
      </div> */}

      <h3 className="text-xl font-bold mt-8">
        Prioritised Initiatives and Time-to-Impact
      </h3>
      <p className="text-gray-700">
        A detailed discussion of the thematic clusters, ideas and ratings can be
        found in the appendix.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Cluster 1: Content Creation and Quality</CardTitle>
            <CardDescription>Total Score: 24</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Automated Content Creation</li>
              <li>Integrity and Fact-Checking</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cluster 2: Data-Driven Editorial Strategy</CardTitle>
            <CardDescription>Total Score: 23</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Insight-Driven Story Discovery</li>
              <li>Personalised News Digests</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cluster 3: Workflow Optimisation</CardTitle>
            <CardDescription>Total Score: 21</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Automated Language Translation</li>
              <li>Automated Metadata Generation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-xl font-bold mt-8">Three-Year Plan</h3>
      <p className="text-gray-700">
        A three-year plan is proposed for implementation so ideas can be quickly
        iterated upon and successful ones can be adopted and scaled. While the
        thematic clusters themselves are expected to be constant forces for
        change, their actual implementation may evolve and adapt in tandem to
        conditions on-the-ground.
      </p>
      <TimelineComponent />
      {/*
      <VerticalTimeline>
        <VerticalTimelineElement>
          <h4 className="text-lg font-bold">Year 1</h4>
          <p>Establish a dedicated AI desk and develop initial proof-of-concept models...</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          <h4 className="text-lg font-bold">Year 2</h4>
          <p>Scale up automated content creation and fact-checking to cover a larger portion of editorial output...</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement>
          <h4 className="text-lg font-bold">Year 3</h4>
          <p>Fully integrate automated content creation and fact-checking into editorial workflows, with quality control processes...</p>
        </VerticalTimelineElement>
      </VerticalTimeline> */}
      <p>
        By addressing weaknesses and seizing opportunities in a phased manner,
        Tech in Asia can leverage its established brand and in-house teams to
        implement AI-native newsroom initiatives successfully.
      </p>
    </div>
  );
}
