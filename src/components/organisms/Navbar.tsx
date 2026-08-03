import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Videos', path: '/videos' },
    { name: 'Memories', path: '/memories' },
    { name: 'Letters', path: '/letters' },
    { name: 'Future', path: '/future' },
    { name: 'Court Case ??', path: '/court-case' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={'navbar ' + (isScrolled ? 'navbar-scrolled' : '')}
    >
      <Link to="/" className="navbar-logo">
        Zelda & Cass
      </Link>

      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={'nav-item ' + (location.pathname === item.path ? 'nav-item-active' : '')}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
