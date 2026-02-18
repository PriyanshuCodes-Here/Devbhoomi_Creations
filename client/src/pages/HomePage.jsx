import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight, CheckCircle2, Star,
  Users, Clock, Zap, ShieldCheck,
  BarChart, Target, Headphones,
  Image, FileText, Layout, CreditCard,
  Monitor, Megaphone
} from 'lucide-react';

const teal = '#009688';
const tealDark = '#00695C';
const tealLight = '#80CBC4';
const tealBg = '#E0F2F1';

const services = [
  {
    title: "Visiting Card Design",
    icon: <CreditCard size={24} />,
    desc: "Make a strong first impression with professionally designed visiting cards. From minimal to premium finishes, we craft cards that represent your brand identity.",
    features: ["Custom Layout Design", "Double-Sided Cards", "Premium Finish Options", "Multiple Revisions"]
  },
  {
    title: "Flex Banner & Hoarding",
    icon: <Layout size={24} />,
    desc: "Eye-catching flex banners and hoardings for shops, events, and promotions. High-resolution prints with bold typography and stunning visuals.",
    features: ["Large Format Printing", "Weather-Resistant Design", "Custom Dimensions", "Event & Shop Banners"]
  },
  {
    title: "Poster & Pamphlet Design",
    icon: <FileText size={24} />,
    desc: "Compelling posters and pamphlets that communicate your message clearly. Perfect for promotions, events, product launches, and local advertising.",
    features: ["A4 / A5 / Custom Size", "Bilingual Design", "Promotional Offers Layout", "Digital & Print Ready"]
  },
  {
    title: "Social Media Creatives",
    icon: <Megaphone size={24} />,
    desc: "Scroll-stopping social media posts, stories, and reels thumbnails designed to boost engagement on Instagram, Facebook, and other platforms.",
    features: ["Instagram Posts & Stories", "Facebook Cover & Ads", "YouTube Thumbnails", "Brand Consistency"]
  },
  {
    title: "Logo Design",
    icon: <Image size={24} />,
    desc: "Professional logo design that defines your brand identity. We create memorable logos that stand out and leave a lasting impression on your audience.",
    features: ["Unique Concept Design", "Multiple Formats (PNG, SVG)", "Brand Color Palette", "Unlimited Revisions"]
  },
  {
    title: "Digital Creatives & Ads",
    icon: <Monitor size={24} />,
    desc: "From Google display ads to WhatsApp promotional creatives — we design all kinds of digital marketing materials to help grow your business online.",
    features: ["Google Ads Banners", "WhatsApp Creatives", "Email Newsletter Design", "Landing Page Graphics"]
  },
];

const clientTypes = [
  { name: "Shops & Retail Stores", count: "120+", icon: "🛍️" },
  { name: "Restaurants & Cafes", count: "60+", icon: "🍽️" },
  { name: "Hospitals & Clinics", count: "45+", icon: "🏥" },
  { name: "Event Planners", count: "80+", icon: "🎉" },
  { name: "Schools & Institutes", count: "55+", icon: "🏫" },
  { name: "Startups & Brands", count: "100+", icon: "🚀" },
];

const process = [
  { step: "01", title: "Brief & Discovery", desc: "Share your requirements, brand details, and what you want to convey.", icon: <Target size={20} /> },
  { step: "02", title: "Design Concept", desc: "Our designer creates initial concepts based on your brief within 24 hours.", icon: <BarChart size={20} /> },
  { step: "03", title: "Review & Revise", desc: "You review the design and we revise until you're fully satisfied.", icon: <CheckCircle2 size={20} /> },
  { step: "04", title: "Final Delivery", desc: "Receive print-ready and digital files in all required formats.", icon: <Headphones size={20} /> },
];

