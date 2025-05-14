'use client';
import { dataSite } from '@/data';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className='fixed top-0 left-0 w-full z-50 transition-colors duration-300'
      style={{
        backgroundColor: isScrolled ? '#F0FAF4' : '#FFFFFF',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
        <Link href='/' className='flex items-center'>
          <img src={dataSite.iconImage} alt='Logo' className='h-16 w-16 mr-2' />
          <span className='text-2xl font-bold text-green-500'>Mat</span>
        </Link>
        <nav className='flex space-x-6'>
          <a href='/#products'>Products</a>
          <a href='/#about'>About Us</a>
          <a href='/#services'>Services</a>
          <a href='/#testimonials'>Testimonials</a>
          <a href='/more-information'>Contact Us</a>
          <button
            onClick={() => (window.location.href = '/my-cart')}
            className='ml-4 bg-black text-white px-4 py-2 rounded'
          >
            My Cart
          </button>
        </nav>
      </div>
    </header>
  );
}
