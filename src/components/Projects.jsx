import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sahu Garments',
      description: 'E-Commerce Website built with React, CSS, JSX, and MongoDB',
      github: 'https://github.com/anjeetpatel/SahuGarments',
      live: 'https://sahugarments.netlify.app/',
      tech: ['React', 'CSS', 'JSX', 'MongoDB']
    },
    {
      id: 2,
      title: 'ScribblersHub',
      description: 'Blogging Website developed using HTML, CSS, JS, EJS, and NodeJS',
      github: 'https://github.com/anjeetpatel/scribblershub/tree/master',
      live: 'https://scribblershub.onrender.com/',
      tech: ['HTML', 'CSS', 'JavaScript', 'EJS', 'NodeJS']
    }
  ];

  return (
    <div id="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="py-6 text-gray-300">Check out some of my work</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, github, live, tech }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
              whileHover={{ y: -5 }}
              className="group backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{title}</h3>
                <p className="text-gray-300 mb-4">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tech.map((item, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10 rounded-full text-sm text-white/80 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    <FaGithub size={20} />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                  >
                    <BiLinkExternal size={20} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;