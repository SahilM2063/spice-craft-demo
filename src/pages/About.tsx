
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-muted">
        <div className="container-custom py-16 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground">Coming Soon...</p>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
