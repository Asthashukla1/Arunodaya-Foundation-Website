import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

export function FloatingContactButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactOptions = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call Us',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: 'tel:+919876543210',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
      action: 'https://wa.me/919876543210',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email Us',
      color: 'bg-gray-700 hover:bg-gray-800',
      action: 'mailto:contact@arunodaya.org',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-3 md:mb-4 space-y-2 md:space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.action}
                target={option.action.startsWith('http') ? '_blank' : undefined}
                rel={option.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 ${option.color} text-white rounded-full shadow-xl hover:shadow-2xl transition-all group ml-auto`}
                title={option.label}
              >
                <span className="group-hover:scale-110 transition-transform">
                  {option.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#FF5722] to-[#FFC107] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact options"
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
              {/* Ping Animation */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}