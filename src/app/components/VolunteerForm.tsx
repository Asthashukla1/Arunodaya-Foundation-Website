import { useState } from 'react';
import { motion } from 'motion/react';
import { UserPlus, Mail, Phone, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

export function VolunteerForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', location: '', interest: '', message: '' });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="volunteer" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#FF5722]/10 to-[#FFC107]/10 rounded-full border border-[#FF5722]/20">
            <span className="text-[#FF5722] font-semibold text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              🤝 Join Our Mission
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Become a Volunteer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Make a difference in your community. Join our team of passionate volunteers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <UserPlus className="w-4 h-4 mr-2 text-[#FF5722]" />
                    Full Name
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2 text-[#FF5722]" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2 text-[#FF5722]" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-[#FF5722]" />
                    Location
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                    placeholder="City, State"
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 mr-2 text-[#FF5722]" />
                    Area of Interest
                  </label>
                  <Select value={formData.interest} onValueChange={(value) => handleChange('interest', value)}>
                    <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722]">
                      <SelectValue placeholder="Select your area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="women-empowerment">Women Empowerment</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="fundraising">Fundraising</SelectItem>
                      <SelectItem value="social-media">Social Media & Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    Why do you want to volunteer?
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your motivation and availability..."
                    className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] text-white rounded-xl py-6 shadow-lg text-lg"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Submit Application
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A237E] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Application Submitted!
                </h3>
                <p className="text-gray-600 text-center">
                  Thank you for your interest. We'll contact you soon!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#FF5722]/5 to-[#FFC107]/5 rounded-2xl p-8 border border-[#FF5722]/20">
              <h3 className="text-2xl font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Why Volunteer With Us?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A237E] mb-1">Skill Development</h4>
                    <p className="text-sm text-gray-600">
                      Gain valuable skills and professional experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🏆</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A237E] mb-1">Certificates & Recognition</h4>
                    <p className="text-sm text-gray-600">
                      Verified certificates and letters of recommendation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🌟</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A237E] mb-1">Make Real Impact</h4>
                    <p className="text-sm text-gray-600">
                      See the direct results of your contributions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A237E] mb-1">Community Network</h4>
                    <p className="text-sm text-gray-600">
                      Connect with like-minded changemakers
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A237E] mb-1">Flexible Timing</h4>
                    <p className="text-sm text-gray-600">
                      Contribute according to your schedule
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwaGVscGluZyUyMGNvbW11bml0eXxlbnwxfHx8fDE3Njg1NDc3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Volunteers helping community"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <p className="text-sm text-gray-600 italic text-center">
                "The best way to find yourself is to lose yourself in the service of others" - Mahatma Gandhi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