const metrics = [
  { value: "500+", label: "Happy Clients", icon: <Users size={20} /> },
  { value: "2000+", label: "Designs Delivered", icon: <Image size={20} /> },
  { value: "100%", label: "Client Satisfaction", icon: <ShieldCheck size={20} /> },
  { value: "24hr", label: "Turnaround Time", icon: <Clock size={20} /> },
];

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" style={{ background: `linear-gradient(135deg, #E0F2F1 0%, #ffffff 60%, #f5f5f5 100%)` }}>
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, rgba(0,150,136,0.06), transparent)` }} />
        {/* Decorative circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${teal}, transparent)` }} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6" style={{ backgroundColor: `${teal}18`, color: teal, border: `1px solid ${teal}33` }}>
              <Star size={12} fill="currentColor" /> Professional Graphic Design Studio
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-black">
              Designs That{' '}
              <span className="italic" style={{ color: teal }}>Speak</span>{' '}
              For Your{' '}
              <span className="italic" style={{ color: teal }}>Brand.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-lg mb-8 leading-relaxed font-medium">
              Devbhoomi Creations crafts stunning visiting cards, flex banners, posters, pamphlets, and social media creatives that help your business stand out and attract more customers.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {["Visiting Cards & Pamphlets", "Flex Banners & Posters", "Social Media Creatives", "Logo & Brand Design"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: teal }} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 group shadow-2xl transition-all duration-300 hover:shadow-none"
                style={{ backgroundColor: tealDark }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = teal}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = tealDark}
              >
                Get a Free Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="px-8 py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                style={{ border: `2px solid ${tealDark}`, color: tealDark, backgroundColor: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = tealDark; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = tealDark; }}
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Hero Card */}
          <div className="hidden lg:block">
            <div className="relative p-8 rounded-3xl shadow-2xl border" style={{ backgroundColor: tealDark, borderColor: '#26A69A' }}>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: tealLight }} />
              <div className="text-teal-200 font-bold text-xs uppercase tracking-[0.4em] mb-4">Ashish Bisht</div>
              <div className="text-white text-3xl font-black mb-2">Graphic Designer</div>
              <div className="h-0.5 w-16 mb-6" style={{ backgroundColor: tealLight }} />
              <p className="text-teal-200 font-bold uppercase text-[10px] tracking-[0.3em] mb-6">
                Visiting Card • Flex Design • Poster • Pamphlet
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <p className="text-2xl font-black text-white">2000+</p>
                  <p className="text-xs text-teal-200">Designs Made</p>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <p className="text-2xl font-black text-white">24hr</p>
                  <p className="text-xs text-teal-200">Fast Delivery</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs text-teal-300">📍 173, Lakhibagh, Dehradun, Uttarakhand</p>
                <p className="text-xs text-teal-300 mt-1">📞 9720582484 / 8218755922</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- METRICS STRIP --- */}
      <section className="py-16 px-6 text-white" style={{ backgroundColor: tealDark }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    {metric.icon}
                  </div>
                </div>
                <p className="text-4xl md:text-5xl font-black mb-2">{metric.value}</p>
                <p className="text-teal-200 text-sm uppercase tracking-widest">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 md:py-32 px-6" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-black text-xs uppercase tracking-[0.5em] mb-4" style={{ color: teal }}>What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black mb-6">Creative Design Services</h3>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto font-medium">
              From print to digital — we design everything your business needs to look professional and attract more customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white p-8 border border-gray-100 transition-all duration-500 group shadow-sm hover:shadow-2xl rounded-2xl"
                style={{ '--hover-border': teal }}
                onMouseEnter={e => e.currentTarget.style.borderColor = teal}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#F3F4F6'}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6 rounded-xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${teal}15`, color: teal }}
                >
                  {s.icon}
                </div>
                <h4 className="text-xl font-black text-black mb-4 uppercase tracking-tighter">{s.title}</h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed mb-6">{s.desc}</p>
                <div className="space-y-2">
                  {s.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} style={{ color: teal }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 text-black font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-colors"
                  style={{ color: 'black' }}
                  onMouseEnter={e => e.currentTarget.style.color = teal}
                  onMouseLeave={e => e.currentTarget.style.color = 'black'}>
                  Enquire Now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-black text-xs uppercase tracking-[0.5em] mb-4" style={{ color: teal }}>How It Works</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black mb-6">Simple 4-Step Process</h3>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto font-medium">
              From brief to final file — our design process is fast, collaborative, and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-b from-gray-50 to-white p-8 border border-gray-100 rounded-2xl h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black" style={{ color: `${teal}22` }}>{step.step}</span>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: `${teal}15`, color: teal }}>
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-black mb-4">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLIENT TYPES --- */}
      <section className="py-24 md:py-32 px-6" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-black text-xs uppercase tracking-[0.5em] mb-4" style={{ color: teal }}>Who We Design For</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black mb-6">Trusted By All Industries</h3>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto font-medium">
              We've helped hundreds of businesses across Dehradun and Uttarakhand build a strong visual identity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTypes.map((client, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-100 group transition-all duration-300 hover:shadow-lg cursor-default"
                onMouseEnter={e => e.currentTarget.style.borderColor = teal}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#F3F4F6'}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{client.icon}</span>
                  <span className="text-2xl font-black text-black">{client.count}</span>
                </div>
                <h4 className="text-lg font-black text-black mb-2">{client.name}</h4>
                <p className="text-gray-400 text-sm">
                  Custom design solutions tailored to their branding and communication needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-20 px-6 text-white" style={{ background: `linear-gradient(135deg, ${tealDark}, #00897B)` }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Elevate Your{' '}
            <span style={{ color: tealLight }}>Brand's</span>{' '}
            Visual Identity?
          </h2>
          <p className="text-teal-200 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today and get a free design consultation. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-10 py-4 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 group transition-all duration-300 rounded-lg"
              style={{ backgroundColor: 'white', color: tealDark }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = tealLight; e.currentTarget.style.color = tealDark; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = tealDark; }}
            >
              Get Free Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="https://wa.me/919720582484" target="_blank" rel="noreferrer"
              className="px-10 py-4 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 rounded-lg border-2 border-white/40 text-white hover:bg-white/10">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;