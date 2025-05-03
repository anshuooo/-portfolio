import React from 'react';
import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';
import SkillBar from '../components/SkillBar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, PaintBucket, Server, Terminal, BookOpen, PenTool as Tool } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    percentage: number;
    color?: string;
  }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} className="text-primary-500" />,
      skills: [
        { name: 'React.js', percentage: 90, color: 'bg-primary-500' },
        { name: 'JavaScript', percentage: 85, color: 'bg-primary-600' },
        { name: 'TypeScript', percentage: 80, color: 'bg-primary-700' },
        { name: 'HTML & CSS', percentage: 95, color: 'bg-primary-400' },
        { name: 'Tailwind CSS', percentage: 85, color: 'bg-primary-500' },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} className="text-secondary-500" />,
      skills: [
        { name: 'Node.js', percentage: 80, color: 'bg-secondary-500' },
        { name: 'Express.js', percentage: 75, color: 'bg-secondary-600' },
        { name: 'MongoDB', percentage: 70, color: 'bg-secondary-700' },
        { name: 'RESTful APIs', percentage: 85, color: 'bg-secondary-400' },
        { name: 'GraphQL', percentage: 60, color: 'bg-secondary-500' },
      ],
    },
    {
      title: 'UI/UX Design',
      icon: <PaintBucket size={24} className="text-accent-500" />,
      skills: [
        { name: 'Figma', percentage: 85, color: 'bg-accent-500' },
        { name: 'Adobe XD', percentage: 75, color: 'bg-accent-600' },
        { name: 'Wireframing', percentage: 90, color: 'bg-accent-400' },
        { name: 'User Research', percentage: 70, color: 'bg-accent-500' },
        { name: 'Prototyping', percentage: 80, color: 'bg-accent-600' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <Tool size={24} className="text-primary-500" />,
      skills: [
        { name: 'Git & GitHub', percentage: 85, color: 'bg-primary-500' },
        { name: 'Docker', percentage: 60, color: 'bg-secondary-500' },
        { name: 'AWS', percentage: 65, color: 'bg-accent-500' },
        { name: 'CI/CD', percentage: 70, color: 'bg-primary-500' },
        { name: 'Testing', percentage: 75, color: 'bg-secondary-500' },
      ],
    },
  ];

  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <AnimatedText 
            text="Skills & Expertise" 
            className="page-heading text-center mb-16" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h2 className="section-heading mb-8 text-primary-600 dark:text-primary-400">
                Technical Proficiency
              </h2>
              
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                With extensive experience in both frontend and backend technologies, I bring a comprehensive skill set to
                every project. My expertise spans across modern JavaScript frameworks, responsive design, server-side 
                development, and database management.
              </p>
              
              <div className="mt-10 space-y-10">
                {skillCategories.slice(0, 2).map((category, index) => (
                  <div key={index} className="mb-8">
                    <div className="flex items-center mb-6">
                      {category.icon}
                      <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-gray-200">
                        {category.title}
                      </h3>
                    </div>
                    
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skillIndex}
                        skill={skill.name}
                        percentage={skill.percentage}
                        color={skill.color}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h2 className="section-heading mb-8 text-secondary-600 dark:text-secondary-400">
                Design & Tools
              </h2>
              
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Beyond coding, I excel in creating visually stunning interfaces and managing the development workflow. My 
                design philosophy combines aesthetics with usability, ensuring intuitive and engaging user experiences.
              </p>
              
              <div className="mt-10 space-y-10">
                {skillCategories.slice(2, 4).map((category, index) => (
                  <div key={index} className="mb-8">
                    <div className="flex items-center mb-6">
                      {category.icon}
                      <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-gray-200">
                        {category.title}
                      </h3>
                    </div>
                    
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skillIndex}
                        skill={skill.name}
                        percentage={skill.percentage}
                        color={skill.color}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <BookOpen size={24} className="text-primary-500" />
                <h3 className="text-xl font-semibold ml-2">Education & Certifications</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 border-l-4 border-primary-500">
                  <h4 className="font-semibold text-lg">Bachelor's in Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-300">University of Technology, 2018-2022</p>
                </div>
                
                <div className="p-4 border-l-4 border-secondary-500">
                  <h4 className="font-semibold text-lg">Full Stack Web Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">Tech Academy Certification, 2023</p>
                </div>
                
                <div className="p-4 border-l-4 border-accent-500">
                  <h4 className="font-semibold text-lg">UI/UX Design Fundamentals</h4>
                  <p className="text-gray-600 dark:text-gray-300">Design Institute, 2022</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Terminal size={24} className="text-secondary-500" />
                <h3 className="text-xl font-semibold ml-2">Soft Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Problem Solving', 'Team Collaboration', 
                  'Communication', 'Project Management',
                  'Time Management', 'Critical Thinking',
                  'Adaptability', 'Creativity'
                ].map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-400 to-secondary-500 mr-3"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 p-10 rounded-xl text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              I'm always looking for new challenges and opportunities to apply my skills. 
              Let's collaborate on your next project and create something amazing.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Skills;