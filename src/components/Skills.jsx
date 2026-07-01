import { skills } from '../data/content'
import Reveal from './Reveal'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal>
          <p className="section-label">Technologies</p>
          <h2 id="skills-heading" className="section-title">
            Skills<span>.</span>
          </h2>
        </Reveal>
        <div className={styles.grid}>
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <div className={styles.group}>
                <h3 className={styles.category}>{group.category}</h3>
                <div className={styles.items}>
                  {group.items.map(item => (
                    <span key={item} className={styles.item}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
