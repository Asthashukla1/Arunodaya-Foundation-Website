import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
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
              💬 Get in Touch
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Email Us
              </h3>
              <p className="text-gray-600 mb-3">Our team is here to help</p>
              <a href="mailto:info@arunodaya.org" className="text-[#FF5722] hover:underline font-semibold">
                info@arunodaya.org
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Call Us
              </h3>
              <p className="text-gray-600 mb-3">Mon-Sat, 9AM to 6PM IST</p>
              <a href="tel:+919876543210" className="text-[#FF5722] hover:underline font-semibold">
                +91 98765 43210
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Visit Us
              </h3>
              <p className="text-gray-600 mb-3">Come say hello at our office</p>
              <address className="text-[#1A237E] not-italic">
                123 NGO Complex,<br />
                Mumbai, Maharashtra 400001
              </address>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Email
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="How can we help you?"
                      className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] text-white rounded-xl py-6 shadow-lg text-lg"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
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
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-center">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
