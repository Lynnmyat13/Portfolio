import ScrollAnimation from './ScrollAnimation';

const stats = [
  { icon: 'cube', value: '3', label: 'Full-Stack Projects', tone: 'text-fuchsia-300' },
  { icon: 'graduate', value: '3', label: 'Years in Computing', tone: 'text-blue-300' },
  { icon: 'code', value: '16', label: 'Skills & Tools', tone: 'text-fuchsia-300' },
  { icon: 'award', value: '3', label: 'Qualifications', tone: 'text-blue-300' },
];

const facts = [
  { icon: 'user', label: 'Name:', value: 'Lynn Myat' },
  { icon: 'mail', label: 'Email:', value: 'linnmyat1383@gmail.com' },
  { icon: 'phone', label: 'Phone:', value: '+959 779 689 190' },
  { icon: 'pin', label: 'Location:', value: 'Tamwe, Yangon' },
  { icon: 'briefcase', label: 'Freelance:', value: 'Available' },
];

const Icon = ({ name, className = 'h-6 w-6' }) => {
  const paths = {
    user: <><circle cx="12" cy="8" r="3" /><path d="M5 20c.8-4 3.1-6 7-6s6.2 2 7 6" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-3.6-1.4-6.6-4.4-8-8l2-2-2-4Z" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V4h6v3M3 12h18" /></>,
    cube: <><path d="m12 2 8 4.5v10L12 21l-8-4.5v-10L12 2Z" /><path d="m4 6.5 8 4.5 8-4.5M12 11v10" /></>,
    graduate: <><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11.5V16c3.6 2.7 8.4 2.7 12 0v-4.5" /></>,
    code: <><path d="m8 6-5 6 5 6M16 6l5 6-5 6M14 3l-4 18" /></>,
    award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-3 4.5 3-1-9" /><path d="m10 8 1.3 1.3L14 6.5" /></>,
    download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4" /><path d="M5 19h14" /></>,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6H5V6h6" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const About = () => {
  return (
    <section id="about" className="portfolio-section section-about py-24 md:py-32">
      <div className="section-content mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 xl:grid-cols-[1.08fr_0.92fr] xl:gap-20">
          <ScrollAnimation direction="left">
            <div>
              <div className="mb-7 flex items-center gap-4 text-sm font-semibold tracking-[0.2em] text-gray-300">
                <span className="h-1 w-7 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" aria-hidden="true"></span>
                ABOUT ME
              </div>

              <h2 className="section-title max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
                Building digital <span className="bg-gradient-to-r from-fuchsia-400 to-blue-400 bg-clip-text text-transparent">solutions</span> that matter
              </h2>

              <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-gray-300 sm:text-lg">
                <p>
                  I&apos;m a passionate Full Stack Developer and recent BSc Computing graduate with a strong interest in
                  building modern and user-friendly web applications. I enjoy turning ideas into practical solutions
                  using technologies such as React, Node.js, Express.js, MongoDB, JavaScript, HTML, and CSS.
                </p>
                <p>
                  Throughout my academic journey, I have developed several full-stack projects that strengthened my
                  problem-solving, programming, and database management skills. I am committed to continuously learning
                  new technologies, improving my development skills, and building high-quality applications. I am
                  currently seeking opportunities to contribute to real-world projects while growing as a web developer.
                </p>
              </div>

              <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="about-stat flex items-center gap-5 rounded-2xl border border-blue-400/20 bg-[#10182a]/80 p-4 sm:p-5">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 ${stat.tone}`}>
                      <Icon name={stat.icon} className="h-8 w-8" />
                    </div>
                    <div>
                      <strong className="block text-2xl font-bold tabular-nums text-white sm:text-3xl">{stat.value}</strong>
                      <span className="text-sm text-gray-300 sm:text-base">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.16} className="xl:pt-24">
            <div className="relative mt-20 xl:mt-0">
              <div className="about-avatar absolute -top-20 left-1/2 z-10 flex h-40 w-40 -translate-x-1/2 items-center justify-center rounded-full border border-purple-400/55 bg-[#121a35] text-indigo-300 shadow-[0_0_55px_rgba(99,102,241,0.28)]">
                <Icon name="user" className="h-20 w-20" />
                <span className="absolute bottom-2 right-3 h-7 w-7 rounded-full border-[6px] border-[#121a35] bg-emerald-400" aria-label="Available"></span>
              </div>

              <div className="about-status absolute -right-1 -top-14 z-20 hidden items-center gap-3 rounded-xl border border-blue-400/35 bg-[#101a31]/95 px-4 py-3 text-xs text-gray-100 shadow-[0_15px_45px_rgba(3,7,18,0.4)] sm:flex">
                <span className="h-3 w-3 rounded-full border-2 border-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" aria-hidden="true"></span>
                <span>Available for<br />opportunities</span>
              </div>

              <div className="about-facts rounded-[1.35rem] border border-blue-400/45 bg-[#0e172b]/90 px-5 pb-6 pt-24 shadow-[0_30px_90px_rgba(3,7,18,0.42)] backdrop-blur-xl sm:px-8 sm:pb-8">
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Quick Facts</h3>
                <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500" aria-hidden="true"></div>

                <dl className="mt-5 divide-y divide-blue-200/10">
                  {facts.map((fact) => (
                    <div key={fact.label} className="grid grid-cols-[2.75rem_5.5rem_minmax(0,1fr)] items-center gap-3 py-3.5 sm:grid-cols-[2.75rem_7rem_minmax(0,1fr)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-violet-400">
                        <Icon name={fact.icon} className="h-5 w-5" />
                      </div>
                      <dt className="text-sm text-gray-400 sm:text-base">{fact.label}</dt>
                      <dd className="min-w-0 break-words text-sm text-gray-100 sm:text-base">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex gap-3">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex min-h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-500 px-6 font-semibold text-white shadow-[0_12px_35px_rgba(99,102,241,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e172b] active:translate-y-0 motion-reduce:transform-none"
                  >
                    <Icon name="download" className="h-5 w-5" />
                    View CV
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open CV in a new tab"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e172b] motion-reduce:transform-none"
                  >
                    <Icon name="external" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
