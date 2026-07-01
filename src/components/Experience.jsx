import { experience } from '../data/content'
import Reveal from './Reveal'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">Where I've Worked</p>
          <h2 id="experience-heading" className="section-title">
            Experience<span>.</span>
          </h2>
        </Reveal>
        <div className={styles.timeline}>
          {experience.map((job, i) => (
            <Reveal key={i} delay={i * 120}>
              <ExperienceCard job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ job }) {
  return (
    <article className={styles.card}>
      <div className={styles.dot} aria-hidden="true" />
      <div className={styles.header}>
        <div>
          <h3 className={styles.company}>{job.company}</h3>
          <p className={styles.role}>{job.role}</p>
        </div>
        <span className={styles.period}>{job.period}</span>
      </div>
      <ul className={styles.bullets}>
        {job.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  )
}
