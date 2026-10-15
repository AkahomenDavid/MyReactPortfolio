
import { ArrowUpRight, GitFork, ExternalLink } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Movie Discovery App',
    description:
      'A movie discovery experience that lets users explore popular movies and search for titles they want to watch.',
    tags: ['React', 'API', 'CSS'],
    style: 'movie-preview',
    label: 'CINEMA / DISCOVER',
    symbol: '▶',
    demo: '',
    github: '',
  },
  {
    number: '02',
    title: 'Weather Dashboard',
    description:
      'A clean weather interface that displays current conditions using live weather data from an external API.',
    tags: ['JavaScript', 'API', 'Responsive'],
    style: 'weather-preview',
    label: 'WEATHER / LIVE',
    symbol: '☼',
    demo: '',
    github: '',
  },
  {
    number: '03',
    title: 'Personal Portfolio',
    description:
      'A personal space to showcase my work, skills, and journey as a developer with a responsive interface.',
    tags: ['React', 'Vite', 'CSS'],
    style: 'portfolio-preview',
    label: 'DESIGN / DEVELOP',
    symbol: '</>',
    demo: '',
    github: '',
  },
  {
    number: '04',
    title: 'Interactive Web Experience',
    description:
      'An interactive web concept focused on simple navigation, thoughtful details, and a smooth user experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    style: 'interactive-preview',
    label: 'CREATIVE / WEB',
    symbol: '✳',
    demo: '',
    github: '',
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span>01.</span> WHAT I'VE BUILT</p>
            <h2>Featured <span className="accent">projects.</span></h2>
            <p className="section-description">
              A selection of projects where ideas meet thoughtful design
              and development.
            </p>
          </div>

          <a className="text-link" href="#contact">
            Have an idea? Let's talk <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-preview ${project.style}`}>
                <div className="preview-bar">
                  <span className="window-dots">
                    <i></i><i></i><i></i>
                  </span>
                  <span>{project.label}</span>
                  <span className="preview-menu">•••</span>
                </div>

                <div className="preview-art">
                  <span className="preview-symbol">{project.symbol}</span>
                  <span className="preview-line preview-line-one"></span>
                  <span className="preview-line preview-line-two"></span>
                  <span className="preview-pill"></span>
                  <span className="preview-block"></span>
                </div>

                <span className="project-number">{project.number}</span>
              </div>

              <div className="project-info">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={20} className="project-arrow" />
                </div>

                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} /> Live demo
                    </a>
                  ) : (
                    <span className="project-link-placeholder">
                      <ExternalLink size={16} /> Add demo link
                    </span>
                  )}

                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <GitFork size={16} /> Source code
                    </a>
                  ) : (
                    <span className="project-link-placeholder">
                      <GitFork size={16} /> Add repository
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
