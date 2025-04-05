const Resume = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Resume
          </p>
          <p className="py-6">Download my resume to learn more about my experience</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-xl mb-8 text-gray-300 text-center">
            I am a passionate developer with experience in full-stack web development
            and a strong foundation in computer science principles.
          </p>

          <a
            href="#" // Add your resume link here
            download
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-md hover:scale-110 duration-300 flex items-center gap-2"
          >
            Download Resume
          </a>

          <p className="mt-8 text-gray-400 text-center">
            Note: Please ensure to update your resume regularly to reflect your latest achievements and skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;