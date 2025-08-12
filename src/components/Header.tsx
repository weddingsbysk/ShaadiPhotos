import { motion } from 'framer-motion';
import { Camera, Menu, X, Instagram } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Camera className="h-8 w-8 text-rose-500" />
            <span className="text-xl font-light text-gray-900">Weddings by Siddhant Kapoor</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-rose-500 transition-colors font-light"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="https://www.instagram.com/weddingsbysiddhantkapoor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-rose-500 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-100"
          >
            {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-rose-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://www.instagram.com/weddingsbysiddhantkapoor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 py-2 text-gray-700 hover:text-rose-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;