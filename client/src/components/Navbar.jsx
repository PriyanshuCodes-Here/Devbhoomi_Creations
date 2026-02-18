import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Palette,
  Mail, Phone, Award, Shield, Clock,
  MessageSquare, Home, Users, Briefcase,
  BookOpen, User, LogOut, LayoutDashboard
} from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setAccountOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
    window.location.reload();
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Portfolio', path: '/portfolio', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  const avatarLetter = user?.name?.charAt(0)?.toUpperCase();

  // Teal color: #009688 / #00796B for dark
  return (
    <>
      {/* TOP BAR (DESKTOP) */}
      <div className="hidden lg:block border-b border-white/10" style={{ backgroundColor: '#00695C' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between text-xs text-teal-100">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" style={{ color: '#80CBC4' }} /> 9720582484 / 8218755922
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3 h-3" style={{ color: '#80CBC4' }} /> ashishbsht402@gmail.com
            </span>
          </div>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3" style={{ color: '#80CBC4' }} /> Professional Design
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" style={{ color: '#80CBC4' }} /> Quality Guaranteed
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" style={{ color: '#80CBC4' }} /> Fast Delivery
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav
        className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
          scrolled ? 'backdrop-blur shadow-lg' : ''
        }`}
        style={{ backgroundColor: scrolled ? 'rgba(0,105,92,0.97)' : '#00695C' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #80CBC4, #26A69A)' }}>
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-black leading-none text-white tracking-wider">
                DEVBHOOMI<span style={{ color: '#80CBC4' }}>.</span>
              </p>
              <p className="text-[10px] text-teal-200 tracking-widest">CREATIONS</p>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
                    isActive
                      ? 'text-white bg-white/20'
                      : 'text-teal-100 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}

            {!user ? (
              <Link
                to="/login"
                className="ml-4 px-4 py-2 rounded-lg text-sm font-semibold text-teal-100 hover:text-white hover:bg-white/10 flex items-center gap-2 transition-all"
              >
                <User className="w-4 h-4" /> Login
              </Link>
            ) : (
              <div className="relative ml-4" ref={accountRef}>
                <button
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all"
                >
                  {user.photo ? (
                    <img src={user.photo} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold" style={{ backgroundColor: '#26A69A' }}>
                      {avatarLetter}
                    </div>
                  )}
                  <div className="text-left leading-tight">
                    <p className="text-sm text-white font-semibold">{user.name}</p>
                    <p className="text-xs text-teal-200">{user.email}</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-teal-200" />
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-teal-700 shadow-xl overflow-hidden" style={{ backgroundColor: '#004D40' }}>
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-teal-100 hover:bg-white/10 transition-all"
                    >
                      <LayoutDashboard className="w-4 h-4" style={{ color: '#80CBC4' }} />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-white/10 transition-all"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[1200] transition ${isOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm border-l transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ backgroundColor: '#00695C', borderColor: '#26A69A' }}
        >
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold" style={{ backgroundColor: '#26A69A' }}>
                  {avatarLetter}
                </div>
                <div>
                  <p className="text-white font-semibold">{user.name}</p>
                  <p className="text-xs text-teal-200">{user.email}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#26A69A' }}>
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <p className="text-white font-semibold">Menu</p>
              </div>
            )}
            <button onClick={() => setIsOpen(false)} className="text-teal-200 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-teal-100 hover:bg-white/10 hover:text-white transition-all"
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}

            {!user ? (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-teal-100 hover:bg-white/10 hover:text-white transition-all"
              >
                <User className="w-4 h-4" />
                Login / Register
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-white/10 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            )}
          </div>

          <div className="px-6 pt-4 border-t border-white/10">
            <p className="text-xs text-teal-200 mb-2">Contact Us</p>
            <p className="text-sm text-white flex items-center gap-2"><Phone className="w-3 h-3" /> 9720582484</p>
            <p className="text-sm text-white flex items-center gap-2 mt-1"><Mail className="w-3 h-3" /> ashishbsht402@gmail.com</p>
          </div>
        </div>
      </div>

      {/* SPACER */}
      <div className="h-20 lg:h-28" />
    </>
  );
};

export default Navbar;