const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-10">
          I am passionate about leveraging technology to solve real-world problems. 
          My academic journey has equipped me with a robust foundation in computer 
          science principles, while my hands-on experience has honed my skills in 
          full-stack web development.
        </p>

        <p className="text-xl mt-4">
          Through my journey in tech, I've developed a deep understanding of both 
          theoretical concepts and practical applications. I specialize in creating 
          efficient, scalable solutions that combine innovative technology with 
          user-centric design principles.
        </p>

        <p className="text-xl mt-4">
          I'm constantly learning and adapting to new technologies, believing that 
          the best solutions come from a combination of solid fundamentals and 
          cutting-edge tools. My goal is to continue growing as a developer while 
          contributing to projects that make a meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default About;