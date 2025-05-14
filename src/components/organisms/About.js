import { dataSite } from '@/data';
import React from 'react';

const info = dataSite.info;

const InfoSection = () => {
  return (
    <section id='about' className='py-12 bg-[#EFF8F1] rounded-2xl '>
      {/* about us title */}

      <div className='flex  px-20  flex-col items-center md:items-start'>
        <h2 className='text-3xl font-bold mb-4'>About Us</h2>
      </div>

      <div className=' mx-auto px-20 grid gap-8 md:grid-cols-2'>
        {info.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-xl shadow p-6 transition hover:scale-105'
          >
            <h3 className='text-2xl font-bold mb-3'>{item.title}</h3>
            <p className='text-gray-700 whitespace-pre-line'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
