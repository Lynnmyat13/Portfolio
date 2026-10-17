import { motion, useReducedMotion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const skills = [
  'HTML',
  'CSS',
  'Tailwind CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
];

const tools = ['Git', 'GitHub', 'VS Code', 'Vite', 'Vercel Hosting', 'Cloudflare', 'Supabase'];

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="portfolio-section section-skills py-24 md:py-28">
      <div className="section-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mb-16 max-w-2xl text-left">
            <h2 className="section-title mb-5 text-4xl font-bold md:text-5xl">Skills &amp; Expertise</h2>
            <div className="accent-rule align-left"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <ScrollAnimation direction="left">
            <div className="surface-card h-full p-6 sm:p-8">
              <h3 className="mb-8 text-2xl font-bold tracking-tight text-white">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="interactive-surface flex min-h-16 items-center gap-3 rounded-xl border border-gray-600/50 bg-gray-950/25 px-4 py-3"
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.04 }}
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.55)]" aria-hidden="true"></span>
                    <span className="font-semibold text-gray-200">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.12}>
            <div className="surface-card h-full p-6 sm:p-8">
              <h3 className="mb-8 text-2xl font-bold tracking-tight text-white">Tools &amp; Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    className="interactive-surface flex min-h-24 items-center justify-center rounded-xl border border-gray-600/50 bg-gray-950/25 p-4 text-center"
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.06 }}
                  >
                    <span className="font-semibold text-gray-200">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Skills;
