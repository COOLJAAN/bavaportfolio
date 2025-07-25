import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Smart Safety System for Construction Workers',
      description: [
        'YOLOv8 model for detecting PPE (helmets, vests).',
        'IoT helmet with DHT11, gas, MEMS, GSM sensors.',
        'Real-time alerts and safety data transmission.'
      ]
    },
    {
      title: 'Student Result Management System',
      description: [
        'Full-stack web app with secure login and database.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          🚀 Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;