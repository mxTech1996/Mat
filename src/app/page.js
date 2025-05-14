'use client';

import InfoSection from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import HeroWithSideImage from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import EventRentalSection from '@/components/organisms/Rentasl';
import ServicesSection from '@/components/organisms/Services';
import TestimonialsCarousel from '@/components/organisms/Testimonials';
import VenueSupportSection from '@/components/organisms/VenueSupport';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroWithSideImage />
      <EventRentalSection />
      <Products />
      <VenueSupportSection />
      <ServicesSection />
      <InfoSection />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
