'use client';
import { dataSite } from '@/data';
import React from 'react';

const services = dataSite.services;

export default function ServicesSection() {
  return (
    <section id='services' className='py-16 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between mb-12'>
          <div>
            <h2 className='text-sm uppercase tracking-widest'>Our Services</h2>
            <h1 className='text-3xl font-bold mt-2'>Explore What We Offer</h1>
          </div>
          <p className='max-w-md text-gray-600 mt-4 md:mt-0'>
            Discover our full range of venue and event management services
            designed to make your celebrations unforgettable. From setup to
            guest satisfaction, we handle it all.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='bg-green-50'>
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-64 object-cover'
              />
              <div className='p-6'>
                <h3 className='font-semibold text-lg'>{service.title}</h3>
                <p className='mt-2 text-gray-600'>{service.description}</p>
                {/* <a href='#' className='block mt-4 text-sm underline'>
                  Learn More
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
