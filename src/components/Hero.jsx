import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../assets/main/main_bg1.jpg';
import bg2 from '../assets/main/main_bg2.jpg';
import bg3 from '../assets/main/main_bg3.jpg';
import bg4 from '../assets/main/main_bg4.jpg';
import bg5 from '../assets/main/main_bg5.jpg';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseStartX, setMouseStartX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  const slides = [
    {
      image: bg1,
      title: "AND IT'S NOT JUST JACKETS...",
      statement: "Explore our quality range of classic knitwear designs"
    },
    {
      image: bg2,
      title: "Built for man of presence...",
      statement: "Get your own piece of leather jacket history"
    },
    {
      image: bg3,
      title: "TIMELESS & UNIQUE HAND CRAFTED CLOTHING FROM NIXWOKER",
      statement: "Premium quality meets exceptional craftsmanship"
    },
    {
      image: bg4,
      title: "Explore our Military Grade Canvas jacket...",
      statement: "Quality, authentic recreations of the finest 20th century flight jackets!"
    },
    {
      image: bg5,
      title: "Custom Jackets From Nixwoker Leathers",
      statement: "Made to Your Specifications"
    }
  ];

  const handleShopNow = () => {
    const bulletinBoardSection = document.getElementById('bulletin-board');
    if (bulletinBoardSection) {
      bulletinBoardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTouchStart = (e) => {
    if (e.target.closest('.dot-container')) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (e.target.closest('.dot-container')) return;
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe(touchStart, e.changedTouches[0].clientX);
  };

  const handleMouseDown = (e) => {
    if (e.target.closest('.dot-container')) return;
    setMouseDown(true);
    setMouseStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (e.target.closest('.dot-container')) {
      setMouseDown(false);
      return;
    }
    if (mouseDown) {
      setMouseDown(false);
      handleSwipe(mouseStartX, e.clientX);
    }
  };

  const handleMouseLeave = () => {
    setMouseDown(false);
  };

  const handleSwipe = (startX, endX) => {
    if (isTransitioning) return;

    const distance = startX - endX;
    const isLeftSwipe = distance > 100;
    const isRightSwipe = distance < -100;

    if (isLeftSwipe || isRightSwipe) {
      setIsTransitioning(true);
      
      if (isLeftSwipe) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (isRightSwipe) {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }
  };

  const handleDotClick = (e, idx) => {
    e.stopPropagation();
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(idx);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500px] sm:h-[420px] md:h-[500px] lg:h-[450px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundPosition: 'center 19%',
        }}
      />

      <div className="relative z-10 w-full text-center animate-fade-in flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="bg-black px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 mb-2 sm:mb-3 md:mb-4 inline-block">
          <h1 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-black tracking-widest text-primary-white leading-tight uppercase whitespace-normal max-w-5xl">
            {slides[currentSlide].title}
          </h1>
        </div>

        <div className="bg-black px-3 sm:px-5 md:px-6 py-1 sm:py-2 md:py-2 mb-4 sm:mb-5 md:mb-6 inline-block">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-primary-white font-serif">
            {slides[currentSlide].statement}
          </p>
        </div>

        <button
          onClick={handleShopNow}
          className="px-8 sm:px-10 md:px-12 lg:px-18 py-1 sm:py-1 md:py-1 bg-black border-2 border-primary-white text-primary-white hover:bg-primary-white hover:text-primary-black transition-all duration-300 font-black tracking-widest uppercase text-lg sm:text-xl md:text-1xl lg:text-1xl mb-8 sm:mb-10 md:mb-12 block mx-auto"
        >
          Explore Now
        </button>

        <div className="dot-container flex items-center justify-center gap-2 cursor-pointer">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={(e) => handleDotClick(e, idx)}
              className={`h-px transition-all duration-300 hover:bg-primary-white ${
                idx === currentSlide
                  ? 'w-11 bg-primary-white'
                  : 'w-11 bg-primary-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}