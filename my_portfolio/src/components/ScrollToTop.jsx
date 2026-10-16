import { useState } from 'react';
import { useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 300);
  });

  if (!isVisible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-purple-300/35 bg-purple-700 text-xl text-white shadow-lg shadow-purple-950/40 transition duration-300 hover:-translate-y-1 hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 motion-reduce:transform-none sm:bottom-8 sm:right-8"
    >
      <span aria-hidden="true">&uarr;</span>
    </button>
  );
};

export default ScrollToTop;
