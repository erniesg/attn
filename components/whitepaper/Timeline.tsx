import { useState } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton, Collapse } from '@mui/material';

export function TimelineComponent() {
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  const handleExpandClick = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <Timeline style={{ width: '100%' }}>
      <TimelineItem style={{ width: '100%' }}>
        <TimelineOppositeContent style={{ flex: 0.2, textAlign: 'left' }}>
          <h4 className="text-lg font-bold">Year 1</h4>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              backgroundColor: expandedYear === 'year1' ? '#C0181F' : undefined,
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ flex: 0.8 }}>
          <p>
            Establish a dedicated AI desk and develop initial proof-of-concept
            models...
          </p>
          <IconButton onClick={() => handleExpandClick('year1')}>
            {expandedYear === 'year1' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <Collapse in={expandedYear === 'year1'}>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Establish a dedicated AI desk and develop initial
                proof-of-concept models for automated content creation and
                fact-checking
              </li>
              <li>
                Pilot insight-driven story discovery and personalised news
                digests with a small subset of users
              </li>
              <li>
                Begin development of automated language translation and metadata
                generation systems
              </li>
            </ul>
            <p>
              Year 1 helps address Tech in Asia's limited adoption of AI
              technologies and lays the pipelines and groundwork for enhancing
              content quality and user engagement.
            </p>
          </Collapse>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem style={{ width: '100%' }}>
        <TimelineOppositeContent style={{ flex: 0.2, textAlign: 'left' }}>
          <h4 className="text-lg font-bold">Year 2</h4>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              backgroundColor: expandedYear === 'year2' ? '#C0181F' : undefined,
            }}
          />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{ flex: 0.8 }}>
          <p>
            Scale up automated content creation and fact-checking to cover a
            larger portion of editorial output...
          </p>
          <IconButton onClick={() => handleExpandClick('year2')}>
            {expandedYear === 'year2' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <Collapse in={expandedYear === 'year2'}>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Scale up automated content creation and fact-checking to cover a
                larger portion of editorial output
              </li>
              <li>
                Expand personalised news digests and insight-driven story
                discovery to all users
              </li>
              <li>
                Launch automated language translation for key markets and
                languages
              </li>
              <li>
                Fully implement automated metadata generation across Tech in
                Asia's content archive
              </li>
            </ul>
            <p>
              Year 2 emphasises scaling up successes so Tech in Asia can improve
              its relatively low engagement metrics and start to realise the
              benefits of increased productivity and user satisfaction.
            </p>
          </Collapse>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem style={{ width: '100%' }}>
        <TimelineOppositeContent style={{ flex: 0.2, textAlign: 'left' }}>
          <h4 className="text-lg font-bold">Year 3</h4>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              backgroundColor: expandedYear === 'year3' ? '#C0181F' : undefined,
            }}
          />
        </TimelineSeparator>
        <TimelineContent style={{ flex: 0.8 }}>
          <p>
            Fully integrate automated content creation and fact-checking into
            editorial workflows...
          </p>
          <IconButton onClick={() => handleExpandClick('year3')}>
            {expandedYear === 'year3' ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <Collapse in={expandedYear === 'year3'}>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Fully integrate automated content creation and fact-checking
                into editorial workflows, with quality control processes
              </li>
              <li>
                Continuously refine and optimise personalised news digests and
                insight-driven story discovery
              </li>
              <li>
                Develop advanced analytics and reporting tools for effective
                decision-making, and identify new opportunities for innovation
                and growth
              </li>
            </ul>
            <p>
              Year 3 aims to fully integrate AI into Tech in Asia's editorial
              workflows and continuously refine algorithms. These efforts help
              solidify Tech in Asia's position as a leader in AI-driven
              journalism.
            </p>
          </Collapse>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
