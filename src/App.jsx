import React, { useEffect, useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Sun,
  X,
  Sparkles,
  Terminal,
  Globe,
  Database,
  Layers3,
  FileText,
  Play,
  ChevronDown
} from 'lucide-react'

import { useForm, ValidationError } from '@formspree/react'

const GITHUB = 'https://github.com/Vishnuvardhangupthajavvaji'
const LINKEDIN = 'https://www.linkedin.com/in/vishnu-vardhan-guptha-javvaji-78519b274/'
const RESUME_VIEW = 'https://drive.google.com/file/d/1TE1UYXgVAtQY50YU6I-AwJatVfrz4eiy/view?usp=sharing'
const RESUME_DOWNLOAD = '/assets/Vishnu-Vardhan-Guptha-Resume.pdf'
const EMAIL = 'vishnujavvaji19@gmail.com'
const PHONE = '+91 9505358105'

const projects = [
  
  {
    number: '01',
    name: 'E-Commerce Platform',
    category: 'Full-stack · E-Commerce',
    cover_img:{
      src: '/assets/E-Commerce-Platform.png',
      alt: 'E-Commerce Platform project screenshot'
    },
    description:
      'A shopping platform with authentication, product management, cart and order workflows, built with a separated React frontend and Django API.',
    stack: ['Python', 'Django REST', 'React', 'PostgreSQL'],
    repo: `${GITHUB}/E-commerce`,
    demo: '',
    visual: 'shop',
    featured: true,
    detail:
      'Backend is organized into focused apps for users, products, cart, orders, wishlist and comments.'
  },
  {
    number: '02',
    name: 'Automated Resume Analysis & Skill Matching',
    category: 'Full-stack · Recruitment',
    cover_img:{
      src: '/assets/Automated-Resume-Analysis.png',
      alt: 'Automated Resume Analysis project screenshot'
    },
    description:
      'A recruitment platform that extracts skills from uploaded resumes, calculates candidate-job compatibility scores, and streamlines hiring through recruiter approval, job posting and application management.',
    stack: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    repo: `${GITHUB}/Automated-Resume-Analysis`,
    demo: 'https://web-production-3ef09154.up.railway.app/',
    visual: 'resume',
    featured: true,
    detail:
      'Includes resume parsing and skill matching, role-based authentication, admin-controlled recruiter approval, job posting, candidate applications and recruiter-specific applicant access.'
  },
  {
    number: '03',
    name: 'InstaShare',
    category: 'Frontend · Social application',
    cover_img:{
      src: '/assets/InstaShare.png',
      alt: 'InstaShare project screenshot'
    },
    description:
      'A responsive social sharing app with protected routes, login, feed, stories, profile pages, user details and search.',
    stack: ['React 19', 'React Router', 'JavaScript', 'CSS'],
    repo: `${GITHUB}/InstaShare`,
    demo: 'https://insta-share-sigma.vercel.app/',
    visual: 'social',
    featured: true,
    detail:
      'Includes authentication-aware routing, posts, stories, profile views and search-result states.'
  },
  {
    number: '04',
    name: 'Split Even',
    category: 'Full-stack · Fintech utility',
    cover_img: {
      src: '/assets/Split-Even.png',
      alt: 'Split Even project screenshot'
    },
    description:
      'A group expense platform that calculates balances and simplifies debts into fewer settlement transfers, with support for multiple split methods and currencies.',
    stack: ['Django', 'DRF', 'React', 'SQLite'],
    repo: `${GITHUB}/Split-Even`,
    demo: '',
    visual: 'split',
    featured: true,
    detail:
      'Equal, exact, percentage and shares-based splits; penny-accurate remainder distribution; balance recomputation; CSV ledger export.'
  },
  {
    number: '05',
    name: 'Job Tracker',
    category: 'Browser extension · Automation',
    cover_img:{
      src: '/assets/Job-Tracker.png',
      alt: 'Job Tracker project screenshot'
    },
    description:
      'A job-application tracker combining a Flask API with a Chrome extension workflow for saving and managing application records.',
    stack: ['Python', 'Flask', 'SQLite', 'Plasmo', 'React'],
    repo: `${GITHUB}/Job-Tracker`,
    demo: '',
    visual: 'jobs',
    featured: false,
    detail:
      'The API supports creating, listing, updating status and deleting tracked job records.'
  },
  {
    number: '06',
    name: 'Fashion Finds',
    category: 'Backend · E-commerce',
    cover_img:{
      src: '/assets/Fashion-Finds.png',
      alt: 'Fashion Finds project screenshot'
    },
    description:
      'A Flask-powered fashion store with customer shopping flows and an admin experience for products, inventory and order operations.',
    stack: ['Python', 'Flask', 'SQLite', 'SQLAlchemy'],
    repo: `${GITHUB}/Fashion-Finds`,
    demo: '',
    visual: 'fashion',
    featured: false,
    detail:
      'Repository includes tests covering routes, cart, wishlist, checkout, orders, product search and delivery dashboard.'
  },
  
]

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['Python', 'JavaScript', 'Java', 'C', 'SQL']
  },
  {
    title: 'Backend & APIs',
    icon: Layers3,
    items: ['Django', 'Django REST Framework', 'Flask', 'REST APIs', 'MVC']
  },
  {
    title: 'Frontend',
    icon: Globe,
    items: ['React', 'HTML5', 'CSS3', 'Responsive UI']
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'SQLite']
  },
  {
    title: 'Tools & workflow',
    icon: Terminal,
    items: ['Git', 'GitHub', 'Docker (basic)', 'Linux CLI', 'Postman', 'VS Code']
  },
  {
    title: 'Foundations',
    icon: null,
    items: ['Data Structures & Algorithms', 'OOP', 'Agile / Scrum', 'NLP (basic)']
  }
]

