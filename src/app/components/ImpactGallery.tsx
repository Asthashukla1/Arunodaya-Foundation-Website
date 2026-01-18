import { useState } from 'react';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { Button } from '@/app/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

interface GalleryItem {
  image: string;
  title: string;
  date: string;
  location: string;
}

export function ImpactGallery() {
  const [showAll, setShowAll] = useState(false);

  const galleryItems: GalleryItem[] = [
    {
      image: "https://images.unsplash.com/photo-1764072970350-2ce4f354a483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHZvbHVudGVlcmluZ3xlbnwxfHx8fDE3Njg2NDU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Educational Workshop - Rural Schools",
      date: "Jan 10, 2026",
      location: "Maharashtra",
    },
    {
      image: "https://images.unsplash.com/photo-1703012349431-95c3304d098f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwcGxhbnRpbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3Njg2NDU0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Tree Plantation Drive 2026",
      date: "Jan 5, 2026",
      location: "Gujarat",
    },
    {
      image: "https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY4NjQ1NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Women Skill Development Program",
      date: "Dec 28, 2025",
      location: "Rajasthan",
    },
    {
      image: "https://images.unsplash.com/photo-1741597727884-1ecd051cadb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNhbXB8ZW58MXx8fHwxNzY4NjQ1NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Free Health Checkup Camp",
      date: "Dec 20, 2025",
      location: "Karnataka",
    },
    {
      image: "https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY4NjQ2MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Rural Infrastructure Development",
      date: "Dec 15, 2025",
      location: "Uttar Pradesh",
    },
    {
      image: "https://images.unsplash.com/photo-1765146030642-494c1cc65dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwaW5kaWF8ZW58MXx8fHwxNzY4NjQxNTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Community Service Initiative",
      date: "Dec 10, 2025",
      location: "Tamil Nadu",
    },
    {
      image: "https://images.unsplash.com/photo-1759411354058-9e429834f92f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGlzdHJpYnV0aW9uJTIwY2hhcml0eXxlbnwxfHx8fDE3Njg2NDYzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Food Distribution Campaign",
      date: "Dec 5, 2025",
      location: "West Bengal",
    },
    {
      image: "https://images.unsplash.com/photo-1765902764002-d25c8bfab451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZ28lMjBjaGFyaXR5JTIwZXZlbnR8ZW58MXx8fHwxNzY4NjQ2MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Annual Charity Fundraiser",
      date: "Nov 30, 2025",
      location: "Mumbai",
    },
    {
      image: "https://images.unsplash.com/photo-1760454634741-14469ef82f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGVkdWNhdGlvbiUyMGluZGlhfGVufDF8fHx8MTc2ODY0NjM4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Digital Literacy Program Launch",
      date: "Nov 25, 2025",
      location: "Bihar",
    },
  ];

  const displayItems = showAll ? galleryItems : galleryItems.slice(0, 6);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white pattern-dots">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#FF5722]/10 to-[#FFC107]/10 rounded-full border border-[#FF5722]/20">
            <span className="text-[#FF5722] font-semibold text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              📸 Our Impact in Action
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Recent Activities Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Witness the positive change we're creating in communities across India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Masonry columnsCount={3} gutter="1.5rem">
            {displayItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="masonry-item rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
                <div className="masonry-overlay">
                  <h3
                    className="text-white text-lg font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-white/90 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>

        {!showAll && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] text-white px-8 py-6 rounded-full shadow-lg text-lg"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              View More Activities
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
