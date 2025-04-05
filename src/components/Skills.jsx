const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'JavaScript', 'C', 'Python']
    },
    {
      title: 'Frameworks',
      skills: ['HTML', 'CSS', 'NodeJS', 'React Js', 'UI/UX']
    },
    {
      title: 'Tools/Platforms',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Github', 'Figma']
    },
    {
      title: 'Soft Skills',
      skills: ['Leadership', 'Problem-Solving', 'Team player', 'Communication', 'Adaptability']
    }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies and skills I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {skillCategories.map(({ title, skills }) => (
            <div key={title} className="shadow-md shadow-gray-600 rounded-lg p-4">
              <h3 className="text-2xl font-bold mb-4 text-cyan-500">{title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-700 rounded-full text-gray-300 hover:text-white hover:scale-105 duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;