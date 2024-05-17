import React from 'react';
import { Card, Button } from '@/components/ui';
import { ClockIcon, ThumbsUpIcon, ThumbsDownIcon } from '@/components/ui/Icons';

interface NewsSectionProps {
  articles: any[];
  loading: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ articles, loading }) => {
  return (
    <div className="w-full bg-gray-800 rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-400" />
        <span className="ml-2 text-gray-400 font-['Cabin']">Loading...</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card className="bg-gray-700 rounded-lg p-4 cursor-grab active:cursor-grabbing">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-400 font-['Cabin']">
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
            <h3 className="text-xl font-bold text-gray-200 font-['Cabin']">
              Breaking News: Earthquake Hits California
            </h3>
            <p className="text-gray-400 font-['Cabin']">
              A powerful earthquake has struck California, causing widespread
              damage and disrupting power and transportation across the state.
            </p>
          </div>
        </Card>
        <Card className="bg-gray-700 rounded-lg p-4 cursor-grab active:cursor-grabbing">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-400 font-['Cabin']">
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
            <h3 className="text-xl font-bold text-gray-200 font-['Cabin']">
              Tech Giant Unveils Groundbreaking AI Assistant
            </h3>
            <p className="text-gray-400 font-['Cabin']">
              A leading tech company has announced the launch of a new AI
              assistant that promises to revolutionize the way we interact with
              technology.
            </p>
          </div>
        </Card>
        <Card className="bg-gray-700 rounded-lg p-4 cursor-grab active:cursor-grabbing">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ClockIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-400 font-['Cabin']">
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
            <h3 className="text-xl font-bold text-gray-200 font-['Cabin']">
              Climate Change Summit Yields Historic Agreement
            </h3>
            <p className="text-gray-400 font-['Cabin']">
              World leaders have come together to sign a landmark agreement
              aimed at addressing the urgent threat of climate change, setting
              ambitious goals for emissions reduction and sustainable
              development.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewsSection;
