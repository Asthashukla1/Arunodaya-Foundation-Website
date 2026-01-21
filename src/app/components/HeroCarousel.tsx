import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, FileText, Award, Heart } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';

function CustomArrow({ onClick, direction }: { onClick?: () => void; direction: 'left' | 'right' }) {
  return (
    <button
      onClick={onClick}
      className="slick-arrow"
      style={direction === 'left' ? { left: '20px' } : { right: '20px' }}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 text-[#FF5722]" />
      ) : (
        <ChevronRight className="w-6 h-6 text-[#FF5722]" />
      )}
    </button>
  );
}

export function HeroCarousel() {
 const slides = [
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
    title: "Empowering Lives, Building Futures",
    subtitle: "Join us in our mission to transform communities through education",
  },
  {
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
    title: "Rural Development for All",
    subtitle: "Bringing sustainable change to villages across India",
  },
  {
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop",
    title: "Healthcare for Everyone",
    subtitle: "Free medical camps and healthcare services for underserved communities",
  },
];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <section id="home" className="pt-16 md:pt-20 relative">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Image with overlay */}
              <div className="absolute inset-0 z-0">
               <img
                   src={slide.image}
                   alt={slide.title}
                   className="absolute inset-0 w-full h-full object-cover block" // Added 'absolute' and 'block'
                   style={{ zIndex: -1 }} // Ensure it stays behind the text overlays
                   loading="eager"
                  />
                {/* Enhanced Dark Overlay for Better Text Readability (30% opacity) */}
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Gradient Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A237E]/85 via-[#1A237E]/70 to-[#1A237E]/30"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl"
                  >
                    <h1
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        Get Involved
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-[#1A237E] px-8 py-6 rounded-full transition-all"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Floating Quick Action Buttons */}
      <div className="absolute bottom-8 right-4 md:right-8 z-20 flex gap-2 md:gap-3 flex-wrap justify-end max-w-xs md:max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden sm:block"
        >
          <Button
            className="bg-white hover:bg-gray-50 text-[#1A237E] rounded-full shadow-xl px-4 md:px-6 py-4 md:py-6 group text-sm md:text-base"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <FileText className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#FF5722] group-hover:scale-110 transition-transform" />
            Generate ID
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden sm:block"
        >
          <Button
            className="bg-white hover:bg-gray-50 text-[#1A237E] rounded-full shadow-xl px-4 md:px-6 py-4 md:py-6 group text-sm md:text-base"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <Award className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#FF5722] group-hover:scale-110 transition-transform" />
            Get Certificate
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button
            className="bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] text-white rounded-full shadow-xl px-6 md:px-8 py-4 md:py-6 group text-sm md:text-base"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2 fill-white group-hover:scale-110 transition-transform" />
            Donate Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}