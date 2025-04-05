import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C++', proficiency: 90 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'C', proficiency: 80 },
        { name: 'Python', proficiency: 75 }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'HTML', proficiency: 95 },
        { name: 'CSS', proficiency: 90 },
        { name: 'NodeJS', proficiency: 80 },
        { name: 'React Js', proficiency: 85 },
        { name: 'UI/UX', proficiency: 75 }
      ]
    },
    {
      title: 'Tools/Platforms',
      skills: [
        { name: 'MySQL', proficiency: 85 },
        { name: 'MongoDB', proficiency: 80 },
        { name: 'Firebase', proficiency: 75 },
        { name: 'Github', proficiency: 90 },
        { name: 'Figma', proficiency: 85 }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Leadership', proficiency: 90 },
        { name: 'Problem-Solving', proficiency: 95 },
        { name: 'Team player', proficiency: 90 },
        { name: 'Communication', proficiency: 85 },
        { name: 'Adaptability', proficiency: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black py-20">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
      >
        <motion.div variants={itemVariants}>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Skills
          </p>
          <p className="py-6 text-gray-300">These are the technologies and skills I've worked with</p>
        </motion.div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {skillCategories.map(({ title, skills }, categoryIndex) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="backdrop-blur-lg bg-white/5 rounded-lg p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{title}</h3>
              <div className="flex flex-col space-y-4">
                {skills.map(({ name, proficiency }, index) => {
                  const colors = [
                    'from-cyan-500 to-blue-500',
                    'from-purple-500 to-pink-500',
                    'from-green-500 to-emerald-500',
                    'from-yellow-500 to-orange-500'
                  ];
                  const gradientColor = colors[categoryIndex % colors.length];
                  
                  return (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-200">{name}</span>
                        <span className="text-gray-400">{proficiency}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${gradientColor}`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;