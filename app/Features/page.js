"use client"
import React from 'react';
import Navbar from '@/components/navbar';

const Features = [
  {
    title: "Easy Task Management",
    description: "Add, edit, and delete tasks effortlessly with a simple and intuitive interface.",
    icon: "📝"
  },
  {
    title: "Real-Time Updates",
    description: "Stay updated with real-time changes and get notified instantly.",
    icon: "🔔"
  },
  {
    title: "Customizable Themes",
    description: "Choose from a variety of themes to customize your experience.",
    icon: "🎨"
  },
  {
    title: "Cross-Platform Sync",
    description: "Sync your tasks across multiple devices and platforms seamlessly.",
    icon: "🔄"
  }
];

const FeaturesPage = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar/>
      <main className='pt-16 pb-24 px-4'>
        <section className='text-center mb-12'>
          <h1 className='text-3xl font-bold mb-4'>Our Features</h1>
          <p className='text-lg text-gray-700'>
            Discover the powerful Features that make our app the best choice for managing your tasks.
          </p>
        </section>
        <div className='flex flex-wrap justify-center gap-8'>
          {Features.map((feature, index) => (
            <div key={index} className='bg-white shadow-lg rounded-lg p-6 w-full max-w-sm'>
              <div className='text-4xl mb-4'>{feature.icon}</div>
              <h2 className='text-xl font-semibold mb-2'>{feature.title}</h2>
              <p className='text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FeaturesPage;
