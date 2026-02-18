import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ShieldCheck, Target, Zap, Award, 
  Clock, TrendingUp, Globe, Users,
  CheckCircle, Star, Heart, Briefcase,
  ArrowRight, Palette, Image, Monitor
} from 'lucide-react';

const teal = '#009688';
const tealDark = '#00695C';
const tealLight = '#80CBC4';

const values = [
  {
    icon: <Palette size={32} style={{ color: teal }} />,
    title: "Creative Excellence",
    highlight: "Design First",
    desc: "Every design we create is unique, thoughtful, and crafted with creative precision to make your brand stand out.",
  },
  {
    icon: <ShieldCheck size={32} style={{ color: teal }} />,
    title: "Quality Commitment",
    highlight: "Zero Compromise",
    desc: "We never compromise on print quality or design standards. Your materials will look professional every single time.",
  },
  {
    icon: <Zap size={32} style={{ color: teal }} />,
    title: "Fast Turnaround",
    highlight: "24hr Delivery",
    desc: "Most designs are delivered within 24 hours. We respect your time and ensure quick yet quality-driven results.",
  },
  {
    icon: <Users size={32} style={{ color: teal }} />,
    title: "Client-Centered",
    highlight: "Your Vision",
    desc: "We listen first. Your vision guides every design decision — we just bring the expertise to make it beautiful.",
  },
  {
    icon: <TrendingUp size={32} style={{ color: teal }} />,
    title: "Business Growth",
    highlight: "ROI Focused",
    desc: "Our designs aren't just pretty — they're built to attract attention, communicate value, and grow your business.",
  },
  {
    icon: <Globe size={32} style={{ color: teal }} />,
    title: "Versatile Expertise",
    highlight: "All Formats",
    desc: "From small visiting cards to large hoardings, digital posts to printed pamphlets — we handle every format.",
  },
];

const milestones = [
  { year: "2018", title: "Studio Founded", desc: "Devbhoomi Creations was established in Dehradun with a vision to provide professional design services to local businesses." },
  { year: "2019", title: "100+ Clients", desc: "Crossed 100 happy clients in Dehradun region, delivering top-quality visiting cards, banners, and pamphlets." },
  { year: "2021", title: "Digital Expansion", desc: "Expanded services to include social media creatives, helping local businesses grow their digital presence." },
  { year: "2023", title: "500+ Projects", desc: "Delivered over 500 design projects with a 100% client satisfaction record and growing referral network." },
  { year: "2024", title: "Full Studio", desc: "Launched a full-service creative studio offering logo design, brand identity, and complete print solutions." },
];

