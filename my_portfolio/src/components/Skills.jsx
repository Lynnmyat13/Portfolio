import { motion, useReducedMotion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Express.js', level: 80 },
  { name: 'MongoDB', level: 75 },
];

const tools = ['Git', 'GitHub', 'VS Code', 'Vite'];

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
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-3"
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.04 }}
                  >
                    <div className="flex justify-between gap-4 text-sm text-gray-300">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-track" aria-hidden="true">
                      <motion.div
                        className="skill-fill"
                        initial={reduceMotion ? { width: `${skill.level}%` } : { width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : index * 0.04 + 0.12 }}
                      />
                    </div>
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
