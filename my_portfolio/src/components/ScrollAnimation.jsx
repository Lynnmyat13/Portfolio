import { motion, useReducedMotion } from 'framer-motion';

const ScrollAnimation = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const reduceMotion = useReducedMotion();
  const variants = {
    hidden: reduceMotion ? { opacity: 1, x: 0, y: 0 } : {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px', amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
