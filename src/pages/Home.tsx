import React from 'react';
import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';
import SocialLinks from '../components/SocialLinks';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* === LEFT TEXT CONTENT === */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AnimatedText
                text="Hi, I'm Anshu"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
              />
              <AnimatedText
                text="APPLICATION  DEVELOPER"
                className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-medium mb-5"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-xl"
              >
                Passionate about crafting full-stack web experiences with clean code, responsive designs, and powerful backend logic. Let's innovate and build something extraordinary together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects" className="btn btn-primary shadow-lg">
                  Explore Projects <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline shadow">
                  Contact Me <Mail className="ml-2" size={18} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <SocialLinks />
              </motion.div>
            </motion.div>

            {/* === RIGHT IMAGE + RING === */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-500/40 to-secondary-500/40 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
                  <img
                    src="/anshu photo.png"
                    alt="Anshu"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* === TECH STACK === */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-700 dark:text-primary-400">Tech Stack</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">Here are a few technologies I've been working with:</p>
            <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
              <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">React</span>
              <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">Node.js</span>
              <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">MongoDB</span>
              <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">Express</span>
              <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">Tailwind CSS</span>
              <span className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">Redux Toolkit</span>
            </div>
          </div>

          {/* === ABOUT/ACHIEVEMENTS === */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-3">About Me</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m a dedicated Full-Stack Developer focused on building scalable, fast, and user-friendly web applications. My core strengths lie in problem-solving, clean architecture, and working collaboratively with teams to deliver results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-3">Achievements</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li><Star className="inline-block mr-1 text-yellow-500" /> Completed 6-month internship at 9Pages</li>
                <li><Code className="inline-block mr-1 text-green-500" /> Built LMS and Real Estate web apps</li>
                <li><ArrowRight className="inline-block mr-1 text-blue-500" /> Contributed to open source MERN projects</li>
              </ul>
            </div>
          </div>

          {/* === PROJECTS PREVIEW SECTION === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 bg-gradient-to-r from-primary-100/60 to-secondary-100/60 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-700 dark:text-primary-400 flex items-center">
              Featured Projects
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              A quick look at some of my recent work.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex-1 min-w-[220px]">
                <h3 className="font-semibold text-lg mb-2">LMS Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">A modern Learning Management System with real-time features.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex-1 min-w-[220px]">
                <h3 className="font-semibold text-lg mb-2">Real Estate App</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">A full-featured real estate web app for property listings.</p>
              </div>
            </div>
            <div className="mt-6 text-right">
              <Link to="/projects" className="btn btn-primary">
                See More
              </Link>
            </div>
          </motion.div>

          {/* === SKILLS PREVIEW SECTION === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-secondary-100/60 to-primary-100/60 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-700 dark:text-secondary-400 flex items-center">
              My Skills
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Technologies and tools I use regularly.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded font-medium">React</span>
              <span className="bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded font-medium">Node.js</span>
              <span className="bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded font-medium">MongoDB</span>
              <span className="bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded font-medium">Express</span>
              <span className="bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded font-medium">Tailwind CSS</span>
              <span className="bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded font-medium">Redux Toolkit</span>
            </div>
            <div className="mt-6 text-right">
              <Link to="/skills" className="btn btn-primary">
                See More
              </Link>
            </div>
          </motion.div>

          {/* === ABOUT PREVIEW SECTION === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-primary-100/60 to-secondary-100/60 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-700 dark:text-primary-400 flex items-center">
              About Me
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              I’m a dedicated Full-Stack Developer focused on building scalable, fast, and user-friendly web applications.
            </p>
            <div className="mt-6 text-right">
              <Link to="/about" className="btn btn-primary">
                See More
              </Link>
            </div>
          </motion.div>

          {/* === CONTACT PREVIEW SECTION === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-secondary-100/60 to-primary-100/60 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-2xl p-10 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-700 dark:text-secondary-400 flex items-center">
              Get In Touch
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Want to work together or have a question? Reach out to me!
            </p>
            <div className="mt-6 text-right">
              <Link to="/contact" className="btn btn-primary">
                See More
              </Link>
            </div>
          </motion.div>

          {/* === MODERN EXPERIENCE SECTION === */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-16 bg-gradient-to-br from-primary-200/70 via-white/80 to-secondary-200/70 dark:from-primary-900/60 dark:via-gray-900/80 dark:to-secondary-900/60 rounded-3xl shadow-2xl p-0 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center">
              {/* Left: Illustration or Icon */}
              <div className="flex-1 flex justify-center items-center bg-gradient-to-br from-primary-100/60 to-secondary-100/60 dark:from-primary-900/30 dark:to-secondary-900/30 p-8 md:p-12">
                <img
                  src="/mern2.jpg"
                  alt="Experience"
                  className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>
              {/* Right: Content */}
              <div className="flex-1 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-primary-800 dark:text-primary-300 tracking-tight">
                  My Professional Experience
                </h2>
                <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Over the years, I have worked with diverse teams and clients, delivering robust solutions in EdTech, Real Estate, and SaaS domains. My experience spans frontend, backend, and cloud, always focusing on performance and user experience.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span className="text-gray-800 dark:text-gray-200">1+ years in Full-Stack Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-secondary-500 rounded-full"></span>
                    <span className="text-gray-800 dark:text-gray-200">Worked with startups & enterprise clients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-gray-800 dark:text-gray-200">Agile, collaborative, and quality-driven</span>
                  </li>
                </ul>
                <div className="text-right">
                  <Link to="/about" className="btn btn-gradient shadow-lg">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
