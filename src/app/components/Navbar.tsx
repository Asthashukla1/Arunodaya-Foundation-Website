import { useState } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Get Involved', href: '#volunteer' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-[#1A237E]" style={{ fontFamily: 'var(--font-heading)' }}>
                Arunodaya
              </span>
              <span className="text-xs text-gray-600 -mt-1">Foundation</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#FF5722] transition-colors relative group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5722] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              className="bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Donate Now
            </Button>
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full shadow-sm">
                <SelectValue>
                  {language === 'en' ? 'English' : 'हिंदी'}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#FF5722] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#FF5722] transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] text-white rounded-full shadow-lg"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}