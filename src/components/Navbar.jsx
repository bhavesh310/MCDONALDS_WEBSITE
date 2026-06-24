import React from 'react';
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  // Animation presets for clean orchestration
  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div 
      className="navbar"
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
    >
      {/* Animated Logo */}
      <motion.div 
        className="logo"
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
      >
        <img src="./images/mc-logo.png" alt="McDonald's Logo" />
      </motion.div>

      {/* Nav Links with Underline Effects */}
      <ul className="nav-links">
        {['Menu', 'Rewards', 'Gift Cards'].map((link, index) => (
          <motion.li 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -3 }}
            className="nav-item"
          >
            {link}
            <span className="nav-underline" />
          </motion.li>
        ))}
      </ul>

      {/* Premium CTA Button */}
      <motion.button 
        className="signin-btn"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0px 10px 25px rgba(218, 41, 28, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        Sign In
      </motion.button>
    </motion.div>
  );
};

export default Navbar;