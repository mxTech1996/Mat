import { dataSite } from '@/data';
import React from 'react';

export default function VenueSupportSection() {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-between px-8 py-12 bg-white'>
      <div className='max-w-xl space-y-6'>
        <h2 className='text-3xl font-bold'>
          Making Every Occasion <br /> Unforgettable
        </h2>
        <p>
          Our team of dedicated event specialists is committed to understanding
          your specific vision, preferences, and goals. Through personalized
          consultations, we help you design the perfect setup that meets your
          event’s unique requirements — ensuring a memorable and seamless
          experience.
        </p>
        <p>
          Our venues are fully equipped to host events of all sizes, offering
          customizable layouts, audio-visual support, and catering services to
          meet your expectations.
        </p>
        <div>
          <h3 className='font-semibold text-xl mb-1'>Event Manager</h3>
          <p className='flex items-center gap-2 text-green-600 font-bold'>
            📞{dataSite.telephone}
          </p>
        </div>
      </div>
      <div className='mt-8 lg:mt-0 lg:ml-12'>
        <img
          src={dataSite.services[0].image}
          alt='Event Planning'
          className='rounded-lg shadow-md'
        />
      </div>
    </section>
  );
}
