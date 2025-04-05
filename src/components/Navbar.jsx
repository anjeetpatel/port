import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ sections }) => {
  const [nav, setNav] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setNav(false);
  };

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
        {sections.map(({ id }, index) => (
          <motion.li
            key={id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <button
              onClick={() => scrollToSection(sections[index].ref)}
              className="px-4 py-2 cursor-pointer capitalize font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
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
              {sections.map(({ id }, index) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="my-4"
                >
                  <button
                    onClick={() => scrollToSection(sections[index].ref)}
                    className="px-6 py-3 text-3xl font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
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