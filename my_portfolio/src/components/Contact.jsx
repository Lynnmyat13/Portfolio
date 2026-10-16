import { motion, useReducedMotion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const contactItems = [
  { icon: 'mail', title: 'Email', value: 'linnmyat1383@gmail.com', href: 'mailto:linnmyat1383@gmail.com' },
  { icon: 'phone', title: 'Phone', value: '+959 779 689 190', href: 'tel:+959779689190' },
  { icon: 'pin', title: 'Location', value: 'Tamwe, Yangon' },
];

const socialLinks = [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/Lynnmyat13' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/lynn-myat-8a4409417/' },
  { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/linn_myat2003' },
];

const Icon = ({ name, className = 'h-6 w-6' }) => {
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.6-1.4-6.6-4.4-8-8l2-2-2-4Z" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    github: <path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />,
    linkedin: <path fill="currentColor" stroke="none" d="M5.3 7.3A2.3 2.3 0 1 0 5.3 2.7a2.3 2.3 0 0 0 0 4.6ZM3.3 21h4V9h-4v12Zm6.4-12h3.8v1.65h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94V21h-4V9Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const Contact = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="portfolio-section section-contact py-24 md:py-28">
      <div className="section-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mb-16 text-center">
            <h2 className="section-title mb-5 text-4xl font-bold md:text-5xl">Reach Me</h2>
            <div className="accent-rule"></div>
          </div>
        </ScrollAnimation>

        <div className="contact-panel mx-auto mb-14 grid max-w-4xl grid-cols-1 overflow-hidden md:grid-cols-3">
          {contactItems.map((item, index) => (
            <ScrollAnimation key={item.title} delay={index * 0.08}>
              <motion.div
                className="h-full border-b border-gray-700/60 p-7 text-center last:border-b-0 md:border-b-0 md:border-l md:first:border-l-0"
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-400/10 text-purple-200">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="break-all text-gray-300 transition-colors duration-200 hover:text-purple-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{item.value}</p>
                )}
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.18}>
          <div className="mx-auto max-w-md text-center">
            <h3 className="mb-6 text-2xl font-bold tracking-tight text-white">Follow Me</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  title={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-400/10 text-purple-200 transition-colors duration-200 hover:border-purple-300/60 hover:bg-purple-400/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.06 }}
                >
                  <Icon name={social.icon} />
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
