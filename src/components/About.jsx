import { about, meta } from '../data/content'
import styles from './About.module.css'

export default function About() {
  const paragraphs = about.split('\n').filter(Boolean)

  return (
    <section id="about" aria-labelledby="about-heading">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.left}>
          <p className="section-label">About</p>
          <h2 id="about-heading" className="section-title">
            Who I am<span>.</span>
          </h2>
          <div className={styles.avatar}>
            <img src={meta.photo} alt="Udbhav Saxena" className={styles.avatarImg} />
          </div>
        </div>

        <div className={styles.right}>
          {paragraphs.map((p, i) => (
            <p key={i} className={styles.para}>{p}</p>
          ))}
          <div className={styles.highlights}>
            <Highlight icon="🧠" label="Applied AI & LLM Systems" />
            <Highlight icon="🏥" label="Healthcare Software" />
            <Highlight icon="👁" label="Computer Vision" />
            <Highlight icon="🤖" label="Robotics & Automation" />
            <Highlight icon="⚙️" label="Backend Engineering" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Highlight({ icon, label }) {
  return (
    <div className={styles.highlight}>
      <span className={styles.highlightIcon}>{icon}</span>
      <span>{label}</span>
    </div>
  )
}
