import { motion, useReducedMotion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const projects = [
  {
    title: 'AuthSystem',
    type: 'Full-Stack Web Application',
    description: 'A secure authentication platform featuring Google OAuth, JWT-based sessions, OTP email verification, and protected user access.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Nodemailer', 'Google OAuth 2.0', 'REST API'],
    image: '/images/AuthSystem.png',
    imageWidth: 1918,
    imageHeight: 877,
    href: 'https://www.youtube.com/watch?v=PQ4Ws2XpeqM',
    action: 'Watch Demo',
    actionIcon: '\u25B6',
  },
  {
    title: "Chef's Lexicon",
    type: 'Full-Stack Web Application',
    description: 'An intelligent full-stack recipe discovery platform featuring a natural-language Recipe AI assistant, advanced search and filtering, personalized collections, and role-based recipe management.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Role-Based Access Control', 'Client-Side Caching'],
    image: "/images/Chef's Lexicon.png",
    imageWidth: 1918,
    imageHeight: 872,
    href: 'https://recipe-website-frontend-0jf9.onrender.com/',
    action: 'Live Demo',
    actionIcon: '\u2197',
  },
  {
    title: 'EventYatwon',
    type: 'Full-Stack Web Application',
    description: 'A complete event management platform featuring event discovery, online registration, QR ticketing, and organizer analytics.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'TanStack Query', 'REST API'],
    image: '/images/EventYatwon.png',
    imageWidth: 1900,
    imageHeight: 875,
    href: 'https://event-yatwon.vercel.app/',
    action: 'Live Demo',
    actionIcon: '\u2197',
  },
];

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="portfolio-section section-projects py-24 md:py-28">
      <div className="section-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mb-16 flex flex-col gap-5 border-b border-gray-700/50 pb-8 sm:flex-row sm:items-end sm:justify-between md:mb-20">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-purple-300">SELECTED WORK</p>
              <h2 className="section-title text-4xl font-bold md:text-5xl">Featured Projects</h2>
            </div>
            <p className="font-mono text-sm tabular-nums text-gray-400">03 full-stack builds</p>
          </div>
        </ScrollAnimation>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.title} delay={index * 0.08}>
              <article className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
                <motion.div
                  className={`relative lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={`absolute inset-0 rounded-[1.35rem] border border-purple-400/25 ${index % 2 === 1 ? '-translate-x-3 translate-y-3' : 'translate-x-3 translate-y-3'}`}
                    aria-hidden="true"
                  ></div>
                  <div className="relative aspect-video overflow-hidden rounded-[1.25rem] border border-gray-600/45 bg-gray-950/80 shadow-[0_28px_70px_rgba(3,7,18,0.34)]">
                    <img
                      src={project.image}
                      alt={`${project.title} application interface`}
                      width={project.imageWidth}
                      height={project.imageHeight}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none"
                    />
                  </div>
                </motion.div>

                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-mono text-sm tabular-nums text-purple-300">{String(index + 1).padStart(2, '0')}</span>
                    <span className="h-px flex-1 bg-gray-700/70" aria-hidden="true"></span>
                    <p className="text-sm font-medium text-gray-400">{project.type}</p>
                  </div>

                  <h3 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">{project.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">{project.description}</p>

                  <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2" aria-label={`${project.title} technology stack`}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-sm font-medium text-gray-400 transition-colors duration-200 group-hover:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.action} for ${project.title} (opens in a new tab)`}
                    className="mt-9 inline-flex min-h-11 items-center gap-3 border-b border-purple-400/55 pb-1 text-sm font-semibold text-white transition duration-300 hover:gap-4 hover:border-purple-300 hover:text-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0d121f] active:translate-y-px motion-reduce:transition-none"
                  >
                    {project.action}
                    <span aria-hidden="true">{project.actionIcon}</span>
                  </a>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
