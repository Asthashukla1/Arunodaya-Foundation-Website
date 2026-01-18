import { motion } from 'motion/react';
import { GraduationCap, Stethoscope, Users2, TreePine, ArrowRight, HandHeart, Home } from 'lucide-react';
import { Progress } from '@/app/components/ui/progress';
import { Button } from '@/app/components/ui/button';

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  delay: number;
}

function ProgramCard({ icon, title, description, image, raised, goal, delay }: ProgramCardProps) {
  const percentage = (raised / goal) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
          {icon}
        </div>
      </div>

      <div className="p-6">
        <h3
          className="text-2xl font-bold text-[#1A237E] mb-3 group-hover:text-[#FF5722] transition-colors"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          {description}
        </p>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Funds Raised</span>
            <span className="text-sm font-bold text-[#FF5722]">{percentage.toFixed(0)}%</span>
          </div>
          <Progress value={percentage} className="h-2 bg-gray-100" />
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600">
              ₹{raised.toLocaleString()} raised
            </span>
            <span className="text-sm font-semibold text-[#1A237E]">
              Goal: ₹{goal.toLocaleString()}
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full rounded-xl border-2 border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white transition-all group"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}

export function ProgramsGrid() {
  const programs = [
    {
      icon: <GraduationCap className="w-6 h-6 text-[#FF5722]" />,
      title: 'Education for All',
      description: 'Providing quality education and learning resources to underprivileged children across rural communities.',
      image: 'https://images.unsplash.com/photo-1764072970350-2ce4f354a483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHZvbHVudGVlcmluZ3xlbnwxfHx8fDE3Njg2NDU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      raised: 450000,
      goal: 600000,
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-[#FF5722]" />,
      title: 'Healthcare Access',
      description: 'Free medical camps and healthcare facilities for communities lacking basic medical infrastructure.',
      image: 'https://images.unsplash.com/photo-1741597727884-1ecd051cadb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGNhbXB8ZW58MXx8fHwxNzY4NjQ1NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      raised: 320000,
      goal: 500000,
    },
    {
      icon: <HandHeart className="w-6 h-6 text-[#FF5722]" />,
      title: 'Women Empowerment',
      description: 'Skill development and vocational training programs to empower women for financial independence.',
      image: 'https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY4NjQ1NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      raised: 280000,
      goal: 400000,
    },
    {
      icon: <Home className="w-6 h-6 text-[#FF5722]" />,
      title: 'Rural Development',
      description: 'Infrastructure development and sustainable livelihood programs for rural communities.',
      image: 'https://images.unsplash.com/photo-1759738098462-90ffac98c554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB2aWxsYWdlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY4NjQ2MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      raised: 380000,
      goal: 500000,
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
              🎯 Our Programs
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Transformative Initiatives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Every program is designed to create sustainable impact and lasting change in communities
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} {...program} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}