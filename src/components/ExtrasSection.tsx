import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExtrasSection: React.FC = () => {
  const extras = [
    'Sports team & student council member',
    'Animal rescue volunteer'
  ];

  return (
    <section id="extras" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          🎯 Extras
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extras.map((extra, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <p className="text-gray-700 font-medium">{extra}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtrasSection;