import { useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      aria-label="Primary navigation"
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${scrolled || isOpen ? 'border-gray-700/50 bg-gray-950/85 shadow-xl shadow-gray-950/20 backdrop-blur-xl' : 'border-transparent bg-transparent'}`}
      initial={reduceMotion ? false : { y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#home"
            className="bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          >
            Portfolio
          </motion.a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                initial={reduceMotion ? false : { opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-gray-700/60 bg-gray-900/60 text-gray-200 transition-colors hover:border-purple-400/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 md:hidden"
          >
            <span className={`h-0.5 w-5 bg-current transition duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-5 bg-current transition duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="border-t border-gray-700/50 bg-gray-950/90 backdrop-blur-xl md:hidden"
          initial={reduceMotion ? false : { opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.25 }}
        >
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-gray-300 transition-colors hover:bg-purple-400/10 hover:text-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: reduceMotion ? 0 : index * 0.04 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
