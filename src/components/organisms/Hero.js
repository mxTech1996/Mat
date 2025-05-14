import { dataSite } from '@/data';
import Image from 'next/image';

export default function NutritionHero() {
  return (
    <section className='relative flex items-center justify-end h-[600px] w-full overflow-hidden'>
      {/* Right Side Image */}
      <div className='relative h-full w-full md:w-1/2'>
        <Image
          src={dataSite.image_hero}
          alt='Healthy Nutrition'
          layout='fill'
          objectFit='cover'
          className='object-right'
        />
      </div>

      {/* Left Overlay Card */}
      <div className='absolute left-32 z-10 max-w-xl bg-[#EFF8F1] p-10 m-4 md:m-8 shadow-lg rounded translate-x-10'>
        <h5 className='text-sm font-semibold tracking-widest mb-2 text-black'>
          NUTRITION
        </h5>
        <h1 className='text-4xl font-bold mb-4 text-black'>
          A Guide to Healthy and Nutrition
        </h1>
        <p className='text-black mb-6'>
          Nutrition is the study of how food and drink affects our bodies and
          overall health. It is essential for maintaining good health and
          preventing chronic diseases.
        </p>
        <button className='bg-black text-white px-6 py-2'>
          More Information
        </button>
      </div>
    </section>
  );
}
