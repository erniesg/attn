import React from 'react';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/Card';

interface OutletCardProps {
  title: string;
  website: string;
  yearFounded: number;
  description: string;
  businessModel: string;
  size: string;
}

export function OutletCard({
  title,
  website,
  yearFounded,
  description,
  businessModel,
  size,
}: OutletCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <a href={website} className="text-blue-500 hover:underline">
            {website}
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Year founded:</strong> {yearFounded}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <strong>Business model:</strong> {businessModel}
        </p>
        <p>
          <strong>Size:</strong> {size}
        </p>
      </CardContent>
    </Card>
  );
}
