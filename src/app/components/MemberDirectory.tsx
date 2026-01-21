import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';

export function MemberDirectory() {
  const managementBody = [
    {
      name: "Vivek Mishra",
      designation: "Founder & President",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "vivek@arunodaya.org",
    },
    {
      name: "Ashish Rathore",
      designation: "Vice President",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "ashish@arunodaya.org",
    },
    {
      name: "Prashant Chaubey",
      designation: "General Secretary",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "prashant@arunodaya.org",
    },
    {
      name: "Ankur Singh",
      designation: "Treasurer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      linkedin: "#",
      email: "ankur@arunodaya.org",
    },
  ];

  const generalMembers = [
    "Dr. Anil Verma - Education Coordinator",
    "Meera Nair - Healthcare Program Head",
    "Vikram Singh - Rural Development Officer",
    "Kavita Reddy - Women Empowerment Lead",
    "Suresh Joshi - Environmental Projects Manager",
    "Ananya Gupta - Volunteer Coordinator",
    "Ramesh Iyer - Fundraising Director",
    "Pooja Menon - Communications Manager",
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 pattern-grid">
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
              👥 Our Team
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A237E] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Management Body
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Meet the dedicated leaders driving our mission forward
          </p>
        </motion.div>

        {/* Management Body Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {managementBody.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group border-2 border-transparent hover:border-[#FF5722]"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-[#FF5722]/20 group-hover:ring-[#FF5722] transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF5722] to-[#FFC107] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  {member.designation}
                </div>
              </div>
              
              <h3
                className="text-xl font-bold text-[#1A237E] text-center mb-4 mt-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {member.name}
              </h3>
              
              <div className="flex justify-center space-x-3">
                <a
                  href={member.linkedin}
                  className="w-10 h-10 bg-gray-100 hover:bg-[#FF5722] rounded-full flex items-center justify-center transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-gray-100 hover:bg-[#FF5722] rounded-full flex items-center justify-center transition-all group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Members List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3
            className="text-2xl font-bold text-[#1A237E] mb-6 pb-4 border-b-2 border-[#FF5722]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            General Members
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generalMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#FF5722]/5 hover:to-[#FFC107]/5 transition-all"
              >
                <div className="w-2 h-2 bg-[#FF5722] rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  {member}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
