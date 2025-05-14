import { dataSite } from '@/data';
import React from 'react';

const EventRentalSection = () => {
  return (
    <section className='flex  items-center justify-center gap-12 px-8 py-12 bg-white'>
      {/* Left Content */}
      <div className='w-full md:w-1/3'>
        <h2 className='text-4xl font-bold mb-4'>
          WE PROVIDE THE PERFECT SPACE <br />
          FOR YOUR NEXT EVENT
        </h2>
        <p className='text-lg mb-4'>
          A versatile venue designed for corporate meetings, social gatherings,
          weddings, and more. Our halls come equipped with modern amenities and
          customizable layouts.
        </p>
        <ul className='list-disc pl-5 mb-6 space-y-2'>
          <li>Spacious and fully equipped venues</li>
          <li>Perfect for corporate or social events</li>
          <li>Customizable layouts and packages</li>
        </ul>
        <button
          onClick={() => (window.location.href = '/#products')}
          className='bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded transition'
        >
          Buy Now
        </button>
      </div>

      {/* Center Image */}
      <div className='w-full md:w-1/3 flex justify-center'>
        <img
          src={dataSite.image_hero2}
          alt='Event Hall'
          className='rounded shadow-md'
        />
      </div>

      {/* Right Stats */}
      <div className='w-full md:w-1/3 flex flex-col space-y-12 items-center md:items-start'>
        <div className='text-center md:text-left'>
          <h3 className='text-6xl font-bold text-gray-300'>76</h3>
          <p className='text-2xl font-semibold'>SUCCESSFUL EVENTS</p>
        </div>
      </div>
    </section>
  );
};

export default EventRentalSection;
