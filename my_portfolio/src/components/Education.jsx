import { motion, useReducedMotion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

const education = [
  {
    degree: "B.SC (HONS) IN COMPUTING WITH FIRST CLASS HONOURS",
    school: "British United College",
    year: "Aug 2025 - May 2026",
    modules: [
      "Computing Project",
      "Artificial Intelligence",
      "Advanced Cyber Security",
      "Advanced Data Technology",
      "Android Mobile Development",
    ],
  },
  {
    degree: "HIGHER NATIONAL DIPLOMA IN COMPUTING",
    school: "Info Myanmar College",
    year: "May 2024 - April 2025",
    modules: [
      "Business Process Support",
      "Discrete Maths",
      "Data Structures and Algorithms",
      "Applied Programming and Design Principles",
      "Network Security",
      "E-Commerce and Strategy",
      "Computing Research Project",
    ],
  },
  {
    degree: "HIGHER NATIONAL CERTIFICATE IN COMPUTING",
    school: "Info Myanmar College",
    year: "May 2023 - April 2024",
    modules: [
      "Programming",
      "Networking",
      "Professional Practice",
      "Database Design and Development",
      "Security",
      "Planning a Computing Project",
      "Software Development Lifecycles",
      "Maths for Computing",
    ],
  },
];

const Education = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="portfolio-section section-education py-24 md:py-28"
    >
      <div className="section-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-left">
            <h2 className="section-title mb-5 text-4xl font-bold md:text-5xl">
              Education
            </h2>
            <div className="accent-rule align-left"></div>
          </div>
        </ScrollAnimation>

        <div className="mx-auto max-w-3xl space-y-7">
          {education.map((item, index) => (
            <ScrollAnimation key={item.degree} delay={index * 0.1}>
              <motion.article
                className="relative border-l border-purple-400/45 pl-6 sm:pl-8"
                whileHover={reduceMotion ? undefined : { x: 5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className="absolute -left-1 top-7 h-2 w-2 rotate-45 bg-purple-300 shadow-[0_0_16px_rgba(192,132,252,0.45)]"
                  aria-hidden="true"
                ></span>
                <div className="surface-card interactive-surface p-6 sm:p-7">
                  <p className="text-sm font-semibold text-purple-300">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-gray-400">{item.school}</p>
                  <div className="mt-5">
                    <h4 className="mb-3 font-semibold text-gray-200">
                      Modules:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.modules.map((module) => (
                        <span
                          key={module}
                          className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-sm text-purple-200 transition-colors duration-200 hover:border-purple-300/45 hover:bg-purple-400/15"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
