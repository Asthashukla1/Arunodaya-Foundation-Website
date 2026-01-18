import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Shield, Award } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-[#1A237E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certification & Partner Logos Section */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <h3 className="text-center text-xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Trusted & Certified
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all w-full text-center">
              <Shield className="w-12 h-12 mx-auto mb-3 text-[#FFC107]" />
              <div className="text-sm font-semibold">80G Certified</div>
              <div className="text-xs text-gray-400 mt-1">Tax Exemption</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all w-full text-center">
              <Award className="w-12 h-12 mx-auto mb-3 text-[#FFC107]" />
              <div className="text-sm font-semibold">12A Registered</div>
              <div className="text-xs text-gray-400 mt-1">Income Tax</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all w-full text-center">
              <Shield className="w-12 h-12 mx-auto mb-3 text-[#FFC107]" />
              <div className="text-sm font-semibold">NGO Darpan</div>
              <div className="text-xs text-gray-400 mt-1">NITI Aayog</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all w-full text-center">
              <Award className="w-12 h-12 mx-auto mb-3 text-[#FFC107]" />
              <div className="text-sm font-semibold">FCRA Approved</div>
              <div className="text-xs text-gray-400 mt-1">Foreign Aid</div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  Arunodaya
                </div>
                <div className="text-xs text-gray-300 -mt-1">Foundation</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Empowering communities through education, healthcare, and sustainable development since 2015.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#FF5722] hover:to-[#FFC107] rounded-lg flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#FF5722] hover:to-[#FFC107] rounded-lg flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#FF5722] hover:to-[#FFC107] rounded-lg flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#FF5722] hover:to-[#FFC107] rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-[#FF5722] hover:to-[#FFC107] rounded-lg flex items-center justify-center transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm">
                  Impact Stories
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#FFC107] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for updates on our programs and impact stories.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[#FFC107]"
              />
              <Button className="w-full bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] rounded-xl">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#FFC107]" />
              </div>
              <div>
                <div className="text-gray-400 text-xs">Email</div>
                <a href="mailto:info@arunodaya.org" className="text-white hover:text-[#FFC107] transition-colors">
                  info@arunodaya.org
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#FFC107]" />
              </div>
              <div>
                <div className="text-gray-400 text-xs">Phone</div>
                <a href="tel:+919876543210" className="text-white hover:text-[#FFC107] transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#FFC107]" />
              </div>
              <div>
                <div className="text-gray-400 text-xs">Address</div>
                <div className="text-white">
                  123 NGO Complex, Mumbai
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2026 Arunodaya Foundation. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}