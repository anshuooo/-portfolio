import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { Icon: Github, href: 'https://github.com/', label: 'GitHub' },
  { Icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
  { Icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
];

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

interface SocialLinksProps {
  vertical?: boolean;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ vertical = false, className = '' }) => {
  const containerClass = vertical
    ? 'flex flex-col space-y-4'
    : 'flex space-x-4';

  return (
    <div className={`${containerClass} ${className}`}>
      {socialLinks.map(({ Icon, href, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 hover:text-primary-500 hover:bg-primary-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          custom={i}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          aria-label={label}
        >
          <Icon size={20} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;