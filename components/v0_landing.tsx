/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/bj3QXbsMefm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Judson } from 'next/font/google'
import { Newsreader } from 'next/font/google'

judson({
  subsets: ['latin'],
  display: 'swap',
})

newsreader({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

/** Add border radius CSS variable to your global CSS:

:root {
  --radius: 0.625rem;
}
**/
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

export function v0_landing() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[100dvh] bg-gray-950 px-4 py-12 md:px-6 lg:py-24">
      <div className="container max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#E00101] to-[#00BFFF] font-[Noto Sans]">
            attn
          </h1>
          <p className="text-2xl font-medium text-gray-400 font-[Noto Sans]">
            Your personalized newsroom
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Input
            className="flex-1 max-w-md bg-gray-800 border-gray-700 text-gray-400 placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600 font-[Cabin]"
            placeholder="Enter your desired topics"
          />
          <Button className="bg-gradient-to-br from-[#E00101] to-[#00BFFF] text-gray-950 font-medium hover:from-[#00BFFF] hover:to-[#E00101] font-[Cabin]">
            Generate
          </Button>
        </div>
        <div className="w-full bg-gray-800 rounded-lg p-6 space-y-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-400" />
            <span className="ml-2 text-gray-400 font-[Cabin]">Loading...</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="bg-gray-700 rounded-lg p-4 cursor-grab active:cursor-grabbing">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-400 font-[Cabin]">
                    5 min read
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    className="text-gray-400 hover:text-gray-300"
                    size="icon"
                    variant="ghost"
                  >
                    <ThumbsUpIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    className="text-gray-400 hover:text-gray-300"
                    size="icon"
                    variant="ghost"
                  >
                    <ThumbsDownIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold text-gray-200 font-[Cabin]">
                  Breaking News: Earthquake Hits California
                </h3>
                <p className="text-gray-400 font-[Cabin]">
                  A powerful earthquake has struck California, causing
                  widespread damage and disrupting power and transportation
                  across the state.
                </p>
              </div>
            </Card>
            <Card className="bg-gray-700 rounded-lg p-4 cursor-grab active:cursor-grabbing">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-400 font-[Cabin]">
                    8 min read
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    className="text-gray-400 hover:text-gray-300"
                    size="icon"
                    variant="ghost"
                  >
                    <ThumbsUpIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    className="text-gray-400 hover:text-gray-300"
                    size="icon"
                    variant="ghost"
                  >
                    <ThumbsDownIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold text-gray-200 font-[Cabin]">
                  Tech Giant Unveils Groundbreaking AI Assistant
                </h3>
                <p className="text-gray-400 font-[Cabin]">
                  A leading tech company has announced the launch of a new AI
                  assistant that promises to revolutionize the way we interact
                  with technology.
                </p>
              </div>
            </Card>
            <Card className="bg-gray-700 rounded-lg p-4 cursor-grab active:cursor-grabbing">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-400 font-[Cabin]">
                    12 min read
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    className="text-gray-400 hover:text-gray-300"
                    size="icon"
                    variant="ghost"
                  >
                    <ThumbsUpIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    className="text-gray-400 hover:text-gray-300"
                    size="icon"
                    variant="ghost"
                  >
                    <ThumbsDownIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold text-gray-200 font-[Cabin]">
                  Climate Change Summit Yields Historic Agreement
                </h3>
                <p className="text-gray-400 font-[Cabin]">
                  World leaders have come together to sign a landmark agreement
                  aimed at addressing the urgent threat of climate change,
                  setting ambitious goals for emissions reduction and
                  sustainable development.
                </p>
              </div>
            </Card>
          </div>
        </div>
        <div className="w-full bg-gray-800 rounded-lg p-6 space-y-6">
          <div className="flex items-start space-x-4">
            <Image
              alt="Avatar"
              className="rounded-full"
              height={48}
              src="/placeholder.svg"
              width={48}
            />
            <div className="flex-1">
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="text-gray-400 font-[Cabin]">
                  Hey there! I saw your post about the earthquake in California.
                  That&apos;s really concerning. Let me know if there&apos;s
                  anything I can do to help.
                </p>
              </div>
              <div className="mt-2 text-right text-sm text-gray-400 font-[Cabin]">
                <span>John Doe</span> - <span>5 min ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Image
              alt="Avatar"
              className="rounded-full"
              height={48}
              src="/placeholder.svg"
              width={48}
            />
            <div className="flex-1">
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="text-gray-400 font-[Cabin]">
                  Hey there! I saw your post about the earthquake in California.
                  That&apos;s really concerning. Let me know if there&apos;s
                  anything I can do to help.
                </p>
              </div>
              <div className="mt-2 text-right text-sm text-gray-400 font-[Cabin]">
                <span>Jane Smith</span> - <span>10 min ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Image
              alt="Avatar"
              className="rounded-full"
              height={48}
              src="/placeholder.svg"
              width={48}
            />
            <div className="flex-1">
              <Input
                className="bg-gray-700 border-gray-600 text-gray-400 placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500 font-[Cabin]"
                placeholder="Type your message..."
              />
              <div className="mt-2 flex justify-end space-x-2">
                <Button
                  className="text-gray-400 hover:text-gray-300 font-[Cabin]"
                  variant="outline"
                >
                  <PaperclipIcon className="h-5 w-5" />
                </Button>
                <Button className="bg-gradient-to-br from-[#E00101] to-[#00BFFF] text-gray-950 font-medium hover:from-[#00BFFF] hover:to-[#E00101] font-[Cabin]">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-center mt-8 space-x-4 text-gray-400 font-[Cabin]">
        <p>Made with ❤️ by erniesg</p>
        <Link className="hover:text-gray-300" href="#">
          <GithubIcon className="h-5 w-5" />
        </Link>
        <Link className="hover:text-gray-300" href="#">
          <LinkedinIcon className="h-5 w-5" />
        </Link>
        <Link className="hover:text-gray-300" href="#">
          <LinkIcon className="h-5 w-5" />
        </Link>
        <Link className="hover:text-gray-300" href="#">
          <XIcon className="h-5 w-5" />
        </Link>
      </footer>
    </main>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function PaperclipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

function ThumbsDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}

function ThumbsUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
