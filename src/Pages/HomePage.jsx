import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Image,
  File,
  Home as HomeIcon,
  MessageCircle,
  Info,
  Video,
  LogIn,
  Menu,
  X,
  ArrowRight,
  Zap,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Logo from '../assets/logo/alra-tech-high-resolution-logo.png';

const navItems = [
  { icon: HomeIcon, name: 'Home', link: '/' },
  { icon: FileText, name: 'PDF Tools', link: '/pdf-tools' },
  { icon: MessageCircle, name: 'Messages', link: '/messages' },
  { icon: Info, name: 'About', link: '/about' },
  { icon: Video, name: 'Video Downloader', link: '/video-downloader' },
];

const tools = [
  {
    title: 'Image To Text',
    route: '/image-to-text',
    icon: FileText,
    description: 'Extract text from any image instantly with accurate OCR.',
  },
  {
    title: 'Image Conversion',
    route: '/image-conversion',
    icon: Image,
    description: 'Convert and transform images between formats with ease.',
  },
  {
    title: 'PDF Tools',
    route: '/pdf-tools',
    icon: File,
    description: 'Merge, split, compress and convert PDFs — all in one place.',
  },
];

const features = [
  { icon: Zap, title: 'Lightning fast', text: 'Process files in seconds, right in your browser.' },
  { icon: ShieldCheck, title: 'Private by default', text: 'Your documents stay yours — no unnecessary uploads.' },
  { icon: Sparkles, title: 'Simple & smart', text: 'Clean, intuitive tools that just work.' },
];

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div data-bs-theme="dark" className="home-root">
      <style>{`
        .home-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background:
            radial-gradient(1000px 500px at 15% -10%, rgba(66, 153, 225, 0.18), transparent 60%),
            radial-gradient(900px 500px at 100% 0%, rgba(147, 51, 234, 0.16), transparent 55%),
            #0b1020;
          color: #e7ecf5;
        }

        /* Navbar */
        .home-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(12px);
          background: rgba(11, 16, 32, 0.72);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .home-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .home-logo { height: 40px; width: auto; object-fit: contain; }
        .home-nav-links { display: flex; align-items: center; gap: 0.25rem; }
        .home-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.75rem;
          border-radius: 10px;
          color: #b7c2d6;
          text-decoration: none;
          font-size: 0.95rem;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .home-nav-link:hover { background: rgba(255, 255, 255, 0.06); color: #ffffff; }
        .home-nav-link.active { background: rgba(66, 153, 225, 0.18); color: #7db8ff; }
        .home-login-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 10px;
          color: #fff;
          font-weight: 600;
          background: linear-gradient(135deg, #4299e1, #7c3aed);
          transition: transform 0.15s ease, box-shadow 0.2s ease;
        }
        .home-login-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(66, 153, 225, 0.35); }
        .home-menu-btn {
          display: none;
          background: none;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 0.4rem;
          color: #e7ecf5;
        }
        .home-mobile-menu {
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(11, 16, 32, 0.95);
        }
        .home-mobile-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1.1rem;
          color: #cdd6e6;
          text-decoration: none;
          border-radius: 12px;
        }
        .home-mobile-link:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .home-mobile-link.active { color: #7db8ff; }

        /* Hero */
        .home-hero { text-align: center; padding: 4.5rem 1rem 2.5rem; max-width: 860px; margin: 0 auto; }
        .home-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: #9fd0ff;
          background: rgba(66, 153, 225, 0.12);
          border: 1px solid rgba(66, 153, 225, 0.3);
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          margin-bottom: 1.25rem;
        }
        .home-title {
          font-weight: 800;
          font-size: clamp(2.1rem, 6vw, 3.6rem);
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(120deg, #ffffff 30%, #7db8ff 70%, #b794f4 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .home-subtitle { color: #a9b4c9; font-size: clamp(1rem, 2.4vw, 1.2rem); margin-bottom: 1.75rem; }
        .home-cta { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
        .home-btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.8rem 1.4rem; border-radius: 12px; font-weight: 600; text-decoration: none; color: #fff;
          background: linear-gradient(135deg, #4299e1, #7c3aed);
          transition: transform 0.15s ease, box-shadow 0.2s ease;
        }
        .home-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(124, 58, 237, 0.4); color:#fff; }
        .home-btn-ghost {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.8rem 1.4rem; border-radius: 12px; font-weight: 600; text-decoration: none;
          color: #dbe4f3; border: 1px solid rgba(255,255,255,0.16); background: rgba(255,255,255,0.03);
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .home-btn-ghost:hover { background: rgba(255,255,255,0.08); transform: translateY(-2px); color:#fff; }

        /* Sections */
        .home-section { max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; width: 100%; }
        .home-section-title { text-align: center; font-weight: 700; font-size: clamp(1.4rem, 3.5vw, 2rem); margin-bottom: 0.4rem; }
        .home-section-sub { text-align: center; color: #93a0b8; margin-bottom: 2rem; }

        .home-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .home-card {
          height: 100%;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .home-card:hover { border-color: rgba(125, 184, 255, 0.5); box-shadow: 0 16px 40px rgba(0,0,0,0.35); }
        .home-card-icon {
          width: 56px; height: 56px; border-radius: 14px; display: grid; place-items: center; margin-bottom: 1rem;
          background: rgba(66, 153, 225, 0.15); color: #7db8ff;
        }
        .home-card h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; }
        .home-card p { color: #a9b4c9; flex-grow: 1; margin-bottom: 1.25rem; }
        .home-card-link {
          display: inline-flex; align-items: center; gap: 0.4rem; align-self: flex-start;
          padding: 0.55rem 1rem; border-radius: 10px; text-decoration: none; font-weight: 600;
          color: #7db8ff; border: 1px solid rgba(125,184,255,0.4); transition: background 0.2s ease, color 0.2s ease;
        }
        .home-card-link:hover { background: rgba(125,184,255,0.15); color: #fff; }

        .home-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .home-feature { display: flex; gap: 0.9rem; align-items: flex-start; padding: 1.1rem; border-radius: 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); }
        .home-feature-icon { flex-shrink: 0; width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; background: rgba(124, 58, 237, 0.15); color: #b794f4; }
        .home-feature h4 { font-size: 1.02rem; font-weight: 700; margin-bottom: 0.2rem; }
        .home-feature p { color: #93a0b8; font-size: 0.9rem; margin: 0; }

        /* Footer */
        .home-footer { margin-top: auto; border-top: 1px solid rgba(255,255,255,0.08); text-align: center; padding: 1.75rem 1rem; color: #8794ab; }

        @media (max-width: 992px) {
          .home-nav-links { display: none; }
          .home-menu-btn { display: inline-flex; }
          .home-grid, .home-features { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .home-grid, .home-features { grid-template-columns: 1fr; }
          .home-hero { padding-top: 3rem; }
        }
      `}</style>

      {/* Navbar */}
      <nav className="home-nav">
        <div className="home-nav-inner">
          <Link to="/" aria-label="Home">
            <img src={Logo} alt="Alra-Tech" className="home-logo" />
          </Link>

          <div className="home-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`home-nav-link ${location.pathname === item.link ? 'active' : ''}`}
              >
                <item.icon size={17} />
                <span>{item.name}</span>
              </Link>
            ))}
            <button className="home-login-btn">
              <LogIn size={17} />
              <span>Login</span>
            </button>
          </div>

          <button
            className="home-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="home-mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div style={{ padding: '0.5rem 0.6rem' }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className={`home-mobile-link ${location.pathname === item.link ? 'active' : ''}`}
                  >
                    <item.icon size={19} />
                    <span>{item.name}</span>
                  </Link>
                ))}
                <button className="home-login-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  <LogIn size={18} />
                  <span>Login</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <motion.header
        className="home-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="home-badge">
          <Sparkles size={14} /> AI-powered document tools
        </span>
        <h1 className="home-title">Powerful Document Transformation</h1>
        <p className="home-subtitle">
          Convert images, extract text, and manage your PDFs — all in one fast, private, and beautifully simple workspace.
        </p>
        <div className="home-cta">
          <Link to="/pdf-tools" className="home-btn-primary">
            Get Started <ArrowRight size={18} />
          </Link>
          <a href="#tools" className="home-btn-ghost">Explore tools</a>
        </div>
      </motion.header>

      {/* Tools */}
      <section id="tools" className="home-section">
        <h2 className="home-section-title">Everything you need</h2>
        <p className="home-section-sub">Pick a tool and get going in seconds.</p>
        <div className="home-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.route}
              className="home-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -6 }}
            >
              <div className="home-card-icon">
                {React.createElement(tool.icon, { size: 28 })}
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <Link to={tool.route} className="home-card-link">
                Get Started <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="home-section">
        <div className="home-features">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              className="home-feature"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="home-feature-icon">
                {React.createElement(f.icon, { size: 22 })}
              </div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        &copy; 2024 Alra-Tech · Image &amp; PDF Tools. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
