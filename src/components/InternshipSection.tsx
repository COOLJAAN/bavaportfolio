import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const InternshipSection: React.FC = () => {
  return (
    <section id="internship" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          💼 Internship
        </h2>
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="text-xl font-semibold text-gray-800">
                Machine Learning Intern
              </span>
              <Badge variant="default" className="w-fit">
                6 Weeks
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-4 font-medium">
              Edu Phoenix Solutions
            </p>
            <p className="text-gray-600 leading-relaxed">
              Built ML models, performed preprocessing, evaluation on real datasets.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InternshipSection;