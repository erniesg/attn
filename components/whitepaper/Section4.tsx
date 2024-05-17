import { OutletCard } from '../OutletCard';

export function Section4() {
  return (
    <div className="space-y-4" id="ai-solutions">
      <h2 className="text-2xl font-bold">
        4. A.I., Meet Human: Augmenting Authenticity in an AI Age
      </h2>
      <p className="text-gray-700">
        Having taken stock of the status quo and landscape, it is crucial to
        draw inspiration from innovative newsrooms and media models that have
        successfully navigated the changing landscape of journalism, to build
        from the future.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <OutletCard
          title="Stratechery"
          website="https://stratechery.com/"
          yearFounded={2013}
          description="Stratechery provides in-depth analysis of the tech industry, focusing on business and strategy."
          businessModel="Subscription-based model offering detailed articles, podcasts and analysis to paying subscribers."
          size="26000 paying subscribers, estimated $2M - $5M per year"
        />
        <OutletCard
          title="Defector Media"
          website="https://defector.com/"
          yearFounded={2020}
          description="Defector Media is a worker-owned, subscription-based digital media company founded by former Deadspin journalists. It focuses on sports, culture, and politics, offering a mix of free and paywalled content."
          businessModel="Subscription-based model, with additional revenue from merchandise and events."
          size="40000 paying subscribers, $4.5M from September 2022 to August 2023 (85% from subscriptions)"
        />
        <OutletCard
          title="404 Media"
          website="https://404media.co/"
          yearFounded={2023}
          description="404 Media is founded by ex-Vice journalists dedicated to investigative journalism, funded by community support and member contributions."
          businessModel="Community-funded, with memberships supporting investigative reporting."
          size="Profitable 6 months in according to Nieman Lab"
        />
      </div>
      <p className="text-gray-700">
        These outlets are testaments to the viability of the subscriptions-based
        model. Distilled below are key patterns and takeaways for Tech in Asia.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="border p-4">
          <h3 className="text-xl font-bold">Niche Focus and Differentiation</h3>
          <p className="text-gray-700">
            All three outlets have all succeeded by focusing on specific niches
            and offering unique, high-quality content that sets them apart. →
            Tech in Asia can double down on its expertise in the Asian tech and
            startup ecosystem, providing in-depth analysis and insights that
            readers can&apos;t find elsewhere.
          </p>
        </div>
        <div className="border p-4">
          <h3 className="text-xl font-bold">
            Subscription-Based Business Models
          </h3>
          <p className="text-gray-700">
            All of them rely primarily on subscription revenue, demonstrating
            the viability of this model for niche publications with loyal
            audiences. → Tech in Asia can further refine its subscription
            offering, ensuring that it provides exceptional value to paying
            readers through exclusive content, features, and benefits.
          </p>
        </div>
        <div className="border p-4">
          <h3 className="text-xl font-bold">
            Community Engagement and Ownership
          </h3>
          <p className="text-gray-700">
            Defector Media and 404 Media have built strong communities around
            their brands, with readers feeling a sense of ownership and
            investment in the publications&apos; success. → By involving readers
            in the AI-Native newsroom journey, seeking their inputs and
            feedback, Tech in Asia can create opportunities for collaboration
            that build a sense of community.
          </p>
        </div>
        <div className="border p-4">
          <h3 className="text-xl font-bold">Transparency and Trust</h3>
          <p className="text-gray-700">
            All three outlets prioritise transparency about their business
            models, operations, and editorial processes, building trust with
            their readers. → As Tech in Asia integrates AI into its newsroom, it
            must be transparent about how it is used to enhance, rather than
            replace, human journalism.
          </p>
        </div>
      </div>
    </div>
  );
}
