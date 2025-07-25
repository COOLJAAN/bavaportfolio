import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'Java Programming',
      provider: 'CodTech IT Solutions'
    },
    {
      title: 'Python Programming',
      provider: 'CodTech IT Solutions'
    },
    {
      title: 'Machine Learning with Python',
      provider: 'IBM'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          📜 Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="w-fit">
                  {cert.provider}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;