const education = [
  {
    date: 'APR 2026 — PRESENT',
    title: 'Python Full Stack',
    place: 'NxtWave',
    note: 'Currently pursuing'
  },
  {
    date: '2022 — 2026',
    title: 'B.Tech · Computer Science & Engineering',
    place: 'Malla Reddy Engineering College (Autonomous), Hyderabad',
    note: 'CGPA · 8.78'
  },
  {
    date: '2020 — 2022',
    title: 'Intermediate · MPC',
    place: 'Telangana State Residential Junior College',
    note: '964 / 1000'
  },
  {
    date: '2019 — 2020',
    title: 'SSC',
    place: 'Mathrusri High School',
    note: 'GPA · 10.0'
  }
]

function BrandIcon({ name }) {
  const icons = {
    Python: 'python',
    JavaScript: 'javascript',
    Django: 'django',
    Flask: 'flask',
    React: 'react',
    HTML5: 'html5',
    PostgreSQL: 'postgresql',
    MySQL: 'mysql',
    SQLite: 'sqlite',
    Git: 'git',
    GitHub: 'github',
    'Docker (basic)': 'docker',
    'Linux CLI': 'linux',
    Postman: 'postman'
  }

  const slug = icons[name]
  const devicon = {
    Java: 'java/java-original.svg',
    CSS3: 'css3/css3-original.svg',
    'VS Code': 'vscode/vscode-original.svg'
  }[name]

  if (devicon)
    return (
      <img
        className="skill-logo"
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${devicon}`}
        alt=""
        loading="lazy"
      />
    )

  return slug ? (
    <img
      className="skill-logo"
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      loading="lazy"
    />
  ) : null
}

function App() {
  const [formspreeState, submitToFormspree] = useForm('mqpqzarg')
  const [theme, setTheme] = useState(() => localStorage.getItem('vv-theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [github, setGithub] = useState({
    repos: null,
    followers: null,
    stars: null,
    loading: true
  })
  const [form, setForm] = useState({ name: '', email: '', message: '' })


  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('vv-theme', theme)
  }, [theme])

  // Subtle scroll-reveal animations; automatically disabled for reduced-motion users.
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = document.querySelectorAll(
      '.hero-copy, .hero-visual-wrap, .section-heading, .about-grid > *, .skills-grid > *, .project-grid > *, .experience-item, .certifications-block, .leadership-row, .github-panel, .contribution-card, .contact-grid > *'
    )

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    targets.forEach((el, index) => {
      el.classList.add('reveal-on-scroll')
      el.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 75}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let active = true

    Promise.all([
      fetch('https://api.github.com/users/Vishnuvardhangupthajavvaji').then((r) => {
        if (!r.ok) throw new Error('GitHub profile unavailable')
        return r.json()
      }),
      fetch(
        'https://api.github.com/users/Vishnuvardhangupthajavvaji/repos?per_page=100&sort=updated'
      ).then((r) => {
        if (!r.ok) throw new Error('GitHub repositories unavailable')
        return r.json()
      })
    ])
      .then(([user, repos]) => {
        if (!active) return
        setGithub({
          repos: user.public_repos,
          followers: user.followers,
          stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
          loading: false
        })
      })
      .catch(() => {
        if (active) setGithub((s) => ({ ...s, loading: false }))
      })

    return () => {
      active = false
    }
  }, [])

  const visibleProjects = useMemo(() => (showAll ? projects : projects.slice(0, 3)), [showAll])
  const navItems = ['Home', 'About Me', 'Skills', 'Projects', 'Experience', 'Contact', 'Resume']

  const handleNav = (label) => {
    setMenuOpen(false)
    if (label === 'Resume') {
      window.open(RESUME_VIEW, '_blank', 'noopener,noreferrer')
      return
    }
    document.getElementById(label.toLowerCase().replaceAll(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })
  }



  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)}>
          <span>J</span>
          <small>JAVVAJI VISHNU VARDHAN GUPTHA</small>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item} onClick={() => handleNav(item)}>
              {item}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> OPEN TO SOFTWARE DEVELOPMENT OPPORTUNITIES
            </div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>
              Javvaji Vishnu
              <br />
              <em>Vardhan Guptha.</em>
            </h1>
            <p className="hero-role">
              Python Backend <span>·</span> Full-Stack Developer
            </p>
            <p className="hero-intro">
              I build practical web applications with Python, Django, Flask and React — from thoughtful API design to responsive interfaces and relational data models.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={RESUME_VIEW} target="_blank" rel="noreferrer">
                <FileText size={16} /> View Resume <ArrowUpRight size={15} />
              </a>
              <a className="btn btn-outline" href={RESUME_DOWNLOAD} download>
                <Download size={16} /> Download Resume
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={14} /> Hyderabad, India
              </span>
              <span>
                <Code2 size={14} /> Python · Django · React
              </span>
            </div>
          </div>

          <div className="hero-visual-wrap">
            <div className="portrait-frame">
              <img src="/assets/profile.png" alt="Portrait of Vishnu Vardhan Guptha" />
              <div className="portrait-label">
                <span>AVAILABLE FOR</span>
                <b>New opportunities ↗</b>
              </div>
            </div>
            <div className="hero-stamp">
              <Sparkles size={16} />
              <span>
                BUILDING WITH
                <br />
                <b>INTENTION.</b>
              </span>
            </div>
          </div>

          <div className="hero-bottomline">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
            <span className="hero-index">01 / 06</span>
          </div>
        </section>

        <section className="about-section section-wrap" id="about-me">
          <div className="section-heading">
            <div>
              <span className="section-index">01 — ABOUT</span>
              <h2>
                A little about
                <br />
                <em>what I do.</em>
              </h2>
            </div>
            <p className="section-lede">
              A developer with a backend-first mindset, a full-stack toolkit, and an appreciation for building software that is useful, clear and maintainable.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-note panel">
              <span className="panel-label">MY APPROACH</span>
              <h3>Good software is more than code.</h3>
              <p>
                I enjoy understanding the problem first, shaping clean APIs and data models, then connecting them to interfaces people can use. I value readable code, collaborative delivery and steady improvement.
              </p>
              <div className="about-signoff">— Vishnu</div>
            </article>

            <article className="stat-card panel">
              <span className="panel-label">EDUCATION</span>
              <b>8.78</b>
              <span> B.Tech CGPA</span>
              <small>Computer Science & Engineering · 2026</small>
            </article>

            <article className="stat-card panel stat-card-accent">
              <span className="panel-label">EXPERIENCE</span>
              <b>02</b>
              <span>Internship experiences</span>
              <small>Full-stack development · Python web development</small>
            </article>

            <article className="education-card panel">
              <div className="education-title">
                <span className="panel-label">EDUCATION JOURNEY</span>
                <GraduationCap size={19} />
              </div>
              <div className="timeline">
                {education.map((item, i) => (
                  <div className="timeline-item" key={item.title}>
                    <span className="timeline-node" />
                    <div className="timeline-date">{item.date}</div>
                    <h4>{item.title}</h4>
                    <p>{item.place}</p>
                    <span className="timeline-note">{item.note}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading">
            <div>
              <span className="section-index">02 — TOOLKIT</span>
              <h2>
                Technologies I
                <br />
                <em>work with.</em>
              </h2>
            </div>
            <p className="section-lede">
              A practical toolkit across backend engineering, frontend development, databases and everyday developer workflows.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon
              return (
                <article className="skill-card panel" key={group.title}>
                  <div className="skill-card-head">
                    {Icon && (
                      <span className="skill-icon">
                        <Icon size={17} />
                      </span>
                    )}
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-list">
                    {group.items.map((item) => (
                      <span
                        className={`skill-chip ${group.title === 'Foundations' ? 'skill-chip-text-only' : ''}`}
                        key={item}
                      >
                        {group.title !== 'Foundations' && <BrandIcon name={item} />}
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <span className="section-index">03 — SELECTED WORK</span>
              <h2>
                Things I've
                <br />
                <em>built.</em>
              </h2>
            </div>
            <p className="section-lede">
              A selection of applications that show how I approach product workflows, backend logic, APIs and frontend experiences.
            </p>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article className="project-card panel" key={project.name}>
                <div className="project-art">
                  {/* <ProjectVisual type={project.visual} /> */}
                  <div className={`project-visual `}>
                    <img src={project.cover_img.src} alt={project.cover_img.alt} loading="lazy" />
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-detail">{project.detail}</div>
                  <div className="tech-tags">
                    {project.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                      <Github size={15} /> GitHub <ArrowUpRight size={13} />
                    </a>
                    
                    {project.demo && (
                      <a className="project-link project-live" href={project.demo} target="_blank" rel="noreferrer">
                        <Globe size={15} /> Live Demo <ArrowUpRight size={13} />
                      </a>
                    )}
                    
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="projects-footer">
            <span>
              SHOWING {visibleProjects.length} OF {projects.length} PROJECTS
            </span>
            <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show less' : 'View more projects'} <ChevronDown className={showAll ? 'rotate' : ''} size={16} />
            </button>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading">
            <div>
              <span className="section-index">04 — EXPERIENCE</span>
              <h2>
                Where I've
                <br />
                <em>contributed.</em>
              </h2>
            </div>
            <p className="section-lede">
              Hands-on development experience, collaborative delivery and a willingness to take ownership beyond assigned tasks.
            </p>
          </div>

          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-date">FEB 2026 — MAR 2026</div>
              <div className="experience-main">
                <div className="experience-title">
                  <h3>Full-Stack Developer Intern</h3>
                  <span>Vijay Software Solutions</span>
                </div>
                <p>
                  Built an e-commerce platform using Django REST Framework, React and PostgreSQL. Implemented APIs for authentication, products, cart and orders, and worked with relational data across 10+ tables.
                </p>
                <div className="tech-tags">
                  <span>Python</span>
                  <span>DRF</span>
                  <span>React</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
              <BriefcaseBusiness className="experience-icon" size={20} />
            </article>

            <article className="experience-item">
              <div className="experience-date">FEB 2025 — APR 2025</div>
              <div className="experience-main">
                <div className="experience-title">
                  <h3>Python Web Developer Intern & Scrum Master</h3>
                  <span>Infosys Springboard</span>
                </div>
                <p>
                  Developed a Flask e-commerce application with storefront and admin workflows for inventory and sales. Facilitated sprint planning, stand-ups, retrospectives and code reviews.
                </p>
                <div className="tech-tags">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>SQLite</span>
                  <span>Agile / Scrum</span>
                </div>
              </div>
              <BriefcaseBusiness className="experience-icon" size={20} />
            </article>
          </div>

          <div className="certifications-block">
            <span className="panel-label">CERTIFICATIONS</span>
            <div className="certificate-grid">
              <article className="certificate-item">
                <div>
                  <b>Microsoft Azure AI Fundamentals (AI-900)</b>
                  <small>Microsoft · August 2025</small>
                </div>
                <a
                  className="project-link project-live"
                  href="https://drive.google.com/file/d/166pigEO8Y6hY4q4kR-HEMqDwGM5BHJU6/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certificate <ArrowUpRight size={13} />
                </a>
              </article>
              <article className="certificate-item">
                <div>
                  <b>Python Web Development Internship Certificate</b>
                  <small>Infosys Springboard · February – April 2025</small>
                </div>
                <a
                  className="project-link project-live"
                  href="https://drive.google.com/file/d/142KK6IGm2L6HM5-eCBY_3QNVTqSZuqtp/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certificate <ArrowUpRight size={13} />
                </a>
              </article>
            </div>
          </div>

          <div className="leadership-row">
            <span className="panel-label">LEADERSHIP</span>
            <div>
              <b>Technical Lead · Adyanth Community</b>
              <small>Organized workshops and coding sessions for 100+ students</small>
            </div>
          </div>
        </section>

        <section className="github-section section-wrap">
          <div className="github-panel panel">
            <div className="github-copy">
              <span className="section-index">05 — OPEN SOURCE & ACTIVITY</span>
              <h2>
                Built in public.
                <br />
                <em>Tracked on GitHub.</em>
              </h2>
              <p>
                Explore my repositories, follow the code behind selected projects and see my public contribution history.
              </p>
              <a className="btn btn-primary" href={GITHUB} target="_blank" rel="noreferrer">
                <Github size={16} /> Visit GitHub <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="github-stats">
              <div className="github-stat">
                <span>PUBLIC REPOSITORIES</span>
                <b>{github.loading ? '—' : github.repos ?? '—'}</b>
              </div>
              <div className="github-stat">
                <span>PUBLIC STARS</span>
                <b>{github.loading ? '—' : github.stars ?? '—'}</b>
              </div>
              <div className="github-stat">
                <span>FOLLOWERS</span>
                <b>{github.loading ? '—' : github.followers ?? '—'}</b>
              </div>
              <small>
                {github.loading
                  ? 'Loading live public profile data…'
                  : github.repos === null
                  ? 'GitHub API data is temporarily unavailable.'
                  : 'Fetched live from the GitHub public API.'}
              </small>
            </div>
          </div>

          <div className="contribution-card panel">
            <div className="contribution-head">
              <div>
                <span className="panel-label">CONTRIBUTION HISTORY</span>
                <h3>Consistency over time.</h3>
              </div>
              <a
                href={`${GITHUB}?tab=overview`}
                target="_blank"
                rel="noreferrer"
              >
                View profile <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="calendar-wrap">
              <img
                src="https://ghchart.rshah.org/40c463/Vishnuvardhangupthajavvaji"
                alt="GitHub contribution calendar for Vishnuvardhangupthajavvaji"
                loading="lazy"
              />
              <p>
                If the contribution chart does not load,{' '}
                <a href={GITHUB} target="_blank" rel="noreferrer">
                  view the calendar on GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="section-heading">
            <div>
              <span className="section-index">06 — CONTACT</span>
              <h2>
                Let's build
                <br />
                <em>something useful.</em>
              </h2>
            </div>
            <p className="section-lede">
              I'm actively exploring entry-level software development opportunities, especially Python backend and full-stack roles.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-details panel">
              <span className="panel-label">GET IN TOUCH</span>
              <a href={`mailto:${EMAIL}`}>
                <Mail size={18} />
                <span>
                  <small>EMAIL</small>
                  {EMAIL}
                </span>
                <ArrowUpRight size={15} />
              </a>
              <a href={`tel:${PHONE.replaceAll(' ', '')}`}>
                <Phone size={18} />
                <span>
                  <small>PHONE</small>
                  {PHONE}
                </span>
                <ArrowUpRight size={15} />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                <span>
                  <small>LINKEDIN</small>Connect professionally
                </span>
                <ArrowUpRight size={15} />
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                <Github size={18} />
                <span>
                  <small>GITHUB</small>Explore my code
                </span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <form className="contact-form panel" onSubmit={submitToFormspree}>
              <span className="panel-label">SEND A MESSAGE</span>

              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value
                    })
                  }
                  placeholder="How should I address you?"
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value
                    })
                  }
                  placeholder="you@company.com"
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value
                    })
                  }
                  placeholder="Tell me what you'd like to discuss..."
                />
              </label>

              {formspreeState.succeeded && (
                <p className="form-message">
                  Thank you! Your message has been sent successfully.
                </p>
              )}

              <ValidationError errors={formspreeState.errors} />

              <button
                className="btn btn-primary"
                type="submit"
                disabled={formspreeState.submitting}
              >
                <Send size={15} />
                {formspreeState.submitting ? 'Sending...' : 'Send message'}
                <ArrowUpRight size={14} />
              </button>

              <small className="form-note">
                Your message will be delivered directly to my inbox.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          <span>J</span>
          <small>JAVVAJI VISHNU VARDHAN GUPTHA</small>
        </a>
        <span>Designed & built with care · 2026</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App