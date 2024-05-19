import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

const articles = [
  {
    label: 'Mischaracterisation',
    outlet: 'The New York Times',
    summary:
      "The New York Times mischaracterized Facebook's data-sharing partnerships with Chinese companies, leading to a public disagreement with Facebook.",
    links: [
      {
        text: 'The New York Times Article',
        href: 'https://www.nytimes.com/2018/06/05/technology/facebook-device-partnerships-china.html',
      },
      {
        text: "Facebook's Response",
        href: 'https://about.fb.com/news/2018/06/why-we-disagree-with-the-nyt/',
      },
    ],
  },
  {
    label: 'Misunderstanding',
    outlet: 'The Information',
    summary:
      "Misunderstanding and misreporting of Amazon's 'Just Walk Out' technology by various media outlets.",
    links: [
      {
        text: 'The Information Article',
        href: 'https://www.theinformation.com/articles/whats-behind-headlines-about-amazons-just-walk-out-feature',
      },
    ],
  },
  {
    label: 'Sensationalism',
    outlet: 'ZDNet',
    summary:
      'Sensationalism and lack of depth in AI reporting, leading to misinformation and public confusion.',
    links: [
      {
        text: 'ZDNet Article',
        href: 'https://www.zdnet.com/article/why-is-a-i-reporting-so-bad/',
      },
    ],
  },
  {
    label: 'Fearmongering',
    outlet: 'AI Panic',
    summary:
      'Fear-based content in AI media coverage, which often exaggerates the risks and dangers of AI.',
    links: [
      {
        text: 'AI Panic Article',
        href: 'https://www.aipanic.news/p/whats-wrong-with-ai-media-coverage',
      },
    ],
  },
  {
    label: 'Oversight',
    outlet: 'Fast Company',
    summary:
      'Journalistic oversights in AI coverage, including errors and unchallenged sensational claims.',
    links: [
      {
        text: 'Fast Company Article',
        href: 'https://www.fastcompany.com/90904550/pov-the-media-has-to-be-extra-careful-when-covering-ai',
      },
    ],
  },
  {
    label: 'Anthropomorphism',
    outlet: 'Columbia Journalism Review',
    summary:
      'Hype and misrepresentation in the media coverage of ChatGPT, leading to unrealistic expectations and misunderstandings.',
    links: [
      {
        text: 'Columbia Journalism Review Article',
        href: 'https://www.cjr.org/tow_center/media-coverage-chatgpt.php',
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ArticleTabs: React.FC = () => {
  return (
    <TabGroup>
      <div className="overflow-x-auto">
        <TabList className="flex p-1 space-x-1 bg-gradient-to-r from-[#C0181F] via-[#FF6B6B] to-[#C0181F] rounded-xl min-w-max">
          {articles.map((article, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[#C0181F] ring-white ring-opacity-60',
                  selected
                    ? 'bg-white text-[#C0181F] shadow'
                    : 'text-white hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {article.label}
            </Tab>
          ))}
        </TabList>
      </div>
      <TabPanels className="mt-2">
        {articles.map((article, idx) => (
          <TabPanel
            key={idx}
            className={classNames(
              'bg-white rounded-xl p-3',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-[#C0181F] ring-white ring-opacity-60'
            )}
          >
            <h3 className="text-lg font-medium leading-5">{article.outlet}</h3>
            <p className="mt-1 text-sm text-gray-500">{article.summary}</p>
            {article.links.map((link, linkIdx) => (
              <a
                key={linkIdx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-[#C0181F] hover:underline block"
              >
                {link.text}
              </a>
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default ArticleTabs;
