import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Sreenivasa Institute of Technology',
      period: '2021–Present',
      grade: '78%'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Vijayam Junior College',
      period: '2019–2021',
      grade: '84%'
    },
    {
      degree: 'High School',
      institution: 'Govt. High School, Irala',
      period: '2018–2019',
      grade: 'GPA: 9.7'
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          🎓 Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-lg font-semibold text-gray-800">{edu.degree}</span>
                  <Badge variant="secondary" className="w-fit">{edu.grade}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;