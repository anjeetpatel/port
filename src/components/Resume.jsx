import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showPreview) {
      setIsLoading(true);
      setError(null);
    }
  }, [showPreview]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError('Failed to load PDF. Please try downloading instead.');
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-16 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="py-6 text-gray-300">View or download my professional resume</p>
        </motion.div>

        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10 relative"
          >
            {showPreview ? (
              <div className="w-full h-[80vh] bg-white/5 rounded-lg overflow-hidden shadow-xl relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                {error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="text-red-400 text-center p-4">{error}</div>
                  </div>
                )}
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full"
                  title="Resume Preview"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
              </div>
            ) : (
              <div className="text-center py-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block p-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-6"
                >
                  <FaEye size={48} className="text-cyan-400" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Preview Resume
                </h3>
                <p className="text-gray-400 mb-6">
                  Click the button below to preview my resume directly in the browser
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 w-full sm:w-auto justify-center group"
              >
                <FaEye size={20} className="group-hover:text-cyan-400 transition-colors" />
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 w-full sm:w-auto justify-center group"
              >
                <FaDownload size={20} className="group-hover:scale-110 transition-transform" />
                Download PDF
              </motion.a>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-center max-w-lg"
          >
            My resume showcases my professional journey, skills, and achievements. Feel free to download it or view it directly in the browser.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;