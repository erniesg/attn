import React from 'react';
import { Card, Button } from '@/components/ui';
import { ClockIcon, ThumbsUpIcon, ThumbsDownIcon } from '@/components/ui/Icons';

const GeneratedNews = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Example card, replicate or modify as needed */}
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
            A powerful earthquake has struck California, causing widespread
            damage and disrupting power and transportation across the state.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default GeneratedNews;
