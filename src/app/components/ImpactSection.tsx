import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Trees, Users, Heart } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatCard({ icon, value, suffix, label, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border-2 border-[#FF5722]/20 hover:border-[#FF5722]"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="text-4xl md:text-5xl font-bold text-[#1A237E] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export function ImpactSection() {
  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      value: 10000,
      suffix: '+',
      label: 'Children Educated',
    },
    {
      icon: <Trees className="w-8 h-8 text-white" />,
      value: 5000,
      suffix: '+',
      label: 'Trees Planted',
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: 1500,
      suffix: '+',
      label: 'Volunteers',
    },
    {
      icon: <Heart className="w-8 h-8 text-white fill-white" />,
      value: 250,
      suffix: '+',
      label: 'Communities Served',
    },
  ];

  return (
    <section id="impact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
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
              📊 Our Impact
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Creating Real Change
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Every number tells a story of transformation, hope, and community empowerment
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}