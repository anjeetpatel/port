import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name.trim()) {
      setStatus({ submitting: false, error: 'Please enter your name', success: false });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ submitting: false, error: 'Please enter a valid email address', success: false });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ submitting: false, error: 'Please enter your message', success: false });
      return;
    }

    setStatus({ submitting: true, error: null, success: false });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
          to_email: 'anjeetpatel0786@gmail.com'
        }
      );

      setStatus({ submitting: false, error: null, success: true });
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({ 
        submitting: false, 
        error: 'Failed to send message. Please try again later.', 
        success: false 
      });
    }
  };

  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
          <span>LinkedIn</span>
        </>
      ),
      href: 'https://www.linkedin.com/in/anjeet-patel/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
          <span>GitHub</span>
        </>
      ),
      href: 'https://github.com/anjeetpatel'
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
          <span>Email</span>
        </>
      ),
      href: 'mailto:anjeetpatel0786@gmail.com',
      style: 'rounded-br-md'
    }
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="py-6 text-gray-300">Get in touch with me</p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                required
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300"
                required
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                placeholder="Enter your message"
                rows="10"
                onChange={handleChange}
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none"
                required
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status.submitting}
                className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 my-8 mx-auto flex items-center rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {status.error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-center bg-red-500/10 p-3 rounded-lg"
                  >
                    {status.error}
                  </motion.p>
                )}
                {status.success && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-500 text-center bg-green-500/10 p-3 rounded-lg"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-1 flex flex-col justify-center gap-4"
          >
            <p className="text-xl mb-4 text-gray-300">Connect with me on social media:</p>
            <div className="flex flex-col gap-4">
              {socialLinks.map(({ id, child, href, style }) => (
                <motion.a
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-4 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 ${style}`}
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

export default Contact;