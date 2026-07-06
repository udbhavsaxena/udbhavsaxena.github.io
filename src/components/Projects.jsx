import { projects } from '../data/content'
import Reveal from './Reveal'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">What I've Built</p>
          <h2 id="projects-heading" className="section-title">
            Featured Projects<span>.</span>
          </h2>
        </Reveal>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      <div className={styles.top}>
        <div className={styles.headingMeta}>
          <div className={styles.iconWrap} aria-hidden="true">
            <FolderIcon />
          </div>
          {project.eyebrow && <span className={styles.eyebrow}>{project.eyebrow}</span>}
        </div>
        {project.link && (
          <a
            href={project.link}
            className={styles.extLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <ExternalIcon />
          </a>
        )}
      </div>
      {project.impact && <p className={styles.impact}>{project.impact}</p>}
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      {project.highlights && (
        <ul className={styles.highlights}>
          {project.highlights.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <div className={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </article>
  )
}

function FolderIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
