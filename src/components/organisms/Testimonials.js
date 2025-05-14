import { dataSite } from '@/data';
import { useEffect, useState } from 'react';

const testimonials = dataSite.references;
export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section
      id='testimonials'
      className='bg-[#EFF8F1] py-12 px-4 rounded-3xl  mx-auto'
    >
      <h2 className='text-3xl font-bold text-center mb-8'>
        Client Testimonials
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {visibleTestimonials.map((t, i) => (
          <div key={i} className='bg-white rounded-xl p-6 shadow-md'>
            <p className='text-gray-600 italic mb-4'>
              &quot;{t.description}&quot;
            </p>
            <h4 className='font-semibold'>{t.name}</h4>
            {/* <span className='text-sm text-gray-500'>{t.role}</span> */}
          </div>
        ))}
      </div>
    </section>
  );
}
