import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Home = () => {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} /> LinkedIn
        </>
      ),
      href: 'https://www.linkedin.com/in/anjeet-patel/',
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} /> GitHub
        </>
      ),
      href: 'https://github.com/anjeetpatel',
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} /> Email
        </>
      ),
      href: 'mailto:anjeetpatel0786@gmail.com',
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-black to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative z-10"
      >
        <div className="flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Hi, I'm Anjeet Patel
            </h2>
            <p className="text-gray-300 py-4 max-w-md text-lg">
              Building tech that makes a difference
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 mt-8"
          >
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden text-white px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <div className="flex gap-6">
              {socialLinks.map(({ id, child, href }) => (
                <motion.a
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg backdrop-blur-sm transition-colors duration-300"
                >
                  {child}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;