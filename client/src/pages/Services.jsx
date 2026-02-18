import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CheckCircle, ArrowRight,
  Users, Clock, Award, Target, Palette, Zap,
  CreditCard, Layout, FileText, Megaphone, Image, Monitor
} from 'lucide-react';

const teal = '#009688';
const tealDark = '#00695C';
const tealLight = '#80CBC4';

const services = [
  {
    sticker: "🪪",
    title: "Visiting Card Design",
    description: "Make a lasting first impression with beautifully crafted visiting cards that reflect your brand identity.",
    stat: "Most Popular",
    items: ["Custom Layout & Typography", "Double-Sided Design", "Premium Finish Options", "Print-Ready Files Included"]
  },
  {
    sticker: "🖼️",
    title: "Flex Banner & Hoarding",
    description: "Eye-catching large-format designs for shops, hoardings, and outdoor advertising that demand attention.",
    stat: "Best Seller",
    items: ["Custom Size & Dimensions", "High-Resolution Artwork", "Weather-Resistant Design", "Shop & Event Banners"]
  },
  {
    sticker: "📄",
    title: "Poster & Pamphlet",
    description: "Compelling promotional posters and pamphlets for your offers, events, and business communication.",
    stat: "Popular",
    items: ["A4 / A5 / Custom Size", "Bilingual Design", "Promotional Layout", "Digital & Print Ready"]
  },
  {
    sticker: "📱",
    title: "Social Media Creatives",
    description: "Scroll-stopping posts, stories, and ad creatives designed to boost engagement and grow your audience.",
    stat: "Trending",
    items: ["Instagram & Facebook Posts", "WhatsApp Creatives", "YouTube Thumbnails", "Consistent Brand Style"]
  },
  {
    sticker: "🎨",
    title: "Logo Design",
    description: "A professional logo that captures the essence of your brand and leaves a lasting impression.",
    stat: "Premium",
    items: ["Unique Custom Concepts", "All Formats (PNG, SVG, PDF)", "Brand Color Palette", "Unlimited Revisions"]
  },
  {
    sticker: "💻",
    title: "Digital Marketing Creatives",
    description: "Complete digital ad materials for Google, email, and online campaigns that drive results.",
    stat: "New",
    items: ["Google Display Banners", "Email Newsletter Design", "Landing Page Graphics", "Ad Campaign Assets"]
  },
];

const metrics = [
  { value: '500+', label: 'Happy Clients', icon: Users },
  { value: '2000+', label: 'Designs Done', icon: Palette },
  { value: '100%', label: 'Satisfaction', icon: Award },
  { value: '24hr', label: 'Delivery Time', icon: Clock }
];

const methodology = {
  title: 'OUR PROCESS',
  heading: 'How We Deliver Design Excellence',
  description: 'A clear, collaborative 4-step process that ensures you receive stunning designs on time — every time.',
  steps: [
    { number: '01', title: 'Brief & Requirement', desc: 'Share your design needs, brand details, and references.', icon: Target },
    { number: '02', title: 'Design Creation', desc: 'We create initial concept(s) within 24 hours based on your brief.', icon: Palette },
    { number: '03', title: 'Review & Revise', desc: 'You review the design and request unlimited revisions till satisfied.', icon: Zap },
    { number: '04', title: 'Final Delivery', desc: 'Receive print-ready and digital files in all required formats.', icon: Clock }
  ]
};

const Services = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6" style={{ backgroundColor: '#F9FAFB', borderBottom: '1px solid #f0f0f0' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-4 mb-10">
              <span className="h-[1px] w-12" style={{ backgroundColor: teal }}></span>
              <span className="font-bold text-xs uppercase tracking-[0.5em]" style={{ color: teal }}>
                DESIGN SERVICES
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-black leading-[0.9] tracking-tighter mb-12">
              Creative <br />
              <span className="text-transparent bg-clip-text italic" style={{ backgroundImage: `linear-gradient(to right, ${teal}, ${tealDark})` }}>
                by Design.
              </span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <p className="text-xl text-gray-500 max-w-xl font-light leading-relaxed">
                Professional graphic design for Dehradun's businesses — visiting cards, banners, posters, pamphlets, and social media creatives crafted with precision.
              </p>
              <button
                className="px-10 py-5 text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-xl"
                style={{ backgroundColor: tealDark }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = teal}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = tealDark}
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {metrics.map((stat, i) => {
              const MetricIcon = stat.icon;
              return (
                <div key={i} className="py-16 px-8 flex flex-col items-center text-center border-r border-gray-100 last:border-r-0">
                  <div className="mb-5 p-3 bg-gray-50 rounded-full" style={{ color: teal }}>
                    <MetricIcon className="w-4 h-4" />
                  </div>
                  <span className="text-4xl font-bold text-black mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-12">
            <div>
              <h2 className="font-bold text-xs uppercase tracking-[0.4em] mb-4" style={{ color: teal }}>
                SERVICES
              </h2>
              <h3 className="text-5xl font-bold text-black tracking-tighter">
                What We Create
              </h3>
            </div>
            <p className="text-gray-400 max-w-xs text-xs font-bold uppercase tracking-widest mt-6 md:mt-0">
              Every format your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-12 transition-all duration-500 group border border-gray-100"
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0,150,136,0.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <span className="text-4xl">{service.sticker}</span>
                  </div>
                  {service.stat && (
                    <span className="text-[10px] font-bold text-gray-400 group-hover:text-teal-600 uppercase tracking-widest border border-gray-100 px-3 py-1 transition-colors"
                      style={{ '--hover-color': teal }}>
                      {service.stat}
                    </span>
                  )}
                </div>

                <h4 className="text-2xl font-bold text-black mb-5 tracking-tight">{service.title}</h4>

                <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium italic">
                  "{service.description}"
                </p>

                <ul className="space-y-4 mb-12">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: teal }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-black group-hover:gap-5 transition-all">
                  Enquire Now <ArrowRight className="w-4 h-4" style={{ color: teal }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-bold text-xs uppercase tracking-[0.4em] mb-4" style={{ color: teal }}>
              {methodology.title}
            </h2>
            <h3 className="text-5xl font-bold text-black tracking-tighter mb-8">
              {methodology.heading}
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              {methodology.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {methodology.steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={i} className="text-center">
                  <div className="text-6xl font-bold mb-6" style={{ color: `${teal}20` }}>{step.number}</div>
                  <div className="mb-5 p-3 bg-gray-50 rounded-full inline-flex" style={{ color: teal }}>
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-white" style={{ background: `linear-gradient(135deg, ${tealDark}, #00897B)` }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-teal-200 text-lg mb-10">Contact us today and get a free consultation for your design project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 font-bold text-sm uppercase tracking-widest rounded-lg text-teal-900 transition-all hover:scale-105" style={{ backgroundColor: 'white' }}>
              Request a Quote
            </button>
            <a href="https://wa.me/919720582484" target="_blank" rel="noreferrer"
              className="px-10 py-4 font-bold text-sm uppercase tracking-widest rounded-lg border-2 border-white/40 text-white hover:bg-white/10 transition-all text-center">
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;