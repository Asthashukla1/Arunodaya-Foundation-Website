import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#FF5722]/10 to-[#FFC107]/10 rounded-full border border-[#FF5722]/20">
              <span className="text-[#FF5722] font-semibold text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                ✨ Creating Impact Since 2015
              </span>
            </div>
            
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A237E] mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Empowering Lives,{' '}
              <span className="bg-gradient-to-r from-[#FF5722] to-[#FFC107] bg-clip-text text-transparent">
                Building Futures
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Join us in our mission to transform communities through education, healthcare, and sustainable development. Together, we create lasting change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all group"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 rounded-full border-2 border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E] hover:text-white transition-all group"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Play className="mr-2 w-5 h-5 fill-current" />
                Watch Video
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#FF5722]" style={{ fontFamily: 'var(--font-heading)' }}>
                  10K+
                </div>
                <div className="text-sm text-gray-600 mt-1">Lives Touched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF5722]" style={{ fontFamily: 'var(--font-heading)' }}>
                  50+
                </div>
                <div className="text-sm text-gray-600 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF5722]" style={{ fontFamily: 'var(--font-heading)' }}>
                  25+
                </div>
                <div className="text-sm text-gray-600 mt-1">Partners</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF5722]/20 to-[#FFC107]/20 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1764072970350-2ce4f354a483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMHZvbHVudGVlcmluZ3xlbnwxfHx8fDE3Njg2NDU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Children learning and volunteers helping"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">🌟</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#1A237E]" style={{ fontFamily: 'var(--font-heading)' }}>
                      4.9/5
                    </div>
                    <div className="text-sm text-gray-600">Trust Score</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
