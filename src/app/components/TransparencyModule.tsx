import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Shield, Award, FileCheck } from 'lucide-react';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';

export function TransparencyModule() {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);

  const handleSearch = () => {
    // Mock verification - in real app, this would be an API call
    if (searchId.trim()) {
      setSearchResult({
        id: searchId,
        type: searchId.startsWith('V') ? 'Volunteer' : 'Intern',
        name: 'Sample Name',
        status: 'Verified',
        issueDate: 'January 15, 2026',
      });
    }
  };

  return (
    <section id="transparency" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
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
              🔒 Trust & Transparency
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Verification Portal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Verify ID cards, certificates, and our credentials instantly
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Verification Search */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF5722] to-[#FFC107] rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A237E]" style={{ fontFamily: 'var(--font-heading)' }}>
                Verify Credentials
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter ID or Certificate Number
                </label>
                <Input
                  type="text"
                  placeholder="e.g., V2026001 or INT2026001"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="rounded-xl border-2 border-gray-200 focus:border-[#FF5722] transition-colors"
                />
              </div>

              <Button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-[#FF5722] to-[#FFC107] hover:from-[#E64A19] hover:to-[#FFB300] text-white rounded-xl py-6 shadow-lg"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <Search className="w-5 h-5 mr-2" />
                Verify Now
              </Button>
            </div>

            {searchResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span className="text-lg font-bold text-green-700">Verified Successfully</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold text-gray-900">{searchResult.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-semibold text-green-600">{searchResult.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Issue Date:</span>
                    <span className="font-semibold text-gray-900">{searchResult.issueDate}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* NGO Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1A237E] to-[#FF5722] rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A237E]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Our Credentials
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#FF5722]/5 to-[#FFC107]/5 rounded-xl border border-[#FF5722]/20">
                  <FileCheck className="w-6 h-6 text-[#FF5722] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-[#1A237E] mb-1">80G Certification</div>
                    <div className="text-sm text-gray-600">
                      Tax exemption for donors - Valid till 2028
                    </div>
                    <div className="text-xs font-semibold text-[#FF5722] mt-1">
                      Reg. No: AABCA1234F
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#FF5722]/5 to-[#FFC107]/5 rounded-xl border border-[#FF5722]/20">
                  <FileCheck className="w-6 h-6 text-[#FF5722] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-[#1A237E] mb-1">12A Registration</div>
                    <div className="text-sm text-gray-600">
                      Income Tax Exemption Certificate
                    </div>
                    <div className="text-xs font-semibold text-[#FF5722] mt-1">
                      Reg. No: 12A-2015-001
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#FF5722]/5 to-[#FFC107]/5 rounded-xl border border-[#FF5722]/20">
                  <FileCheck className="w-6 h-6 text-[#FF5722] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-[#1A237E] mb-1">NGO Darpan ID</div>
                    <div className="text-sm text-gray-600">
                      NITI Aayog Registered NGO
                    </div>
                    <div className="text-xs font-semibold text-[#FF5722] mt-1">
                      ID: MH/2015/0123456
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#FF5722]/5 to-[#FFC107]/5 rounded-xl border border-[#FF5722]/20">
                  <FileCheck className="w-6 h-6 text-[#FF5722] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-[#1A237E] mb-1">FCRA Registration</div>
                    <div className="text-sm text-gray-600">
                      Foreign Contribution Regulation Act
                    </div>
                    <div className="text-xs font-semibold text-[#FF5722] mt-1">
                      Reg. No: 083781234
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