const achievements = [
  { count: "500+", label: "Happy Clients", icon: <Users size={24} style={{ color: teal }} /> },
  { count: "2000+", label: "Designs Done", icon: <Palette size={24} style={{ color: teal }} /> },
  { count: "100%", label: "Satisfaction Rate", icon: <CheckCircle size={24} style={{ color: teal }} /> },
  { count: "24hr", label: "Delivery Time", icon: <Clock size={24} style={{ color: teal }} /> },
  { count: "6+", label: "Years Experience", icon: <Award size={24} style={{ color: teal }} /> },
  { count: "All", label: "Design Formats", icon: <Image size={24} style={{ color: teal }} /> },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.6s ease-out; }
      `}</style>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 hidden lg:block" style={{ background: `linear-gradient(135deg, ${tealDark} 0%, #00897B 50%, ${tealDark} 100%)` }}></div>
        <div className="absolute inset-0 bg-white lg:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 hidden lg:block"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">
          <div className="mb-8 lg:mb-10">
            <h1 className="text-4xl lg:text-5xl font-black mb-2 text-black lg:text-white">
              Devbhoomi Creations
            </h1>
            <span className="text-xl lg:text-2xl font-normal" style={{ color: tealLight }}>
              Professional Graphic Design Studio
            </span>
            <div className="mt-6 lg:mt-8 mb-10 lg:mb-12">
              <span className="font-bold text-xs uppercase tracking-[0.2em] lg:tracking-[0.3em] border-b pb-2 text-black lg:text-white" style={{ borderBottom: `2px solid ${tealLight}` }}>
                Dehradun's Most Trusted Design Partner
              </span>
            </div>
          </div>

          <div className="mb-10">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-4 text-black lg:text-white leading-[0.9]">
              Design That
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 lg:mb-12 leading-[0.9]" style={{ color: tealLight }}>
              Tells Stories.
            </h1>
            <div className="w-32 h-1 mx-auto mb-8 lg:mb-10" style={{ backgroundColor: tealLight }}></div>
            <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-10 lg:mb-12 leading-relaxed text-gray-600 lg:text-gray-200">
              We're a passionate graphic design studio based in Dehradun, creating impactful visuals that help businesses communicate, connect, and grow.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="px-12 py-4 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 group transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'white', color: tealDark }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = tealLight; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'white'; }}
            >
              <Palette size={20} />
              Explore Our Work
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent hidden lg:block"></div>
      </section>

      {/* --- ACHIEVEMENTS --- */}
      <section className="py-16 -mt-1" style={{ background: `linear-gradient(to right, rgba(0,150,136,0.05), rgba(0,150,136,0.1), rgba(0,150,136,0.05))` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((a, i) => (
              <div key={i} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${teal}15` }}>
                    {a.icon}
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-black mb-2 text-black">{a.count}</p>
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5" style={{ backgroundColor: teal }}></div>
              <span className="font-bold text-sm uppercase tracking-[0.3em]" style={{ color: teal }}>Our Story</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black mb-6 lg:mb-8 leading-tight text-black">
              Where Creativity Meets{' '}
              <span style={{ color: teal }}>Purpose</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by Ashish Bisht in Dehradun, Devbhoomi Creations was born from a simple belief: every business, big or small, deserves professional and impactful design.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Over the years, we've helped shops, restaurants, clinics, schools, and startups across Uttarakhand build a visual presence that truly represents their brand — through visiting cards, flex banners, posters, pamphlets, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="text-center p-6 rounded-2xl border" style={{ borderColor: `${teal}33`, backgroundColor: `${teal}08` }}>
                <p className="text-3xl font-black mb-1" style={{ color: teal }}>6+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years in Design</p>
              </div>
              <div className="text-center p-6 rounded-2xl border" style={{ borderColor: `${teal}33`, backgroundColor: `${teal}08` }}>
                <p className="text-3xl font-black mb-1" style={{ color: teal }}>500+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* Designer Card */}
          <div className="relative">
            <div className="p-8 rounded-3xl text-white shadow-2xl" style={{ background: `linear-gradient(135deg, ${tealDark}, #00897B)` }}>
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-4xl" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                🎨
              </div>
              <h3 className="text-2xl font-black mb-1">Ashish Bisht</h3>
              <p className="text-teal-200 text-sm uppercase tracking-widest mb-4">Founder & Lead Designer</p>
              <div className="h-0.5 w-12 mb-4" style={{ backgroundColor: tealLight }}></div>
              <p className="text-teal-100 text-sm leading-relaxed mb-6">
                "I started Devbhoomi Creations to help local businesses compete with bigger brands through powerful design. Every project I take on, I put my heart into making it truly stand out."
              </p>
              <div className="flex flex-wrap gap-2">
                {["Visiting Cards", "Flex Design", "Poster", "Pamphlet", "Hand Card", "Leaflet"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: tealLight }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TIMELINE --- */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-0.5" style={{ backgroundColor: teal }}></div>
            <span className="font-bold text-xs uppercase tracking-[0.4em]" style={{ color: teal }}>Our Journey</span>
            <div className="w-16 h-0.5" style={{ backgroundColor: teal }}></div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black mb-6 text-black">Growing Year By Year</h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style={{ backgroundColor: `${teal}33` }}></div>
          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, i) => (
              <div key={i} className={`relative flex flex-col lg:flex-row gap-6 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${teal}, ${tealDark})` }}>
                        <span className="text-white text-xl lg:text-2xl font-black">{milestone.year}</span>
                      </div>
                      <div className="text-center lg:text-left">
                        <h3 className="text-lg lg:text-xl font-black mb-2 text-black">{milestone.title}</h3>
                        <p className="text-sm lg:text-base text-gray-500">{milestone.desc}</p>
                      </div>
                    </div>
                    <div className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg hidden lg:block" style={{ backgroundColor: teal }}></div>
                  </div>
                </div>
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-16 lg:py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-0.5" style={{ backgroundColor: teal }}></div>
              <span className="font-bold text-xs uppercase tracking-[0.4em]" style={{ color: teal }}>Our Values</span>
              <div className="w-16 h-0.5" style={{ backgroundColor: teal }}></div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-black">What Drives Us</h2>
            <p className="lg:text-lg max-w-3xl mx-auto text-gray-500">
              Six core principles that guide every design we create and every client we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full"
                onMouseEnter={e => e.currentTarget.style.borderColor = teal}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#F3F4F6'}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 lg:mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div>{value.icon}</div>
                    <h3 className="text-lg lg:text-xl font-black lg:hidden text-black">{value.title}</h3>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start" style={{ color: teal, backgroundColor: `${teal}15` }}>
                    {value.highlight}
                  </span>
                </div>
                <h3 className="text-lg lg:text-xl font-black mb-3 lg:mb-4 hidden lg:block text-black">{value.title}</h3>
                <p className="text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 text-gray-500">{value.desc}</p>
                <div className="pt-4 lg:pt-6 border-t border-gray-100">
                  <div className="flex items-center text-xs lg:text-sm text-gray-400">
                    <CheckCircle size={14} className="mr-2 flex-shrink-0" style={{ color: teal }} />
                    <span>In every design we deliver</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-16 lg:py-24 px-6 text-white" style={{ background: `linear-gradient(135deg, ${tealDark}, #00897B)` }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-6xl font-black mb-6 lg:mb-8">
            Ready to Build Your<br />
            <span style={{ color: tealLight }}>Visual Identity</span>?
          </h2>
          <p className="lg:text-xl mb-8 lg:mb-12 max-w-3xl mx-auto text-teal-200">
            Contact us today for a free consultation. Let's create designs that make your business unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <button
              className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 group transition-all duration-300 hover:scale-105 rounded-lg"
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              <Briefcase size={18} />
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <a href="https://wa.me/919720582484" target="_blank" rel="noreferrer"
              className="w-full sm:w-auto px-8 lg:px-10 py-4 lg:py-5 font-bold text-sm uppercase tracking-widest transition-all duration-300 rounded-lg text-center"
              style={{ backgroundColor: 'white', color: tealDark }}>
              💬 WhatsApp Us
            </a>
          </div>

          <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-white/20">
            <p className="text-xs uppercase tracking-widest font-bold mb-6 text-teal-200">Trusted By Businesses In</p>
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 opacity-80">
              {["Shops & Stores", "Restaurants", "Hospitals", "Schools", "Startups"].map((type, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl lg:text-2xl font-black text-white">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;