import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Award, DollarSign, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function QuickAccessSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickLinks = [
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Appointment Letter",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "Internship Verify",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      label: "Donation History",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Book Appointment",
      color: "from-[#FF5722] to-[#FFC107]",
    },
  ];

  return (
    <div className="quick-access-float">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#FF5722] to-[#FFC107] text-white w-10 h-20 rounded-l-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
          aria-label="Toggle quick access"
        >
          {isExpanded ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>

        {/* Sidebar Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-l-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 space-y-3 w-64">
                <div className="mb-4">
                  <h3
                    className="text-lg font-bold text-[#1A237E]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Quick Access
                  </h3>
                  <p className="text-xs text-gray-500">Fast shortcuts for you</p>
                </div>

                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start border-2 border-gray-200 hover:border-[#FF5722] rounded-xl py-6 group transition-all"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                        <span className="text-white">{link.icon}</span>
                      </div>
                      <span
                        className="text-gray-700 group-hover:text-[#FF5722] transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {link.label}
                      </span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
