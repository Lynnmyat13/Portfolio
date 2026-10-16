import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="portfolio-section hero-premium flex min-h-[100dvh] items-center pt-16">
      <div className="section-content mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <motion.div
            className="text-center lg:text-left"
            initial={reduceMotion ? false : { opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-base font-semibold text-purple-300 sm:text-lg">Hello, I&apos;m</p>
            <h1 className="mb-5 text-5xl font-bold leading-[0.95] tracking-[-0.055em] text-gray-50 sm:text-6xl md:text-7xl">
              Lynn Myat
            </h1>
            <p className="mb-7 text-xl font-medium text-gray-200 sm:text-2xl md:text-3xl">
              Web Developer
            </p>
            <p className="mx-auto mb-9 max-w-xl text-base leading-7 text-gray-300 sm:text-lg lg:mx-0">
              Passionate about building beautiful, functional, and user-friendly applications.
              Let&apos;s create something amazing together!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-purple-700 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-purple-600 hover:shadow-purple-950/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 active:translate-y-0 motion-reduce:transform-none"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-purple-400/70 bg-gray-950/20 px-7 py-3 font-semibold text-purple-200 transition duration-300 hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 active:translate-y-0 motion-reduce:transform-none"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={reduceMotion ? false : { opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: reduceMotion ? 0 : 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-portrait-frame relative w-full max-w-[22rem] sm:max-w-[25rem] lg:max-w-[28rem]">
              <div className="hero-portrait-photo relative aspect-[3/4] overflow-hidden rounded-[1.2rem]">
                <img
                  src="/images/profile.jpg"
                  alt="Lynn Myat standing outdoors"
                  width="777"
                  height="777"
                  fetchPriority="high"
                  className="h-full w-full object-cover object-[52%_center]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
