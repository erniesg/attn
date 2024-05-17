import React from 'react';
import { Input, Button } from '@/components/ui';
import { PaperclipIcon } from '@/components/ui/Icons';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

const AIChat = () => {
  return (
    <div className="w-full bg-gray-800 rounded-lg p-6 space-y-6">
      <div className="flex items-start space-x-4">
        <PlaceholderImage alt="Avatar" height={48} width={48} />
        {/* <img
          alt="Avatar"
          className="rounded-full"
          height={48}
          src="/placeholder.svg"
          style={{
            aspectRatio: "48/48",
            objectFit: "cover",
          }}
          width={48}
        /> */}
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
  );
};

export default AIChat;
