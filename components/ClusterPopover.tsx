import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from '@headlessui/react';

interface ClusterPopoverProps {
  title: string;
  totalScore: number;
  content: string;
}

export function ClusterPopover({
  title,
  totalScore,
  content,
}: ClusterPopoverProps) {
  return (
    <PopoverGroup>
      <Popover className="relative">
        <PopoverButton className="border p-4 rounded-lg shadow-lg cursor-pointer bg-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-700">Total Score: {totalScore}</p>
        </PopoverButton>

        <PopoverPanel className="fixed inset-0 z-10 bg-white p-6 overflow-y-auto">
          <div className="flex justify-end">
            <PopoverButton className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Close</span>
              &times;
            </PopoverButton>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="mt-2 text-gray-700">
              <h3 className="text-xl font-bold">Thematic Discussion</h3>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
}
