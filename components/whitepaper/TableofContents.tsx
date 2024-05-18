export function TableofContents() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Table of Contents</h2>
      <nav className="space-y-2">
        <a className="block text-gray-700 hover:text-[#C0181F]" href="#section1">
          1.{' '}
          <code>
            loop &#123; println!(&quot;The medium is the message&quot;); &#125;
          </code>
        </a>
        <a className="block text-gray-700 hover:text-[#C0181F]" href="#section-2-market-quadrant-analysis">
          2. Market Quadrant Analysis: Insights from 10 Media Outlets
        </a>
        <a className="block text-gray-700 hover:text-[#C0181F]" href="#section-3-swot-analysis">
          3. A SWOT Analysis of Tech in Asia
        </a>
        <a className="block text-gray-700 hover:text-[#C0181F]" href="#section4">
          4. A.I., Meet Human: Augmenting Authenticity in an AI Age
        </a>
        <a className="block text-gray-700 hover:text-[#C0181F]" href="#section5-strategic-initiatives">
          5. Strategic Initiatives: Roadmap to an AI-Native Newsroom
        </a>
        <a className="block text-gray-700 hover:text-[#C0181F]" href="#section6-content-engine">
          6. Content Engine: Opportunities for an AI Desk
        </a>
        <a className="block text-gray-700 hover:text-[#C0181F]" href="#section-7-geography-and-conclusion">
          7. The Geography of AI-Native Journalism and Conclusion
        </a>
      </nav>
    </div>
  );
}
