import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Mail, Phone, MapPin, Send, ShieldCheck,
  CheckCircle, ChevronDown, ChevronRight,
  Shield, Zap, Globe, Award, Star, AlertCircle, Loader2, Palette
} from 'lucide-react';

const teal = '#009688';
const tealDark = '#00695C';
const tealLight = '#80CBC4';

// --- CUSTOM SELECT COMPONENT ---
const CustomSelect = ({ label, options, value, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative space-y-2" ref={dropdownRef}>
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 bg-white border-2 transition-all duration-300 rounded-2xl ${
          isOpen ? 'ring-4' : error ? 'border-red-500' : 'border-gray-100 hover:border-gray-300'
        }`}
        style={isOpen ? { borderColor: teal, '--tw-ring-color': `${teal}20` } : {}}
      >
        <span className={`font-medium ${value ? 'text-black' : 'text-gray-400'}`}>
          {value || 'Select a design service'}
        </span>
        <ChevronDown className="w-5 h-5 transition-transform duration-500" style={{ color: teal, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden py-2 max-h-64 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setIsOpen(false); }}
              className="w-full text-left px-6 py-4 text-sm font-bold transition-colors flex items-center justify-between group"
              style={{ ':hover': { backgroundColor: `${teal}08`, color: teal } }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = `${teal}08`; e.currentTarget.style.color = teal; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'black'; }}
            >
              {opt}
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// --- INPUT COMPONENT ---
const EliteInput = ({ label, error, ...props }) => (
  <div className="space-y-2 group">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">{label}</label>
    <input
      {...props}
      className={`w-full p-5 bg-white border-2 rounded-2xl focus:outline-none transition-all duration-300 font-medium placeholder:text-gray-300 ${
        error ? 'border-red-500' : 'border-gray-100'
      }`}
      style={{ '--focus-border': teal }}
      onFocus={e => { e.currentTarget.style.borderColor = teal; e.currentTarget.style.boxShadow = `0 0 0 4px ${teal}10`; }}
      onBlur={e => { e.currentTarget.style.borderColor = '#F3F4F6'; e.currentTarget.style.boxShadow = 'none'; }}
    />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', customService: '', message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'Visiting Card Design', 'Flex Banner / Hoarding', 'Poster Design',
    'Pamphlet / Leaflet', 'Social Media Creatives', 'Logo Design',
    'Digital Ad Creatives', 'Hand Card / Invitation', 'Other'
  ];

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) { setError('Please enter your name'); return false; }
    if (!formData.email.trim()) { setError('Please enter your email'); return false; }
    if (!/\S+@\S+\.\S+/.test(formData.email)) { setError('Please enter a valid email'); return false; }
    if (!formData.phone.trim()) { setError('Please enter your phone number'); return false; }
    if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) { setError('Please enter a valid 10-digit phone number'); return false; }
    if (!formData.service) { setError('Please select a service'); return false; }
    if (!formData.message.trim() || formData.message.trim().length < 10) { setError('Please describe your requirement (min. 10 chars)'); return false; }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setError('');
    // Simulate API call — replace with your real API
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', customService: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen text-gray-900" style={{ backgroundColor: '#FDFDFD' }}>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden" style={{ backgroundColor: tealDark }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')` }} />
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10" style={{ backgroundColor: tealLight }} />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 text-teal-200 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
            <Palette className="w-3 h-3" /> Get In Touch
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-white leading-[0.9] tracking-tighter mb-8">
            Let's Create<br />
            <span className="italic" style={{ color: tealLight }}>Together.</span>
          </h1>

          <p className="text-teal-200 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Tell us about your design project and we'll get back to you within hours with a free consultation and quote.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-0 px-6 -mt-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl rounded-3xl overflow-hidden border border-gray-100">

            {/* LEFT INFO PANEL */}
            <div className="lg:col-span-4 p-8 md:p-12 lg:p-16 text-white" style={{ backgroundColor: tealDark }}>
              <h2 className="text-3xl font-black mb-4">Design Studio</h2>
              <p className="text-teal-200 text-sm mb-12 leading-relaxed">
                Reach out for visiting cards, banners, posters, social media creatives, or any other design need.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <Phone className="w-5 h-5" style={{ color: tealLight }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-teal-300 mb-1">WhatsApp / Call</p>
                    <p className="text-lg font-bold text-white">9720582484</p>
                    <p className="text-sm text-teal-200">8218755922</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <Mail className="w-5 h-5" style={{ color: tealLight }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-teal-300 mb-1">Email</p>
                    <p className="text-sm font-bold text-white">ashishbsht402@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <MapPin className="w-5 h-5" style={{ color: tealLight }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-teal-300 mb-1">Address</p>
                    <p className="text-sm font-bold text-white">173, Lakhibagh, Dehradun</p>
                    <p className="text-sm text-teal-200">Uttarakhand – 248001</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] uppercase tracking-widest font-bold text-teal-300 mb-4">We Design</p>
                <div className="flex flex-wrap gap-2">
                  {["Visiting Card", "Flex Banner", "Poster", "Pamphlet", "Social Media", "Logo"].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: tealLight }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {['🙂', '😊', '👨‍💼'].map((e, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-teal-800 flex items-center justify-center text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                      {e}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-teal-300 font-medium">Trusted by <span className="text-white font-black uppercase ml-1">500+ Clients</span></p>
              </div>
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="lg:col-span-8 p-8 md:p-16 lg:p-24 bg-white">
              {!success ? (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-4 mb-12">
                    <h3 className="text-4xl font-black tracking-tight">Request a Design Quote</h3>
                    <p className="text-gray-500 font-medium">Tell us about your project and we'll provide a free estimate.</p>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm font-bold">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <EliteInput label="Your Name" name="name" placeholder="Ashish Bisht" value={formData.name} onChange={handleChange} required />
                    <EliteInput label="Email Address" name="email" type="email" placeholder="you@gmail.com" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <EliteInput label="Phone / WhatsApp" name="phone" placeholder="9876543210" value={formData.phone} onChange={handleChange} required />
                    <CustomSelect label="Design Service Needed" options={services} value={formData.service} onChange={(val) => setFormData({ ...formData, service: val })} />
                  </div>

                  {formData.service === "Other" && (
                    <EliteInput label="Please Specify Your Requirement" name="customService" placeholder="Describe your design need..." value={formData.customService} onChange={handleChange} />
                  )}

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Project Details</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us about your design project — size, quantity, style, deadline, etc."
                      className="w-full p-6 bg-gray-50 rounded-[2rem] border-2 border-transparent focus:outline-none transition-all font-medium resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={e => { e.currentTarget.style.borderColor = teal; e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.boxShadow = `0 0 0 4px ${teal}10`; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.backgroundColor = '#F9FAFB'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                    <div className="flex items-center gap-3 text-gray-400">
                      <ShieldCheck className="w-5 h-5 text-green-500" />
                      <span className="text-xs font-bold uppercase tracking-widest">Your info is safe with us</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full md:w-auto px-12 py-6 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50"
                      style={{ backgroundColor: tealDark }}
                      onMouseEnter={e => { if (!loading) e.currentTarget.style.backgroundColor = teal; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = tealDark; }}
                    >
                      {loading ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="w-4 h-4" /> Send Request</>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center mb-10 ring-8" style={{ backgroundColor: `${teal}15`, ringColor: `${teal}15` }}>
                    <CheckCircle className="w-16 h-16" style={{ color: teal }} />
                  </div>
                  <h2 className="text-5xl font-black mb-6 tracking-tighter">Request Sent!</h2>
                  <p className="text-gray-500 max-w-sm mx-auto font-medium text-lg">
                    We'll review your project details and get back to you within a few hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-12 font-black uppercase tracking-widest text-[10px] border-b-2 pb-1 transition-colors"
                    style={{ color: teal, borderColor: teal }}
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-24 px-6 border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: Shield, val: "100%", label: "Quality Assured" },
              { icon: Award, val: "500+", label: "Happy Clients" },
              { icon: Globe, val: "Fast", label: "Delivery" },
              { icon: Star, val: "5★", label: "Rated Studio" }
            ].map((metric, idx) => (
              <div key={idx} className="space-y-3 group cursor-default">
                <metric.icon className="w-10 h-10 mx-auto text-gray-200 transition-colors duration-500"
                  onMouseEnter={e => e.currentTarget.style.color = teal}
                  onMouseLeave={e => e.currentTarget.style.color = '#E5E7EB'} />
                <p className="text-3xl font-black tracking-tight">{metric.val}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;