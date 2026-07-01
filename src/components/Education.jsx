import { education } from '../data/content'
import Reveal from './Reveal'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">Academic Background</p>
          <h2 id="education-heading" className="section-title">
            Education<span>.</span>
          </h2>
        </Reveal>
        <div className={styles.list}>
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 110}>
              <article className={styles.card}>
                <div className={styles.icon} aria-hidden="true">
                  <GradIcon />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <p className={styles.school}>{edu.school}</p>
                </div>
                <span className={styles.year}>{edu.year}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function GradIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}
