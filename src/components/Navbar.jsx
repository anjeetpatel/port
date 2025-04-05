import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: '/', text: 'Home' },
    { id: 2, link: '/about', text: 'About' },
    { id: 3, link: '/projects', text: 'Projects' },
    { id: 4, link: '/skills', text: 'Skills' },
    { id: 5, link: '/resume', text: 'Resume' },
    { id: 6, link: '/contact', text: 'Contact' },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black/80 backdrop-blur-md fixed z-50 border-b border-white/10">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-signature ml-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
        >
          Anjeet Patel
        </motion.h1>
      </div>

      <ul className="hidden md:flex space-x-2">
        {links.map(({ id, link, text }) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: id * 0.1 }}
          >
            <Link
              to={link}
              className="px-4 py-2 cursor-pointer capitalize font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              {text}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40"
          >
            <motion.ul
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center items-center h-screen"
            >
              {links.map(({ id, link, text }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: id * 0.1 }}
                  className="my-4"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    className="px-6 py-3 text-3xl font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;