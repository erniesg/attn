import React from 'react';

interface SWOTItem {
  title: string;
  description: string;
}

interface SWOTProps {
  strengths: SWOTItem[];
  weaknesses: SWOTItem[];
  opportunities: SWOTItem[];
  threats: SWOTItem[];
}

export function SWOTAnalysis({
  strengths,
  weaknesses,
  opportunities,
  threats,
}: SWOTProps) {
  return (
    <div className="space-y-4" id="swot-analysis">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="border p-4 align-top">
          <h3 className="text-xl font-bold">Strengths</h3>
          <ul className="list-disc list-inside text-gray-700">
            {strengths.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="border p-4 align-top">
          <h3 className="text-xl font-bold">Weaknesses</h3>
          <ul className="list-disc list-inside text-gray-700">
            {weaknesses.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="border p-4 align-top">
          <h3 className="text-xl font-bold">Opportunities</h3>
          <ul className="list-disc list-inside text-gray-700">
            {opportunities.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="border p-4 align-top">
          <h3 className="text-xl font-bold">Threats</h3>
          <ul className="list-disc list-inside text-gray-700">
            {threats.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
