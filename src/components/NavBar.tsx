import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  // State to track if logo is available
  const [logoAvailable, setLogoAvailable] = useState(false); // Start with false since logo doesn't exist yet

  // Determine if we should show the logo or text
  const shouldShowLogo = () => {
    // Show logo ONLY when navbar background is white (scrolled state) and logo is available
    // Show text when navbar is dark/transparent (initial state) or logo unavailable
    return isScrolled && logoAvailable;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Check if logo exists on component mount
  useEffect(() => {
    const checkLogoExists = () => {
      const img = new Image();
      img.onload = () => setLogoAvailable(true);
      img.onerror = () => {
        // Try SVG fallback
        const svgImg = new Image();
        svgImg.onload = () => setLogoAvailable(true);
        svgImg.onerror = () => setLogoAvailable(false);
        svgImg.src = '/assets/gloomdev-logo.svg';
      };
      img.src = '/assets/gloomdev-logo.png';
    };
    
    checkLogoExists();
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/software', label: 'Software' },
    { href: '/procurement', label: 'Procurement' },
    { href: '/training', label: 'Training' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <AnimatePresence mode="wait">
                {shouldShowLogo() ? (
                  // Show Logo when navbar has light background and logo is available
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="h-12 w-auto"
                  >
                    <img
                      src="/assets/gloomdev-logo.png"
                      alt="GloomDev Logo"
                      className="h-12 w-auto object-contain"
                      onError={(e) => {
                        // Try SVG fallback first
                        if (e.currentTarget.src.includes('.png')) {
                          e.currentTarget.src = '/assets/gloomdev-logo.svg';
                        } else {
                          // Fallback to text if both fail
                          console.warn('Logo failed to load, falling back to text');
                          setLogoAvailable(false);
                        }
                      }}
                    />
                  </motion.div>
                ) : (
                  // Show Text when navbar has dark/transparent background or logo unavailable
                  <motion.div
                    key="text"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <span className={`text-xl font-bold ${
                      isDark 
                        ? 'text-white' 
                        : 'text-white' // Always white text on dark/transparent navbar
                    }`}>
                      GloomDev
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium ${
                    location.pathname === link.href ? 'text-primary dark:text-primary' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-navy-light transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-navy-light transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-navy border-t border-gray-200 dark:border-navy-light"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium py-2 ${
                    location.pathname === link.href ? 'text-primary dark:text-primary' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
