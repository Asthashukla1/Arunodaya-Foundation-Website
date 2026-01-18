import { motion } from 'motion/react';
import { Target, Eye, Heart, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white pattern-mandala">
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
              🌟 About Us
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Arunodaya Foundation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Arunodaya, meaning "The Rising Sun," symbolizes hope, new beginnings, and the dawn of positive change. 
            Since 2015, we've been dedicated to empowering communities across India through sustainable development programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#FF5722]/20 hover:border-[#FF5722] transition-all"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-[#1A237E]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              To create sustainable impact in underserved communities through education, healthcare, livelihood programs, 
              and environmental conservation. We believe in empowering individuals to become agents of change in their own communities.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#FF5722]/20 hover:border-[#FF5722] transition-all"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1A237E] to-[#FF5722] rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl font-bold text-[#1A237E]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              A world where every individual, regardless of their background, has access to quality education, 
              healthcare, and opportunities for growth. We envision thriving communities built on principles of 
              equality, sustainability, and compassion.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-[#1A237E] text-center mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Heart className="w-6 h-6 text-white fill-white" />, title: 'Compassion', description: 'We lead with empathy and care' },
              { icon: <Award className="w-6 h-6 text-white" />, title: 'Excellence', description: 'Quality in everything we do' },
              { icon: <Target className="w-6 h-6 text-white" />, title: 'Integrity', description: 'Transparency and accountability' },
              { icon: <Eye className="w-6 h-6 text-white" />, title: 'Innovation', description: 'Creative solutions for impact' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#FF5722]/5 to-[#FFC107]/5 rounded-2xl p-6 text-center border-2 border-[#FF5722]/10 hover:border-[#FF5722]/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4
                  className="text-lg font-bold text-[#1A237E] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
