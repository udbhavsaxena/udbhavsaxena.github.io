import { projects } from '../data/content'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 id="projects-heading" className="section-title">
          Featured Projects<span>.</span>
        </h2>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div className={styles.iconWrap} aria-hidden="true">
          <FolderIcon />
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

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
