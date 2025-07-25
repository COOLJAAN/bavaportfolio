import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          📬 Contact
        </h2>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 text-center">
              Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                <Button variant="outline" asChild className="w-full">
                  <a href="mailto:bavajanbavajan746@gmail.com">
                    bavajanbavajan746@gmail.com
                  </a>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-700 mb-2">Phone</h3>
                <Button variant="outline" asChild className="w-full">
                  <a href="tel:+919398287815">
                    +91-9398287815
                  </a>
                </Button>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                <p className="text-gray-600 py-2 px-3 border rounded-md">
                  Chittoor, Andhra Pradesh
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;