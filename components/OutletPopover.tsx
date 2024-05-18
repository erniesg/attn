import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from '@headlessui/react';

interface OutletPopoverProps {
  title: string;
  website: string;
  yearFounded: number;
  description: string;
  businessModel: string;
  size: string;
}

export function OutletPopover({
  title,
  website,
  yearFounded,
  description,
  businessModel,
  size,
}: OutletPopoverProps) {
  return (
    <PopoverGroup>
      <Popover className="relative">
        <PopoverButton className="border p-4 rounded-lg shadow-lg cursor-pointer">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </PopoverButton>

        <PopoverPanel className="fixed bottom-0 left-0 right-0 h-1/2 z-10 bg-white p-6 overflow-y-auto">
          <div className="flex justify-end">
            <PopoverButton className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Close</span>
              &times;
            </PopoverButton>
          </div>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="mt-2 text-gray-700">
              <p><strong>Website:</strong> <a href={website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{website}</a></p>
              <p><strong>Year Founded:</strong> {yearFounded}</p>
              <p><strong>Description:</strong> {description}</p>
              <p><strong>Business Model:</strong> {businessModel}</p>
              <p><strong>Size:</strong> {size}</p>
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
}
