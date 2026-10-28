import React from 'react';
import { useCars } from '../../context/CarContext';
import { 
  ShieldCheck, 
  Flag, 
  Plane, 
  Sparkles, 
  KeyRound, 
  Headphones,
  ArrowRight
} from 'lucide-react';

export default function ExperienceSection() {
  const { openTestDrive } = useCars();

  const services = [
    {
      icon: Flag,
      title: 'Buddh International Circuit (BIC) Track Days',
      desc: 'Experience your high-performance vehicle on India\'s premier Formula 1 Grand Prix circuit in Greater Noida with certified Indian motorsport coaches.'
    },
    {
      icon: Sparkles,
      title: 'Priority Factory Allotments',
      desc: 'Guaranteed priority build slots directly with Tata OMEGARC Pune, Mahindra Research Valley (MRV) Chennai, and Force Motors specialized ateliers.'
    },
    {
      icon: Plane,
      title: 'Pan-India Covered Flatbed Transit',
      desc: 'GPS satellite-tracked, insured hydraulic covered flatbed delivery direct to your residence in Mumbai, Delhi NCR, Bengaluru, Hyderabad, and across all states.'
    },
    {
      icon: ShieldCheck,
      title: 'Bharat NCAP & 150-Point Audit',
      desc: 'Every vehicle undergoes rigorous mechanical verification, structural laser alignment, and verified ARAI range & emission compliance.'
    },
    {
      icon: KeyRound,
      title: 'BH Series & Corporate Fleet Leasing',
      desc: 'Seamless Bharat Series (BH series) RTO registration and structured corporate tax-efficient leasing through HDFC and ICICI Wealth Banking.'
    },
    {
      icon: Headphones,
      title: '24/7 Indian Concierge & Rally Support',
      desc: 'Personal automotive liaison assisting with Spiti and Leh-Ladakh expedition permits, VIP FASTag highway coordination, and maintenance scheduling.'
    }
  ];

  return (
    <section className="py-20 relative bg-dark-950 border-t border-white/5">
      <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Apex Privilege</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            Beyond Acquisition: An Unrivaled <br />
            <span className="text-gold-gradient">Ownership Experience</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Acquiring a high-performance exotic from Apex Motors grants access to an exclusive circle of motorsport privileges, factory build salons, and concierge transport.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-glass-card border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-card-dark"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-dark-950 transition-colors shadow-glow-gold/30">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-black text-lg text-white group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => openTestDrive()}
                    className="text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
