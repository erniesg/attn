import dynamic from 'next/dynamic';

const FlourishEmbed = dynamic(() => import('../FlourishEmbed'), { ssr: false });

export function Section6_ContentEngine() {
  return (
    <div className="space-y-4" id="content-engine">
      <h2 className="text-2xl font-bold">Content Engine: Opportunities for an AI Desk</h2>
      <p className="text-gray-700">
        Aside from the listed digital initiatives, establishing a dedicated AI desk within Tech in Asia will help bolster its status as an AI-Native newsroom.
      </p>
      <h3 className="text-xl font-bold">True Signal</h3>
      <p className="text-gray-700">
      Interest in AI is not recent. An examination of Google search interest trends from 2004 shows “ai” to consistently outperform existing dedicated sections such as "startups", ecommerce", "fintech" and "crypto" (greentech was excluded since its absolute value is minimal).      </p>
      <div className="w-full">
        {/* <FlourishEmbed src="visualisation/18005063" /> */}

      </div>
      <p className="text-gray-700">
      The search volume for AI exhibits two notable spikes in 2012 and 2022, coinciding with watershed moments in the development of modern AI. The first spike saw deep learning go from fringe to mainstream in the AI community, setting the stage for AI to consume consumer imagination with the rapid adoption of ChatGPT. There are deep undercurrents in AI that will continue to resonate and amplify in impact over time.</p>      <h3 className="text-xl font-bold">The Case for an AI Desk</h3>
      <p className="text-gray-700">
        Despite the clear demand for AI content, many media outlets have struggled to provide comprehensive and accurate coverage of the technology.
      </p>
      <p className="text-gray-700">
      For example, the New York Times misrepresented Facebook’s device partnerships, and Bloomberg inaccurately described Amazon's "Just Walk Out" technology, highlighting a prevalent misunderstanding in mainstream media. These examples underscore the need for tech media to develop specialised expertise in AI to provide nuanced, accurate reporting on the technology. Tech in Asia, with its roots in Y Combinator, has a unique opportunity to lead with informative coverage.      </p>
      <h3 className="text-xl font-bold">Strategic Benefits</h3>
      <p className="text-gray-700">
        Perhaps most importantly, AI might be best characterised as a paradigm-shifting, general purpose foundational technology (Carlota Perez) that allows us to scale intelligence and reasoning for the first time. This deep structural impact will play out over many years and across all levels of society, raising existential questions that newsrooms around the world will play a crucial role in helping to answer.
      </p>      <div className="space-y-4">
        <div className="question-box" data-aos="fade-up" data-rellax-speed="-2">
          <h4 className="font-bold">Individual Level</h4>
          <p>What skills should I learn? How do I best protect my kids and family?</p>
        </div>
        <div className="question-box" data-aos="fade-up">
          <h4 className="font-bold">Company Level</h4>
          <p>What is the alpha or beta in going AI-Native? How do I do so?</p>
        </div>
        <div className="question-box" data-aos="fade-up">
          <h4 className="font-bold">Societal Level</h4>
          <p>What is intelligence? How should we organise school, work and play?</p>
        </div>
        <div className="question-box" data-aos="fade-up">
          <h4 className="font-bold">Country Level</h4>
          <p>Should I bring my own LLM? How should we deal with the global supply chain of talent and compute? What about ethics and regulation to ensure that our citizens come out on top?</p>
          </div>
      </div>
      <p className="text-gray-700">
        Offering cutting-edge AI content will differentiate Tech in Asia, attracting new readers and subscribers while helping the public navigate an increasingly complex world. This journalism will demystify AI, foster informed decision-making, and encourage responsible development and usage. Tech in Asia can seize this opportunity and cement its leadership in tech reporting.
      </p>
    </div>
  );
}
