import { Bell } from 'lucide-react';

export function NewsTicker() {
  const news = [
    "🎉 New Educational Center inaugurated in Rural Maharashtra - 150+ students enrolled",
    "🌳 Tree Plantation Drive: 500+ saplings planted across 5 villages",
    "💉 Free Health Camp organized - 200+ families benefited",
    "👩‍🎓 Women Empowerment Workshop completed - 50 women certified in tailoring",
    "📢 Upcoming Fundraising Event on Feb 5, 2026 - Join us to make a difference",
    "🏆 Arunodaya Foundation recognized by NITI Aayog for outstanding community service",
  ];

  return (
    <div className="bg-gradient-to-r from-[#1A237E] to-[#283593] text-white py-2 overflow-hidden border-b-2 border-[#FF5722]">
      <div className="flex items-center">
        <div className="flex items-center space-x-2 px-4 bg-[#FF5722] py-2 flex-shrink-0">
          <Bell className="w-4 h-4 animate-pulse" />
          <span className="font-bold text-sm whitespace-nowrap" style={{ fontFamily: 'var(--font-heading)' }}>
            LIVE UPDATES
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="news-ticker-content whitespace-nowrap py-2 px-4" style={{ fontFamily: 'var(--font-body)' }}>
            {news.map((item, index) => (
              <span key={index} className="inline-block mx-8 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
