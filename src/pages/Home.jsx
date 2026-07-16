import { useEffect } from 'react';
import Hero from '../components/Hero';
import MilitaryShowcase from '../components/MilitaryShowcase';
import BulletinBoard from '../components/BulletinBoard';
import AboutHero from "../components/Abouthero"  // ← Changed here
import NewsAndInstagram from '../components/NewsAndInstagram';
import CustomProcess from '../components/CustomProcess';
import AeroInfo from '../components/AeroInfo';

export default function Home() {
  useEffect(() => {
    document.title = 'Nixwoker Bespoke Leather Clothing Co. - Heritage Jackets';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Premium handcrafted leather jackets built slow, worn forever. Custom made full grain leather jackets shipped worldwide.');
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Military Showcase Section */}
      <MilitaryShowcase />


      {/* Bulletin Board Section */}
      <BulletinBoard />

      {/* About Hero Section */}
      <AboutHero />
      
      <NewsAndInstagram />

      <CustomProcess />

      {/* Aero Info Section */}
      <AeroInfo />
    </div>
  );
}